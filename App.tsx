import { Text, View, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Item } from './src/components/models';
import Modal from './src/components/modal/Modal';
import List from './src/components/list/List';
import Input from './src/components/input/Input';

export default function App() {

  const [textValue, setTextValue] = useState('');
  const [itemsList, setItemsList] = useState<Item[]>([]);
  const [itemSelected, setItemSelected] = useState<number | undefined>();
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const onHandleChangeItem = (text: string) => setTextValue(text);

  const onHandleAddItem = () => {
    if (textValue.trim() !== '') {
      setItemsList(prev => [
        ...prev,
        { id: Math.random(), value: textValue },
      ]);
      setTextValue('');
    }
  };

  const onHandleDelete = (itemSelected: number) => {
    const updatedItemsList = itemsList.filter((_, i) => i !== itemSelected);
    setItemsList(updatedItemsList);
    setModalVisible(false);
  }

  const onHandleModal = (index: number) => {
    setModalVisible(true)
    setItemSelected(index)
  }

  const clearItemList = () => {
    setItemsList([]);
  };

  return (
    <View style={style.container}>
      <Text style={{ fontSize: 35, marginBottom: 55, textDecorationLine: 'underline', textAlign: 'center', fontWeight: '700' }}>Shooping list</Text>
      <Input textValue={textValue} onHandleChangeItem={onHandleChangeItem} onHandleAddItem={onHandleAddItem} />
      <List setItemsList={setItemsList} clearItemList={clearItemList} onHandleModal={onHandleModal}  itemsList={itemsList} />
      <Modal modalVisible={modalVisible} onHandleDelete={onHandleDelete} setModalVisible={setModalVisible} itemSelected={itemSelected} setItemSelected={setItemSelected} itemsList={itemsList} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    height: 870,
    paddingLeft: 70,
    paddingRight: 70,
    paddingTop: 110,
    backgroundColor: '#fefae0',
  }
})