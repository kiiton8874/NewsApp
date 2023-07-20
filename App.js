import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { ListItem } from './components/ListItem'; 
import axios from 'axios';
import Constants from 'expo-constants';

const URL = "https://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=${Constants.manifest.extra.newsApiKey}"

export default function App() {
  const [articles, setArticles] = useState ([])

  const fetchArticles = async() => {
    try {
      const response = await axios.get(URL);
      console.log(response.data.articles);
      setArticles(response.data.articles);
    }catch(error){
      console.log(error);
    }
    
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({item}) => {
          return(
            <ListItem
              imageUrl={item.urlToImage}
              title={item.title}
              author={item.author}
            />
          )
        }}
        keyExtractor={(item, index) => index.toString()}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itemContainer: {
    height: 100,
    width: "100%",
    backgroundColor: "white",
    flexDirection: "row",
    marginVertical: 5,
  },
  leftContainer: {
    width: 100,
  },
  rightContainer: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
  },
  subtext: {
    fontSize: 12,
    color: "gray",
  },
});
