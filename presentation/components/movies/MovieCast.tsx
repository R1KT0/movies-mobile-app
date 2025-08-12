import { Cast } from '@/infrastructure/interfaces/cast';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { ActorCard } from './ActorCard';

interface Props {
    cast: Cast[];
}

const MovieCast = ({cast}: Props) => {
  return (
    <View className='mt-5 mb-52'>
      <Text className='text-2xl font-bold px-4 mb-2'>Actores</Text>
    
    <FlatList
        data={cast}
        renderItem={({item}) => <ActorCard actor={item} />}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
    />
    
    </View>
  )
}

export default MovieCast