import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React from 'react';
import { Image, Pressable, Text, useWindowDimensions, View } from 'react-native';


interface Props {
    poster: string;
    originalTitle: string;
    title: string;
}

const MovieHeader = ({poster, originalTitle, title}: Props) => {
    const {height} = useWindowDimensions();
    
    
    return (
        <>

        {/* Back button */}
        <LinearGradient
            colors={['rgba(0,0,0,0.3)', 'transparent']}
            start={[0, 0]}
            end={[0, 1]}
            style={{
                position: 'absolute',
                height: height * 0.15,
                zIndex: 99,
                width: '100%',
            }}
        />


        <View 
        style={{
            position: 'absolute',
             zIndex: 100,
              elevation: 10,
               top: 5,
                left: 10,
                 right: 10}}> 
            <Pressable
                onPress={() => router.navigate('/')}
            >
                <Ionicons name='arrow-back' size={30} color='white' />
            </Pressable>
        </View>
        <View
        className='shadow-xl shadow-black/20' 
        style={{height: height * 0.3}}
        >
            <View className='flex-1 rounded-b-[25px] overflow-hidden'>
                <Image
                    source={{uri: poster}}
                    style={{width: '100%', height: '100%', borderBottomRightRadius: 20, borderBottomLeftRadius: 20}}
                    resizeMode='cover'
                    className='w-full h-full'
                />
                <View className='absolute bottom-0 left-0 right-0 p-4'>
                    <Text className='text-white text-lg font-bold mb-2'>{originalTitle}</Text> 
                    <Text className='text-white text-2xl font-bold'>{title}</Text>
                </View>
            </View>

        </View>
        </>
    )
}

export default MovieHeader