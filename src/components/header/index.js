import React from "react";

import { Nav, NavCenter, NavContainer, NavLeft, NavRight, SearchBox } from './style';

import { ReactComponent as Explore } from '../../icons/explore.svg';
import { ReactComponent as Avatar } from '../../icons/avatar.svg';
import { ReactComponent as Heart } from '../../icons/heart.svg';

export default function Header() {
  return (
    <Nav>
      <NavContainer>
        <NavLeft>
          <p>Instagram</p>
        </NavLeft>
        <NavCenter>
          <SearchBox placeholder="search" />
        </NavCenter>
        <NavRight>
          <Explore />
          <Avatar />
          <Heart />
        </NavRight>
      </NavContainer>
    </Nav>
  );
}
