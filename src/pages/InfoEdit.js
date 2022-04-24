import { connect } from "react-redux"
import { useParams } from "react-router"
import FormEdit from "../components/InfoEdit/FormEdit"
import Title from "../components/InfoEdit/Title"
import { editInfo, getInfo } from '../redux/actions/Action'

const InfoEdit = ({ info }) => {
  
  const { id } = useParams()

  const selectedItem = info.find(item => item.id === id)


  
  return (
    <div>
      <Title/>
      <FormEdit id={id} editInfo={editInfo} selectedItem={selectedItem}/>
    </div>
  )
}

function mapStateToProps(state){
  return {
     info :  state.infoUser.userInfo
   }
  
}
export default connect(mapStateToProps, { editInfo, getInfo })(InfoEdit)
