import styled from 'styled-components';
import { Container } from '../../globalStyle';

export const Nav = styled.div`
  z-index: 1;
  top: 0;
  position: sticky;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
`
export const NavContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
`;

export const NavLeft = styled.div`
  // width: 33.333%;
`;

export const NavCenter = styled.div`
  // width: 33.333%;
`;

export const SearchBox = styled.input`
  width: 100%;
  padding: 0.3rem 0.3rem;
  border: solid 1px #dbdbdb;
  border-radius: 0.2rem;
  font-size: 0.9rem;
  color: #999;
  cursor: text;
  background: #fafafa;
  text-align: center;
`

export const NavRight = styled.div`
  display: flex;
  width: 150px;
  text-align: right;
  justify-content: space-evenly;
`
