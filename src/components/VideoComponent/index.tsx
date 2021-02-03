import React from 'react';

import { View, Text } from 'react-native';

const VideoComponent = (title, imgUrl) => {

    return (
        <View>
            <Text>${title}</Text>
            <Text>${imgUrl}</Text>
        </View>
    )
}

export default VideoComponent;
