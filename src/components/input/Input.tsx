import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { InputProps } from '../models';

const Input: React.FC<InputProps> = ({ textValue, onHandleChangeItem, onHandleAddItem }) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder='Item List' style={styles.input} value={textValue} onChangeText={onHandleChangeItem} />
            <Button title='ADD' onPress={onHandleAddItem} color='#f99588' />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        width: 200,
        padding: 5,
        borderRadius: 5
    },
})