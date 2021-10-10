import React from 'react';

import { Container } from './styles';

import Logo from '../../assests/Logo.svg';

const SideBar: React.FC = () => {
  return(
      <Container>
          <img src={Logo} alt="" />
      </Container>
  );
}

export default SideBar;