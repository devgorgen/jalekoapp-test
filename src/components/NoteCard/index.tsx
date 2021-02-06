import React, {useState} from 'react';

import {View, TextInput, Image, TouchableOpacity, Button} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';

import {Container} from './styles';

const NoteCard = ({id, imgUrl}) => {
    const dispach = useDispatch();
    const [value, setValue] = useState();

    const createNote = () => {
        dispach({
            type: 'CREATE_NOTE',
            note: {
                idVideo: id,
                notes: value,
                imgUrl,
            },
        });
    };

    return (
        <>
            <Container onPress={() => {}} key={`note ${id}`}>
                <TextInput
                    placeholder={'Adicione uma nota sobre esse vídeo'} // TODO
                    onChangeText={setValue}
                    value={value}
                    underlineColorAndroid="transparent"
                    multiline={true}
                />
            </Container>
            <Button title={'Salvar anotações'} onPress={() => createNote()} />
        </>
    );
};

export default NoteCard;
