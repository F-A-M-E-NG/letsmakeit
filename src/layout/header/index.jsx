import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo/logo.png';
import flag from '../../assets/images/icons/12.png';
import Config from '../../configure';
import $ from 'jquery';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navMenuMobile: false,
      redirect: false
    };
  }
  toggleNavMenu = () => {
    this.setState({ navMenuMobile: !this.state.navMenuMobile });
  };
  handleScroll = () => {
    if (this.mount) {
      this.setState({ scroll: window.scrollY });
    }
  };

  componentDidMount() {
    this.mount = true;
    const el = document.querySelector('.gc_main_menu_wrapper');
    this.setState({ top: el.offsetTop + 700, height: el.offsetHeight });
    window.addEventListener('scroll', this.handleScroll);
  }
  componentDidUpdate() {
    this.state.scroll > this.state.top
      ? (document.body.style.paddingTop = `${this.state.height}px`)
      : (document.body.style.paddingTop = '0');
  }
  componentWillUnmount() {
    this.mount = false;
  }
  render() {
    $(document).ready(() => {
      $('.wd_single_index_menu ul li a[href^="#"]').bind('click', function(
        event
      ) {
        event.preventDefault();
        event.stopPropagation();
        var $anchor = $(this);
        if ($(window).width() > 991) {
          var headerH = '60';
        } else {
          headerH = '56';
        }
        $('html, body')
          .stop()
          .animate(
            {
              scrollTop: $($anchor.attr('href')).offset().top - headerH + 'px'
            },
            800
          );
      });
      $(window).scroll(function() {
        var windscroll = $(window).scrollTop();
        var target = $('.wd_single_index_menu ul li');
        if (windscroll >= 0) {
          $('.wd_scroll').each(function(i) {
            if ($(this).position().top <= windscroll + 90) {
              target.removeClass('active');
              target.eq(i).addClass('active');
            }
          });
        } else {
          target.removeClass('active');
          $('.wd_single_index_menu ul li:first').addClass('active');
        }
      });
    });
    let navigation = (
      <ul>
        <li>
          <Link className="nav-link" to="/save">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/products">
            Save
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/">
            Invest
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/team">
            Loan
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/about">
            About Us
          </Link>
        </li>
      </ul>
    );
    return (
      <div id="default" className="wd_scroll_wrap wd_scroll">
        <header
          className={`gc_main_menu_wrapper ${
            this.state.scroll > this.state.top
              ? 'menu_fixed animated fadeInDown'
              : ''
          }`}
        >
          <Container fluid>
            <Row>
              <Col className="col-xs-6" sm={12} md={3} lg={3}>
                <div className="logo-area">
                  <Link to={Config.defaultPath}>
                    <img src={logo} alt="logo" />
                  </Link>
                </div>
              </Col>
              <Col lg={9} md={9} sm={12} className="col-xs-6">
                <div className="menu-area hidden-xs">
                  <nav className="wd_single_index_menu btc_main_menu">
                    {navigation}
                  </nav>
                  <div className="language">
                    <span className="lng-in">
                      <img src={flag} alt="" />
                    </span>
                    <ul className="lng-out">
                      <li>
                        <img src={flag} alt="" />
                      </li>
                      <li>
                        <img src={flag} alt="" />
                      </li>
                    </ul>
                  </div>
                  <div className="login-btn">
                    <Link to="#" className="btn1">
                      <i className="fa fa-user"></i>
                      <span>Login</span>
                    </Link>
                  </div>
                </div>
                <div className="rp_mobail_menu_main_wrapper visible-xs">
                  <div className="row">
                    <div className="col-xs-12">
                      <div id="toggle" onClick={this.toggleNavMenu}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xlink="http://www.w3.org/1999/xlink"
                          version="1.1"
                          id="Capa_1"
                          x="0px"
                          y="0px"
                          viewBox="0 0 31.177 31.177"
                          space="preserve"
                          width="25px"
                          height="25px"
                        >
                          <g>
                            <g>
                              <path
                                className="menubar"
                                d="M30.23,1.775H0.946c-0.489,0-0.887-0.398-0.887-0.888S0.457,0,0.946,0H30.23    c0.49,0,0.888,0.398,0.888,0.888S30.72,1.775,30.23,1.775z"
                                fill="#000000"
                              />
                            </g>
                            <g>
                              <path
                                className="menubar"
                                d="M30.23,9.126H12.069c-0.49,0-0.888-0.398-0.888-0.888c0-0.49,0.398-0.888,0.888-0.888H30.23    c0.49,0,0.888,0.397,0.888,0.888C31.118,8.729,30.72,9.126,30.23,9.126z"
                                fill="#000000"
                              />
                            </g>
                            <g>
                              <path
                                className="menubar"
                                d="M30.23,16.477H0.946c-0.489,0-0.887-0.398-0.887-0.888c0-0.49,0.398-0.888,0.887-0.888H30.23    c0.49,0,0.888,0.397,0.888,0.888C31.118,16.079,30.72,16.477,30.23,16.477z"
                                fill="#000000"
                              />
                            </g>
                            <g>
                              <path
                                className="menubar"
                                d="M30.23,23.826H12.069c-0.49,0-0.888-0.396-0.888-0.887c0-0.49,0.398-0.888,0.888-0.888H30.23    c0.49,0,0.888,0.397,0.888,0.888C31.118,23.43,30.72,23.826,30.23,23.826z"
                                fill="#000000"
                              />
                            </g>
                            <g>
                              <path
                                className="menubar"
                                d="M30.23,31.177H0.946c-0.489,0-0.887-0.396-0.887-0.887c0-0.49,0.398-0.888,0.887-0.888H30.23    c0.49,0,0.888,0.398,0.888,0.888C31.118,30.78,30.72,31.177,30.23,31.177z"
                                fill="#000000"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div
                    id="sidebar"
                    style={{
                      left: this.state.navMenuMobile ? 0 : '-300px',
                      transition: 'all 0.5s linear'
                    }}
                  >
                    <h1>
                      <Link to={Config.defaultPath}>Bit Money</Link>
                    </h1>
                    <div onClick={this.toggleNavMenu} id="toggle_close">
                      &times;
                    </div>
                    <div id="cssmenu" className="wd_single_index_menu">
                      {navigation}
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    );
  }
}

export default Header;
