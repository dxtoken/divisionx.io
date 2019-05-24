import React, { Component } from 'react'
import firebase from 'firebase'

// UX

  // Misc
import { faRocket, faFileMedicalAlt, faCodeBranch, faCoffee, faHandshake, faGem, faFingerprint, faInfinity, faStarHalfAlt, faLightbulb, faDotCircle, faHome, faPercentage, faFileSignature, faGlobe, faFemale, faMale, faUsers, faShareAlt, faUserTag, faSearch, faStar, faCrosshairs, faSitemap, faShieldAlt, faDove, faLink, faStreetView, faCheck, faTimes, faLayerGroup, faParachuteBox, faEnvelope, faWallet } from '@fortawesome/free-solid-svg-icons'
import { faBitcoin, faGithub, faLinkedin, faTelegramPlane, faDiscord, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { Icon , Segment , Card, Image } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types';

  // Atlaskit
import { InlineDialog, Flag, AutoDismissFlag, FlagGroup } from '@atlaskit/flag'
import SuccessIcon from '@atlaskit/icon/glyph/check-circle';
import Page, { Grid, GridColumn } from '@atlaskit/page';
import WarningIcon from '@atlaskit/icon/glyph/warning';
import SectionMessage from '@atlaskit/section-message';
import { AtlaskitThemeProvider } from '@atlaskit/theme'
import { AkCodeBlock } from '@atlaskit/code';
import FieldText from '@atlaskit/field-text';
import Modal from '@atlaskit/modal-dialog'
import Lorem from 'react-lorem-component';
import { colors } from '@atlaskit/theme';
import Lozenge from '@atlaskit/lozenge'
import Button from '@atlaskit/button'
import Select from '@atlaskit/select'

  // MatieralUI
import { fade } from '@material-ui/core/styles/colorManipulator';
import { createMuiTheme } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import ListItem from '@material-ui/core/ListItem';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import MailIcon from '@material-ui/icons/Mail';
import PieChart from 'react-minimal-pie-chart';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';

// Images
import greenCircle from './images/green-circle.png'
import redCircle from './images/red-circle.png'
import angellist from './images/angellist.png'
import messages1 from './images/messages1.png'
import telegram from './images/telegram.png'
import facebook from './images/facebook.png'
import air from './images/VLDY-AIRDROP2.png'
import linkedin from './images/linkedin.png'
import cdreams from './images/cdreams.png'
import twitter from './images/twitter.png'
import discord from './images/discord.png'
import lines1 from './images/lines1.png'
import github from './images/github.png'
import gitcoin from './images/gitcoin.png'
import reddit from './images/reddit.png'
import lines2 from './images/lines2.png'
import halmat from './images/halmat.png'
import base1 from './images/base1.png'
import world from './images/world.png'
import base3 from './images/base3.png'
import gozzy from './images/gozzy.png'
import lukas from './images/lukas.png'
import clabs from './images/clabs.png'
import cnews from './images/cnews.png'
import vldy from './images/vldy.png'
import egem from './images/ethereum.png'
import dao from './images/dao.png'
import bct from './images/bct.png'
import bcc from './images/bcc.png'

// CSS
import 'styled-components'
import './css/raleigh.css'
import './css/home.css'

// Constants
const airdrop = <FontAwesomeIcon icon={faLayerGroup} size='lg'/>


  const styles = createMuiTheme({
     sideBar: {
      background: '#815aff'
    }
  });

const dataMock = [
    { title: 'Airdrop 1', value: 30, color: '#0cff6f' },
    { title: 'Airdrop 2', value: 20, color: '#0c23ff' },
    { title: 'Airdrop 3', value: 10, color: '#ff0c23' },
    { title: 'Team', value: 15, color: '#00bfff' },
    { title: 'Community fund', value: 20, color: '#815aff' },
    { title: 'Validation supply', value: 5, color: '#ff0c9c' },
  ];

class Home extends Component {
  constructor(props) {
    super(props)
      this.state = {
        chartComponent: <div/>,
        sideBar: false,
        stageModal: 0,
        segment: 0,
        flags: []
      }
  }

  componentWillMount = () => {
    this.open()
  }

  animateChart = () => {
     this.setState({ segment: 100 })
  }

  scroll = (event) => {
    var element = document.getElementsByClassName(event)[0]
    element.scrollIntoView({behavior: "smooth"});
    if(event === "page6"){
      this.animateChart()
    }
  }

  formEmail = (event) => this.setState({ email: event.target.value });
  formTelegram = (event) => this.setState({ telegram: event.target.value });
  formDiscord = (event) => this.setState({ discord: event.target.value });
  formFacebook = (event) => this.setState({ facebook: event.target.value });
  formTwitter = (event) => this.setState({ twitter: event.target.value });
  formWallet = (event) => this.setState({ wallet: event.target.value });
  scrollToBottom = () => this.bottomRef.scrollIntoView(true);
  accept = () => this.setState({ isSubmitted: false });
  submit = () => this.setState({ isApply: false });
  reveal = () => this.setState({ isApply: true });
  close = () => this.setState({ isOpen: false });
  open = () => this.setState({ isOpen: true });

  formData = () => {
    if(this.state.email != undefined
       && this.state.telegram != undefined
       && this.state.discord != undefined
       && this.state.twitter != undefined
       && this.state.facebook != undefined
       && this.state.wallet.length == 42){
          var data = {
            telegram: this.state.telegram,
            discord: this.state.discord,
            twitter: this.state.twitter,
            facebook: this.state.facebook,
            wallet: this.state.wallet
          };
      }
}

  handleDismiss = () => {
    this.setState(prevState => ({
      flags: prevState.flags.slice(1),
    }));
  };

  toggleSidebar = (_bool) => {
    this.setState({ })
  }

  addFlag = () => {
    const newFlagId = this.state.flags.length + 1;
    const flags = this.state.flags.slice();
    flags.splice(0, 0, newFlagId);
    this.setState({ flags });
  }

  renderChart = () => {
    return(
      <PieChart
        animationDuration={1000}
        paddingAngle={5}
        data={dataMock}
        lineWidth={15}
        radius={20}
        animate
      />
    );
  }

  render() {
    const { isSubmitted } = this.state;
    const { isApply } = this.state;
    const { classes } = this.props;
    const { active } = this.state;
    const { isOpen } = this.state;
    return (
      <AtlaskitThemeProvider mode='light'>
        <div className="homepageMenu">
          <div className="menuBar">
            <AppBar fullWidth style={{ backgroundColor: '#815aff', display: 'flex', zIndex: 1 }} position="static">
              <Toolbar>
                <a href='https://www.ethereum.org/'>
                  <img className='egem' src={egem}/>
                </a>
                <div className="pageSelect">
                  <Select
                    options={[
                      { label: 'What is Validity?', value: '1' },
                      { label: 'Communal Validation', value: '1' },
                      { label: 'How does it work?', value: '1' },
                      { label: 'Why use Validity?', value: '1' },
                      { label: 'Tokenonomics', value: '1' },
                      { label: 'Analytics', value: '1' },
                      { label: 'The Team', value: '1' },
                      { label: 'Resources', value: '1' },
                      { label: 'Get involved', value: '1' },
                    ]}
                    placeholder="Navigation"/>
                </div>
                <div className="appbarSpacing"/>
                <a href='https://discord.gg/s5rSvB2'>
                  <img className='discord' src={discord}/>
                </a>
                <a href='https://t.me/ValidityCrypto'>
                  <img className='telegram' src={telegram}/>
                </a>
                <a href='https://www.github.com/ValidityCrypto'>
                  <img className='github' src={github}/>
                </a>
                <a href='https://www.linkedin.com/company/validitycrypto'>
                  <img className='linkedin' src={angellist}/>
                </a>
                <a href='https://www.linkedin.com/company/validitycrypto'>
                  <img className='linkedin' src={linkedin}/>
                </a>
                <a href='https://twitter.com/ValidityCrypto'>
                  <img className='twitter' src={twitter}/>
                </a>
                <a href='https://www.reddit.com/r/ValidityCrypto'>
                  <img className='reddit' src={reddit}/>
                </a>
                <a href='https://www.facebook.com/ValidityCrypto'>
                  <img className='facebook' src={facebook}/>
                </a>
                <a href='https://bitcointalk.org/index.php?topic=4900179'>
                  <img className='bct' src={bct}/>
                </a>
                <div className="landingButton">
                  <Button onClick={() => this.setState({ sideBar: !this.state.sideBar })} appearance="help">Menu</Button>
                </div>
              </Toolbar>
            </AppBar>
          </div>
          <div className="sideBar">
            <Drawer
              variant="persistent"
              style={{ zIndex: -1}}
              classes={{ paper: classes.sideBar }}
              onClose={() => this.setState({ sideBar: false })}
              onOpen={() => this.setState({ sideBar: true })}
              open={this.state.sideBar}
              anchor="right">
                <Paper className="paperMenu" style={{ backgroundColor: fade('#ffffff', 0.275) }}>
                  <Button transperant className="paperButton">
                    <FontAwesomeIcon className="paperIcon" color="#ffffff" icon={faHome} size='lg'/>
                    <span style={{ color: 'white'}}>
                      Home
                    </span>
                  </Button>
                  <Button transperant className="paperButton">
                    <FontAwesomeIcon className="paperIcon" color="#ffffff" icon={faStarHalfAlt} size='lg'/>
                    <span style={{ color: 'white'}}>
                      MVP
                    </span>
                  </Button>
                  <Button transperant className="paperButton">
                    <FontAwesomeIcon className="paperIcon" color="#ffffff" icon={faParachuteBox} size='lg'/>
                    <span style={{ color: 'white'}}>
                      Airdrop
                    </span>
                  </Button>
                  <Button transperant className="paperButton">
                    <FontAwesomeIcon className="paperIcon" color="#ffffff" icon={faFileSignature} size='lg'/>
                    <span style={{ color: 'white'}}>
                      Survey
                    </span>
                  </Button>
                  <Button transperant className="paperButton">
                    <FontAwesomeIcon className="paperIcon" color="#ffffff" icon={faWallet} size='lg'/>
                    <span style={{ color: 'white'}}>
                      Wallet
                    </span>
                  </Button>
                </Paper>
            </Drawer>
          </div>
        </div>
        <div className="landingPage">
          <Page>
            <Grid layout="fluid">
              <GridColumn>
                <div className="landingBranding">
                  <img className='landingLogo' src={vldy}/>
                  <p className="landingTitle">Validity</p>
                </div>
              </GridColumn>
            </Grid>
          </Page>
        </div>
        <FlagGroup>
         {this.state.flags.map(flagId => {
           return (
            <AutoDismissFlag
             actions={[
               { content: 'Ignore', onClick: this.handleDismiss },
               { content: 'Apply', onClick: () => {
                 this.handleDismiss()
                  this.reveal() }}]}
            appearance='warning'
            id={flagId}
            key={flagId}
            icon={airdrop}
            title='Try out our MVP!'
            description='Easily engaging in the alpha form of delegation by using a interactive user interface, vote with a click and some easy mouse movements.'
            />)})}
        </FlagGroup>
        {isSubmitted && (
          <Modal
           actions = {[{ text: 'Dismiss', onClick: this.accept }  ]}
           onClose={this.accept}
           appearance='warning'
           heading='Submission Successful'
           width='500px'>
            You are now registered for the VLDY airdrop round two.
            <br></br>
            <p className="warn"> For any queries or validating submissions contact airdrop@validity.ae </p>
            <br></br>
            Thank you for participating and have a nice day!
          </Modal> )}
        {isOpen && (
          <Modal
          actions = {[
            { text: 'Accept', onClick: async() => {
              await this.close()
              await this.addFlag()
            } },
            { text: 'Refuse', onClick: this.close }, ]}
          onClose={this.close}
          appearance='warning'
          heading='GDPR'
          width='500px'>
          We use cookies and other tracking technologies to improve your browsing experience on our web site,
          to show you personalized content and targeted ads, to analyze our website traffic, and to understand
          where our visitors are coming from. By browsing our website, you consent to our use of cookies and
          other tracking technologies.
          </Modal> )}
        {isApply && (
          <Modal
            heading='VLDY Airdrop Application'
            appearance='warning'
            scrollBehaviour="outside"
            actions = {[
              { text: 'Submit', onClick: this.addFlag  },
              { text: 'Refuse', onClick: this.submit },
              { text: 'Scroll to bottom', onClick: this.scrollToBottom }]}>
              <div className="sect">
                  <img className="mdl" src={air} />
                  <br></br>
                  <br></br>
                  <div className="inpt">
                    <b><i>
                      <p className="warn">Closing Date: 20th of November 2018</p>
                      <p className="warn">DISCLAIMER: ALL PARAMETERS MUST BE CORRECT TO BE COMPLIANT OF THE AIRDROP DISTRIBUTION.</p>
                      <p className="warn">ANY INCORRECT INFORMATION WILL BE FOLLOWED UP AND IF NO SWIFT REPSONSE FROM THE APPLICANT THEY WILL BE EXCLUDED.</p></i></b>
                      <b>Your e-mail address</b>
                      <FieldText shouldFitContainer='true' label='E-Mail' required onChange={this.formEmail}/>
                      <FontAwesomeIcon className="ia" icon={faEnvelope} size='2x'/>
                      <b>Your Telegram account present in <a href="https://t.me/ValidityCrypto">@ValidityCrypto</a></b>
                      <FieldText shouldFitContainer='true' label='Telegram Username' required onChange={this.formTelegram}/>
                      <FontAwesomeIcon className="ia" icon={faTelegramPlane} size='2x'/>
                      <b ref={r => {this.bottomRef = r;}}>Your account present in the <a href="https://discord.gg/s5rSvB2">Validity Discord</a></b>
                      <FieldText shouldFitContainer='true' label='Discord Username' required onChange={this.formDiscord}/>
                      <FontAwesomeIcon className="ia" icon={faDiscord} size='2x'/>
                      <b>Your Twitter account that is following <a href="https://twitter.com/ValidityCrypto">@ValidityCrypto</a></b>
                      <FieldText shouldFitContainer='true' label='Twitter Username' required onChange={this.formTwitter}/>
                      <FontAwesomeIcon className="ia" icon={faTwitter} size='2x'/>
                      <b>Your facebook account that has liked <a href="https://www.facebook.com/ValidityCrypto/">Validity's facebook</a></b>
                      <FieldText shouldFitContainer='true' label='Facebook Username' required onChange={this.formFacebook}/>
                      <FontAwesomeIcon className="ia" icon={faFacebook} size='2x'/>
                      <b>Target <a href="https://www.myegemwallet.com">EtherGem wallet address</a> for the airdrop distribution</b>
                      <FieldText shouldFitContainer='true' label='EtherGem Address' required onChange={this.formWallet}/>
                      <FontAwesomeIcon className="ia" icon={faWallet} size='2x'/>
                  </div>
              </div>
         </Modal>)}
         <div className="page1">
          <Page>
            <Grid layout="fluid">
              <GridColumn>
                <div className="h1">
                  <FontAwesomeIcon icon={faLayerGroup} color='#815aff' size='s'/>&nbsp;&nbsp;&nbsp;What is Validity?
                </div>
              </GridColumn>
              <GridColumn>
              <div className="page1-body">
                <p className="pagePoint">With the beauty of decentrilisation comes many bonuses but with any advantage comes a disvantage. Blockchain and technologies alike are on the edge of adoption but cannot fully reach the pinnacle unless a system of evalution takes a stand.</p>
                <p className="pagePoint">This would provide a go-to reference point to verify the integrity of an investment decision but currently investing for the average person isn't a viable task as there is many pitfalls of amoral activity that one can easily fall pray to.</p>
                <p className="pagePoint">How can the people know what is safe to invest in and what is not?</p>
                <p className="pagePoint">The answer to this question is Validity, a self governing decentrilised regulation infrastructure.</p>
              </div>
              </GridColumn>
              <GridColumn>
              <div className="validatingGraphic">
                <img className="base1" src={base1}/>
                <div className="lines1edit"><img className="lines1" src={lines1}/></div>
                <div className="wrong"><FontAwesomeIcon icon={faTimes}/></div>
                <div className="right"><FontAwesomeIcon icon={faCheck}/></div>
                <div><img className="bcc" src={bcc}/></div>
                <div className="messages1edit"><img className="messages1" src={messages1}/> </div>

              </div>
              </GridColumn>
            </Grid>
          </Page>
        </div>
        <div className="page2">
          <Page>
            <Grid layout="fluid">
              <GridColumn>
                <div className="h2">
                  <FontAwesomeIcon icon={faStreetView} color='#815aff' size='s'/>&nbsp;&nbsp;&nbsp;Communal Validation
                </div>
              </GridColumn>
              <GridColumn>
                <div className="page2-body">
                  <div className="codecommunal">
                  <b>Communal Validation;</b> <i>Peer production is based on equipotential participation, i.e. the a priori self-selection of participants, and the communal vetting of the quality of their work in the process of production itself;</i>
                  </div>
                  <div className="traits">
                    <div className="traitPoint"><FontAwesomeIcon icon={faLink} color='#815aff' size='s'/>&nbsp;&nbsp;&nbsp;Self-governing</div>
                    <div className="traitPoint"><FontAwesomeIcon icon={faShieldAlt} color='#815aff' size='s'/>&nbsp;&nbsp;&nbsp;Sybil-proof</div>
                    <div className="traitPoint"><FontAwesomeIcon icon={faDove} color='#815aff' size='s'/>&nbsp;&nbsp;&nbsp;Pure</div>
                  </div>
                </div>
              </GridColumn>
              <GridColumn>
                <img className="world" src={world}/>
              </GridColumn>
            </Grid>
          </Page>
      </div>
      <div className="page3">
        <Page>
          <Grid layout="fluid">
            <GridColumn>
              <div className="h3">
                <FontAwesomeIcon icon={faSitemap} color='#815aff' size='s'/>&nbsp;&nbsp;&nbsp;How does it work?
              </div>
            </GridColumn>
            <GridColumn>
              <div className="page3-body">
              <p className="stageOne">
                <div className="stageNumber">1</div>
                <div className="stageText">
                  A poll is created for delegating a subject of 5 projects by demand and request, the winning entity is then confirmed for the validation process.
                </div>
              </p>
              <p className="stageTwo">
                <div className="stageNumber">2</div>
                <div className="stageText">
                  An intrinsic analysis and due-dillegence is executed upon the entities employee's, product and ultimately it's integrity.
                </div>
              </p>
              <p className="stageThree">
                <div className="stageNumber">3</div>
                <div className="stageText">
                  The investigation is then distributely proposed to validitors, in order to create a non-bias form of verification via communal validation.
                </div>
              </p>
              <p className="stageFour">
                <div className="stageNumber">4</div>
                <div className="stageText">
                 Validators engage in a interactive voting process using Validity's unique UX, to express their outlook on the project via three options; positive, neutral or negative
                </div>
              </p>
              <p className="stageFive">
                <div className="stageNumber">5</div>
                <div className="stageText">
                  The concluding results are combined and are quantified out of a rating of 10, the self-governing analysis then acts as a source of evaluation for future onlooking investors.
                </div>
              </p>
              </div>
            </GridColumn>
         </Grid>
        </Page>
      </div>
      <div className="page4">
      <Page>
        <Grid layout="fluid">
        <GridColumn>
        <div className="h4">
          <FontAwesomeIcon icon={faUsers} color='#815aff' size='s'/>&nbsp;&nbsp;&nbsp;Why use Validity?
        </div>
        </GridColumn>
        <GridColumn>
        <div className="page5-body">
        <img className="daoGraphic" src={dao}/>
        <p className="traitOne">
        <div className="stageIcon"><FontAwesomeIcon icon={faFingerprint} color='#815aff' size='xs'/></div>
          <div className="stageAlpha">
            vID's <i>(Validation Indentifiers)</i> are a form of <b><i>self-sovereign</i></b> identities and are unique to each voter.
          </div>
        </p>
        <p className="traitTwo">
          <div className="stageIcon"><FontAwesomeIcon icon={faShieldAlt} color='#815aff' size='xs'/></div>
          <div className="stageAlpha">
            The <b><i>ERC20d</i></b> token staking allocates sybil attack immunity to validations, allowing pure results to blossom.
          </div>
        </p>
        <p className="traitThree">
        <div className="stageIcon"><FontAwesomeIcon icon={faStar} color='#815aff' size='xs'/></div>
        <div className="stageAlt" >
          Validators are rewarded in VLDY tokens for participating, creating an incentive to vote.
        </div>
        </p>
        <p className="traitFour">
          <div className="stageIcon"><FontAwesomeIcon icon={faCrosshairs} color='#815aff' size='xs'/></div>
          <div className="stageAlt" >
          Make the crypto-sphere a safer place for everyone, by helping filter out the bad projects from the good.
          </div>
         </p>
         <p className="traitFive">
           <div className="stageIcon"><FontAwesomeIcon icon={faInfinity} color='#815aff' size='xs'/></div>
           <div className="stageAlt" >
             The validation data is utilised to create a public ledger of qualitative crypto-currency <b><i>ratings</i></b>.
           </div>
         </p>
        <p className="traitSix">
          <div className="stageIcon"><FontAwesomeIcon icon={faGem} color='#815aff' size='xs'/></div>
          <div className="stageAlpha" >
            Validity is self-governing <b><i>decentrilised autonomous organisation</i></b>, meaning power to the people.
          </div>
        </p>
        </div>

        </GridColumn>
        </Grid>
      </Page>
      </div>
      <div className="page5">
        <Page>
          <Grid layout="fluid">
            <GridColumn>
              <div className="h5">
                <FontAwesomeIcon icon={faStar} color='#815aff' size='s'/>&nbsp;&nbsp;&nbsp;Roadmap
              </div>
            </GridColumn>
            <GridColumn>
              <div className="page5-body">
                <div className="roadmapOne"
                  onMouseOver={() => this.setState({ stageModal: 1})}
                  onMouseOut={() => this.setState({ stageModal: 0})}>
                  <img className="circleRoadmap" src={greenCircle} />
                  <img className="logoOne" src={egem} />
                </div>
                {this.state.stageModal == 1 && (
                  <div className="modalOne">
                    <SectionMessage appearance="confirmation">
                      Ethereum & MVP launch
                    </SectionMessage>
                  </div>
                )}
                <div className="lineOne"/>
                <div className="roadmapTwo"
                  onMouseOver={() => this.setState({ stageModal: 2})}
                  onMouseOut={() => this.setState({ stageModal: 0})}>
                  <img className="circleRoadmap" src={redCircle} />
                  <FontAwesomeIcon className="logoThree" icon={faFileMedicalAlt} color='#815aff' size='2x'/>
                </div>
                {this.state.stageModal == 2 && (
                  <div className="modalTwo">
                    <SectionMessage appearance="error">
                      Validity Whitepaper
                    </SectionMessage>
                  </div>
                )}
                <div className="lineTwo"/>
                <div className="roadmapThree"
                  onMouseOver={() => this.setState({ stageModal: 3})}
                  onMouseOut={() => this.setState({ stageModal: 0})}>
                  <img className="circleRoadmap" src={redCircle} />
                  <img className="logoTwo" src={gitcoin} />
                </div>
                {this.state.stageModal == 3 && (
                  <div className="modalThree">
                    <SectionMessage appearance="error">
                      Gitcoin grants & funding
                    </SectionMessage>
                  </div>
                )}
                <div className="lineThree"/>
                <div className="roadmapFour"
                onMouseOver={() => this.setState({ stageModal: 4})}
                onMouseOut={() => this.setState({ stageModal: 0})}>
                  <img className="circleRoadmap" src={redCircle} />
                  <FontAwesomeIcon className="logoThree" icon={faCoffee} color='#815aff' size='2x'/>
                </div>
                {this.state.stageModal == 4 && (
                  <div className="modalFour">
                    <SectionMessage appearance="error">
                      Find talent and partnerships
                    </SectionMessage>
                  </div>
                )}
                <div className="lineFour"/>
                <div className="roadmapFive"
                onMouseOver={() => this.setState({ stageModal: 5})}
                onMouseOut={() => this.setState({ stageModal: 0})}>
                  <img className="circleRoadmap" src={redCircle} />
                  <FontAwesomeIcon className="logoThree" icon={faCodeBranch} color='#815aff' size='2x'/>
                </div>
                {this.state.stageModal == 5 && (
                  <div className="modalFive">
                    <SectionMessage appearance="error">
                      Beta product
                    </SectionMessage>
                  </div>
                )}
                <div className="lineFive"/>
                <div className="roadmapSix"
                  onMouseOver={() => this.setState({ stageModal: 6})}
                  onMouseOut={() => this.setState({ stageModal: 0})}>
                  <img className="circleRoadmap" src={redCircle} />
                  <FontAwesomeIcon className="logoThree" icon={faRocket} color='#815aff' size='2x'/>
                </div>
                {this.state.stageModal == 6 && (
                  <div className="modalSix">
                    <SectionMessage appearance="error">
                      Product launch
                    </SectionMessage>
                  </div>
                )}
              </div>
            </GridColumn>
          </Grid>
        </Page>
      </div>
      <div className="page6" onMouseOver={() => this.setState({ chartComponent: this.renderChart() })}>
      <Page>
      <Grid layout="fluid">
      <GridColumn>
      <div className="h4">
        <FontAwesomeIcon icon={faUsers} color='#815aff' size='s'/>&nbsp;&nbsp;&nbsp;Tokeneconomics
      </div>
      </GridColumn>
      <GridColumn>
      <div className="page6-body">
          <div className="tokenChart">
          {this.state.chartComponent}
          </div>
      <div className="tokenMetrics">
      <p>Decimals: <b>18</b></p>
      <p>Asset type: <b>ERC20d</b> </p>
      <p>Asset ticker: <b>VLDY</b> </p>
      <p>Network: <b>EtherGem (EGEM)</b> </p>
      <p>Initial supply: <b>48,070,000,000 VLDY</b></p>
      <p>Max supply: <b>50,600,000,000 VLDY</b> </p>
      </div>
      <div className="tokenWallet">
      <p>Address: <b>0xb0702df32de0371f39a98cc911a2dd69c3a13e6f</b></p>
      </div>
      <div className="tokenLegend">
      <p><FontAwesomeIcon icon={faDotCircle} color='#ff0c9c' size='s'/>&nbsp;&nbsp;&nbsp;Validation supply</p>
      <p><FontAwesomeIcon icon={faUsers} color='#ffa500' size='s'/>&nbsp;&nbsp;&nbsp;Community fund</p>
      <p><FontAwesomeIcon icon={faParachuteBox} color='#ff0c23' size='s'/>&nbsp;&nbsp;&nbsp;Airdrop three</p>
      <p><FontAwesomeIcon icon={faParachuteBox} color='#0c23ff' size='s'/>&nbsp;&nbsp;&nbsp;Airdrop two </p>
      <p><FontAwesomeIcon icon={faParachuteBox} color='#0cff6f' size='s'/>&nbsp;&nbsp;&nbsp;Airdrop one </p>
      <p><FontAwesomeIcon icon={faWallet} color='#00bfff' size='s'/>&nbsp;&nbsp;&nbsp;Team funds</p>
      </div>
      </div>
      </GridColumn>
      </Grid>
      </Page>
      </div>
      <div className="page7">
      <Page>
      <Grid layout="fluid">
        <GridColumn>
          <div className="h4">
            <FontAwesomeIcon icon={faUsers} color='#815aff' size='s'/>&nbsp;&nbsp;&nbsp;The team
          </div>
        </GridColumn>
        <GridColumn>
        </GridColumn>
        <GridColumn medium={1}>
          <Button onClick={this.scroll.bind(this, "page8")} appearance="help">
          Next
          </Button>
        </GridColumn>
        </Grid>
        <Grid layout="compact">
        <GridColumn>
        <div className="teamCards">
          <Card inverted className="gozzy">
            <Image src={gozzy}/>
            <Card.Content>
              <Card.Header><span className="blackt">Samuel JJ Gosling</span></Card.Header>
              <Card.Meta>
                <span className="blackt">Founder</span>
            </Card.Meta>
          </Card.Content>
          <Card.Content>
          <span className="blackt">Ireland 🇮🇪</span>
          </Card.Content>
          <Card.Content>
          <span className="blackt">Betterknown as <b>Gozzy</b>, Samuel is a rookie developer
          with a strong sense of integrity and the ability to ignite ideas via coding to
          make them a reality.</span>
          </Card.Content>
          <Card.Content extra>
          <a className="plink" href="https://www.linkedin.com/in/samuel-jj-gosling/">
          <FontAwesomeIcon icon={faLinkedin} color='white' />
          </a>
          <a className="ptweet" href="https://twitter.com/gozzy_g">
          <FontAwesomeIcon icon={faTwitter} color='white' />
          </a>
          <a className="ptele" href="https://discordapp.com/users/359835946491052037/">
          <FontAwesomeIcon icon={faDiscord} color='white' />
          </a>
          <a className="pdis" href="https://t.me/xgozzy">
          <FontAwesomeIcon icon={faTelegramPlane} color='white' />
          </a>
          <a className="p" href="https://hub.com/samgos">
          <FontAwesomeIcon icon={faGithub} color='white'/>
          </a>
          </Card.Content>
        </Card>
        </div>
        </GridColumn>
        <GridColumn>
        <div className="teamCards">
        <Card className="lukas">
            <Image src={lukas}/>
            <Card.Content>
              <Card.Header><span className="blackt">Lukas Fischereder</span></Card.Header>
              <Card.Meta>
              <span className="blackt">Analyst</span>
              </Card.Meta>
            </Card.Content>
            <Card.Content>
            <span className="blackt">Austria 🇦🇹</span>
            </Card.Content>
            <Card.Content>
            <span className="blackt">Lukas is an out-going individual who has a determination to learn
            and unravel the unknown. His attention to detail allows nothing to go unoticed.</span>
            </Card.Content>
            <Card.Content extra>
            <a className="plink" href="https://www.linkedin.com/in/lukas-fischereder-bb5758145/">
            <FontAwesomeIcon icon={faLinkedin} color='white' />
            </a>
            <a className="ptweet" href="https://twitter.com/LukiFischereder">
            <FontAwesomeIcon icon={faTwitter} color='white' />
            </a>
            <a className="ptele" href="https://discordapp.com/users/406776100299997185/">
            <FontAwesomeIcon icon={faDiscord} color='white' />
            </a>
            <a className="pdis" href="https://t.me/lufisch">
            <FontAwesomeIcon icon={faTelegramPlane} color='white' />
            </a>
            </Card.Content>
          </Card>
          </div>
          </GridColumn>
          <GridColumn>
          <div className="teamCards">
                  <Card className="halmat">
                      <Image src={halmat}/>
                      <Card.Content>
                        <Card.Header><span className="blackt">Halmat Sarzali</span></Card.Header>
                        <Card.Meta>
                        <span className="blackt">Strategist</span>
                        </Card.Meta>
                      </Card.Content>
                      <Card.Content>
                      <span className="blackt">Norway	🇳🇴</span>
                      </Card.Content>
                      <Card.Content>
                      <span className="blackt">Halmat is a man of words but that doesn't inhibit his reach, utilsing his gramatical
                      and negotating skills allows an unyielding range of potential opportunities to arise.
                       </span>
                      </Card.Content>
                      <Card.Content extra>
                      <a className="plink" href="https://www.linkedin.com/in/halmat-sarzali-575330b7/">
                      <FontAwesomeIcon icon={faLinkedin} color='white' />
                      </a>
                      <a className="ptweet" href="https://twitter.com/RealCrypto420">
                      <FontAwesomeIcon icon={faTwitter} color='white' />
                      </a>
                      <a className="ptele" href="https://discordapp.com/users/379338535104413734/">
                      <FontAwesomeIcon icon={faDiscord} color='white' />
                      </a>
                      <a className="pdis" href="https://t.me/Hali420">
                      <FontAwesomeIcon icon={faTelegramPlane} color='white' />
                      </a>
                      </Card.Content>
                    </Card>
                    </div>
                  </GridColumn>
                  <GridColumn>
                  <div className="teamCards">
                    <Card className="marcos">
                        <Card.Content>
                          <Card.Header>
                            <span className="blackt">
                              Marcos Benítez Rubianes
                            </span>
                          </Card.Header>
                          <Card.Meta>
                          <span className="blackt">Strategist</span>
                          </Card.Meta>
                        </Card.Content>
                        <Card.Content>
                        <span className="blackt">Switzerland🇨🇭</span>
                        </Card.Content>
                        <Card.Content>
                        <span className="blackt">Having worked with <b>PwC</b> in financial crimes and
                        now currently with <b>Gazprombank</b> bank, Marcos has the network and the wisdom.
                         </span>
                        </Card.Content>
                        <Card.Content extra>
                        <a className="plink" href="https://www.linkedin.com/in/marcos-benítez-rubianes-9b19b864/">
                        <FontAwesomeIcon icon={faLinkedin} color='white' />
                        </a>
                        <a className="ptweet" href="https://twitter.com/Foxxrex">
                        <FontAwesomeIcon icon={faTwitter} color='white' />
                        </a>
                        <a className="pdis" href="https://t.me/CryptoProphet33">
                        <FontAwesomeIcon icon={faTelegramPlane} color='white' />
                        </a>
                        </Card.Content>
                      </Card>
            </div>
            </GridColumn>
            </Grid>
            </Page>
        </div>


        <div className="page8">
        <Grid layout="fluid">
          <GridColumn>
            <div className="h3">
              <FontAwesomeIcon icon={faShieldAlt} color='#815aff' size='s'/>
              &nbsp;&nbsp;&nbsp;Get involved
            </div>
          </GridColumn>
          <GridColumn>
          </GridColumn>
          <GridColumn medium={1}>
            <Button onClick={this.scroll.bind(this, "page9")} appearance="help">
              Next
            </Button>
         </GridColumn>
         </Grid>

        <Grid layout="fluid">
        <GridColumn>
      <div className="joinTeam">
        <p>
        <FontAwesomeIcon icon={faFemale} color='#815aff' size='2x'/>
        &nbsp;&nbsp;&nbsp;
        <FontAwesomeIcon icon={faMale} color='#815aff' size='2x'/>
        &nbsp;&nbsp;&nbsp;
        Do you think you have what it takes to join our team? We are looking
        for innovational and committed people to help make Validity a reality.
        The onboarding process for one to become appicable requires a face to
        face interview with our founder. If you are interested please send your
        resume and a short bio to: <b>team@validity.ae</b>
        </p>
      </div>
      </GridColumn>
      </Grid>

      <Grid layout="fluid">
      <GridColumn>
      <div className="bountyTitle">
      <p>
        <FontAwesomeIcon icon={faStar} color='#815aff' size='2x'/>
        &nbsp;&nbsp;&nbsp; <b> Bounties </b>
      </p>
      </div>
      </GridColumn>
      <GridColumn>
      <div className="websiteBounties">
      <p>
        <FontAwesomeIcon icon={faFileSignature} color='#815aff' size='2x'/>
        &nbsp;&nbsp;&nbsp; <b> Validity survey </b>
      </p>
      <p>🇯🇵 Japanese&nbsp;&nbsp;&nbsp;🇪🇸 Spanish&nbsp;&nbsp;&nbsp;🇷🇺 Russian&nbsp;&nbsp;&nbsp;
      🇨🇳 Chinese&nbsp;&nbsp;&nbsp;🇮🇹 Italian&nbsp;&nbsp;&nbsp;🇫🇷 French&nbsp;&nbsp;&nbsp;🇰🇷 Korean
      &nbsp;&nbsp;&nbsp;🇳🇱 Dutch&nbsp;&nbsp;&nbsp;🇮🇳 Hindi&nbsp;&nbsp;&nbsp;🇹🇭 Siamese</p>
      </div>
    </GridColumn>
    </Grid>

        </div>


        <div className="page9">
        <Page>
        <Grid layout="fluid">
          <GridColumn>
          <div className="h4">
          <FontAwesomeIcon icon={faStar} color='#815aff' size='s'/>&nbsp;&nbsp;&nbsp;Featured by</div>
          </GridColumn>
          </Grid>

          <Grid layout="fluid">
          <GridColumn medium={2}>
          </GridColumn>
          <GridColumn>
          <div className="featuredPartners">
          <a href="https://chainlabs.ai/"><img className="clabs" src={clabs}/></a>
          </div>
          </GridColumn>
          <GridColumn>
          <div className="featuredPartners">
          <a href="https://telegram.me/coinnewschannel"><img className="cnews" src={cnews}/></a>
          </div>
          </GridColumn>
          <GridColumn>
          <div className="featuredPartners">
          <a href="https://coindreams.io/"><img className="cdreams" src={cdreams}/></a>
          </div>
          </GridColumn>
          </Grid>

        </Page>
        </div>
      </AtlaskitThemeProvider>
    );
  }
}

export default withStyles(styles)(Home);
