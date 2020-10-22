import {combineReducers} from 'redux'
import authReducer from './authReducer'
import Bulma from 'bulma/css/bulma.min.css'


export default function(){
    combineReducers({
        auth : authReducer
    })
}; 