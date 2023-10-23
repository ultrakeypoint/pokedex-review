import * as S from './index.styled';

const PokemonListWrapper = () => {
  return (
    <S.ListWrapper>
      <S.ListArea>
        <S.ListItem to={``}>
          <S.ListName></S.ListName>
          <S.Image
            src={''}
            loading="lazy"
            alt={''}
            width={'100px'}
            height={'100px'}
          />
        </S.ListItem>
      </S.ListArea>

      <S.ListNone>검색결과가 없습니다.</S.ListNone>
    </S.ListWrapper>
  );
};

export default PokemonListWrapper;
