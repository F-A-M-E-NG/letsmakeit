import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import { Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
import './button.css';
const Userdropdown = ({user}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <div>
     
        
        <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret>
           {user.lastName} {user.firstName}
           <i className="fa fa-caret-down"></i>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem divider />
            <DropdownItem className="dropdownitem">
              <Link className="text-dark"  to="/user/dashboard">
                  Dashboard
              </Link>
              </DropdownItem>
            <DropdownItem divider />
            <DropdownItem className="dropdownitem">
              <Link className="text-dark"  to="/user/profile">
                  Profile
              </Link>
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem className="dropdownitem">
              <Link className="text-dark"  to="/logout">
                  Logout
              </Link>
              </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      
    </div>
  );
}

export default Userdropdown;