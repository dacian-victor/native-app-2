import React, {useEffect, useState} from 'react';
import colors from "../consts/colors";
import { Text, View, StyleSheet, Linking, Image, ActivityIndicator } from 'react-native';
import Button from '../components/Button';
import { getItem } from '../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import { Event } from '../consts/Event';

const HomeScreen = ({ navigation, route }) => {  
    const { user } = useSelector(state => state.userReducer);  
    const item = route.params;
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getItem(item.id));
    }, [])    
    return (
      <View style={{flex: 1, backgroundColor: colors.blaufushi}}>            
            <View>
              {user==undefined && <ActivityIndicator color={"#fff"} />}
            </View> 
            <View style={styles.innerContainer}>
                <Text style={{fontSize: 70, fontWeight: 'bold'}}>This is the home page</Text>
                <Text style={styles.itemHeading}>{item.name}</Text>
                <Text style={{fontSize: 25, width: 200, borderRadius: 5, textAlign: 'center', 
                  backgroundColor: new Event().getColor(item.type)}}>{item.type}</Text>
                <Text style={styles.itemText}>Date: {item.date}</Text>
                <Text>Event identifier: {item.id}</Text>
                <Image source={{ uri: user?.image }} style={[{width: 400, height: 200}]}/>
                <Text style={{color: 'blue'}} 
                    onPress={() => Linking.openURL(item.url)}> {item.url} </Text>                    
            </View>       
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>  
                <Button title="Go to back" onPress={() => navigation.goBack()}/>
                <Button title="Go to (add page)" onPress={() => navigation.navigate('Form')}/>
            </View>  
      </View> 
    ); 
  };

export default HomeScreen;  

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e5e5e5',
        padding:15,
        borderRadius: 15,
        margin: 5,
        marginHorizontal: 10,
        opacity: 0.9
      },
      innerContainer: {
        flexDirection: 'column',
        alignItems: 'center',
      },  
      itemHeading: {
        color: colors.white,
        fontSize: 35,
        fontWeight: 'bold'
      },
      itemText: {
        fontWeight: '300'
      }
  });
  
