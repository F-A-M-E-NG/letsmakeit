
import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom'

const Example = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle color="primary" caret>
        Create Account
      </DropdownToggle>
      <DropdownMenu>
       
        <DropdownItem ><Link to="/createplan">Save</Link></DropdownItem>
        <DropdownItem divider />
        <DropdownItem><Link to="/createplan">Investments</Link></DropdownItem>
        <DropdownItem divider />
        <DropdownItem><Link to="/createplan">Loans</Link></DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
}

export default Example;