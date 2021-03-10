import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Nav, NavItem, NavLink, Button, Navbar, NavbarBrand, Collapse, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledCarousel, Progress, ListGroup, ListGroupItem, Row, Col, Form, FormGroup, Input } from 'reactstrap';
import * as data from './data';

/*--------------------------------------------------------------------------------*/
/* Import images which are need for the HEADER                                    */
/*--------------------------------------------------------------------------------*/
import logodarkicon from '../../../assets/images/logo-icon.png';
import logolighticon from '../../../assets/images/logo-light-icon.png';
import logodarktext from '../../../assets/images/logo-text.png';
import logolighttext from '../../../assets/images/logo-light-text.png';
import profilephoto from '../../../assets/images/users/1.jpg';

export default () => {

    const [isOpen, setIsOpen] = useState(false);

    const settings = useSelector((state) => state.settings);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    const showMobilemenu = () => {
        document.getElementById('main-wrapper').classList.toggle('show-sidebar');
    }

    const toggleMenu = () => {
        document.getElementById('search').classList.toggle('show-search');
    }

    const sidebarHandler = () => {
        let element = document.getElementById('main-wrapper');
        switch (settings.activeSidebarType) {
            case 'full':
            case 'iconbar':
                element.classList.toggle('mini-sidebar');
                if (element.classList.contains('mini-sidebar')) {
                    element.setAttribute('data-sidebartype', 'mini-sidebar');
                } else {
                    element.setAttribute('data-sidebartype', settings.activeSidebarType);
                }
                break;

            case 'overlay':
            case 'mini-sidebar':
                element.classList.toggle('full');
                if (element.classList.contains('full')) {
                    element.setAttribute('data-sidebartype', 'full');
                } else {
                    element.setAttribute('data-sidebartype', settings.activeSidebarType);
                }
                break;
            default:
        }
    };

    return (
        <header
            className="topbar navbarbg"
            data-navbarbg={settings.activeNavbarBg}
        >
            <Navbar
                className={
                    'top-navbar ' +
                    (settings.activeNavbarBg === 'skin6'
                        ? 'navbar-light'
                        : 'navbar-dark')
                }
                expand="md"
            >
                <div
                    className="navbar-header"
                    id="logobg"
                    data-logobg={settings.activeLogoBg}
                >
                    {/*--------------------------------------------------------------------------------*/}
                    {/* Mobile View Toggler  [visible only after 768px screen]                         */}
                    {/*--------------------------------------------------------------------------------*/}
                    <span
                        className="nav-toggler d-block d-md-none text-white"
                        onClick={() => showMobilemenu()}
                    >
                        <i className="ti-menu ti-close" />
                    </span>
                    {/*--------------------------------------------------------------------------------*/}
                    {/* Logos Or Icon will be goes here for Light Layout && Dark Layout                */}
                    {/*--------------------------------------------------------------------------------*/}
                    <NavbarBrand href="/">
                        <b className="logo-icon">
                            <img src={logodarkicon} alt="homepage" className="dark-logo" />
                            <img
                                src={logolighticon}
                                alt="homepage"
                                className="light-logo"
                            />
                        </b>
                        <span className="logo-text">
                            <img src={logodarktext} alt="homepage" className="dark-logo" />
                            <img
                                src={logolighttext}
                                className="light-logo"
                                alt="homepage"
                            />
                        </span>
                    </NavbarBrand>
                    {/*--------------------------------------------------------------------------------*/}
                    {/* Mobile View Toggler  [visible only after 768px screen]                         */}
                    {/*--------------------------------------------------------------------------------*/}
                    <span
                        className="topbartoggler d-block d-md-none text-white"
                        onClick={toggle.bind(null)}
                    >
                        <i className="ti-more" />
                    </span>
                </div>
                <Collapse
                    className="navbarbg"
                    isOpen={isOpen}
                    navbar
                    data-navbarbg={settings.activeNavbarBg}
                >
                    <Nav className="float-left" navbar>
                        {/* <NavItem>
								<NavLink
									href="#"
									className="d-none d-md-block"
									onClick={this.sidebarHandler}
								>
									<i className="ti-menu" />
								</NavLink>
							</NavItem> */}
                        {/*--------------------------------------------------------------------------------*/}
                        {/* Start Search-box toggle                                                        */}
                        {/*--------------------------------------------------------------------------------*/}
                        <NavItem className="hidden-sm-down search-box">
                            <NavLink
                                href="#"
                                className="hidden-sm-down"
                                onClick={toggleMenu.bind(null)}
                            >
                                <i className="ti-search" />
                            </NavLink>
                            <Form className="app-search" id="search">
                                <Input type="text" placeholder="Search & enter" />
                                <span className="srh-btn" onClick={toggleMenu.bind(null)}>
                                    <i className="ti-close" />
                                </span>
                            </Form>
                        </NavItem>
                        {/*--------------------------------------------------------------------------------*/}
                        {/* End Search-box toggle                                                          */}
                        {/*--------------------------------------------------------------------------------*/}
                        {/*--------------------------------------------------------------------------------*/}
                        {/* Start Mega Menu Dropdown                                                       */}
                        {/*--------------------------------------------------------------------------------*/}
                        <UncontrolledDropdown nav inNavbar className="mega-dropdown">
                            <DropdownToggle nav>
                                <i className="mdi mdi-view-grid" />
                            </DropdownToggle>
                            <DropdownMenu>
                                <Row>
                                    {/*--------------------------------------------------------------------------------*/}
                                    {/* Carousel [Item-1]                                                              */}
                                    {/*--------------------------------------------------------------------------------*/}
                                    <Col xs="12" sm="12" md="12" lg="3">
                                        <h5 className="mb-3 text-uppercase">Carousel</h5>
                                        <UncontrolledCarousel items={data.items} />
                                    </Col>
                                    {/*--------------------------------------------------------------------------------*/}
                                    {/* Progress [Item-2]                                                              */}
                                    {/*--------------------------------------------------------------------------------*/}
                                    <Col xs="12" sm="12" md="12" lg="3">
                                        <h5 className="mb-3 text-uppercase">Progress</h5>
                                        <div className="d-flex no-block align-items-center mb-2">
                                            <span>Sales</span>
                                            <div className="ml-auto">
                                                <span className="text-primary">
                                                    <i className="mdi mdi-chart-areaspline" />
                                                </span>
                                            </div>
                                        </div>
                                        <Progress className="mb-3" animated value={2 * 5} />
                                        <div className="d-flex no-block align-items-center mb-2">
                                            <span>Marketing</span>
                                            <div className="ml-auto">
                                                <span className="text-success">
                                                    <i className="mdi mdi-chart-line" />
                                                </span>
                                            </div>
                                        </div>
                                        <Progress
                                            className="mb-3"
                                            animated
                                            color="success"
                                            value="25"
                                        />
                                        <div className="d-flex no-block align-items-center mb-2">
                                            <span>Accouting</span>
                                            <div className="ml-auto">
                                                <span className="text-danger">
                                                    <i className="mdi mdi-chart-arc" />
                                                </span>
                                            </div>
                                        </div>
                                        <Progress
                                            className="mb-3"
                                            animated
                                            color="danger"
                                            value={50}
                                        />
                                        <div className="d-flex no-block align-items-center mb-2">
                                            <span>Sales Ratio</span>
                                            <div className="ml-auto">
                                                <span className="text-warning">
                                                    <i className="mdi mdi-chart-pie" />
                                                </span>
                                            </div>
                                        </div>
                                        <Progress
                                            className="mb-3"
                                            animated
                                            color="warning"
                                            value={70}
                                        />
                                    </Col>
                                    {/*--------------------------------------------------------------------------------*/}
                                    {/* Contact Us [Item-3]                                                            */}
                                    {/*--------------------------------------------------------------------------------*/}
                                    <Col xs="12" sm="12" md="12" lg="3">
                                        <h5 className="mb-3 text-uppercase">Contact Us</h5>
                                        <Form>
                                            <FormGroup>
                                                <Input
                                                    type="text"
                                                    name="name"
                                                    id="textname"
                                                    placeholder="Enter Name Here"
                                                />
                                            </FormGroup>
                                            <FormGroup>
                                                <Input
                                                    type="email"
                                                    name="email"
                                                    id="exampleEmail"
                                                    placeholder="Enter Email Here"
                                                />
                                            </FormGroup>
                                            <FormGroup>
                                                <Input
                                                    type="textarea"
                                                    name="text"
                                                    id="exampleText"
                                                    placeholder="Message"
                                                />
                                            </FormGroup>
                                            <Button color="info">Submit</Button>
                                        </Form>
                                    </Col>
                                    {/*--------------------------------------------------------------------------------*/}
                                    {/* List Style [Item-4]                                                            */}
                                    {/*--------------------------------------------------------------------------------*/}
                                    <Col xs="12" sm="12" md="12" lg="3">
                                        <h5 className="mb-3 text-uppercase">List Style</h5>
                                        <ListGroup flush>
                                            <ListGroupItem
                                                tag="a"
                                                href=""
                                                className="border-0 pl-0 text-muted pt-0"
                                            >
                                                <i className="fa fa-check text-success mr-2" />
													Cras justo odio
                        </ListGroupItem>
                                            <ListGroupItem
                                                tag="a"
                                                href=""
                                                className="border-0 pl-0 text-muted pt-0"
                                            >
                                                <i className="fa fa-check text-success mr-2" />
													Dapibus ac facilisis in
                        </ListGroupItem>
                                            <ListGroupItem
                                                tag="a"
                                                href=""
                                                className="border-0 pl-0 text-muted pt-0"
                                            >
                                                <i className="fa fa-check text-success mr-2" />
													Morbi leo risus
                        </ListGroupItem>
                                            <ListGroupItem
                                                tag="a"
                                                href=""
                                                className="border-0 pl-0 text-muted pt-0"
                                            >
                                                <i className="fa fa-check text-success mr-2" />
													Porta ac consectetur ac
                        </ListGroupItem>
                                            <ListGroupItem
                                                tag="a"
                                                href=""
                                                className="border-0 pl-0 text-muted pt-0"
                                            >
                                                <i className="fa fa-check text-success mr-2" />
													Vestibulum at eros
                        </ListGroupItem>
                                        </ListGroup>
                                    </Col>
                                </Row>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        {/*--------------------------------------------------------------------------------*/}
                        {/* End Mega Menu Dropdown                                                         */}
                        {/*--------------------------------------------------------------------------------*/}
                    </Nav>
                    <Nav className="ml-auto float-right" navbar>
                        {/*--------------------------------------------------------------------------------*/}
                        {/* Start Notifications Dropdown                                                   */}
                        {/*--------------------------------------------------------------------------------*/}
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                <i className="mdi mdi-message" />
                                <div className="notify">
                                    <span className="heartbit" /> <span className="point" />
                                </div>
                            </DropdownToggle>
                            <DropdownMenu right className="mailbox">
                                <div className="p-4 text-dark border-bottom">
                                    <h6 className="mb-0 font-medium">Notifications</h6>
                                </div>
                                <div className="message-center notifications">
                                    {/*<!-- Message -->*/}
                                    {data.notifications.map((notification, index) => {
                                        return (
                                            <span className="message-item" key={index}>
                                                <span
                                                    className={
                                                        'btn btn-circle btn-' + notification.iconbg
                                                    }
                                                >
                                                    <i className={notification.iconclass} />
                                                </span>
                                                <div className="mail-contnet">
                                                    <h5 className="message-title">
                                                        {notification.title}
                                                    </h5>
                                                    <span className="mail-desc">
                                                        {notification.desc}
                                                    </span>
                                                    <span className="time">{notification.time}</span>
                                                </div>
                                            </span>
                                        );
                                    })}
                                </div>
                                <a className="nav-link text-center mb-1 text-muted" href=";">
                                    <strong>Check all notifications</strong>
                                    <i className="fa fa-angle-right" />
                                </a>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        {/*--------------------------------------------------------------------------------*/}
                        {/* End Notifications Dropdown                                                     */}
                        {/*--------------------------------------------------------------------------------*/}
                        {/*--------------------------------------------------------------------------------*/}
                        {/* Start Messages Dropdown                                                        */}
                        {/*--------------------------------------------------------------------------------*/}
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                <i className="mdi mdi-email" />
                                <div className="notify">
                                    <span className="heartbit" /> <span className="point" />
                                </div>
                            </DropdownToggle>
                            <DropdownMenu right className="mailbox">
                                <div className="p-4 text-dark border-bottom">
                                    <h6 className="mb-0 font-medium">
                                        You have 4 new messages
                    </h6>
                                </div>
                                <div className="message-center message-body">
                                    {/*<!-- Message -->*/}
                                    {data.messages.map((message, index) => {
                                        return (
                                            <span className="message-item" key={index}>
                                                <span className="user-img">
                                                    <img
                                                        src={message.image}
                                                        alt="user"
                                                        className="rounded-circle"
                                                        width=""
                                                    />
                                                    <span
                                                        className={
                                                            'profile-status pull-right ' + message.status
                                                        }
                                                    />
                                                </span>
                                                <div className="mail-contnet">
                                                    <h5 className="message-title">{message.title}</h5>
                                                    <span className="mail-desc">{message.desc}</span>
                                                    <span className="time">{message.time}</span>
                                                </div>
                                            </span>
                                        );
                                    })}
                                </div>
                                <a className="nav-link text-center link text-muted" href="/">
                                    <b>See all e-Mails</b> <i className="fa fa-angle-right" />
                                </a>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        {/*--------------------------------------------------------------------------------*/}
                        {/* End Messages Dropdown                                                          */}
                        {/*--------------------------------------------------------------------------------*/}
                        {/*--------------------------------------------------------------------------------*/}
                        {/* Start Profile Dropdown                                                         */}
                        {/*--------------------------------------------------------------------------------*/}
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret className="pro-pic">
                                <img
                                    src={profilephoto}
                                    alt="user"
                                    className="rounded-circle"
                                    width="31"
                                />
                            </DropdownToggle>
                            <DropdownMenu right className="user-dd">
                                <div className="d-flex no-block align-items-center p-3 mb-2 border-bottom">
                                    <div className="">
                                        <img
                                            src={profilephoto}
                                            alt="user"
                                            className="rounded"
                                            width="80"
                                        />
                                    </div>
                                    <div className="ml-3">
                                        <h4 className="mb-0">Steave Jobs</h4>
                                        <p className="text-muted mb-0">varun@gmail.com</p>
                                        <Button color="danger" className="btn-rounded mt-2">
                                            View Profile
                      </Button>
                                    </div>
                                </div>
                                <DropdownItem>
                                    <i className="ti-user mr-1 ml-1" /> My Account
                  </DropdownItem>
                                <DropdownItem>
                                    <i className="ti-wallet mr-1 ml-1" /> My Balance
                  </DropdownItem>
                                <DropdownItem className="border-bottom">
                                    <i className="ti-email mr-1 ml-1" /> Inbox
                  </DropdownItem>
                                <DropdownItem className="border-bottom">
                                    <i className="ti-settings mr-1 ml-1" /> Account Settings
                  </DropdownItem>
                                <DropdownItem href="/pages/login">
                                    <i className="fa fa-power-off mr-1 ml-1" /> Logout
                  </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        {/*--------------------------------------------------------------------------------*/}
                        {/* End Profile Dropdown                                                           */}
                        {/*--------------------------------------------------------------------------------*/}
                    </Nav>
                </Collapse>
            </Navbar>
        </header>
    );
}
