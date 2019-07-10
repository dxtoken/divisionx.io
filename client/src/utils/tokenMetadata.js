import ERC20d from "../contracts/ERC20d.json";
import Web3 from "web3";

const web3 = new Web3(new Web3.providers.HttpProvider(""));
const metadataObject = { data: [], sum: 0, avg: 0, };

 function parseValue(_value) {
  return convertHex(web3.utils.toBN(convertHex(_value)).div(web3.utils.toBN(convertHex(1e18))));
 }

 function divideValue(_a, _b) {
  return web3.utils.toBN(parseValue(_a)).div(web3.utils.toBN(_b));
 }

 function parseNumber(_number) {
  return parseValue(_number).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
 }

 function createTimestamp(_date) {
  return `${_date.getFullYear()}:${_date.getMonth()}:${_date.getDate()}`;
 }

function convertHex(_input) {
  return web3.utils.hexToNumberString(_input);
}

const averageTransfer = (_instance) =>
   new Promise((resolve, reject) => {
    var metaData = metadataObject;
    _instance.events.Transfer({ fromBlock: 0, toBlock: "latest"},
    (error,event) => {
      if(event !== null){
        var transferAmount = parseValue(event.returnValues.value);
        metaData.sum += parseFloat(transferAmount);
        metaData.data.push(transferAmount);
      } else if(event === null){
        resolve(metaData);
      }
   })
 });

const tokenMetadata = () =>
  new Promise(async(resolve, reject) => {
      var networkId = await web3.eth.net.getId();
      var tokenContract = ERC20d.networks[networkId];
      var tokenInstance = new web3.eth.Contract(ERC20d.abi,
        tokenContract && tokenContract.address,
      );
      tokenInstance.options.address = "0x07a70d9e1e1bf12cf1c477e45ec1ced514e1929c";
      var volumeObject = await tokenInstance.methods.volume.call();
      var tokenVelocity = convertHex(divideValue(volumeObject[1], 200000));
      var indexData = new Date(convertHex(volumeObject[0])*1000);
      var txObject = await averageTransfer(tokenInstance);
      var totalTransactions = txObject.data.length+1;
      var weeklyVolume = parseNumber(volumeObject[1]);
      var weeklyIndex = createTimestamp(indexData);
      resolve([{
        totalTransactions,
        weeklyVolume,
        tokenVelocity,
        weeklyIndex
      }])
});

export default tokenMetadata;