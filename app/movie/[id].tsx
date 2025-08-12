import MovieCast from '@/presentation/components/movies/MovieCast';
import MovieDescription from '@/presentation/components/movies/MovieDescription';
import MovieHeader from '@/presentation/components/movies/MovieHeader';
import { useMovie } from '@/presentation/hooks/useMovie';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';

const MovieScreen = () => {

    const { id } = useLocalSearchParams();

    const {movieQuery, castQuery} = useMovie(+id);


    if (movieQuery.isLoading || !movieQuery.data) {
        return (
            <View className='flex-1 justify-center items-center bg-white'>
                <ActivityIndicator size={100} color="red" />
                <Text className='text-2xl font-bold'>Loading...</Text>
            </View>
        )
    }

    return (
        <ScrollView>
            <MovieHeader poster={movieQuery.data.poster} originalTitle={movieQuery.data.originalTitle} title={movieQuery.data.title} />
            
            <View style={{ marginTop: 100 }}>
                <MovieDescription movie={movieQuery.data} />
            </View>

            <MovieCast cast={castQuery.data || []} />
        </ScrollView>
    )
}

export default MovieScreen