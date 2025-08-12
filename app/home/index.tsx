import MainSlideShow from '@/presentation/components/movies/MainSlideShow';
import MoviesHorizontalList from '@/presentation/components/movies/MoviesHorizontalList';
import { useMovies } from '@/presentation/hooks/useMovies';
import React from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = () => {

    const safeArea = useSafeAreaInsets();
    const { nowPlayingQuery, popularQuery, topRatedMoviesQuery, upcomingMoviesQuery } = useMovies();

    if (nowPlayingQuery.isLoading) {
        return (
            <View className='flex-1 justify-center items-center bg-white'>
                <ActivityIndicator size={100} color="purple" />
            </View>
        )
    }


    return (
        <View className='flex-1 mt-2' style={{ paddingTop: safeArea.top }}>
            <View className='flex-1'>
                <Text className='text-3xl font-bold px-4 mb-2'>HomeScreen</Text>
                <ScrollView
                    contentContainerStyle={{ paddingBottom: 24 }}
                    showsVerticalScrollIndicator={false}
                >
                    {/* Carousel */}
                    <MainSlideShow
                        movies={nowPlayingQuery.data?.pages.flat() || []}
                    />

                    {/* Popular Movies */}
                    <MoviesHorizontalList
                        title="Populares"
                        movies={popularQuery.data?.pages.flat() || []}
                        loadMore={popularQuery.fetchNextPage}
                    />

                    {/* Top Rated Movies */}
                    <MoviesHorizontalList
                        title="Top Rated"
                        movies={topRatedMoviesQuery.data?.pages.flat() || []}
                    />

                    {/* Upcoming Movies */}
                    <MoviesHorizontalList
                        title="Upcoming"
                        movies={upcomingMoviesQuery.data?.pages.flat() || []}
                    />
                </ScrollView>
            </View>
        </View>
    )


}

export default HomeScreen