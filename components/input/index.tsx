import { View, ViewProps,TextInput, TextInputProps } from "react-native";
import { theme } from "../../theme";
import { styles } from "./style";


function Input({children,style}: ViewProps){
 return <View style={[styles.container, style]}>{children}</View>
} 

function Field({...rest}: TextInputProps){
 return <TextInput  style ={styles.input}
 placeholderTextColor={theme.colors.gray_300} 
 {...rest}/>
}

Input.Field = Field
export {Input}