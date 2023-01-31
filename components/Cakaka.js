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
    resizeMode: 'cover',
    marginTop:50,
   
    alignSelf:"center"
  
     
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
      width: 30,
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 100,
      backgroundColor: 'cyan',
      marginVertical:40
    },
  });
const Cakaka = ({formdata, setFormdata}) => {
  const [val1,setVal1]=useState()
  const [val2,setVal2]=useState()
  const [val3,setVal3]=useState()
  return (
    <View style={{flexDirection:'row'}}>
    <View  >
                   <Image source={require('../assets/h.png')} style={styles.cake} />
            <TextInput defaultValue='20' style={{height:30,width:50, backgroundColor:"cyan", color:"grey",position:'absolute',left:200,top:50,opacity:1,textAlign:'center'}}
            onChangeText={val1 => setVal1(val1)}
            /> 
            <Text style={{height:30,width:90, color:"white",position:'absolute',left:80,top:80,opacity:1,textAlign:'center'}}>Shoulders </Text>
            <TextInput defaultValue='20' style={{height:30,width:50, backgroundColor:"cyan", color:"grey",position:'absolute',left:90,top:130,opacity:1,textAlign:'center'}}
            onChangeText={val2 => setVal2(val2)}
            /> 
            <Text style={{height:30,width:90, color:"white",position:'absolute',left:170,top:170,opacity:1,textAlign:'center'}}>Waist</Text>
            <TextInput defaultValue='20' style={{height:30,width:50, backgroundColor:"cyan", color:"grey",position:'absolute',left:200,top:210,opacity:1,textAlign:'center'}}
            onChangeText={val3 => setVal3(val3)}
            /> 
            <Text style={{height:30,width:90, color:"white",position:'absolute',left:80,top:210,opacity:1,textAlign:'center'}}>Hips</Text>
   
    </View>
     <View  >
    </View><View style={{position:'absolute',left:200,top:50}} ><TouchableOpacity style={styles.roundButton1}
    onPress={() => {
      setFormdata({...formdata,         shoulder:val1})
      
   }}
    ><Text>dsd</Text></TouchableOpacity>
    
    
  </View>
  <View style={{position:'absolute',left:100,top:130}} ><TouchableOpacity style={styles.roundButton1}
  onPress={() => {
    setFormdata({...formdata,         shoulder:val2})
    
 }}
  ><Text>dsd</Text></TouchableOpacity></View>

  <View style={{position:'absolute',left:210,top:200}} ><TouchableOpacity style={styles.roundButton1}
  onPress={() => {
    setFormdata({...formdata,         shoulder:val3})
    
 }}
  ><Text>dsd</Text></TouchableOpacity></View>

  </View>
 
  )
}

export default Cakaka