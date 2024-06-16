import { View,TouchableOpacity, Alert,SectionList,Text, SectionListData} from "react-native";
import { styles } from "./style";
import { Input } from "../../components/input";
import * as Contacts from 'expo-contacts'
import { useEffect, useState,useId } from "react";
import {Feather} from '@expo/vector-icons'
import { theme } from "../../theme";

import { Contact, ContactProps } from "../../components/contact";


type SectionListDataProps = {
   title: string,
   data: ContactProps[]
}

export default function Home(){
 const [contacts, setContacts] = useState<SectionListDataProps[]>([])
 const [name,setName] = useState("");

 async function fecthContacts() {
   try {
      //permissão para acessar os contatos do usuário.
      const { status} = await Contacts.requestPermissionsAsync();
      //verificando se foi permitido ou não.
      if(status === Contacts.PermissionStatus.GRANTED){
         //pegando os contatos do usuário.
         const {data} = await Contacts.getContactsAsync({sort: "firstName"});
         //formatando os dados recebidos
         const list  = data.map((contacts)=> ({
            id: contacts.id ?? useId(),
            name: contacts.name,
            image: contacts.image
         })).reduce<SectionListDataProps[]>((acc:any, item) => {
            //pegando a primeira letra do nome do contato do usuário
            const firstLetter = item.name[0].toUpperCase();

            const existingEntry = acc.find((entry:SectionListDataProps) => {
               entry.title === firstLetter
            })

            if(existingEntry){
               existingEntry.data.push(item);       
            }else{
               acc.push({title: firstLetter, data: [item]})
            }


            return acc
         },[])
          
         setContacts(list)
      }

   } catch (error) {
      console.error(error);
      Alert.alert("Contatos", "Não foi possível carregar os contatos.")
   }
 }

 useEffect(()=>{
 fecthContacts()
 },[])

 return(
 <View style={styles.container}>
    <View style={styles.header}>
     <Input style={styles.input}>
      <Feather name="search" size={16} color={theme.colors.gray_300}/>
      <Input.Field 
       placeholder="Pesquisar pelo nome..."
       onChangeText={setName}
       value={name}      
      />     
      <TouchableOpacity onPress={()=> setName("")}>
        <Feather name="x" size={16} color={theme.colors.gray_300}/>
     </TouchableOpacity>
      
     </Input>

    </View>

    


    <SectionList 
     sections={contacts} 
     keyExtractor={(item) => item.id}
     renderItem={({item})=> (
      <Contact 
       contact={item} />
      )}

      //renderizando as sections(sessões)
      renderSectionHeader={({section})=> <Text style={styles.section}>{section.title}</Text>}
    
    //faazendo estilização dentro da lista
    contentContainerStyle={styles.contentList}
    
    />

    

 </View>
)
}