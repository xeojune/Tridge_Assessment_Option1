import React from 'react';
import { HeaderContainer, Logo} from './Header.style';


const Header: React.FC = () => {

  return (
    <HeaderContainer>
      <Logo>
        <img src="/images/Logo.png" alt="Pokemon Logo" />
      </Logo>
    </HeaderContainer>
  );
};

export default Header;