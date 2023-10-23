import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ListWrapper = styled.div`
  padding: 3rem 0;
`;

export const ListArea = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(4, 1fr);
`;

export const ListItem = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem;
  box-shadow: 0.6rem 0.4rem 1.4rem 0.5rem rgba(0, 0, 0, 0.21);
  border-radius: 1.2rem;
  box-sizing: border-box;
`;

export const Image = styled.img`
  width: 100%;
  object-fit: contain;
`;

export const ListName = styled.h2`
  font-size: 2rem;
`;

export const ListNone = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;
