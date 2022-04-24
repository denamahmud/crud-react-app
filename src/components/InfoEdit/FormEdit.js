import React from 'react'
import SubmitButton from './SubmitButton'
import style from '../../style/fillInfo/_form.module.scss'
import { useState } from 'react'
import { useNavigate  } from 'react-router-dom';
import { useDispatch } from 'react-redux'

const FormEdit = ({ editInfo, id, selectedItem }) => {

    let dispatch = useDispatch()


    const [formData, setFormData] = useState({first_name: '', last_name : '', age: '', fav_color : ''})
  
    const { first_name, last_name, age, fav_color } = formData

   
  
    const navigate = useNavigate()

  
    const putInfoFun = (e) => {
      e.preventDefault()
      dispatch(editInfo(id, formData))
    
      navigate('/info-added')
      
    }
  return (
    <div>
      
        <form className={style.form} onSubmit={putInfoFun}>
    
        <div className={style.left}>
          <input type='text' placeholder='first name' className={style.input} onChange={e => setFormData({...formData, first_name: e.target.value})} value={first_name} required/>
          <input type='text' placeholder='age' className={style.input} onChange={e => setFormData({...formData, age: e.target.value})} value={age} required/>
        </div>
        <div className={style.right}>
          <input type='text' placeholder='last name' className={style.input} onChange={e => 
            setFormData({...formData, last_name: e.target.value})} value={last_name} required/>
          <input type='text' placeholder='fav color' className={style.input} onChange={e => setFormData({...formData, fav_color: e.target.value})} value={fav_color} required/>
        </div>
          <SubmitButton/>

        </form>
    </div>
  )
}

export default FormEdit