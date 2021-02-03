import React from 'react';

import {View, Text} from 'react-native';

const VideoComponent = (title, imgUrl, id) => {
    return (
        <View key={`item ${id}`}>
            <Text>aa ${title}</Text>
            <Text>${imgUrl}</Text>
        </View>
    );
};

export default VideoComponent;
