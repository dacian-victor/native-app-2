import { Text, View, StatusBar, FlatList, StyleSheet, Alert, Pressable } from 'react-native';
import React, {useEffect, useLayoutEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUser, getItems, pushData } from '../redux/actions';
import Categories from '../views/Categories';
import colors from "../consts/colors";
import { useState } from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { Event } from '../consts/Event';
import publicIP from 'react-native-public-ip';
import NavigationTabs from '../components/NavigationTabs';

const Fetch = ({navigation}) => {
   const { users, logged } = useSelector(state => state.userReducer);  
    const dispatch = useDispatch();
    const [id, setId]= useState('art');
    const [isLoading, setIsLoading]= useState('true');

    useLayoutEffect(() => {
      publicIP().then(ip => { 
        console.log('>>>>>log/(user by ip)>>>.. ', ip)
        dispatch(getUser(ip));
      }).catch(error => { console.log(error); });
    }, [])

    useEffect(() => {
      dispatch(getItems());
    }, [])

  const filterData = (id) => {
    //console.log('>>> ', id);
    setId(id);
          // Get Local IP
    // let data = users.filter(function(item){
    //     return item.type == id;
    // }).map(function({id, name, adress, type, url, date}){
    //     return {id, name, adress, type, url, date};
    // });
    //dispatch(pushData(data));
  }
  return (
    <View style={{flex: 1, backgroundColor: colors.blaufushi}}>
      {/* <StatusBar barStyle="light-content" backgroundColor="#6a51ae" /> */}
      <View style={{paddingRight: 100}}>
        <Text style={{fontSize:15, alignSelf: 'flex-end', opacity: 0.8, backgroundColor: colors.cyan}}>{logged}</Text>
      </View>      
      <Categories onChange={(id) => filterData(id)} />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {users?.length==0 && <ActivityIndicator color={"#fff"} />}
      </View>      
      <FlatList 
        style={{height:'100%', paddingBottom: 50}}
        data={id == 'all' ? users : users.filter(function(item){
          return item.type == id;
      })}
        numColumns={1}
        renderItem={({item}) => ( 
            <Pressable      
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
            </Pressable>
        )}
      />
      <NavigationTabs />
    </View>
  );
}

export default Fetch;

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
  
