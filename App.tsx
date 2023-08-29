import { Button, Text, TextInput, View, StyleSheet, FlatList, Modal } from 'react-native';
import React, { useState } from 'react'

interface Item {
  id: number,
  value: string;
}

export default function App() {

  const [textValue, setTextValue] = useState('');
  const [itemsList, setItemsList] = useState<Item[]>([]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const onHandleChangeItem = (text: string) => setTextValue(text);

  const onHandleAddItem = () => {
    if (textValue.trim() !== '') {
      setItemsList([...itemsList, { id: Math.random(), value: textValue }]);
      setTextValue('');
    }
  };

  const renderListItem = ({ item }: { item: Item }) => (
    <View>
      <Text style={style.items}>{item.value}</Text>
    </View>
  );

  const onHandleDelete = () => { }

  const onHandleModal = () => { }

  return (
    <View style={style.container1}>
      <View style={style.inputContainer}>
        <TextInput placeholder='Item List' style={style.input} value={textValue} onChangeText={onHandleChangeItem} />
        <Button title='ADD' onPress={onHandleAddItem} />
      </View>
      <View style={style.container2}>
        <FlatList data={itemsList} renderItem={renderListItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <Modal visible={modalVisible} animationType='slide'>
        <View style={style.modalTitle}>
          <Text></Text>
        </View>
        <View style={style.modalMessage}>
          <Text>¿Estás seguro que querés eliminar?</Text>
        </View>
        <View style={style.modalButton}>
          <Button title='Confirmar' onPress={onHandleDelete} />
          <Button title='Cancelar' onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
      <Button title='Abrir' onPress={() => setModalVisible(true)} />
    </View>
  );
}

const style = StyleSheet.create({
  container1: {
    paddingLeft: 70,
    paddingRight: 70,
    paddingTop: 130
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    borderColor: '#000',
    borderWidth: 1,
    width: 200,
    padding: 5,
  },
  container2: {
    height: 300,
    marginTop: 50,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
  },
  items: {
    width: 230,
    padding: 10,
    borderColor: '#000',
    borderWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 7,
    marginBottom: 7
  },
  modalTitle: {

  },
  modalMessage: {

  },
  modalButton: {

  }
})

// {itemsList.map(item => (
//   <View>
//     <Text style={style.items}>{item.value}</Text>
//   </View>
// ))}