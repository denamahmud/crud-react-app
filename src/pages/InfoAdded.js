import Card from '../components/infoAdded/Card';
import Title from '../components/infoAdded/Title';
import { connect } from 'react-redux';
import { getInfo, deleteInfo } from '../redux/actions/Action'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const InfoAdded = ({ info }) => {


  let dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getInfo())
  }, [])

  return (
    <div>
      <Title/>
      <Card data={info} deleteInfo={deleteInfo}/>
    </div>
  )
}

const mapStateToProps = (state) => {
      return{
        info : state.infoUser.userInfo
      }
}
export default connect(mapStateToProps, { getInfo })(InfoAdded)