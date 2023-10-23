import styled from 'styled-components';

export const Base = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #000;
  padding: 2rem;
  border-bottom-left-radius: 20%;
  border-bottom-right-radius: 20%;
`;

export const BasicInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 15rem);
  gap: 0.8rem;
  margin-top: 0.8rem;
`;

export const BasicInfo = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  color: #fff;
`;

export const ThumbnailImageWrapper = styled.div`
  width: 16rem;
  margin-inline: auto;
  margin-block: 2.4rem;
`;

export const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Name = styled.div`
  color: #fff;
  font-size: 3rem;
  font-weight: bold;
  text-transform: capitalize;
`;

export const Index = styled.div`
  color: #fff;
  font-size: 3.6rem;
  font-weight: bold;
  opacity: 0.75;
`;

export const TypeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TypeList = styled.div`
  display: flex;
  margin-top: 0.8rem;
  ${TypeWrapper} + ${TypeWrapper} {
    margin-left: 1rem;
  }
`;

export const TypeInfo = styled.p`
  color: #fff;
  font-size: 1.6rem;
  font-weight: bold;
  text-transform: capitalize;
`;
