import React from 'react';

import { HeaderContainer, Logo } from './styles';
import Icone from '../../assets/icone.png';

function Header() {
  return (
      <>
        <HeaderContainer>
            <Logo src={Icone} alt='Encurtador de URL' />
            <h1>Pitu</h1>
            <p>{propTypes.children}</p>
        </HeaderContainer>
      </>
  );
}

export default Header;