import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import React from 'react';
import '../global.css';

const queryClient = new QueryClient();

const RooyLayout = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: 'white',
          },
        }}
      />
    </QueryClientProvider>
  )
}

export default RooyLayout