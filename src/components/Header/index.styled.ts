import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 6rem;
  margin-bottom: 4rem;
`;

export const HeaerWrap = styled.div`
  padding: 0 2rem;
`;

export const LogoHome = styled(Link)`
  display: inline-block;
`;

export const Logo = styled.h1``;

export const LogoImage = styled.img`
  object-fit: contain;
`;
