import { Image, ImageProps, View,Text} from "react-native";
import { style } from "./styles";

type Props = {
    name: string
    image?: ImageProps | null
}

export  function Avatar({image,name}: Props){
  return (
    <View>
    { image?(
      <Image source={image}/>
    ) : (
        <View style={style.letter}>
            <Text>{name[0]}</Text>
        </View>
    )}
    
    </View>
  )
}