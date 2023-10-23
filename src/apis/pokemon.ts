import {
  PokemonDetailResponse,
  PokemonKoreanName,
  PokemonListResponse,
  PokemonPlusInfo,
  SpeciesResponse,
} from '@/types/pokemon';
import { client } from './axios';
import { Lang } from '@/types/common';
import { IMAGE_BASE_URL } from '@/constants/common';

// getPokemonList
// data [];

export const getPokemonList = async (): Promise<PokemonListResponse> => {
  const { data } = await client.get<PokemonListResponse>('/pokemon');
  return data;
};

export const getSpeciesList = async (
  index: number,
): Promise<PokemonKoreanName[]> => {
  const {
    data: { names },
  } = await client.get<SpeciesResponse>(`/pokemon-species/${index}`);
  return names;
};

export const getPokemonDetail = async (id: number) => {
  const { data } = await client.get<PokemonDetailResponse>(`/pokemon/${id}`);
  return data;
};

export const getEvolutionChain = async (id: number) => {
  const { data } = await client.get(`/evolution-chain/${id}`);
  return data;
};

// recoil
// selector =

// atom []

// const pKoreans = atom({
//   key: 'koreans',
//   default: [],
// });

// recoil <= kor

export const langPokemonList = async (
  lang: Lang,
): Promise<PokemonPlusInfo[]> => {
  const data = (await getPokemonList()) as unknown as PokemonPlusInfo[];
  // const resutl = data.result;
  // const resutl = data.result;

  if (result?.length) {
    const promises = result?.map((data, index) => {
      // if(상에이 이름이 있으면?)

      return getSpeciesList(index + 1).then((names) => {
        // 추가 구분
        // setPocketNames( data.name);

        // features

        // feailter  fn
        // loop fn
        // join fn

        data.name =
          names
            ?.filter((name) => name?.language?.name === lang)
            .map((res) => res.name)
            .join('') || [];

        data.id = index + 1;
        data.image = `${IMAGE_BASE_URL}/${index + 1}.png`;
      });
    });

    await Promise.all(promises);
  }
  return result;
};

export const getPokemonKoeanName = async (id: number) => {
  const speciesList = await getSpeciesList(id);
  const koreanName = [];
  koreanName.push(speciesList[2]);

  return koreanName;
};
