import React, { useEffect } from 'react'
import { Stack, Tabs } from 'expo-router'
import 'global.css';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function TabsLayout() {
  return (
    <SafeAreaProvider>
        <Tabs>
            <Tabs.Screen name="index" options={{ title: '건강등급', headerShown: false}} />
            <Tabs.Screen name="healthCare" options={{ title: '건강관리', headerShown: false}} />
            <Tabs.Screen name="healthNoti" options={{ title: '건강알리미', headerShown: false}} />
            <Tabs.Screen name="gradeBenefit" options={{ title: '등급혜택', headerShown: false}} />
        </Tabs>
    </SafeAreaProvider>
  )
}