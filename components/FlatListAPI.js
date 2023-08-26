import { StyleSheet, Text, View,SafeAreaView,ActivityIndicator,FlatList } from 'react-native'
import React, {useState,useEffect} from 'react'
import { RefreshControl } from 'react-native-web';

const FlatListAPI = () => {
    const[refreshing, setRefreshing] = useState(true);
    const[dataSource, setDataSource] = useState([]);

    //เรียกAPIใช้useEffect
    useEffect(()=>{ 
        getData();
    },[]);

    //ไว้ดึงข้อมูลจากFlatList
    const getData = async ()=>{
        await fetch('https://jsonplaceholder.typicode.com/posts') //ดึงAPI
        .then((response)=> response.json()) //แปลงไฟล์ .json javascript
        .then((responseJson)=>{
            setDataSource(responseJson);
            setRefreshing(false);
        }).catch((error)=>{
            console.error(error);
        });
    };

    const getItem =(item)=>{
        alert('Id : '+ item.id + ' Titel : ' + item.title)
    };

    const ItemView = ({item})=>{
        return(
            <Text
            style={styles.itemStyle}
            onPress={() => getItem(item)}
            >
                {item.title}
            </Text>
        )
    };

    const ItemSeparatorView =()=>{
        return(
            <View
            style = {{
                height : 0.5,
                width : '100%',
                backgroundColor: '#c8c8c8'
            }}
            ></View>
        );
    };

    const onRrfresh = ()=>{
        setDataSource([]);
        getData();
    };

  return (
    <SafeAreaView style={{flex:1}}>
        <View style = {styles.container}>
            {refreshing ? <ActivityIndicator/> : null}
            <FlatList
            data={dataSource}
            keyExtractor={(index)=>index.toString()}
            ItemSeparatorComponent={ItemSeparatorView}
            renderItem={ItemView}
            refreshControl={
                <RefreshControl
                refreshing={refreshing}
                onRrfresh={onRrfresh}
                />
            }
            />
        </View>

    </SafeAreaView>
  )
}

export default FlatListAPI

const styles = StyleSheet.create({
    container: {
    justifyContent: 'center',
    flex: 1,
    marginTop: 10,
    },
    itemStyle: {
    fontSize: 20,
    padding: 10,
    },
});