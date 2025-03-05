import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface ChipProps { 
    label: string;
    isSelected: boolean;
    onPress: () => void;
}

const Chip: React.FC<ChipProps> = ({ label, isSelected, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text className={`p-2 px-3 rounded-2xl font-bold border ${isSelected ? 'bg-gray-700 text-white border-gray-700' : 'bg-white text-gray-400 border-gray-400'}`}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default Chip