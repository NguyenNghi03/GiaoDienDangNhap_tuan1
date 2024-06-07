import { View, Text, ScrollView, TextInput, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Ionicons, Feather } from '@expo/vector-icons';

export default function Renderbuilding({ navigation }) {


    return (
        <ScrollView>
            <ImageBackground className="w-full h-screen" source={require("../img/Background.png")}>
                <View className="flex-col ml-3 mt-16">
                    <Ionicons name="return-down-back" size={32} color="white" />
                    <Text className="text-white text-3xl font-bold ml-1 mt-4">Khám phá</Text>
                </View>
                <View className="absolute bottom-0 left-0 w-full h-3/4 bg-slate-50">
                    <View className="items-center -mt-8 shadow-lg">
                        <View className="items-center justify-center w-11/12 border-white border-2 rounded-2xl h-14 text-1.5xl p-3 bg-white flex-row">
                            <TextInput
                                className="-ml-64 w-9/12 text-xl"
                                placeholder='Tìm kiếm'
                            />
                            <View className="-ml-72 items-center">
                                <Feather name="search" size={33} color="#A0AEC0" />
                            </View>
                        </View>
                    </View>

                </View>
            </ImageBackground>
        </ScrollView>
    );
}

