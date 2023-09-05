import { Button, StyleSheet, Text, View, Modal as MyModal } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather';
import { ModalProps } from '../models';

const Modal: React.FC<ModalProps> = ({ modalVisible, onHandleDelete, setModalVisible, itemSelected, setItemSelected, itemsList }) => {

    const handleCloseModal = () => {
        setModalVisible(false);
        if (setItemSelected) {
            setItemSelected(undefined);
        }
    };

    return (
        <MyModal visible={modalVisible} animationType='fade' transparent={true}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View style={styles.modalTitle}>
                        <Icon name='alert-triangle' size={70} style={styles.alertIcon} />
                        <Text style={styles.title}>¡ATTENTION!</Text>
                    </View>
                    <View style={styles.modalMessage}>
                        <Text style={styles.message}>Are you sure you want to delete "{itemSelected !== undefined && itemsList[itemSelected] ? itemsList[itemSelected].value : ''}"? </Text>
                    </View>
                    <View style={styles.modalButton}>
                        <Button title='Confirm' onPress={() => {
                            if (itemSelected !== undefined) {
                                onHandleDelete(itemSelected);
                            }
                        }} color='#f99588' />
                        <View style={styles.spacing} />
                        <Button title='Cancel' onPress={handleCloseModal} color='#f99588' />
                    </View>
                </View>
            </View>
        </MyModal>
    )
}

export default Modal

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#fefae0',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
    },
    modalTitle: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginVertical: 50,
    },
    alertIcon: {
        color: '#f66556'
    },
    deleteIcon: {
        color: '#fff',
        marginLeft: 10,
        backgroundColor: '#f66556',
        padding: 5,
        borderRadius: 5
    },
    title: {
        fontSize: 25,
        fontWeight: '500',
        color: '#f66556'
    },
    modalMessage: {
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    message: {
        fontSize: 17,
    },
    modalButton: {
        width: 150,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
    },
    spacing: {
        width: 20,
    }
})