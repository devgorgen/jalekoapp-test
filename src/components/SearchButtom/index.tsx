import React, {useState} from 'react';

import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import {useDispatch} from 'react-redux';

import {Container, SearchInput} from './styles';

const SearchButtom = ({}) => {
    const dispach = useDispatch();

    const [value, setValue] = useState();

    const onEndEditing = () => {
        dispach({type: 'SEARCH_VIDEOS', query: value});
    };

    return (
        <View style={styles.SectionStyle}>
            <TextInput
                style={styles.input}
                placeholder="User Nickname"
                onChangeText={setValue}
                onEndEditing={onEndEditing}
                value={value}
                underlineColorAndroid="transparent"
            />
            <Icon
                style={styles.searchIcon}
                name="search"
                size={20}
                color="#000"
            />
        </View>
    );
};

//TODO: criar styled component
const styles = StyleSheet.create({
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 5,
        marginLeft: 5,
        backgroundColor: '#fff',
        color: '#424242',
    },
    searchIcon: {
        padding: 10,
    },
    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#000',
        height: 40,
        borderRadius: 5,
        margin: 5,
    },
});

export default SearchButtom;
