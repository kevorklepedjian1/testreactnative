import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import {
  TextInput,
  SafeAreaView,
  ScrollView,
  Animated,
  Image,
  Dimensions,
  StyleSheet,
  View,Text
} from 'react-native';
const { width } = Dimensions.get('screen');

const minAge = 14;
const segmentsLength = 91;
const segmentWidth = 2;
const segmentSpacing = 20;
const snapSegment = segmentWidth + segmentSpacing;
const spacerWidth = (width - segmentWidth) / 2;
const rulerWidth = spacerWidth * 2 + (segmentsLength - 1) * snapSegment;
const indicatorWidth = 100;
const indicatorHeight = 80;
const data = [...Array(segmentsLength).keys()].map(i => i + minAge);
const styles = StyleSheet.create({
    indicatorWrapper: {
      position: 'absolute',
      left: (width - indicatorWidth) / 2,
      bottom: 34,
      alignItems: 'center',
      justifyContent: 'center',
      width: indicatorWidth
    },
    segmentIndicator: {
      height: indicatorHeight,
      backgroundColor: 'turquoise'
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      position: 'relative'
    },
    cake: {
      height:350,
      width:350,
      marginRight:200,
    resizeMode: 'cover',
    
    
     
    },
    ruler: {
      width: rulerWidth,
      alignItems: 'flex-end',
      justifyContent: 'flex-start',
      flexDirection: 'row'
    },
    segment: {
      width: segmentWidth
    },
    scrollViewContainerStyle: {
      justifyContent: 'flex-end'
    },
    ageTextStyle: {
      fontSize: 42,
      fontFamily: 'Menlo'
    },
    spacer: {
      width: spacerWidth,
      backgroundColor: 'red'
    },
    searchSection: {
      
     
    
  },
 
  
    
    roundButton1: {
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 100,
      backgroundColor: 'cyan',
      marginVertical:40
    },
  });
const Cakeses = ({formdata, setFormdata}) => {
  const [kevork,setKevork]= useState()
  return (
    <View>
    <View  >
                   <Image source={require('../assets/h.png')} style={styles.cake} />
            <TextInput  style={{height:30,width:50, backgroundColor:"cyan", color:"grey",position:'absolute',left:190,top:50,opacity:1,textAlign:'center'}}
              onChangeText={kevork => setKevork(kevork)}
            />       
    </View>
     <View  >
    </View><View style={{height:30,width:50, color:"grey",position:'absolute',left:260,top:2}} ><TouchableOpacity style={styles.roundButton1}
    onPress={() => {
      setFormdata({...formdata, height:kevork})
      
   }}
    ><Text>dsd</Text></TouchableOpacity></View>
  </View>)
}

export default Cakeses