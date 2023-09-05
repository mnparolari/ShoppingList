export interface Item {
    id: number,
    value: string;
}

export interface ModalProps {
    modalVisible: boolean;
    onHandleDelete: (itemSelected: number) => void;
    setModalVisible: (visible: boolean) => void;
    itemSelected?: number;
    setItemSelected?: (item: number | undefined) => void;
    itemsList: Item[];
}

export interface FlatListProps {
    onHandleModal: (index: number) => void;
    itemsList: Item[];
}

export interface InputProps {
    textValue: string;
    onHandleChangeItem: (text: string) => void;
    onHandleAddItem: () => void;
}