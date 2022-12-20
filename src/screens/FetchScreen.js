import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUser, getItems, pushData } from '../redux/actions';
import React from 'react';
import Categories from '../components/Categories';
import { ActivityIndicator } from 'react-native';
import colors from "../consts/colors";
import { FlatList } from 'react-native';
import { Event } from '../consts/Event';
import { useState } from 'react';

const FetchScreen = ({navigation}) => {
    const { users } = useSelector(state => state.userReducer); 
    const dispatch = useDispatch();
    const [id, setId]= useState('art');
    useEffect(() => {
        dispatch(getItems());
    }, [])    
    const filterData = (id) => {
        setId(id);
    }
    return (
        <View style={{flex: 1, backgroundColor: colors.blaufushi}}>
            <Categories onChange={(id) => filterData(id)} />
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                {users?.length==0 && <ActivityIndicator color={"#fff"} />}
            </View>  
            <FlatList
                    data={id == 'all' ? users : users.filter(function(item){
                        return item.type == id;
                    })}              
                    renderItem={({item}) => ( 
                        <TouchableOpacity     
                            onPress={() => navigation.navigate('Home', item) }
                            style={styles.container}
                        >
                            <View style={styles.innerContainer}>
                                <Text style={styles.itemHeading}>{item.name}</Text>
                                <View style={{alignItems: 'center', width: 50, height: 20, backgroundColor: new Event().getColor(item.type), borderRadius: 5}}>
                                <Text style={{fontSize: 11}}>{item.type}</Text>
                                </View>
                                <Text style={styles.itemText}>{item.date}</Text>
                                {/* <Text>{item.id}</Text> */}
                            </View>
                        </TouchableOpacity>
                    )}
                />           
        </View>
    )
}

export default FetchScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        padding:15,
        borderRadius: 15,
        margin: 5,
        marginHorizontal: 10,
        // opacity: 0.9
      },
      innerContainer: {
        flexDirection: 'column',
        alignItems: 'center',
      },  
      itemHeading: {
        fontWeight: 'bold'
      },
      itemText: {
        fontWeight: '300'
      }    
  });