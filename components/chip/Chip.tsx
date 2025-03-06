import { View, Text } from 'react-native'
import React from 'react'
interface ChipProps { 
    label: string;
    labelColor: string;
    bgColor: string;
}

const Chip: React.FC<ChipProps>= ({label, labelColor, bgColor}) => {
  return (
    <View>
      <Text className={`rounded-lg ${bgColor} ${labelColor} py-1 px-2`}>{label}</Text>
    </View>
  )
}

export default Chip