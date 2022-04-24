import style2 from '../../style/home/_btn_home.module.scss'
import { useNavigate  } from 'react-router-dom';

const AddButton = () => {

  const navigate = useNavigate();


  const goToAnotherPage = () => {

    navigate("/fill-info");
  }
  return (

      <button className={style2.btn_home} onClick={() => goToAnotherPage()}>
          add new
      </button>

  )
}

export default AddButton