import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

export default function healthCare() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
          <Text className='text-2xl'>healthGrade</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}