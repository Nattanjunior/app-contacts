import { ActivityIndicator } from "react-native";
import { theme } from "../../theme";


import { styles } from "./style";

export function Loading(){
 return (
    <ActivityIndicator style={styles.contanier} color={theme.colors.blue}/>
 )
}
