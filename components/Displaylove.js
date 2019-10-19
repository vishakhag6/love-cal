import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

const Displaylove = (prop) => {
    if (prop.isLoader) {
        return (
            <ActivityIndicator
                animating={true}
                style={styles.indicator}
                size="large"
            />
        )
    }

    if (prop.data.message) {
        return <Text> Try Another Time... </Text>
    }

    if (prop.data !== 'loading')   {
        return (
            <View>
                <Text>Percentage: {prop.data.percentage} %</Text>
                <Text>Result: {prop.data.result}</Text>
            </View>
        )
    } else {
        return null
    }
}

const styles = StyleSheet.create({
    indicator: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 80
    }
});
export default Displaylove;