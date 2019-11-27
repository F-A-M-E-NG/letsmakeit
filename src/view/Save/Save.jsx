import React, { Component, Fragment } from 'react';
import MainSlider from '../../components/mainSlider/mainSlider';
import image10 from "../../assets/images/save/bg-img-10.png"
import './save.css'



class Save extends Component {
  render() {
    return (
      <Fragment>
        <div className="wd_scroll_wrap">
              <MainSlider/>
            <div class="header-title" id="back">
                  <div class="container">
                        <div class="title-base" >
                              <hr class="anima" />
                              <div style={{background:image10}}>
                              <h1>Savings</h1>
                              <p>Our savings products</p>

                              </div>
                        </div>
                  </div>
            </div>
        </div>
      </Fragment>
    );
  }
}

export default Save;