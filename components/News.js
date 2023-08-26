import { StyleSheet, Text, View, ActivityIndicator, FlatList, Image } from 'react-native'
import React, {useEffect,useState} from 'react'

const News = () => {

    const [articles,setAeticles] = useState();
    const[loading,setLoading] = useState(true);

    useEffect(()=>{
        getData();
    },[])

    const getData = async ()=>{
        try{
            const response = await fetch('https://newsapi.org/v2/everything?q=apple&from=2023-08-25&to=2023-08-25&sortBy=popularity&apiKey=6d1ad3d682b4436fa61c20c817e976c3')
            const data = await response.json();
            setAeticles(data.articles);
            setLoading(false);
        }catch(error){
            console.error('Error fething users: ',error)
            setLoading(false);
        }
    }

    const _renderItem = ({item})=>{
        let urlToImage = (item.urlToImage !== null)? item.urlToImage
        : 'http://via.placeholder.com.150*100'
        return(
            <View style = {{flex:1,flexDirection:'row',margin:10}}>
                <Image
                source = {{uri : urlToImage}}
                resizeMode = 'cover'
                style = {{flex:1,width:'100%',height:'100%'}}
                />
                <View style= {{width:200,alignSelf:'center',margin:5}}>
                    <Text style={{fontSize:14,marginBottom:5}}>{item.title}</Text>
                    <Text>{item.source.name}</Text>
                </View>

            </View>
        )
    }

    const _onRefresh = ()=>{
        setLoading(true);
        getData();
    }
  return (
    <View>
        {
            loading?(
                <ActivityIndicator size="large" color="0000ff"/>
            ):(
                <FlatList
                data={articles}
                keyExtractor={(index)=>index.tostring}
                renderItem={_renderItem}
                refreshing={loading}
                onRefresh={_onRefresh}

                />
            )
        }
    </View>
  )
}

export default News

const styles = StyleSheet.create({})