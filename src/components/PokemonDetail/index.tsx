import * as S from './index.styled';

const PokemonDetail = () => {
  return (
    <>
      <S.Base>
        <S.InfoWrapper>
          <S.Name></S.Name>
          <S.Index></S.Index>
        </S.InfoWrapper>
        <S.TypeList>
          <S.TypeWrapper>
            <S.TypeInfo></S.TypeInfo>
          </S.TypeWrapper>
        </S.TypeList>
        <S.TypeList>
          <S.TypeWrapper>
            <S.TypeInfo></S.TypeInfo>
          </S.TypeWrapper>
        </S.TypeList>
        <S.BasicInfoWrapper>
          <S.BasicInfo></S.BasicInfo>
          <S.BasicInfo></S.BasicInfo>
          <S.BasicInfo></S.BasicInfo>
        </S.BasicInfoWrapper>
        <S.ThumbnailImageWrapper>
          <S.ThumbnailImage src={''} alt="image" width={160} height={154} />
        </S.ThumbnailImageWrapper>
      </S.Base>
      <S.ThumbnailImageWrapper>
        <S.ThumbnailImage src={``} alt="image" width={160} height={154} />
      </S.ThumbnailImageWrapper>
    </>
  );
};

export default PokemonDetail;
