import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { logoutUser } from '../../redux/user/user.actions';
import CustomNavbarItem from '../../blocks/custom-navbar-item/custom-navbar-item.component';
import ContactModal from '../contact-modal/contact-modal.component';

import {
  navbarName,
  navbarGuestLinks,
  navbarUserLinks,
} from '../../assets/data/text';

import { ITEM_NAV, HAMBURGER_I } from './navbar.styles';

const Navbar = ({ history, user: { isLoggedIn }, logoutUser }) => {
  const handleClick = async () => {
    await logoutUser();
    history.push('/login');
  };
  const { refLink, text, element } = navbarName;

  return (
    <Fragment>
      <ITEM_NAV
        className='navbar navbar-expand-lg fixed-top color-nav color-nav-border'
        id='main-nav'
      >
        <div className='container'>
          <CustomNavbarItem refLink={refLink} text={text} element={element} />
          <button
            className='navbar-toggler'
            data-toggle='collapse'
            data-target='#navbarCollapse'
          >
            <span className='navbar-toggler-icon'>
              <HAMBURGER_I className='fas fa-bars color-nav-hamburger'></HAMBURGER_I>
            </span>
          </button>
          <div className='collapse navbar-collapse ml-auto' id='navbarCollapse'>
            <ul className='navbar-nav ml-auto'>
              {isLoggedIn
                ? navbarUserLinks.map((el) => (
                    <CustomNavbarItem
                      key={el.id}
                      element={el.element}
                      refLink={el.refLink}
                      text={el.text}
                      WRAPLI={el.WRAPLI}
                      data-toggle={el.dataToggle}
                      data-target={el.dataTarget}
                      handler={el.handler && handleClick}
                    />
                  ))
                : navbarGuestLinks.map((el) => (
                    <CustomNavbarItem
                      key={el.id}
                      element={el.element}
                      refLink={el.refLink}
                      text={el.text}
                      WRAPLI={el.WRAPLI}
                      data-toggle={el.dataToggle}
                      data-target={el.dataTarget}
                      handler={el.handler && handleClick}
                    />
                  ))}
            </ul>
          </div>
        </div>
      </ITEM_NAV>
      <ContactModal />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default withRouter(connect(mapStateToProps, { logoutUser })(Navbar));
