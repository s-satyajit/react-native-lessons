import icedCoffeeImg from "@/assets/images/iced-coffee.png"
import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { Link } from "expo-router"
import { link } from "fs"

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={icedCoffeeImg}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.text}>Coffe Shop</Text>
        <Link style={styles.link} href={"/explore"}>Explore</Link>
      </ImageBackground>
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  link: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: "100%",
    height: "100%"
  }
})