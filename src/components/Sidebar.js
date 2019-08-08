import React from 'react';
import './css/Sidebar.css';
import { ReactComponent as RandomImage } from '../assets/ic_menu.svg';
import { ReactComponent as AddButtonSVG } from '../assets/ic_add_circle.svg';
import store from '../store';

const Weather = ({ city }) => {
  return (
    <div className="Sidebar__weather">
      <RandomImage className="Sidebar__weather__pic" />
      <span className="Sidebar__weather__text">{ city }</span>
    </div>
  );
}

const Sidebar = () => {
  const weathers = [
    <Weather key={1} city={'Barcelona'} />,
    <Weather key={2} city={'Madrid'} />,
    <Weather key={3} city={'Ibizaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'} />
  ];

  const { displaySidebar } = store.getState();
  const sidebarClasses = displaySidebar ? "Sidebar Sidebar--hide" : "Sidebar";

  return (
    <div className={sidebarClasses}>
      {
        weathers
      }
      <AddButtonSVG className="Sidebar__addButton"/>
    </div>
  );
};

export default Sidebar;