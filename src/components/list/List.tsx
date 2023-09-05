import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Checkbox } from 'react-native-paper';
import { FlatListProps, Item } from '../models';
import Icon from 'react-native-vector-icons/Feather';

const List: React.FC<FlatListProps> = ({ onHandleModal, itemsList }) => {

    const [checkedItems, setCheckedItems] = useState<boolean[]>(Array(itemsList.length).fill(false));

    useEffect(() => {
        setCheckedItems(Array(itemsList.length).fill(false));
    }, [itemsList]);

    const toggleCheckbox = (index: number) => {
        const updatedCheckedItems = [...checkedItems];
        updatedCheckedItems[index] = !updatedCheckedItems[index];
        setCheckedItems(updatedCheckedItems);
    };

    const selectedIndices = checkedItems.reduce((indices, isChecked, index) => {
        if (isChecked) {
            indices.push(index);
        }
        return indices;
    }, [] as number[]);


    const isDeleteButtonDisabled = selectedIndices.length === 0;

    const renderListItem = ({ item, index }: { item: Item; index: number }) => (
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity
                style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
                onPress={() => toggleCheckbox(index)}
            >
                <Checkbox
                    status={checkedItems[index] ? 'checked' : 'unchecked'}
                    uncheckedColor='#f99588'
                    color='#f99588'
                    onPress={() => toggleCheckbox(index)}
                />
                <Text style={styles.items}>{item.value}</Text>
            </TouchableOpacity>
            <Icon name='trash-2' size={20} style={[styles.deleteIcon, { backgroundColor: isDeleteButtonDisabled ? 'gray' : '#f66556' }]} onPress={() => {
                if (!isDeleteButtonDisabled) {
                    onHandleModal(index);
                }
            }} />
        </View>
    );

    return (
        <View style={styles.itemsContainer}>
            <FlatList data={itemsList} renderItem={renderListItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

export default List

const styles = StyleSheet.create({
    itemsContainer: {
        height: 200,
        marginTop: 50,
        padding: 10,
    },
    items: {
        width: 150,
        padding: 10,
        backgroundColor: '#f99588',
        borderColor: '#f99588',
        borderWidth: 1,
        paddingTop: 5,
        paddingBottom: 5,
        marginTop: 7,
        marginBottom: 7,
        borderRadius: 5,
        color: '#fff',
        fontWeight: '600',
        textAlign: 'center'
    },
    deleteIcon: {
        color: '#fff',
        marginLeft: 10,
        backgroundColor: '#f66556',
        padding: 5,
        borderRadius: 5
    }
})