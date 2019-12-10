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
          <DropdownToggle nav caret>
           {user.lastName} {user.firstName}
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