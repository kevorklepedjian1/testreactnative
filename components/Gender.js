import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Animated,
    PanResponder,
    Image,
    TextInput
  } from 'react-native';
  import React, {useState, useRef} from 'react';
import Cakeses from './Cakeses';
import { TouchableOpacity } from 'react-native';

const Gender = ({formdata, setFormdata}) => {
    const [sliderDimensions, setSliderDimensions] = useState({
        height: null,
        top: null,
        bottom: null,
      });
    
      const stepperAnim = useRef(new Animated.Value(0)).current;
      const railFillAnim = useRef(new Animated.Value(0)).current;
    
      const stepperResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
          stepperAnim.setOffset(stepperAnim._value);
                 railFillAnim.setOffset(railFillAnim._value);
        },
        onPanResponderMove: (evt, {dy, moveY}) => {
          if (moveY > sliderDimensions.top && moveY < sliderDimensions.bottom) {
            stepperAnim.setValue(dy);
            railFillAnim.setValue(-dy);
          }
        },
        onPanResponderRelease: () => {
          stepperAnim.flattenOffset();
          railFillAnim.flattenOffset();
        },
      });
      const K = railFillAnim._value
      const Icon = React.memo(() => {
        return 
        <View>
        <Text>sadasdasd</Text>
          
       </View>
      });

  return (
    <SafeAreaView>
    <View>
        
      <Text style={styles.title}>Hi ! How can we refer to you?</Text>
</View>
<View style={{}}>
    <TouchableOpacity style={styles.buttontwo} onPress={() => {
                           setFormdata({...formdata, gender:"male"})
                            
                        }}><Text style={styles.text}   >He/Him</Text></TouchableOpacity>
    <View  style={{marginBottom:20}}/>
    <TouchableOpacity style={styles.button} onPress={() => {
                           setFormdata({...formdata, gender:"female"})
                           
                        }}><Text style={styles.text}   >She/Her</Text></TouchableOpacity>
</View>
    
   </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    title: {
      textAlign: 'center',
      fontSize: 30,textAlign: 'justify',
      lineHeight: 40,
      marginVertical: 70,
      color:"white"
    },
    slider: {
      width: 50,
      height: '60%',
     marginBottom:20,
     marginright:"90%"
    },
    rail: {
      width: 20,
      height: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
      backgroundColor: '#DBDBDB',
    },
    stepper: {
      width: '100%',
      height: 5,
      backgroundColor: 'black',
    },
    railFill: {
      width: '100%',
      backgroundColor: '#CBAA71',
      position: 'absolute',
      bottom: 0,
    },
    railFillSpace: {
      height: 5,
      width: '100%',
      backgroundColor: 'white',
      position: 'absolute',
  
    },
    cake: {
     width:350,
     height:200,
     
    }, indicatorWrapper: {
        
       left:"70%",
        bottom: 4,
        alignItems: 'center',
        justifyContent: 'center',
      
      },
      
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: 'cyan',
        width:350,
      },text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
      buttontwo: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#00001a',
        borderWidth: 1,
        borderColor: '#fff',
      },
  });
export default Gender