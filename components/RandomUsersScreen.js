import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const RandomUsersScreen = () => {
    const[users,setUsers] = useState([]);
    const[loding, setLoading] = useState(true);

    const fatchUsers = async ()=>{
        try{
            // const response = await fetch('https://randomuser.me/api/?results=15');
            // const data = await response.json();
            // setUsers(data.results);
            const response = await axios.get('https://randomuser.me/api/?results=15'); //ใช้ axios
            setUsers(response.data.results);
            setLoading(false);

        }catch(error){
            console.error('Error fetching users:' ,error);
            setLoading(false);
        }
    }

    useEffect(()=>{
        fatchUsers();

    },{})
  return (
    <View style={{flex:1, marginLeft:10,justifyContent:'center'}}>
        {
            loding?(//loding==ture หลัง? จะทำอะไร
                <ActivityIndicator size="large" color="#0000ff"/>

            )
            :(
                <FlatList
                data={users}
                renderItem={({item})=>( //item ดึงข้อมูล backend
                <View style={{marginVertical:10}}>
                    <Text>{`${item.name.first} ${item.name.last}`}</Text>
                    <Text>{item.email}</Text>
                </View>
                )}
                keyExtractor={(index)=> index.toString()}
                
                />
            )
        }
      
    </View>
  )
}

export default RandomUsersScreen