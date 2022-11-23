import { useState } from 'react'
import axios from 'axios'
import Image from 'next/image'
import TelegramContainer from '../../components/TelegramContainer'
import MainContainer from '../../components/MainContainer'
import t_styles from '../../styles/socials/Telegram.module.scss'
import f_styles from '../../styles/Form.module.scss'

import img from '../../public/illustr-gif-7.gif'

export default function Analys() {
  console.log(t_styles);
  const [form, setForm] = useState({
    channel: ''
  })

  const changeHandler = event => {
    setForm({...form, [event.target.name]: event.target.value})
  }

  const formHandler= async (e) => {
    e.preventDefault()
    let username = 'kd'
    let password = 'kd@onemorepass'
    const apiUrl = 'http://moshme25.beget.tech/api/start_analis/'
    let headers = new Headers()
    headers.set('Authorization', 'Basic ' + Buffer.from(username + ":" + password).toString('base64'))
    headers.set('Access-Control-Allow-Headers', '*')
    try {
        if(form) {
            axios.post(apiUrl, form, { headers })
              .then((res) => {
                console.log(res)
              })
        }
    } catch (e) {
        console.log(e);
    }
  }

  return (
    <MainContainer keywords='telegram analys page' namePage={ t_styles.telegram } moduleStyle='telegram'>
      <TelegramContainer classBlock={ t_styles.telegram__analys } text='Закрыть' link='/telegram' backLink={ '/telegram' }>
        <div className={ t_styles.telegram__analys_form }>
        <h2>Введите ссылку на канал(-ы)</h2>
          <div className={ f_styles.form } noValidate>
            <div className={ f_styles.form__group }>
              <input className={ f_styles.form__input } type='text' placeholder='Ссылка на канал(-ы)' id='channel' name='channel' required onChange={ changeHandler } />
              <svg className={ f_styles.form__input_icon } width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16.04 3.02001L8.16 10.9C7.86 11.2 7.56 11.79 7.5 12.22L7.07 15.23C6.91 16.32 7.68 17.08 8.77 16.93L11.78 16.5C12.2 16.44 12.79 16.14 13.1 15.84L20.98 7.96001C22.34 6.60001 22.98 5.02001 20.98 3.02001C18.98 1.02001 17.4 1.66001 16.04 3.02001Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.91 4.15002C15.58 6.54002 17.45 8.41002 19.85 9.09002" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className={ f_styles.form__input_question }>
                <span>?</span>
              </div> 
              <div className={ f_styles.form__input_question_text }><span>Если каналов несколько, то вводить через запятую без пробела</span></div>
            </div>
            <div className={ f_styles.form__group }>
              <button className={ `${ f_styles.form__button } ${ t_styles.form__button }` } onClick={ formHandler }>Собрать данные</button>
            </div>
          </div>
        </div>
        <div className={ t_styles.telegram__analys_image }>
          <Image src={ img } alt='Изображение анализа' width="1000" height='1000' />
        </div>
      </TelegramContainer>
    </MainContainer>
  )
}
