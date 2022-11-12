import { View, Text, Image, StyleSheet } from "react-native";

const Card = ({ item }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Image source={{ uri: item.image }} style={styles.image} />
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    borderColor: "#E8D4AD",
    backgroundColor: "#013338",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    padding: 20,
    margin: 10,
    height: 200,
    borderRadius: 10,
  },
  image: {
    height: 120,
    width: 120,
  },
  title: {
    color: '#E8D4AD',
      fontWeight: 'bold',
      marginBottom: 10,
      fontSize: 16
      
  }
});
export default Card;
