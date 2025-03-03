import React, { useEffect } from 'react'
import { Stack } from 'expo-router'
import 'global.css';

export default function RootLayout() {
    useEffect (() => {
            console.log("stack loaded");
        }, []);
  return (
    <Stack>
        <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
        <Stack.Screen name="+not-found" />
    </Stack>
  )
}