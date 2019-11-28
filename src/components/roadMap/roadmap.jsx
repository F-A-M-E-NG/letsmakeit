import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ReactWOW from 'react-wow';
import ModalVideo from 'react-modal-video'
import video2 from '../../assets/images/video/2.png';
import video3 from '../../assets/images/video/3.png';
import video4 from '../../assets/images/video/4.png';
import video5 from '../../assets/images/video/5.png';
import video6 from '../../assets/images/video/6.png';
import video7 from '../../assets/images/video/7.png';
import video8 from '../../assets/images/video/8.png';
import video9 from '../../assets/images/video/9.png';
import 'react-modal-video/scss/modal-video.scss'
import 'video.js/dist/video-js.min.css';
import save1 from '../../assets/images/square-1.jpg'
import save2 from '../../assets/images/square-2.jpg'
import save3 from '../../assets/images/square-3.jpg'
import save4 from '../../assets/images/square-4.jpg'
import save5 from '../../assets/images/square-5.jpg'

import poster from '../../assets/images/poster.jpg'


class Roadmap extends Component {
  constructor() {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal() {
    this.setState({ isOpen: true })
  }
  render() {
    let titleAni = (
      <div><h1>Savings</h1>
      <p>Our Savings Products</p></div>
      
    )
    let contents = (
      <ul>
        <li>
          <span className="years"><span className="con">e-S</span></span>
          <div className="serials">
            <span className="cre"></span>
            <Col sm={6} className="col-xs-12 left-con">
              <div className="box-con">
                <div className="dbox">
                  <div className="dright">
                    <div className="content">
                      <h2>e-Savings</h2>
                      <p>A convenient, secure and supporting savings product that enables you to increase your cash base and creating extra income. It is a daily fixed amount contribution with withdrawals only allowed at the end of the month of the contribution if need be.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={6} className="col-xs-12 right-con">
              <div className="box-con">
                <div className="dbox">
                 
                  <div className="dright"><img src={save1} alt="video" />
                  </div>
                </div>
              </div>
            </Col>
          </div>
        </li>
        
        <li>
          <span className="years"><span className="con">DMI</span></span>
          <div className="serials">
            <span className="cre"></span>
            <Col sm={6} className="col-xs-12 left-con">
              <div className="box-con">
                <div className="dbox">
                <div className="dleft"><img src={save2} alt="video" />
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={6} className="col-xs-12 right-con">
              <div className="box-con">
                <div className="dbox">
                  <div className="dleft">
                    <div className="content">
                    <h2>Daily Micro Investments(DMI)</h2>
                      <p>A holder of this account saves for a period of twelve(12) months without withdrawals and earns competitive interest of 8% and then he/she can have access to loan facility worth twice of his investment from Brass and Books MPC ltd.</p></div>
                  </div>
                </div>
              </div>
            </Col>
          </div>
        </li>
        <li>
          <span className="years"><span className="con">TF</span></span>
          <div className="serials">
            <span className="cre"></span>
            <Col sm={6} className="col-xs-12 left-con">
              <div className="box-con">
                <div className="dbox">
                  <div className="dright">
                    <div className="content">
                      <h2>Term Funds</h2>
                <p>This product offers a convenient, flexible and secure saving option for the account holder that has bulk money they want to keep aside for a period usually more than a month at a fairly priced interest rate</p> </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={6} className="col-xs-12 right-con">
              <div className="box-con">
                <div className="dbox">
                  
                  <div className="dright"><img src={save3} alt="video" />
                  </div>
                </div>
              </div>
            </Col>
          </div>
        </li>
        <li>
          <span className="years"><span className="con">SS</span></span>
          <div className="serials">
            <span className="cre"></span>
            <Col sm={6} className="col-xs-12 left-con">
              <div className="box-con">
                <div className="dbox">
                <div className="dleft"><img src={save4} alt="video" />
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={6} className="col-xs-12 right-con">
              <div className="box-con">
                <div className="dbox">
                  <div className="dleft">
                    <div className="content">
                    <h2>Smart Saving</h2>
                      <p>The Smart Savings Program is a premium savings scheme that offers investors an attractive alternative to bank deposits and savings accounts as well as the flexibility to achieve their investment needs and objectives through a single investment vehicle.</p></div>
                  </div>
                </div>
              </div>
            </Col>
          </div>
        </li>
        
        <li>
          <span className="years"><span className="con">i-C</span></span>
          <div className="serials">
            <span className="cre"></span>
            <Col sm={6} className="col-xs-12 left-con">
              <div className="box-con">
                <div className="dbox">
                  <div className="dright">
                    <div className="content">
                      <h2>iClub</h2>
                      <p>The Brass and Books iClub is an exclusive community of serious private investors who pool together resources to invest in alternative investments, diversify risks and enjoy great returns and profits as we pool together ideas and thus become better investors</p>
                       </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={6} className="col-xs-12 right-con">
              <div className="box-con">
                <div className="dbox">
                 
                  <div className="dright">
                    <img src={save5} alt="video" />
                  </div>
                </div>
              </div>
            </Col>
          </div>
        </li>
       </ul>
    )
    if (this.props.animate) {
      titleAni = (
        <ReactWOW animation={this.props.animate} duration="1s">
          <h2>Development of Bit Money Platform<br />(Road Map)</h2>
        </ReactWOW>
      )
      contents = (
        <ul>
          <li>
            <span className="years"><span className="con">2016</span></span>
            <div className="serials">
              <span className="cre"></span>
              <ReactWOW animation={this.props.animate} duration="1s">
                <Col sm={6} className="col-xs-12 left-con">
                  <div className="box-con">
                    <div className="dbox">
                      <div className="dleft">
                        <div className="imgs"><img src={video2} alt="video" /></div>
                      </div>
                      <div className="dright">
                        <div className="content">
                          <h3>Idea</h3>
                          <p>(September - October)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </ReactWOW>
              <ReactWOW animation={this.props.animate} duration="1.3s">
                <Col sm={6} className="col-xs-12 right-con">
                  <div className="box-con">
                    <div className="dbox">
                      <div className="dleft">
                        <div className="content">
                          <h3>Market Research</h3>
                          <p>(October - December)</p>
                        </div>
                      </div>
                      <div className="dright">
                        <div className="imgs"><img src={video3} alt="video" /></div>
                      </div>
                    </div>
                  </div>
                </Col>
              </ReactWOW>
            </div>
          </li>
          <li>
            <span className="years"><span className="con">2017</span></span>
            <div className="serials">
              <span className="cre"></span>
              <ReactWOW animation={this.props.animate} duration="1.6s">
                <Col sm={6} className="col-xs-12 left-con">
                  <div className="box-con">
                    <div className="dbox">
                      <div className="dleft">
                        <div className="imgs"><img src={video3} alt="video" /></div>
                      </div>
                      <div className="dright">
                        <div className="content">
                          <p>(1Q 2017)</p>
                          <h3>Formation of foundersteam Business plan</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </ReactWOW>
              <ReactWOW animation={this.props.animate} duration="1.9s">
                <Col sm={6} className="col-xs-12 right-con">
                  <div className="box-con">
                    <div className="dbox">
                      <div className="dleft">
                        <div className="content">
                          <p>(2Q 2017)</p>
                          <h3>Start of Platform<br /> Development</h3>
                        </div>
                      </div>
                      <div className="dright">
                        <div className="imgs"><img src={video4} alt="video" /></div>
                      </div>
                    </div>
                  </div>
                </Col>
              </ReactWOW>
            </div>
            <div className="serials">
              <span className="cre"></span>
              <ReactWOW animation={this.props.animate} duration="2.1s">
                <Col sm={6} className="col-xs-12 left-con">
                  <div className="box-con">
                    <div className="dbox">
                      <div className="dleft">
                        <div className="imgs"><img src={video5} alt="video" /></div>
                      </div>
                      <div className="dright">
                        <div className="content">
                          <p>(3Q 2017)</p>
                          <h3>WhitePaper<br /> Landing page</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </ReactWOW>
              <ReactWOW animation={this.props.animate} duration="2.1s">
                <Col sm={6} className="col-xs-12 right-con">
                  <div className="box-con">
                    <div className="dbox">
                      <div className="dleft">
                        <div className="content">
                          <p>(4Q 2017)</p>
                          <h3>Pre-Sale<br />Launch Platform<br />in beta test mode</h3>
                        </div>
                      </div>
                      <div className="dright">
                        <div className="imgs"><img src={video6} alt="video" /></div>
                      </div>
                    </div>
                  </div>
                </Col>
              </ReactWOW>
            </div>
          </li>
          <li>
            <span className="years"><span className="con">2018</span></span>
            <div className="serials">
              <span className="cre"></span>
              <ReactWOW animation={this.props.animate} duration="2.3s">
                <Col sm={6} className="col-xs-12 left-con">
                  <div className="box-con">
                    <div className="dbox">
                      <div className="dleft">
                        <div className="imgs"><img src={video7} alt="video" /></div>
                      </div>
                      <div className="dright">
                        <div className="content">
                          <p>(1Q 2018)</p>
                          <h3>ICO Launch<br />Identification<br />Systemsand work<br />with API Partners</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </ReactWOW>
              <ReactWOW animation={this.props.animate} duration="2.3s">
                <Col sm={6} className="col-xs-12 right-con">
                  <div className="box-con">
                    <div className="dbox">
                      <div className="dleft">
                        <div className="content">
                          <p>(2Q 2018)</p>
                          <h3>Launch the<br />Platform in<br />Full mode</h3>
                        </div>
                      </div>
                      <div className="dright">
                        <div className="imgs"><img src={video8} alt="video" /></div>
                      </div>
                    </div>
                  </div>
                </Col>
              </ReactWOW>
            </div>
            <div className="serials">
              <span className="cre"></span>
              <ReactWOW animation={this.props.animate} duration="2.5s">
                <Col sm={12} className="col-xs-12 center-con">
                  <div className="box-con">
                    <div className="dbox">
                      <div className="dleft">
                        <div className="imgs"><img src={video9} alt="video" /></div>
                      </div>
                      <div className="dright">
                        <div className="content">
                          <p>(4Q 2018)</p>
                          <h3>Establishing<br />Representative<br />Office</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </ReactWOW>
            </div>
          </li>
        </ul>
      )
    }
    return (
        <div id="road_map" className="wd_scroll_wrap wd_scroll">
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='s4g1XFU8Gto' onClose={() => this.setState({ isOpen: false })} />
        <section className="video-area section">
          <Container>
            <Row>
              <Col lg={12} md={12} sm={12} className="col-xs-12">
                <div className="videos-heding">
                  {titleAni}
                  <div className="videos-box">
                    <div className="video-js">
                      <div className="vjs-poster" style={{ background: `url(${poster})` }}></div>
                      
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <div className="wd_scroll_wrap">
          <section className="video-des">
            <Container>
              <Row>
                <Col lg={12} md={12} sm={12} className="col-xs-12">
                  <div className="deslidt">
                    {contents}
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          
        </div>
      </div>
    );
  }
}

export default Roadmap;