import React, {useState} from 'react';

import {Button, View, Image, Icon, TextInput} from 'react-native';
import {block} from 'react-native-reanimated';

import {Container, SearchInput} from './styles';

const SearchButtom = ({}) => {
    const [value, setValue] = useState();
    return (
        <Container>
            <SearchInput
                type={'text'}
                value={value}
                onChangeText={setValue}
                defaultValue={'Buscar'}
            />

            <Button title={'test'} onClick={() => {}}>
                <Icon name="search" size={20} color="#4285F4" />
            </Button>
        </Container>
    );
};

export default SearchButtom;
