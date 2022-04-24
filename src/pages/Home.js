import React from 'react'
import { connect } from 'react-redux'
import AddButton from '../components/home/AddButton'
import Title from '../components/home/Title'
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { getInfo } from '../redux/actions/Action';
import style from '../style/home/_home.module.scss'
import { Link } from 'react-router-dom';

const Home = ({ info }) => {

  let dispatch = useDispatch()
    
  useEffect(() => {
    dispatch(getInfo())
  })
  
  return (
    <div>
      <Title/>
      {
        info.length ? 
        <div className={style.textStyle}>
          you have added <span>
            <Link to='/info-added'>
               { info.length }
            </Link>
          </span>item{info.length > 1 ? ("s").toLowerCase() : ""} info
        </div> : 
        <div className={style.textStyle}>
          you didn't added any item info
        </div>
      }
      <AddButton/>
    </div>
  )
}
const mapStateToProps = (state) => {
  return{
    info : state.infoUser.userInfo
  }
}
export default connect(mapStateToProps, { getInfo } )(Home)