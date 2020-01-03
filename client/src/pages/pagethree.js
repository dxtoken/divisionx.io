import React, { Component } from "react";

import { faCogs } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Grid from '@material-ui/core/Grid';
import Page from "@atlaskit/page"

import { PURPLE_PRIMARY } from '../constants/palette';

class PageThree extends Component {
  constructor(props){
      super(props)
      this.state = {
      }
   }

  render() {
    return(
      <div className="page3">
        <Page>
          <Grid container direction="column">
            <Grid item>
              <div className="h3">
                <FontAwesomeIcon icon={faCogs} color={PURPLE_PRIMARY} size="sm"/>&nbsp;&nbsp;&nbsp;How does it work?
              </div>
            </Grid>
            <Grid item>
              <div className="stageComponent">
                <div className="stageNumber">1</div>
                <div className="stageText">
                  A poll is created for selecting a subject between the top 5 by majority requests, the winning entity is then delegated for the validation process.
                </div>
              </div>
            </Grid>
            <Grid item>
              <div className="stageComponent">
                <div className="stageNumber">2</div>
                <div className="stageText">
                  An intrinsic analysis and due-dillegence is executed upon the entities employee's, product and ultimately it's integrity.
                </div>
              </div>
            </Grid>
            <Grid item>
              <div className="stageComponent">
                <div className="stageNumber">3</div>
                <div className="stageText">
                  The investigation is then proposed to validitors, in order to create a non-bias form of verification through communal validation.
                </div>
              </div>
            </Grid>
            <Grid item>
              <div className="stageComponent">
                <div className="stageNumber">4</div>
                <div className="stageText">
                 Validators engage in a interactive voting process using Validity's unique UX, to express their outlook on the project via three options:
                 <b style={{ color: "#00d077" }}> positive</b>, <b style={{ color: "#0cbbff" }}>neutral</b> or <b style={{ color: "#ff0c25" }}>negative</b>.
                </div>
              </div>
           </Grid>
           <Grid item>
             <div className="stageComponent">
               <div className="stageNumber">5</div>
               <div className="stageText">
                 The concluding results are combined to be quantified out of a rating of 10, the governed analysis then acts as a source of evaluation for future onlooking investors.
               </div>
             </div>
           </Grid>
         </Grid>
        </Page>
      </div>
    )
  }
}

export default PageThree;
