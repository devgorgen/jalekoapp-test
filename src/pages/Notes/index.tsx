import React from 'react';
import {FlatList, View, Text, Image} from 'react-native';
import {useSelector} from 'react-redux';

import {Container, AnnotationCard} from './styles';

const Notes = ({}) => {
    const notes = useSelector(state => state.notes.notes);

    const renderItem = ({item, index}) => {
        return (
            <AnnotationCard>
                <View>
                    <Image
                        source={{
                            uri: item.imgUrl,
                            width: 'auto',
                            height: 120,
                            width: 150,
                            scale: 1,
                        }}
                    />
                </View>
                <View>
                    <Text>{item.notes}</Text>
                </View>
            </AnnotationCard>
        );
    };

    const emptyContent = ({}) => {
        return (
            <View>
                <Text>Você ainda não possuí anotações</Text>
            </View>
        );
    };

    return (
        <Container>
            <FlatList
                data={notes}
                keyExtractor={note => String(note.idVideo)}
                renderItem={({item, index}) => renderItem({item, index})}
                ListEmptyComponent={emptyContent}
            />
        </Container>
    );
};

export default Notes;
