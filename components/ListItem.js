import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';

// 
// @param { 
//  imageUrl: 画像URL(string)
//  title: タイトル(string)
//  author: ニュース提供元(string)
// } props
// @returns
// 

export const ListItem = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View style={styles.itemContainer}>
        <View style={styles.leftContainer}>
          <Image
            style={{width: 100, height: 100}}
            source={{url: props.imageUrl }}
          />
        </View>
        <View style={styles.rightContainer}>
          <Text numberOfLines={3} style={styles.text}>
            {props.title}
          </Text>
          <Text style={styles.subtext}>{props.author}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
    width: "100%",
    backgroundColor: "white",
    flexDirection: "row",
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
