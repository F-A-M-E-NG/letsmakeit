import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../dropdownbutton/button.css'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Createaccount = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
      <div>
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle className="btn1" nav caret>
        Create Account <i className="fa fa-caret-down"></i>
      </DropdownToggle>
      <DropdownMenu className="dropdownitem">
        <DropdownItem divider />
        <DropdownItem className="dropdownitem"><Link className="dropdownitem" to="/save">Savings</Link></DropdownItem>
        <DropdownItem divider />
        <DropdownItem className="dropdownitem"><Link className="dropdownitem" to="/invest">Investment</Link></DropdownItem>
        <DropdownItem divider />
        <DropdownItem className="dropdownitem"><Link className="dropdownitem" to="/loan">Loan</Link></DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
    </div>
  );
}

export default Createaccount;