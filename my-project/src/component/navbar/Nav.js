import React, { useEffect, useState } from 'react';
import List from "./List"
import SideBaar from './SideBaar';


function Nav() {



  return (
    <React.Fragment>
      <nav class="navbar navbar-expand-lg naavbar navbar-light bg-lignt">  <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon "></span>
      </button>
        <div class="image-wrapper">
          <img className="imglogo" src="/icons/nock-nock-logo-wht.png" alt="image" />
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav divnav mr-auto">

            <List name="SELL" />
            <List name="BUY" />
            <List name="FINANCE" />

          </ul>

        </div>

        <a href="#menu-toggle" id="menu-toggle" class="navbar-brand "><span class="navbar-toggler-icon"></span></a>

      </nav>
      <div id="wrapper">
        <div id="sidebar-wrapper">
          <ul class="sidebar-nav">
            <SideBaar name="Agent Directory" /><br/>
            <SideBaar name="About Us" /><br/>
            <SideBaar name="Blog" /><br/>
            <SideBaar name="Privacy" /><br/>
            <SideBaar name="Terms and Condition " /><br/><br/><br/>
            <div class="image-wrapper">
              <img className="sociallogo" src="/icons/Facebook.png" alt="image" />
              <img className="sociallogo" src="/icons/Twitter.png" alt="image" />
              <img className="sociallogo" src="/icons/Instagram.png" alt="image" />
            </div>
          </ul>

        </div>
      </div>
    </React.Fragment>
  );
}
export default Nav;