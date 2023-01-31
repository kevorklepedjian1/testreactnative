import Cakeses from './Cakeses';
import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Animated,
  PanResponder,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Heightstats = ({formdata,setFormdata}) => {
    
        const [sliderDimensions, setSliderDimensions] = useState({
          height: null,
          top: null,
          bottom: null,
        });
      
        const [click,setClick]=     useState(true)
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
  return (
    <SafeAreaView>
    <View>
        
      <Text style={styles.title}>How tall are you?</Text>
      
</View>
<View style={styles.kk}>
  {click == true ?
    <><Text style={styles.titless} onPress={
      () => {
        setClick({click:2})
        
     }
    }>ftin</Text><Text style={styles.titles}>cm</Text></>:
    <><TouchableOpacity onPress={
      () => {
        setClick({click: false})
        
     }}><Text style={styles.titless}>blo</Text></TouchableOpacity><Text style={styles.titles}
     >bedo</Text></>
    }
</View><View style={{marginHorizontal:"28%"}}><Cakeses   formdata={formdata} setFormdata={setFormdata}/></View>


<View
        style={styles.slider}
        onLayout={(evt) => {
          const {height, y} = evt.nativeEvent.layout;
          setSliderDimensions({
            height: height,
            top: y,
            bottom: y + height,
          });
        }}>
        <View style={{}}>
          <Animated.View style={[styles.railFill, {height: railFillAnim, alignSelf:'flex-end'}]}>
            {sliderDimensions.height
              ? Array.apply(
                  null,
                  Array(Math.floor(sliderDimensions.height / 10)),
                ).map((item, index) => (
                  <View
                    key={index}
                    style={[styles.railFillSpace, {bottom: index * 10}]}
                  />
                ))
              : null}
          </Animated.View>
        </View>
        <Animated.View
          {...stepperResponder.panHandlers}
          style={[
            styles.stepper,
            {
              transform: [{translateY: stepperAnim}],
            },
          ]}
        />
      

    </View>

</SafeAreaView>

  )
}
const styles = StyleSheet.create({
    title: {
      textAlign: 'center',
      fontSize: 30,
      lineHeight: 40,
      marginVertical: 5,
      color:"white"
    },
    titles: {
        textAlign: 'center',
       fontSize:25,
        color:"white", marginHorizontal:20
      },
      titless: {
        textAlign: 'center',
       fontSize:25,
        color:"white",
       
      },
    slider: {
      width: 50,
      height: '100%',
   position:'absolute',
   left:530,
   top:500
    },
    
    stepper: {
      width: '100%',
      height: 5,
     
   
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
      kk: {
       flexDirection:'row',
       justifyContent:'center',
       marginVertical:50
      },
  });

export default Heightstats