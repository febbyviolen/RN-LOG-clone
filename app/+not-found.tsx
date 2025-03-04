import { View, Text } from 'react-native'
import React from 'react'
import 'global.css';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function notFound() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
          <Text className='text-2xl'>healthNoti</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}