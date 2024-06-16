import  {Text,TouchableOpacity} from 'react-native'
import { styles } from './styles'
import { Avatar } from '../avatar'

export function Contact(){
 return(
 <TouchableOpacity>
    <Text style={styles.name}>Nattan</Text>
    <Avatar name='Nattan'/>
  </TouchableOpacity>
 )
}