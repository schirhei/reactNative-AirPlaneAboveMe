import React from 'react';
import { TouchableHighlight, Text, View, StyleSheet, Image } from 'react-native';

export default class HomeScreen extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}>Planes Above Me</Text>
                <TouchableHighlight
                 style={{top:40, height:40, width: 230}}
                 onPress={()=>console.log("Sign In with Google")}>
                 <Image style={styles.image} source={require('../assets/google.png')}/>
                </TouchableHighlight>

                <TouchableHighlight
                 style={[styles.button,{left:60}]}
                 onPress={()=>console.log("Sign In")}>
                 <Text style={styles.buttonText}> Sign In </Text>
                </TouchableHighlight>

                <TouchableHighlight
                 style={[styles.button,{right:60}]}
                 onPress={()=>console.log("Sign Up")}>
                 <Text style={styles.buttonText}> Sign Up </Text>
                </TouchableHighlight>
                
                <TouchableHighlight
                 style={styles.guestButton}
                 onPress={()=>console.log("Clicked")}>
                 <Text style={styles.buttonText}> Sign In as a Guest </Text>
                </TouchableHighlight>

            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    position:"absolute",
    fontWeight: 'bold',
    top: 10,
    fontSize: 30
  },
  button: {
    position:"absolute",
    width:100,
    height:70,
    top:400,
    borderWidth:0.5,
    borderColor: "black",
    borderRadius:4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image:{
    width:"100%",
    height:"100%",
    resizeMode: 'contain'
  },
  buttonText: {
    fontSize:20
  },
  guestButton: {
    position:"absolute", 
    top:480, 
    height:40, 
    width:200,
    alignItems: 'center',
    justifyContent: 'center'
  }
});