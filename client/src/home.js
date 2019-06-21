import React, { Component } from "react"
import ReactGA from "react-ga";

import Landing from "../pages/landing"
import PageOne from "../pages/pageone"
import PageTwo from "../pages/pagetwo"
import PageThree from "../pages/pagethree"
import PageFour from "../pages/pagefour"
import PageFive from "../pages/pagefive"
import PageSix from "../pages/pagesix"
import PageSeven from "../pages/pageseven"
import PageEight from "../pages/pageeight"
import PageNine from "../pages/pagenine"
import PageTen from "../pages/pageten"

// Images

class Home extends Component {
  constructor(props) {
    super(props)
      this.state = {

      }
    }

      formEmail = (event) => this.setState({ email: event.target.value });
      formTelegram = (event) => this.setState({ telegram: event.target.value });
      formDiscord = (event) => this.setState({ discord: event.target.value });
      formFacebook = (event) => this.setState({ facebook: event.target.value });
      formTwitter = (event) => this.setState({ twitter: event.target.value });
      formWallet = (event) => this.setState({ wallet: event.target.value });
      revealApplication = () => this.setState({ isApply: true });
      scrollToBottom = () => this.bottomRef.scrollIntoView(true);

      formData = () => {
        if(this.state.email !== undefined
           && this.state.telegram !== undefined
           && this.state.discord !== undefined
           && this.state.twitter !== undefined
           && this.state.facebook !== undefined
           && this.state.wallet.length === 42){
              var data = {
                telegram: this.state.telegram,
                discord: this.state.discord,
                twitter: this.state.twitter,
                facebook: this.state.facebook,
                wallet: this.state.wallet
              };
          }
      }


 render() {
  return (
    <div>
      <Landing/>
      <PageOne/>
      <PageTwo/>
      <PageThree/>
      <PageFour/>
      <PageFive/>
      <PageSix
        totalTransactions={this.props.totalTransactions}
        tokenVelocity={this.props.tokenVelocity}
        averageValue={this.props.averageValue}
        weeklyVolume={this.props.weeklyVolume}
        weeklyIndex={this.props.weeklyIndex}
      />
      <PageSeven/>
      <PageEight/>
      <PageNine/>
      <PageTen/>
    </div>
    )
  }
}

export default Home;
