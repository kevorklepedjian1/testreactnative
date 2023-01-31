import { View, Text, Pressable, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Gender from './Gender'
import Shoulderhips from './Shoulderhips'
import Heightstats from './Heightstats'
import Formcheker from './Formcheker'
import { Dimensions } from 'react-native';
import Cakeses from './Cakeses'
const { height } = Dimensions.get("window")
const Form = () => {
    const [formdata, setFormdata] = useState({
        gender: '',
        height: '',
        shoulder: '',
        hips: "",
        waist:"",
    })
    const [height,setHeight]=useState("")
    const [screen, setScreen] = useState(0)
    const FormTitle = ["Gender", "Measurement", "Measurement"]
    const ScreenDisplay = () => {
        if (screen === 0) {
            return <Gender formdata={formdata} setFormdata={setFormdata} screen={screen} setScreen={setScreen} />
        } else if (screen === 1) {
            return<Heightstats formdata={formdata} setFormdata={setFormdata}  />
            
        } else if( screen===2) {
            return <Shoulderhips formdata={formdata} setFormdata={setFormdata} height={height} setHeight={setHeight} />
        }
    }
    const createuser = (formdata) => {
        fetch(`https://w2w-api.u.e.r.appspot.com/size/android`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({height: formdata.height , gender: formdata.gender, waist: formdata.waist , shoulder: formdata.shoulder , hip : formdata.hip})
        })
        .then(res => {
          console.log(res.status);
          console.log(res.headers);
          return res.json();
        })
        .then(
          (result) => {
            console.log(result);
          },
          (error) => {
            console.log(error);
          }
        )
      };


    return (
        <SafeAreaView style={{backgroundColor:"#ffd1dc"}} >
            <View style={styles.slider}>
                <View style={{ flexDirection: "row" ,alignItems:'center', marginTop:"20%", marginVertical:20}}>
                    {screen>0 ?
                    <Pressable
                        disabled={screen === 0}
                        onPress={() => {
                            setScreen((currscreen) => currscreen - 1)
                        }}
                    ><Text style={{color:"white"}}>prev</Text>
                    </Pressable>:<></>}<Text style={{color:"white",marginHorizontal:"35%", textAlign:'center'}}>{FormTitle[screen]}</Text></View>
                <View><ScreenDisplay /></View></View>
            <View style={styles.footer}>
             
<View  style={{...StyleSheet.absoluteFill, backgroundColor: "#00001a",}}/>
                <View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: "#ffd1dc",height:"300%", borderTopLeftRadius:74 }} />
               {screen ==2 ?
                    <TouchableOpacity
                    
 style={[styles.button,{ marginTop:"7%"}]}
 onPress={() => createuser(formdata)}
                    ><Text style={styles.text} >submit</Text></TouchableOpacity>:
                    <TouchableOpacity
                    style={[styles.button,{ marginTop:"7%"}]}
                                           onPress={() => {
                                               setScreen((currscreen) => currscreen + 1)
                                           }}
                                       ><Text style={styles.text} >next</Text></TouchableOpacity>
                
                }</View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    Wrapper: {
        display: 'flex',
        alignItems: 'center',
        marginTop: "10%",
    },
    slider: {
        width: 50,
        height: '60%',
        marginBottom: 20,

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
       alignContent:'flex-start',
       justifyContent:"flex-start",
       color:'white'

    }, slider: {
         height:"90%",
        display: 'flex',
        alignItems: 'center',
        backgroundColor: "#00001a",
        borderBottomRightRadius: 99,

    },
    footer: {
        display: 'flex',
        alignItems: 'center',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 40,
        elevation: 3,
        backgroundColor: 'cyan',
      },text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
});
export default Form