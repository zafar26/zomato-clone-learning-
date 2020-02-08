import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

export default class Restaurant extends Component{
render(){
    return(
        <View>
            <Text>
                Restaurants
                </Text>

                <Button
        title="Go to Home"
        onPress={() => this.props.navigation.navigate('Home')}
      />
        </View>
    )
}
}