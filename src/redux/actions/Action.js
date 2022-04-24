import { 
    ADD_INFO_SUCCESS,
    DELETE_INFO_SUCCESS,
    GET_INFO_SUCCESS,
    EDIT_INFO_SUCCESS
 } from "./Type";
import axios from 'axios'


const url = 'http://localhost:5000/info'


// delete info 


const deleteInfoSuccess = (id) => {
    return{
        type: DELETE_INFO_SUCCESS,
        payload : {
            id : id
        }
    }
}


export const deleteInfo = id => {
    return dispatch => {
        axios.delete(`${url}/${id}`)
        .then(() => {
            dispatch(deleteInfoSuccess(id))
        })
    }
} 
// edit info


const editInfoSuccess = (data) => {
    return {
        type : EDIT_INFO_SUCCESS,
        payload : data
    }
}
export const editInfo = (id, data) => {

    return dispatch => {
       
        axios.put(`${url}/${id}`, data)
      
        .then(res => {
            dispatch(editInfoSuccess(res))
        })
      
    }
}


// add info 

const addInfoSuccess = (data) => {
    return {
        type : ADD_INFO_SUCCESS,
        payload : data
    }
}

export const addInfo = info => {


    return dispatch => {
        axios.post(url, info)
        .then(res => {
            dispatch(addInfoSuccess(res.data))
            
        })
    }
}

// get info
export const getInfoSuccess = data => {
    return {
        type : GET_INFO_SUCCESS,
        payload : data
    }
}


export  const getInfo = () => {
    return dispatch => {
        axios.get(url)
        .then(res => {
            dispatch(getInfoSuccess(res.data))
        })
        .catch(err => {
            console.log(err)
        })
        
        
    }
}


