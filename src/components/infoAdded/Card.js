import style from  '../../style/infoAdded/_card.module.scss';
import '../../style/style.css';
import { useNavigate  } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import GoToAdd from './GoToAdd';

const Card = ({ data, deleteInfo }) => {
    

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const goToAnotherPage = () => {

    navigate("/fill-info");
    
  }


  const deleteInfoFun = (id) => {
    // window.location.reload(false)
    dispatch(deleteInfo(id))


  }


  const goToEdit = (id) => {
    navigate(`/info-edit/${id}`);
  }
  return (
    <div>
    

     
      <table>
   
    <thead>
      <tr>
        <th>first name</th>
        <th>last name</th>
        <th>age</th>
        <th>fav color</th>
      </tr>
    </thead>


   
      {data && (data.map(item => {

        return (
          (
            <tbody key={item.id}>
              <tr>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.age}</td>
                <td>{item.fav_color}</td>
                <td className={style.btnStyle} onClick={() => goToEdit(item.id)}>
                  
                    <div className='icon-pencil'>
                    </div>
               
              
                </td>
                <td className={style.btnStyle} onClick={() => deleteInfoFun(item.id)}>
                  <div className='icon-times'>
                  </div>
                </td>
              </tr>
            </tbody>
          )
        )
      
        }))}

   
   </table>
    

    <GoToAdd goToAnotherPage={goToAnotherPage}/>
    </div>
    
   
  )
}

export default Card