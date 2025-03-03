import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

export default function gradeBenefit() {
  return (
    <SafeAreaProvider>
        <SafeAreaView>
            <Text>gradeBenefit</Text>
        </SafeAreaView>
    </SafeAreaProvider>
  )
}