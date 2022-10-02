import React from "react";
import {View, Text, Button} from 'react-native';

export default function home({Navigation}){
    return (
        <View>
            <Text>home</Text>
            <Button
                tittle="sobre"
                onPress={() => navigation.navigate('sobre')}
                />
        </View>
    );
}