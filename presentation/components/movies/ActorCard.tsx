import { Cast } from "@/infrastructure/interfaces/cast";
import React from "react";
import { Image, Text, View } from "react-native";

interface Props {
    actor: Cast;
}

export const ActorCard = ({actor}: Props) => {
    return (
        <View className='mr-8 items-center bg-white rounded-2xl shadow-lg p-3 w-28 gap-2'>
            <View className='w-full h-full rounded-3xl overflow-hidden'>
                <Image source={{ uri: actor.avatar }} style={{ width: 100, height: 150, borderRadius: 10 }} />
            </View>
            <View className='mt-2 items-center'>
                <Text className='text-sm font-bold'>{actor.name}</Text>
                <Text className='text-xs text-gray-500'>{actor.character}</Text>
            </View>
            
        </View>
    )
}