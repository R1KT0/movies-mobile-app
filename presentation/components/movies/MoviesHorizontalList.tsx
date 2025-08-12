import { Movie } from '@/infrastructure/interfaces/movie.interface'
import React, { useEffect, useRef } from 'react'
import { FlatList, NativeScrollEvent, NativeSyntheticEvent, Text, View } from 'react-native'
import MoviePoster from './MoviePoster'

interface Props {
    movies: Movie[],
    title?: string,
    loadMore?: () => void,
}

const MoviesHorizontalList = ({ movies, title, loadMore }: Props) => {
    const isLoading = useRef(false);

    useEffect(() => {
        isLoading.current = false;
    }, [movies])


    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        if (isLoading.current) return;

        const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
        const isCloseToEnd = contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width - 10;

        if (isCloseToEnd) {
            isLoading.current = true;
            loadMore && loadMore();
        }
    }

    return (
        <View>
            {
                title && (
                    <Text className='text-3xl font-bold px-4 mb-2'>{title}</Text>
                )
            }

            <FlatList
                data={movies}
                renderItem={({ item }) => (
                    <View style={{ marginRight: 12, overflow: 'hidden' }}>
                        <MoviePoster id={item.id} poster={item.poster} smallPoster />
                    </View>
                )}
                keyExtractor={(item, index) => `${item.id}-${index}`}
                showsVerticalScrollIndicator={false}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 8, paddingVertical: 10 }}
                onScroll={onScroll}
            />
        </View>
    )
}

export default MoviesHorizontalList