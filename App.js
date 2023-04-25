import { StyleSheet, Text, View, FlatList } from 'react-native';
import style from './src/components/header/style';

import Header from './src/components/header/index';
import Search from './src/components/searchBar/index';
import BannerFilmes from './src/components/bannerFilmes/index';
import Card from './src/components/cardFilmes';

import filmes from './src/data/movies';
import series from './src/data/series';
import titulo from './src/components/bannerFilmes/style';

export default function App() {

  document.title = 'JM Stream';

  return (
    <View style={style.container}>
      
      <Header/>
      <Search/>
      <BannerFilmes/>

      <Text style={titulo.textoBanner}>Filmes</Text>
      <View style ={{width: '90%'}}>
        <FlatList
          horizontal = {true}
          showsHorizontalScrollIndicator = {false}
          data = {filmes}
          keyExtractor = {(item) => item.id}
          renderItem = { ({item}) => (

            <Card
            
              nome = {item.nome}
              nota = {item.nota}
              imagem = {item.imagem}
            
            />

          )}
        
        />
      </View>  

      <Text style={titulo.textoBanner}>Séries</Text>
      <View style ={{width: '90%'}}>
        <FlatList
          horizontal = {true}
          showsHorizontalScrollIndicator = {false}
          data = {series}
          keyExtractor = {(item) => item.id}
          renderItem = { ({item}) => (

            <Card
            
              nome = {item.nome}
              nota = {item.nota}
              imagem = {item.imagem}
            
            />

          )}
        
        />
      </View>  

    </View>
  );
}
