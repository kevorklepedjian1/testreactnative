import { View, Text } from 'react-native'
import React from 'react'
import Cakeses from './Cakeses'
import Cakaka from './Cakaka'

const Shoulderhips = ({formdata, setFormdata,height,setHeight}) => {
  return (
    <View>
      <Text style={{color:"white"}}>{height}</Text>
      <Cakaka   formdata={formdata} setFormdata={setFormdata}  />
    </View>
  )
}

export default Shoulderhips