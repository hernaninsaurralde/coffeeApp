import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import useFetch from "../hooks/useFetch";
import Card from "./Card";
import ModalView from "./ModalView";

const List = ({coffeeOption}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [recipe, setRecipe] = useState({});
 
  const [data, error, isLoading] = useFetch(coffeeOption);

  return isLoading ?
    (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: 'grey', fontSize: 30}} >...</Text>
      </View>
    ) :
    error ? (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{error}</Text>
      </View>
    ) :
    (
    <View>
      
      <ModalView
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        recipe={recipe}
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.flatlist}
        data={data.slice(0,20)}
        numColumns={"2"}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              setModalVisible(!modalVisible);
              setRecipe(item);
            }}
          >
            <Card item={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatlist: {
    marginBottom: 60
  }
});

export default List;
