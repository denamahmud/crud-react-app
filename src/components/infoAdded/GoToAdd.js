import style from '../../style/infoAdded/_btn_info_added.module.scss'

const GoToAdd = ({ goToAnotherPage }) => {
  return (
    <button onClick={() => goToAnotherPage()} className={style.btn_info_added}>
        add new 
    </button>  
  )
}

export default GoToAdd