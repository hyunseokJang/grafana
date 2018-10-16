import React, { PureComponent } from 'react';
import appEvents from '../../app_events';
import { contextSrv } from 'app/core/services/context_srv';
import TopSection from './TopSection';
import BottomSection from './BottomSection';

export class SideMenu extends PureComponent {
  toggleSideMenu = () => {
    contextSrv.toggleSideMenu();
    appEvents.emit('toggle-sidemenu');
  };

  toggleSideMenuSmallBreakpoint = () => {
    appEvents.emit('toggle-sidemenu-mobile');
  };

  render() {
    return [
      <a href="/" className="sidemenu__logo" key="logo">
        <img src="public/img/grafana_icon.svg" alt="Grafana" />
      </a>,
      <div className="sidemenu__logo_small_breakpoint" onClick={this.toggleSideMenuSmallBreakpoint} key="hamburger">
        <i className="fa fa-bars" />
        <span className="sidemenu__close">
          <i className="fa fa-times" />&nbsp;Close
        </span>
      </div>,
      <TopSection key="topsection" />,
      <BottomSection key="bottomsection" />,
    ];
  }
}
