import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import swigyLogo from '../assets/images/swigyLogo.png'

export default class Splash extends Component {
  render() {
    return (
      <View style={styles.splashContainer}>
        <Image style={styles.swigyLogo} source={swigyLogo}/>
</View>   
    )
  }
}

const styles = StyleSheet.create({
    swigyLogo:{
        width:200,
        height:400,
        objectFit:'contain',
        marginTop:50
    },
    splashContainer:{
        flexDirection:'row',
        justifyContent:'center'
    }
})
