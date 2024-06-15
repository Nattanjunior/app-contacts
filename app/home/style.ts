import {StyleSheet } from 'react-native'
import { Header } from 'react-native/Libraries/NewAppScreen'
import { theme } from '../../theme'

export const styles = StyleSheet.create({
    container:{
     flex: 1, 
    },
    header:{
      width: "100%",
      height: 132,
      backgroundColor: theme.colors.blue,
      justifyContent: 'flex-end',
      paddingHorizontal: 24,
      marginBottom: 100
    },
    input:{
     marginBottom: -27,
     
    }
})