import * as S from './index.styled';

const Header = () => {
  return (
    <S.Header>
      <S.HeaerWrap>
        <S.LogoHome to={'/'}>
          <S.Logo>
            <S.LogoImage
              src="https://www.pokemonkorea.co.kr/img/main_logo.png"
              alt="로고"
            />
          </S.Logo>
        </S.LogoHome>
      </S.HeaerWrap>
    </S.Header>
  );
};

export default Header;
