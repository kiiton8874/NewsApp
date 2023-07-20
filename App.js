import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { ListItem } from './components/ListItem'; 
import articles from "./dummies/articles"

export default function App() {
  const Items = articles.map((articles,index) => {
    return (
      <ListItem
      imageUrl={articles.UrlToImage}
      title={articles.title}
      author={articles.author}
      key={index.toString()}
    />    
    )
  });

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        date={articles}
        renderItem={({item}) => {
          return (
            <ListItem
            imageUrl={item.UrlToImage}
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
