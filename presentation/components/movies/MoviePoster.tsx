import { router } from 'expo-router'
import React from 'react'
import { Image, Pressable } from 'react-native'

interface Props {
    id: number,
    poster: string,
    smallPoster?: boolean,
    className?: string,
}

const MoviePoster = ({ id, poster, smallPoster = false, className = '' }: Props) => {
    return (
        <Pressable
            className={`active:opacity-80 px-2 ${className}`}
            onPress={() => router.push({ pathname: '/movie/[id]', params: { id: id.toString() } })}
        >
            <Image
                source={{ uri: poster }}
                style={{ width: smallPoster ? 85 : 150, height: smallPoster ? 130 : 250, borderRadius: 16 }}
                className='shadow-lg w-full h-full rounded-3xl'
                resizeMode='cover'
            />
        </Pressable>

    )
}

export default MoviePoster