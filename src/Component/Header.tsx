import React from 'react';
import {
    View,
    StyleSheet,
    Platform,
    StatusBar,
    Text,
    TouchableOpacity,
    Alert,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

const Header = () => {
    const navigation = useNavigation();
    return (
        <>
            <StatusBar
                barStyle="light-content"
                translucent={true}
                backgroundColor="transparent"
            />
            {
                Platform.OS === 'ios' && (
                    <View style={{ height: 50, backgroundColor: '#D5542D' }} />
                )
            }
            <View style={styles.container}>
                <View style={styles.searchRow}>
                    <TouchableOpacity
                        onPress={()=>{
                            navigation.goBack()
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 20,
                                color: '#ffffff'
                            }}
                        >Header</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D5542D',
        paddingTop: 15,
        paddingHorizontal: 10,
        paddingBottom: 15,
    },
    searchRow: {
        marginTop: 10,
        flexDirection: 'row',
    },
});
