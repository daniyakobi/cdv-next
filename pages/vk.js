import { useState } from 'react'
import MainContainer from '../components/MainContainer'
import VkBlock from '../components/VkBlock'
import VkUsers from '../components/VkUsers'
import VkGroups from '../components/VkGroups'
import VkContainer from '../components/VkContainer'
import NavLink from '../components/NavLInk'
import v_styles from '../styles/socials/Vk.module.scss'

import { Line, Doughnut, Bar } from 'react-chartjs-2'
import Chart from 'chart.js/auto';
import { LineConfig, DoughnutConfig, BarConfig } from '../config/ChartsConfig'

export default function Vk({ users, groups, posts, comments }) {
  // console.log(comments);
  const [tab, setTab] = useState(1)
  Chart.defaults.font.family = 'Gilroy';

  const tabHandler = (id) => {
    setTab(id)
  }

  const dataActivity = {
    labels: ['Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь'],
    datasets: [
      {
        // label for our chart
        label: [],
        fill: true,
        data: [
          comments.filter((item) => item.date_of_publication.split('-')[0] === '2022' && item.date_of_publication.split('-')[1] === '02').length,
          comments.filter((item) => item.date_of_publication.split('-')[0] === '2022' && item.date_of_publication.split('-')[1] === '03').length,
          comments.filter((item) => item.date_of_publication.split('-')[0] === '2022' && item.date_of_publication.split('-')[1] === '04').length,
          comments.filter((item) => item.date_of_publication.split('-')[0] === '2022' && item.date_of_publication.split('-')[1] === '05').length,
          comments.filter((item) => item.date_of_publication.split('-')[0] === '2022' && item.date_of_publication.split('-')[1] === '06').length,
          comments.filter((item) => item.date_of_publication.split('-')[0] === '2022' && item.date_of_publication.split('-')[1] === '07').length,
          comments.filter((item) => item.date_of_publication.split('-')[0] === '2022' && item.date_of_publication.split('-')[1] === '08').length,
          comments.filter((item) => item.date_of_publication.split('-')[0] === '2022' && item.date_of_publication.split('-')[1] === '09').length
        ],
        // color of the line chart
        borderColor: 'rgba(38, 136, 235, 1)',
        // partially transparent part below our line graph
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        borderWidth: 2,
        pointRadius: 2,
        pointHoverRadius: 5,
        borderCapStyle: 'butt',
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(38, 136, 235, 1)',
        pointHoverBorderColor: 'rgba(38, 136, 235, 1)',
        pointHoverBorderWidth: 2
      }
    ]
  }
  const dataGender = {
    labels: [
      'Мужской',
      'Женский',
    ],
    datasets: [{
      data: [
        users.filter(item => item.sex === 'М').length, 
        users.filter(item => item.sex === 'Ж').length
      ],
      backgroundColor: [ '#2688EB', '#9CC9FF' ],
      hoverOffset: 3,
      borderRadius: 10,
      hoverBackgroundColor: [ '#69ADFF', '#69ADFF' ],
      hoverBorderColor: [ '#2688EB', '#2688EB' ]
    }]
  }
  const dataOld = {
    labels: [ '10-20', '21-30', '31-40', '41-50', '51+', 'Не указан' ],
    datasets: [{
      axis: 'y',
      data: [ 
        users.filter(item => item.years > 10 && item.years < 20).length,
        users.filter(item => item.years > 21 && item.years < 30).length,
        users.filter(item => item.years > 31 && item.years < 40).length,
        users.filter(item => item.years > 41 && item.years < 50).length,
        users.filter(item => item.years > 51).length,
        users.filter(item => item.years == 0).length
      ],
      fill: false,
      backgroundColor: [ '#2688EB', '#2688EB', '#2688EB', '#2688EB', '#2688EB', '#2688EB', '#2688EB' ],
      borderRadius: 20,
      borderWidth: 1,
      hoverBackgroundColor: [ '#69ADFF', '#69ADFF', '#69ADFF', '#69ADFF', '#69ADFF', '#69ADFF', '#69ADFF' ],
      hoverBorderColor: [ '#2688EB', '#2688EB', '#2688EB', '#2688EB', '#2688EB', '#2688EB', '#2688EB' ]
    }]
  }

  const sort_users = users.sort((a, b) => a.COMMENTS.length - b.COMMENTS.length ).reverse()
  const sort_groups = groups.sort((a, b) => a.number_of_participants - b.number_of_participants ).reverse()
  
  return (
    <MainContainer keywords='analys vk page' namePage={ v_styles.vk } moduleStyle='vk' >
      <VkContainer classBlock={ v_styles.vk__wrapper }  text='Начать анализ' link='/vk/analys' backLink='/'>
      <>
        <div className={ v_styles.vk__block }>
          <div className={ v_styles.vk__stat }>
            <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M37.4524 47.9568C25.3661 47.9568 15.0447 49.7842 15.0447 57.1027C15.0447 64.4211 25.3006 66.314 37.4524 66.314C49.5387 66.314 59.8572 64.4836 59.8572 57.1682C59.8572 49.8527 49.6042 47.9568 37.4524 47.9568Z" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M37.4524 37.5185C45.384 37.5185 51.8125 31.0869 51.8125 23.1554C51.8125 15.2238 45.384 8.79524 37.4524 8.79524C29.5209 8.79524 23.0893 15.2238 23.0893 23.1554C23.0625 31.0601 29.4494 37.4917 37.3512 37.5185H37.4524Z" stroke="#130F26" strokeWidth="1.42857" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div>{ users.length }</div>
            <span>Пользователи</span>
          </div>
          <div className={ v_styles.vk__stat }>
            <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M55.899 34.0522C60.2584 33.4397 63.6147 29.7022 63.6241 25.1741C63.6241 20.7116 60.3709 17.0116 56.1053 16.3116" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M61.6515 44.5322C65.8734 45.1634 68.8202 46.6416 68.8202 49.6884C68.8202 51.7853 67.4327 53.1478 65.189 54.0041" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M37.1459 45.8244C27.1022 45.8244 18.524 47.3463 18.524 53.4244C18.524 59.4994 27.049 61.065 37.1459 61.065C47.1897 61.065 55.7647 59.5588 55.7647 53.4775C55.7647 47.3963 47.2428 45.8244 37.1459 45.8244Z" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M37.1459 37.1497C43.7365 37.1497 49.0803 31.8091 49.0803 25.2153C49.0803 18.6247 43.7365 13.2809 37.1459 13.2809C30.5553 13.2809 25.2115 18.6247 25.2115 25.2153C25.1865 31.7841 30.4896 37.1278 37.0584 37.1497H37.1459Z" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18.3899 34.0522C14.0274 33.4397 10.6743 29.7022 10.6649 25.1741C10.6649 20.7116 13.918 17.0116 18.1837 16.3116" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12.6371 44.5322C8.41526 45.1634 5.46838 46.6416 5.46838 49.6884C5.46838 51.7853 6.85588 53.1478 9.09963 54.0041" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div>{ groups.length }</div>
            <span>Группы</span>
          </div>
          <div className={ v_styles.vk__stat }>
            <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M50.9459 8.59312H23.9084C14.4959 8.59312 8.59277 15.2619 8.59277 24.6994V50.1556C8.59277 59.5931 14.4709 66.2619 23.9084 66.2619H50.9303C60.3834 66.2619 66.2584 59.5931 66.2584 50.1556V24.6994C66.2709 15.2619 60.3928 8.59312 50.9459 8.59312Z" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M33.4472 27.4531C33.4472 30.6406 30.8659 33.2219 27.6784 33.2219C24.494 33.2219 21.9097 30.6406 21.9097 27.4531C21.9097 24.2656 24.494 21.6844 27.6784 21.6844C30.8628 21.6875 33.444 24.2687 33.4472 27.4531Z" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M66.2719 46.7219C63.3875 43.7531 57.8406 37.7562 51.8094 37.7562C45.775 37.7562 42.2969 50.9844 36.4938 50.9844C30.6906 50.9844 25.4188 45.0031 20.7688 48.8375C16.1187 52.6687 11.7188 60.5031 11.7188 60.5031" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div>{ posts.length }</div>
            <span>Посты</span>
          </div>
          <div className={ v_styles.vk__stat }>
            <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M59.598 59.5933C50.0475 69.1448 35.9055 71.2084 24.3326 65.8563C22.6241 65.1684 21.2234 64.6125 19.8918 64.6125C16.1828 64.6345 11.5661 68.2308 9.16675 65.8343C6.76735 63.4347 10.3664 58.8144 10.3664 55.083C10.3664 53.7512 9.83255 52.3755 9.14476 50.6637C3.7901 39.0926 5.85659 24.9459 15.4071 15.3975C27.5987 3.20135 47.4063 3.20135 59.598 15.3944C71.8117 27.6094 71.7897 47.4003 59.598 59.5933Z" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M49.8106 38.7906H49.8388" stroke="#130F26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M37.2826 38.7906H37.3107" stroke="#130F26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M24.7545 38.7906H24.7826" stroke="#130F26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div>{ comments.length }</div>
            <span>Комментарии</span>
          </div>
          <NavLink href='/vk/database'>
            <a className={ v_styles.vk__stat }>
              <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M46.0555 8.63063H25.2649C18.7649 8.60563 13.4368 13.7869 13.2837 20.2838V53.7619C13.1399 60.365 18.3743 65.8369 24.9774 65.9838C25.0743 65.9838 25.168 65.9869 25.2649 65.9838H50.2305C56.7743 65.7181 61.9305 60.3119 61.8837 53.7619V25.1181L46.0555 8.63063Z" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M45.2346 8.59375V17.6844C45.2346 22.1219 48.8221 25.7188 53.2596 25.7313H61.869" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M44.6501 47.9953H27.7751" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M38.26 36.2688H27.7725" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>База данных</span>
            </a>
          </NavLink>
        </div>
        <VkBlock classBlock={ v_styles.vk__activity } title='Активность пользователей'>
          <Line data={ dataActivity } options={ LineConfig } />
        </VkBlock>
        <VkBlock classBlock={ v_styles.vk__info } title='Наибольшая активность'>
          <div className={ v_styles.vk__tabs_head }>
            <div onClick={ () => tabHandler(1) } className={ `${ v_styles.vk__tab } ${ tab === 1 ? v_styles.active : '' }` }><span>Пользователи</span></div>
            <div onClick={ () => tabHandler(2) } className={ `${ v_styles.vk__tab } ${ tab === 2 ? v_styles.active : '' }` }><span>Группы</span></div>
          </div>
          <div className={ v_styles.vk__tabs_list }>
            { tab === 1 ? <VkUsers count={ 3 } users={ sort_users } /> : tab === 2 ? <VkGroups count={ 3 } groups={ sort_groups } /> : 'Не найдено(' }
          </div>
        </VkBlock>
        <VkBlock classBlock={ v_styles.vk__gender } title='Пол пользователей'>
          <Doughnut data={ dataGender } options={ DoughnutConfig } />
        </VkBlock>
        <VkBlock classBlock={ v_styles.vk__old } title='Возраст пользователей'>
          <Bar data={ dataOld } options={ BarConfig } />
        </VkBlock>
      </>
      </VkContainer>      
    </MainContainer>
  )
}

export const getServerSideProps = async () => {
  let username = 'kd'
  let password = 'kd@onemorepass'
  let headers = new Headers()
  headers.set('Authorization', 'Basic ' + Buffer.from(username + ":" + password).toString('base64'))

  const res_users = await fetch('http://moshme25.beget.tech/api/social_users', { method: 'GET', headers: headers })
  const users = await res_users.json()
  const res_groups = await fetch('http://moshme25.beget.tech/api/social_groups', { method: 'GET', headers: headers })
  const groups = await res_groups.json()
  const res_posts = await fetch('http://moshme25.beget.tech/api/social_posts', { method: 'GET', headers: headers })
  const posts = await res_posts.json()
  const res_comments = await fetch('http://moshme25.beget.tech/api/social_сomments', { method: 'GET', headers: headers })
  const comments = await res_comments.json()
  
  return {
    props: {
      users, groups, posts, comments
    }
  };
};