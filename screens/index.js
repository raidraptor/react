import React, {Component} from 'react';  
import {View,FlatList, StyleSheet, Text} from 'react-native';  
import Icon from 'react-native-vector-icons/Ionicons';  
import MyCard from '../components/card'


const styles = StyleSheet.create({
    container: {
      flex: 12,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    item: {
      flex: 1/2,
      marginVertical: 8,
      marginHorizontal: 8,
      maxWidth: '50%'
    },
    row: {
      justifyContent : 'flex-start'
  }
  });
  
const Item = ({title}) => (
    <View style={styles.item}>
      <MyCard  title={title}/>
    </View>
  );
  

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Forth Item',
    },
  ];

  
export default class HomeScreen extends Component{  
    render() {  
        return(  
            <View>  
                 <FlatList
        data={DATA}
        style={{margin:5}}
        renderItem={({item}) => <Item title={item.title} />}
        numColumns={2}
        columnWrapperStyle={styles.row}
        keyExtractor={item => item.id}/>
            </View>  
        )  
    }  
}  
HomeScreen.navigationOptions={  
            tabBarIcon:({tintColor, focused})=>(  
            <Icon  
                name={focused ? 'ios-home' : 'md-home'}  
                color={tintColor}  
                size={25}  
            />  
        )  
}  


