import Container from '@/components/Container';
import Input from '@/components/Input';
import PokemonListWrapper from '@/components/PokemonList';
import { usePokemonList } from '@/hooks/usePokemonList';
import { PokemonPlusInfo } from '@/types/pokemon';
import { ChangeEvent, useState } from 'react';
// import recoil
// atom

// [
//   {id: : "이상해씨"},
//   {id: : "이상해씨"},
//   {id: : "이상해씨"},
//   {id: : "이상해씨"}
// ]

const Home = () => {
  const { data: pokemonListData = [] } = usePokemonList('ko');
  const [searchText, setSearchText] = useState('');
  
  // pokemonListData
  // const a = useValue(pKoreans);

  // pKoreans.find()

  // Selectors

  const getKorean = selector({
    key: 'getKorean',
    get: ({get}) => {
      const s = get(sta);
      return s.filter(r => i == );
      // switch (filter) {
      //   case 'Show Completed':
      //     return list.filter((item) => item.isComplete);
      //   case 'Show Uncompleted':
      //     return list.filter((item) => !item.isComplete);
      //   default:
      //     return list;
      // }
    },
  });

  // const [searchText, setSearchText] = usePocketNames ('');
  // 로켓몬 이름 종류목록

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const st = searchText.toLocaleLowerCase();
  const fd = (d) => {
    return d.name.toLocaleLowerCase().includes(st) || searchText === d.id.toString()
  };
  const sd = ('' === searchText) ? pokemonListData : fd;

  return (
    <Container maxWidth={192}>
      <Input
        type="text"
        placeholder="포켓몬 이름 또는 번호를 입력하세요." // Review: To apply i18n
        value={searchText}
        onChange={handleSearch}
      />
      <PokemonListWrapper propsListData={sd} />
    </Container>
  );
};

export default Home;
