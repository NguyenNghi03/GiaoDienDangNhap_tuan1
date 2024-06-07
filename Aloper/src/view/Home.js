import { View, Text, ScrollView, Image, Button, Pressable, TextInput, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Ionicons, Feather, MaterialIcons, FontAwesome6, AntDesign } from '@expo/vector-icons';
export default function Home({ navigation }) {
    return (
        <ScrollView >
            <ImageBackground className="w-full h-screen" source={require("../img/Background.png")} >

                <View className="ml-6 flex-col">
                    <View className="ml-1 flex-row">
                        <Image className="w-16 h-16 mt-16" source={require("../img/Ellipse 149.png")} />
                        <View className="flex-col mt-16 ml-3">
                            <Text className="text-white text-base" >Xin Chào</Text>
                            <Text className="text-white text-xl font-bold">Trần Thị Thu Sương</Text>
                        </View>
                        <View className="w-14 h-14 bg-gray-500 mt-16 opacity-90 flex rounded-full ml-8 justify-center items-center">
                            <Ionicons name="notifications" size={24} color="white" />


                        </View>
                    </View>

                </View>

                <View className="items-center mt-3">
                    <View className="items-center justify-center w-11/12 border-white border-2 rounded-2xl h-14 text-1.5xl p-3 bg-white flex-row">
                        <TextInput
                            className="-ml-64 w-9/12 text-xl -mt-1"
                            placeholder='Tìm kiếm'
                        />

                        <View className="-ml-72 items-center">

                            <Feather name="search" size={33} color="#A0AEC0" />
                        </View>
                    </View>
                </View>


                <View className=" absolute bottom-0 left-0 w-full h-3/4 bg-red-50 opacity-90 flex rounded-3xl">

                    <View className="flex-row justify-center items-center">
                        <View>
                            <View className="w-20 h-20 bg-red-200 opacity-90 flex rounded-full  mt-3 items-center justify-center">
                                <View className="w-16 h-16 bg-red-600 opacity-90 flex rounded-full  items-center justify-center">

                                    <Ionicons name="calendar-clear" size={25} color="white" />
                                </View>
                            </View>
                            <View className="justify-center items-center mt-2">
                                <Text className="">Thanh toán</Text>
                            </View>

                        </View>


                        <TouchableOpacity onPress={() => navigation.navigate('Renderbuilding')}>
                            <View className="ml-2">
                                <View className="w-20 h-20 bg-red-200 opacity-90 flex rounded-full  mt-3 items-center justify-center">
                                    <View className="w-16 h-16 bg-red-600 opacity-90 flex rounded-full  items-center justify-center">

                                        <MaterialIcons name="manage-search" size={33} color="white" />
                                    </View>
                                </View>
                                <View
                                    className="justify-center items-center mt-2">
                                    <Text onPress={() => { navigation.navigate("Renderbuilding") }} className="">Khám phá</Text>
                                </View>

                            </View>
                        </TouchableOpacity>
                        <View className="ml-2">
                            <View className="w-20 h-20 bg-red-200 opacity-90 flex rounded-full  mt-3 items-center justify-center">
                                <View className="w-16 h-16 bg-red-600 opacity-90 flex rounded-full  items-center justify-center">

                                    <FontAwesome6 name="house-user" size={25} color="white" />
                                </View>
                            </View>
                            <View className="justify-center items-center mt-2">
                                <Text className="">Nhà của tôi</Text>
                            </View>

                        </View>

                        <View className="ml-2">
                            <View className="w-20 h-20 bg-red-200 opacity-90 flex rounded-full  mt-3 items-center justify-center">
                                <View className="w-16 h-16 bg-red-600 opacity-90 flex rounded-full  items-center justify-center">

                                    <Ionicons name="document-text" size={28} color="white" />
                                </View>
                            </View>
                            <View className="justify-center items-center mt-2">
                                <Text className="">Hợp đồng</Text>
                            </View>

                        </View>

                    </View>




                    <View className="absolute bottom-0 left-0 w-full h-4/5	 bg-white ">
                        <View className="flex-row mt-5">
                            <Text className="ml-7 font-bold text-base">Gợi ý cho bạn</Text>
                            <Text className="text-red-600 ml-44">Xem thêm</Text>
                        </View>
                        <View>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <View className="mt-4 ml-7">
                                    <View className="flex-row">
                                        <Image
                                            source={require("../img/Rectangle 2464.png")}
                                        ></Image>

                                        <View className="-ml-16 mt-2 w-12 h-12 bg-gray-300 opacity-90 flex rounded-full items-center justify-center">
                                            <AntDesign name="hearto" size={24} color="white" />
                                        </View>
                                    </View>

                                    <Text className="mt-2 text-base">
                                        Nhà trọ Lê Hoàng Phái
                                    </Text>

                                    <Text className="text-red-700 font-bold text-base">
                                        5 triệu/tháng
                                    </Text>
                                </View>

                                <View className="mt-4 ml-10">
                                    <View className="flex-row">
                                        <Image
                                            source={require("../img/Rectangle 2464 (1).png")}
                                        ></Image>

                                        <View className="-ml-16 mt-2 w-12 h-12 bg-gray-300 opacity-90 flex rounded-full items-center justify-center">
                                            <AntDesign name="hearto" size={24} color="white" />
                                        </View>
                                    </View>

                                    <Text className="mt-2 text-base">
                                        Nhà trọ Lê Hoàng Phái
                                    </Text>

                                    <Text className="text-red-700 font-bold text-base">
                                        5 triệu/tháng
                                    </Text>
                                </View>
                            </ScrollView>
                        </View>

                        <View className="flex-row mt-10">
                            <View className="justify-center items-center">
                                <Image className="ml-7" source={require("../img/Rectangle 2469.png")} />

                                <View

                                    className="ml-10 -mt-20 ">
                                    <Text className="text-white text-xl font-bold">Studio</Text>
                                    <Text
                                        className="text-white -ml-1 text-base	">Khám phá</Text>
                                </View>
                            </View>

                            <View className="justify-center items-center -ml-5">
                                <Image className="ml-7" source={require("../img/Rectangle 2469 (1).png")} />

                                <View className="ml-10 -mt-20">
                                    <Text className="text-white text-xl font-bold">Duplex</Text>
                                    <Text className="text-white -ml-1 text-base	">Khám phá</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </ScrollView >
    )
}