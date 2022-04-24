import React from 'react'
import { connect } from 'react-redux'
import Form from '../components/fillInfo/Form'
import Title from '../components/fillInfo/Title'
import { addInfo } from '../redux/actions/Action'

const FillInfo = () => {
  
  return (
    <div>
      <Title/>
      <Form addInfo={addInfo}/>
    </div>
  )
}


export default connect(null, {addInfo})(FillInfo)