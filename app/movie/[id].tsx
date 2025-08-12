import { getMovieByIdAction } from '@/core/actions/movie/get-movie-by-id';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const MovieScreen = () => {

    const { id } = useLocalSearchParams();

    getMovieByIdAction(+id);

    return (
        <View>
            <Text>MovieScreen</Text>
        </View>
    )
}

export default MovieScreen