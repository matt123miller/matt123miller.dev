import React from 'react';

import MainNav from './MainNav';
import Logo from './Logo';

import * as Styled from './styles';

interface Props {
  siteTitle: string;
}

const Header: React.FC<Props> = ({ siteTitle }) => (
  
    <header className="-mb-px">
      <Styled.Wrapper>
        <Logo />
        <MainNav />
      </Styled.Wrapper>
    </header>
);

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
