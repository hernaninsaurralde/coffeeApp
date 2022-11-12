import {
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const ModalView = ({ recipe, setModalVisible, modalVisible }) => {
  return (
    <Modal
      animation="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(!modalVisible)}
    >
      <View style={styles.modalBack}>
        <View style={styles.modalView}>
          <Text style={styles.title}>{recipe.title}</Text>
          <Image source={{ uri: recipe.image }} style={styles.image} />
          <Text style={styles.subtitle}>Description:</Text>
          <Text style={styles.description}>{recipe.description}</Text>
          <Text style={styles.subtitle}>Ingredients:</Text>

          <FlatList
            showsVerticalScrollIndicator={false}
            data={recipe.ingredients}
            numColumns={"1"}
            renderItem={({ item }) => <Text style={styles.description}>- {item}</Text>}
          />

          <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.closeText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBack: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000a4",
  },
  modalView: {
    width: 340,
    backgroundColor: "#E8D4AD",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    height: 100,
    width: 100,
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: 'grey'
  },

  title: {
    fontWeight: "bold",
    fontSize: 22,
    alignSelf: "center",
  },

  description: {
    fontSize: 20,
  },

  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 15
  },

  closeButton: {
    marginTop: 20,
    alignSelf: 'center',
    backgroundColor: '#013338',
    padding: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'grey'
  },
  closeText:{
    color: "#E8D4AD",
    fontWeight: "bold",
  }
});
export default ModalView;
