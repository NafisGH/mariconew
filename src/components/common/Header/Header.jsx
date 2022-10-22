import React from "react";
import { NavLink } from "react-router-dom";
import StyledHeader from "./StyledHeader";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <StyledHeader>
       <Logo/>
      <nav>
        <ul>
          <NavLink to="../use case" 
          className={({isActive})=> isActive ? 'active' : undefined }
          >Use Cases</NavLink>

          <NavLink to="../about"
          className={({isActive})=> isActive ? 'active' : undefined }
          >About</NavLink>

          <NavLink to="../pricing"
          className={({isActive})=> isActive ? 'active' : undefined }
          >Pricing</NavLink>

          <NavLink to="../blog"
          className={({isActive})=> isActive ? 'active' : undefined }
          >Blog</NavLink>
          
        </ul>
      </nav>
      <div>
        <Button classBtn="login">Login</Button>
        <Button classBtn="sign">Sign Up</Button>
      </div>
    </StyledHeader>
  );
}

export default Header;