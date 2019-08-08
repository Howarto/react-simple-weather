import React from 'react';
import './css/Navbar.css';
import { ReactComponent as MenuButtonSVG } from '../assets/ic_menu.svg';
import store from '../store';
import { setDisplaySidebar } from '../actions';

const Navbar = () => {
  return (
    <aside className="Navbar">
      <MenuButtonSVG onClick={ handleBtnClick.bind(this) } className="Navbar__menubutton" />
      <h1 className="Navbar__title">Weather</h1>
    </aside>
  );
};

function handleBtnClick() {
  const { displaySidebar } = store.getState();
  store.dispatch(setDisplaySidebar(!displaySidebar));
}

export default Navbar;