import { useState } from "react"
import v_styles from '../styles/socials/Vk.module.scss'

const VkFormCsv = ({ title, api }) => {
  const [file, setFile] = useState({
    file: {},
    status: '',
    sendingStatus: false,
    activeButton: false
  })

  const uploadFile = (file) => {
    if(!['text/csv'].includes(file.type)) {
      setFile({ 
        file: file,
        status: 'Разрешены только файлы формата CSV',
        sendingStatus: false,
        activeButton: false
       })
      return false
    }
    return true
  }

  const fileHandler = e => {
    let file = e.target.files[0]
    console.log(file);
    if (file instanceof File) {
      if(uploadFile(file)) {
        setFile({
          file: file,
          status: 'Файл готов к отправке',
          sendingStatus: true,
          activeButton: true
        })
      }
    }
  }

  const handleUsersSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = api
    const formData = new FormData();
    if (file.file instanceof File) {
      formData.append('uploaded_file',file.file)
    }
    try {
        if(formData) {
            let config = {
              headers: {
                "Content-Type": "multipart/form-data"
              }
            }
            await axios.post(apiUrl, formData, config)
              .then((res) => {
                setFile({
                  status: res.data.message,
                  sendingStatus: true
                })
              })
              .catch((e) => {
                setFile({
                  status: e,
                  sendingStatus: false
                })
              })
        }
    } catch (e) {
        console.log(e);
    }
  }

  const clearFile = () => {
    setFile({
      file: {},
      status: '',
      sendingStatus: false,
      activeButton: false
    })
  }

  return (
    <div className={ v_styles.vk__database_import_form }>
      <h3>{ title }</h3>
      <div className={ `${ v_styles.vk__database_import_file } ${ file.file.name ? v_styles.load : '' }` }>
        <input type="file" id="userFile" name="uploaded_file" onChange={ fileHandler } />
        {
          file.file.name ? 
            <span>Выбрать другой файл</span>
            : <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 22.8018H15C20 22.8018 22 20.8018 22 15.8018V9.80176C22 4.80176 20 2.80176 15 2.80176H9C4 2.80176 2 4.80176 2 9.80176V15.8018C2 20.8018 4 22.8018 9 22.8018Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 12.3118L12 15.3118L15 12.3118" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 15.3118V7.31177" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 17.3118C9.89 18.6118 14.11 18.6118 18 17.3118" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
        }
      </div>
      {
        file.file.name ? 
          <>
            <div className={ v_styles.vk__database_import_file_info }>
              <h4>Ваш файл:</h4>
              <p>Имя файла: { file.file.name }</p>
              <p>Тип файла: { file.file.type }</p>
              <p>Размер файла: { file.file.size } Kb</p>
              <p className={ `${ file.sendingStatus ? v_styles.accept : v_styles.error }` }>Статус: <span>{ file.status }</span></p>
            </div>
            <button className={ v_styles.vk__database_import_file_upload } disabled={ file.activeButton ? false : true } onClick={ handleUsersSubmit }>Загрузить</button>
          </>
          : <></>
      }
    </div>
  )
}

export default VkFormCsv