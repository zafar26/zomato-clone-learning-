import React, { Component } from 'react'
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class Card extends Component{
    render(){
        return(
        <TouchableOpacity style={style.card} id={this.props.id}>
             <View style={style.image}>
             {
                this.props.image !=="" ?
             <Image  
              style={{width:80,height:60,borderRadius:10,}}
              source={{uri:  this.props.image}}
              resizeMode={'cover'}
              />
              :
              <Ionicons style={{alignSelf:'center'}}name="md-restaurant" size={60} color="lightgray" />
             } 
              </View>
             

          {/* <Image source={{uri: this.props.image, width: 64, height: 64}} /> */}
            <View style={style.container}>
                <View style={style.header}>
                    
                    <Text style={style.name}>{this.props.name}</Text>
                    
                    <Text  style={{backgroundColor:`#${this.props.ratingColor}`, textAlign:'center',
        padding:2,width:30,height:20,fontSize:10,fontWeight:"bold",
        color:'white',borderRadius:5,}}>{this.props.rating}</Text>
                </View>
            <Text style={style.address}>{this.props.address}</Text>
            </View>
        </TouchableOpacity>
        )
    }
}
const style = StyleSheet.create({
    container:{
        marginLeft:10,
    },
    card: {
    width:325,
    backgroundColor: '#ffffff',
    color :'white',
    marginTop:8,
    display:'flex',
    flexDirection:'row'
    },
    address:{
        width:180,
        fontSize:10
    },
    name : {
        fontSize:16,
        color:'blue',
        width:200,
    },
    header:{
        width:235,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    image:{
        width:80,
        height:60,
        borderRadius:10,
    }
})