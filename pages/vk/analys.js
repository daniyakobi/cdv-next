import { useState } from 'react'
import axios from 'axios'
import Image from 'next/image'
import VkContainer from '../../components/VkContainer'
import MainContainer from '../../components/MainContainer'
import v_styles from '../../styles/socials/Vk.module.scss'
import f_styles from '../../styles/Form.module.scss'

import img from '../../public/vk-analys.png'

export default function Analys() {
  const [form, setForm] = useState({
    keyword: '',
    count_groups: '',
    count_posts: '',
    count_сomments: '',
    vk_token: ''
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
    <MainContainer keywords='vk analys page' namePage={ v_styles.vk } moduleStyle='vk'>
      <VkContainer classBlock={ v_styles.vk__analys } text='Закрыть' link='/vk' backLink={ '/vk' }>
        <div className={ v_styles.vk__analys_form }>
          <h2>Параметры анализа</h2>
          <div className={ f_styles.form } noValidate>
            <div className={ f_styles.form__group }>
              <input className={ f_styles.form__input } type='text' placeholder='Ключевое слово' id='keyword' name='keyword' required onChange={ changeHandler } />
              <svg className={ f_styles.form__input_icon } width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16.04 3.02001L8.16 10.9C7.86 11.2 7.56 11.79 7.5 12.22L7.07 15.23C6.91 16.32 7.68 17.08 8.77 16.93L11.78 16.5C12.2 16.44 12.79 16.14 13.1 15.84L20.98 7.96001C22.34 6.60001 22.98 5.02001 20.98 3.02001C18.98 1.02001 17.4 1.66001 16.04 3.02001Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.91 4.15002C15.58 6.54002 17.45 8.41002 19.85 9.09002" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className={ f_styles.form__input_question }>
                <span>?</span>
              </div> 
              <div className={ f_styles.form__input_question_text }><span>Ключевое слово, по которому происходит поиск групп</span></div>
            </div>
            <div className={ f_styles.form__group }>
              <input className={ f_styles.form__input } type='text' placeholder='Количество групп' id='countGroup' name='count_groups' required onChange={ changeHandler } />
              <svg className={ f_styles.form__input_icon } width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.16 11.6718C9.06 11.6618 8.94 11.6618 8.83 11.6718C6.45 11.5918 4.56 9.64176 4.56 7.24176C4.56 4.79176 6.54 2.80176 9 2.80176C11.45 2.80176 13.44 4.79176 13.44 7.24176C13.43 9.64176 11.54 11.5918 9.16 11.6718Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16.41 4.80176C18.35 4.80176 19.91 6.37176 19.91 8.30176C19.91 10.1918 18.41 11.7318 16.54 11.8018C16.46 11.7918 16.37 11.7918 16.28 11.8018" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.16 15.3618C1.74 16.9818 1.74 19.6218 4.16 21.2318C6.91 23.0718 11.42 23.0718 14.17 21.2318C16.59 19.6118 16.59 16.9718 14.17 15.3618C11.43 13.5318 6.92 13.5318 4.16 15.3618Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18.34 20.8018C19.06 20.6518 19.74 20.3618 20.3 19.9318C21.86 18.7618 21.86 16.8318 20.3 15.6618C19.75 15.2418 19.08 14.9618 18.37 14.8018" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className={ f_styles.form__input_question }>
                <span>?</span>
              </div> 
              <div className={ f_styles.form__input_question_text }><span>Количество групп, которые анализируем</span></div>
            </div>
            <div className={ f_styles.form__group }>
              <input className={ f_styles.form__input } type='text' placeholder='Количество постов' id='countPosts' name='count_posts' required  onChange={ changeHandler } />
              <svg className={ f_styles.form__input_icon } width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2.67001 18.95L7.60001 15.64C8.39001 15.11 9.53001 15.17 10.24 15.78L10.57 16.07C11.35 16.74 12.61 16.74 13.39 16.07L17.55 12.5C18.33 11.83 19.59 11.83 20.37 12.5L22 13.9" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className={ f_styles.form__input_question }>
                <span>?</span>
              </div>
              <div className={ f_styles.form__input_question_text }><span>Количество постов, которые анализируем</span></div> 
            </div>
            <div className={ f_styles.form__group }>
              <input className={ f_styles.form__input } type='text' placeholder='Количество комментариев' id='countComments' name='count_сomments' required  onChange={ changeHandler } />
              <svg className={ f_styles.form__input_icon } width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.5 19.8018H8C4 19.8018 2 18.8018 2 13.8018V8.80176C2 4.80176 4 2.80176 8 2.80176H16C20 2.80176 22 4.80176 22 8.80176V13.8018C22 17.8018 20 19.8018 16 19.8018H15.5C15.19 19.8018 14.89 19.9518 14.7 20.2018L13.2 22.2018C12.54 23.0818 11.46 23.0818 10.8 22.2018L9.3 20.2018C9.14 19.9818 8.77 19.8018 8.5 19.8018Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 8.80176H17" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 13.8018H13" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className={ f_styles.form__input_question }>
                <span>?</span>
              </div> 
              <div className={ f_styles.form__input_question_text }><span>Количество комментариев, которые анализируем</span></div>
            </div>
            <div className={ f_styles.form__group }>
              <input className={ f_styles.form__input } type='text' placeholder='ВК токен' id='vkToken' name='vk_token' required  onChange={ changeHandler } />
              <svg className={ f_styles.form__input_icon } width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.79 14.93C17.73 16.98 14.78 17.61 12.19 16.8L7.47999 21.5C7.13999 21.85 6.46999 22.06 5.98999 21.99L3.80999 21.69C3.08999 21.59 2.41999 20.91 2.30999 20.19L2.00999 18.01C1.93999 17.53 2.16999 16.86 2.49999 16.52L7.19999 11.82C6.39999 9.22001 7.01999 6.27001 9.07999 4.22001C12.03 1.27001 16.82 1.27001 19.78 4.22001C22.74 7.17001 22.74 11.98 19.79 14.93Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.89001 17.49L9.19001 19.79" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.5 11C15.3284 11 16 10.3284 16 9.5C16 8.67157 15.3284 8 14.5 8C13.6716 8 13 8.67157 13 9.5C13 10.3284 13.6716 11 14.5 11Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className={ f_styles.form__input_question }>
                <span>?</span>
              </div> 
              <div className={ f_styles.form__input_question_text }><span>Access Token VK</span></div>
            </div>
            <div className={ f_styles.form__group }>
              <button className={ `${ f_styles.form__button } ${ v_styles.form__button }` } onClick={ formHandler }>Начать анализ</button>
            </div>
          </div>
        </div>
        <div className={ v_styles.vk__analys_image }>
          <Image src={ img } alt='Изображение анализа' width="1000" height='1000' />
        </div>
      </VkContainer>
    </MainContainer>
  )
}
