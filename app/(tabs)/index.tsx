import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import 'global.css';
import { SymbolView } from 'expo-symbols';
import Chip from 'components/chip/Chip';
import { useState } from 'react';
import GradientLine from 'components/line/LinearGradientsLine';

export default function HealthGrade() {

  const chips = ['암', '뇌혈관질환', '심장질환'];
  const [selectedChip, setSelectedChip] = useState<string>('암');
  const [grade, setGrade] = useState(1);

  return (
    <SafeAreaProvider>
      <SafeAreaView className='bg-gray-100'>
        <ScrollView>
          <Text className='text-5xl mx-5 my-5 mb-10 font-bold'>건강등급</Text>

          <View>
           
          </View>

          <View className='rounded-2xl bg-white mx-5 mb-5 p-5 flex-row justify-between items-center'>
            <View className='flex-row items-center'>
              <SymbolView name="powermeter" size={35} />
              <View className='flex-col ml-4'>
                <Text>이번 달 건강등급을 산출해주세요!</Text>
                <View className="my-0.5" />
                <Text className='text-lg font-bold'>이번 달 건강등급 확인하기</Text>
              </View>
            </View>
            <SymbolView name="chevron.right" tintColor={'gray'} size={20} />
          </View>

          {/*  */}
          <View className='rounded-2xl bg-white flex-col p-5 mx-5 mb-5 items-center justify-center'>
            <Text className='mb-5 px-10 text-2xl font-bold text-center'>ㅇㅇ님 나는야 건강 모범생📝</Text>
          
            <View className='flex-row justify-between items-end mb-8'>

              <View className='flex-col items-center gap-3 flex-1'>
                <View className='flex-row items-center'>
                  <Text>건강등급</Text>
                  <SymbolView name="questionmark.circle.fill" tintColor={"gray"} size={20}></SymbolView>
                </View>
                <Text className='text-5xl font-bold'>4</Text>
                <Text className='text-gray-500 font-semibold'>2025.02.13 기준</Text>
              </View>

              <View className='bg-gray-300 h-full w-0.5 mx-2'></View>

              <View className='flex-col items-center gap-4 flex-1'>
                <Text>건강점수</Text>
                <Text className='text-4xl font-bold'>835</Text>
                <Text className='text-gray-500 font-semibold'>상위 1.1%</Text>
              </View>

            </View>

            <GradientLine />
            <View className='flex-row w-full mb-5 mt-2 justify-between'>
              <Text className='text-gray-500'>1등급</Text>
              <Text className='text-gray-500'>9등급</Text>
            </View>

            <TouchableOpacity className='bg-gray-800 w-full items-center rounded-lg py-3'>
              <Text className='text-white text-lg font-bold'>분석 결과 더보기</Text>
            </TouchableOpacity>
          </View>

          {/*  */}
          <View className='rounded-2xl bg-white flex-col mx-5 mb-5 px-5 py-5'>
            <Text className='mb-5 text-2xl font-bold'>건강검진 결과</Text>

            {/* card */}
            <View className='flex-row justify-center bg-red-50 gap-4 py-5 mb-10 px-8 rounded-2xl'>
              <SymbolView name='exclamationmark.circle.fill' tintColor={"red"} />
              <View className='flex-col gap-2'>
                <Text className='font-semibold text-xl text-red-500'>2년 이내 건강검진 결과가 없으시네요?</Text>
                <Text>기록이 없으면 건강등급이 낮게 산출될 수 있으니 건강등급을 다시 산출하세요</Text>
              </View>
            </View>

            <View className='flex-col gap-10 mb-10'>
              <View className='flex-col gap-3'>
                <Text className='font-bold'>혈압(최고/최저)</Text>
                <View className='flex-row justify-between'>
                  <Text className='text-3xl font-bold'>--/--</Text>
                  <Text className='text-2xl text-gray-300 font-bold'>검진결과 없음</Text>
                </View>
              </View>

              <View className='flex-col gap-3'>
                <Text className='font-bold'>공복혈당</Text>
                <View className='flex-row justify-between'>
                  <Text className='text-3xl font-bold'>--</Text>
                  <Text className='text-2xl text-gray-300 font-bold'>검진결과 없음</Text>
                </View>
              </View>

              <View className='flex-col gap-3'>
                <Text className='font-bold'>총콜레스테롤</Text>
                <View className='flex-row justify-between'>
                  <Text className='text-3xl font-bold'>--</Text>
                  <Text className='text-2xl text-gray-300 font-bold'>검진결과 없음</Text>
                </View>
              </View>

            </View>

            <TouchableOpacity className='bg-gray-800 w-full items-center rounded-lg 
              py-3 '>
              <Text className='text-white text-lg font-bold'>분석 결과 더보기</Text>
            </TouchableOpacity>
          </View>

          {/*  */}
          <View className='flex-row mx-5 mb-5 justify-between gap-5'>
            <View className='flex-col bg-blue-500 justify-between flex-1 rounded-2xl p-5 gap-2'>
              <Text className='text-2xl font-bold text-white'>건강등급 산출 & {'\n'}검진결과 등록</Text>
              <Text className='text-white'>등급 업데이트 하기</Text>
              <View className='self-end'>
                <SymbolView name="powermeter" size={45} tintColor={"white"} />
              </View>
            </View>

            <View className='flex-col bg-white justify-between flex-1 rounded-2xl p-5 gap-2'>
              <Text className='text-2xl font-bold text-gray950'>의료 이용 기록 </Text>
              <Text className='text-gray950'>병원/약국 기록 {'\n'}살펴보기</Text>
              <View className='self-end'>
                <SymbolView name="cross.case.fill" size={50} tintColor={"green"} />
              </View>
            </View>

          </View>

          {/*  */}
          <View className='flex-col bg-white mx-5 p-5 rounded-xl'>
            <Text className='text-2xl font-bold mb-5'>나의 3대 질병 위험도</Text>

            <View className='flex-row gap-3'>
              {chips.map((chip) => (
                <Chip key={chips.indexOf(chip)} label={chip} isSelected={selectedChip == chip} onPress={() => setSelectedChip(chip)} />
              ))
              }
            </View>

            <View className='mb-10'>

            </View>

            <Text className='text-center px-5'>ㅇㅇ님은 또래 대비
              <Text className='text-green-600 font-bold'> 31% 안전</Text>해요.
            </Text>
          </View>


          <View className='h-10'></View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}