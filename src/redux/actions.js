export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_USER_AGE = 'SET_USER_AGE';
export const GET_CITIES = 'GET_CITIES';
export const GET_ITEMS = 'GET_ITEMS';
export const GET_ITEM = 'GET_ITEM';
export const GET_USER = 'GET_USER';
import { Buffer } from 'buffer'

import { firebase } from '../firebase/config'

const API_URL = 'https://mocki.io/v1/e3aa1a3c-11f4-4ddb-9ca8-82d8ac248a09';

export const pushData = (dates) => {
    try {
        return async dispatch => {    
            async function fetchsData(dates) {
                    dispatch({
                        type: GET_ITEMS,
                        payload: dates
                    })                  
            };
            fetchsData(dates);   
        }
    } catch(error) {
    }      
}

export const getUser = (index) => {
    try {
        return async dispatch => {    
            async function fetchData(index) {//Utils.EncodeString(user.email)
                firebase.database().ref('users').orderByKey().once('value').then(
                    (snapshot) => {
                        const users = []
                        snapshot.forEach(date => {
                            let dt = date.val();
                            if(dt.uid === index) {
                                users.push(dt);
                            }
                        });
                        console.log(users)
                        if(users.length<=0) {
                            firebase.database().ref('/users').push({
                                name: 'notlogged',
                                uid: index,
                              })
                              .then(() => console.log('Data saved.'));                               
                        }
                    dispatch({
                        type: GET_USER,
                        payload: users.length>0?users[0].name:'notlogged',
                    })            
                }
                )       
            };

        fetchData(index);   
    }
    } catch(error) {
        
    }     
}

export const getItem = (index) => {
    try {
        return async dispatch => {    
            async function fetchData(index) {
                firebase.database().ref(`/images/${index}`).orderByKey().once('value').then(
                (snapshot) => {
                    console.log('>>', index,' >>>>>>>>  got: ', snapshot.val()==undefined);
                    dispatch({
                        type: GET_ITEM,
                        payload: snapshot.val()
                    })            
                }
                )       
            };

        fetchData(index);   
    }
    } catch(error) {
        
    }     
}
export const getItems = () => {
    try {
        return async dispatch => {    
            async function fetchData() {
                firebase.database().ref('items').orderByKey().once('value').then(
                (snapshot) => {
                    const dates = []
                    snapshot.forEach(date => {
                        let dt = date.val();
                        dates.push(dt);
                    });
                    console.log('>>>> ', dates)
                    dispatch({
                        type: GET_ITEMS,
                        payload: dates
                    })            
                }
                )       
            };

        fetchData();   
    }
    } catch(error) {
        
    }     
}
export const getCities = () => {
    try {
        return async dispatch => {
            const result = await fetch(API_URL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/javascript',
                }
            });
            const json = await result.json();
            if(json) {
                dispatch({
                    type: GET_CITIES,
                    payload: json
                })
            } else {
                console.log('Unable to fetch!');
            }
        }
    } catch(error) {
        
    }
}
export const setName = name => dispatch => {
    dispatch({
        type: SET_USER_NAME,
        payload: name
    })
}

export const setAge = name => dispatch => {
    dispatch({
        type: SET_USER_AGE,
        payload: age
    })
}