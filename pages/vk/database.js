import { useState } from 'react'
import MainContainer from '../../components/MainContainer'
import VkContainer from '../../components/VkContainer'
import VkUsers from '../../components/VkUsers'
import VkGroups from '../../components/VkGroups'
import VkPosts from '../../components/VkPosts'
import VkComments from '../../components/VkComments'
import VkFormCsv from '../../components/VkFormCsv'
import Select from '../../components/inputs/Select'
import InputMultiRange from '../../components/inputs/InputMultiRange'

import user_img from '../../public/illustr-gif-7.gif'
import group_img from '../../public/illustr-gif-3.gif'
import post_img from '../../public/illustr-gif-1.gif'
import comment_img from '../../public/illustr-gif.gif'

import v_styles from '../../styles/socials/Vk.module.scss'

export default function Database({ users, groups, posts, comments }) {
  const [view, setView] = useState(1)
  const [activeModule, setActiveModule] = useState(1)
  const [importModule, setImportModule] = useState(false)
  const [data, setData] = useState({
    users: users, groups: groups, posts: posts, comments: comments
  })
  const list = [
    {
      id: 1,
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M11.9848 15.3462C8.11719 15.3462 4.81433 15.931 4.81433 18.2729C4.81433 20.6148 8.09624 21.2205 11.9848 21.2205C15.8524 21.2205 19.1543 20.6348 19.1543 18.2938C19.1543 15.9529 15.8734 15.3462 11.9848 15.3462Z" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path fillRule="evenodd" clipRule="evenodd" d="M11.9848 12.0059C14.5229 12.0059 16.58 9.94782 16.58 7.40972C16.58 4.87163 14.5229 2.81448 11.9848 2.81448C9.44667 2.81448 7.38858 4.87163 7.38858 7.40972C7.38001 9.93925 9.42382 11.9973 11.9524 12.0059H11.9848Z" stroke="#130F26" strokeWidth="1.42857" strokeLinecap="round" strokeLinejoin="round"/></svg>,
      title: 'Пользователи'
    },
    {
      id: 2,
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.8877 10.8967C19.2827 10.7007 20.3567 9.5047 20.3597 8.0557C20.3597 6.6277 19.3187 5.4437 17.9537 5.2197" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M19.7285 14.2503C21.0795 14.4523 22.0225 14.9253 22.0225 15.9003C22.0225 16.5713 21.5785 17.0073 20.8605 17.2813" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path fillRule="evenodd" clipRule="evenodd" d="M11.8867 14.6638C8.67273 14.6638 5.92773 15.1508 5.92773 17.0958C5.92773 19.0398 8.65573 19.5408 11.8867 19.5408C15.1007 19.5408 17.8447 19.0588 17.8447 17.1128C17.8447 15.1668 15.1177 14.6638 11.8867 14.6638Z" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path fillRule="evenodd" clipRule="evenodd" d="M11.8867 11.8879C13.9957 11.8879 15.7057 10.1789 15.7057 8.06889C15.7057 5.95989 13.9957 4.24989 11.8867 4.24989C9.77766 4.24989 8.06766 5.95989 8.06766 8.06889C8.05966 10.1709 9.75666 11.8809 11.8587 11.8879H11.8867Z" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M5.88472 10.8967C4.48872 10.7007 3.41572 9.5047 3.41272 8.0557C3.41272 6.6277 4.45372 5.4437 5.81872 5.2197" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M4.04388 14.2503C2.69288 14.4523 1.74988 14.9253 1.74988 15.9003C1.74988 16.5713 2.19388 17.0073 2.91188 17.2813" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
      title: 'Группы'
    },
    {
      id: 3,
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16.3028 2.7498H7.65076C4.63876 2.7498 2.74976 4.8838 2.74976 7.9038V16.0498C2.74976 19.0698 4.63076 21.2038 7.65076 21.2038H16.2978C19.3228 21.2038 21.2028 19.0698 21.2028 16.0498V7.9038C21.2068 4.8838 19.3258 2.7498 16.3028 2.7498Z" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path fillRule="evenodd" clipRule="evenodd" d="M10.7032 8.785C10.7032 9.805 9.87723 10.631 8.85723 10.631C7.83823 10.631 7.01123 9.805 7.01123 8.785C7.01123 7.765 7.83823 6.939 8.85723 6.939C9.87623 6.94 10.7022 7.766 10.7032 8.785Z" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M21.207 14.951C20.284 14.001 18.509 12.082 16.579 12.082C14.648 12.082 13.535 16.315 11.678 16.315C9.821 16.315 8.134 14.401 6.646 15.628C5.158 16.854 3.75 19.361 3.75 19.361" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
      title: 'Посты'
    },
    {
      id: 4,
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M19.0714 19.0699C16.0152 22.1263 11.4898 22.7867 7.78642 21.074C7.23971 20.8539 6.79148 20.676 6.36537 20.676C5.17849 20.683 3.70117 21.8339 2.93336 21.067C2.16555 20.2991 3.31726 18.8206 3.31726 17.6266C3.31726 17.2004 3.14642 16.7602 2.92632 16.2124C1.21283 12.5096 1.87411 7.98269 4.93026 4.92721C8.8316 1.02443 15.17 1.02443 19.0714 4.9262C22.9797 8.83501 22.9727 15.1681 19.0714 19.0699Z" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M15.9393 12.413H15.9483" stroke="#130F26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M11.9303 12.413H11.9393" stroke="#130F26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M7.92128 12.413H7.93028" stroke="#130F26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
      title: 'Комментарии'
    }
  ]

  const selectHandler = (e) => {
    setActiveModule(e.target.dataset.id)
  }

  const importHandler = () => {
    setImportModule(!importModule)
  }

  return (
    <MainContainer keywords='vk database page' namePage={ v_styles.vk } moduleStyle='vk'>
      <VkContainer classBlock={ v_styles.vk__database } text='Закрыть' link='/vk' backLink={ '/vk' }>
        <div className={ v_styles.vk__database_content }>
          {
            !importModule ? 
              <>
                <div className={ v_styles.vk__database_title }>
                  <h2>
                    {
                      list.map((item) => {
                        if(item.id == activeModule) {
                          return item.title
                        }
                      })
                    }
                  </h2>
                  <div className={ v_styles.vk__database_title_buttons }>
                    <div className={ view == 1 ? v_styles.active : '' } onClick={() => setView(1)}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 10H7C9 10 10 9 10 7V5C10 3 9 2 7 2H5C3 2 2 3 2 5V7C2 9 3 10 5 10Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17 22H19C21 22 22 21 22 19V17C22 15 21 14 19 14H17C15 14 14 15 14 17V19C14 21 15 22 17 22Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className={ view == 2 ? v_styles.active : '' } onClick={() => setView(2)}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.9 13.5H4.1C2.6 13.5 2 14.14 2 15.73V19.77C2 21.36 2.6 22 4.1 22H19.9C21.4 22 22 21.36 22 19.77V15.73C22 14.14 21.4 13.5 19.9 13.5Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M19.9 2H4.1C2.6 2 2 2.64 2 4.23V8.27C2 9.86 2.6 10.5 4.1 10.5H19.9C21.4 10.5 22 9.86 22 8.27V4.23C22 2.64 21.4 2 19.9 2Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className={ `${v_styles.vk__database_list} ${ activeModule == 4 ? v_styles.comments : '' } ${ view == 1 ? v_styles.grid : view == 2 ? v_styles.list : '' }` }>
                  {
                    activeModule == 1 ? <VkUsers count={ users.length } users={ data.users } view={ view } /> :
                    activeModule == 2 ? <VkGroups count={ groups.length } groups={ data.groups } view={ view } /> : 
                    activeModule == 3 ? <VkPosts count={ posts.length } posts={ data.posts } view={ view } /> :
                    activeModule == 4 ? <VkComments count={ comments.length } comments={ data.comments } view={ view } /> : ''
                  }
                </div>
              </> :
              <div className={ v_styles.vk__database_import }>
                {
                  activeModule == 1 ? <VkFormCsv title='Загрузите .CSV файл с пользователями' api='/api/upload_users' /> :
                  activeModule == 2 ? <VkFormCsv title='Загрузите .CSV файл с группами' api='/api/upload_groups' /> : 
                  activeModule == 3 ? <VkFormCsv title='Загрузите .CSV файл с постами' api='/api/upload_posts' /> :
                  activeModule == 4 ? <VkFormCsv title='Загрузите .CSV файл с комментариями' api='/api/upload_comments' /> : ''
                }
                {
                  activeModule == 1 ? <img src={ user_img.src } className={ v_styles.vk__database_import_image } /> :
                  activeModule == 2 ? <img src={ group_img.src } className={ v_styles.vk__database_import_image } /> : 
                  activeModule == 3 ? <img src={ post_img.src } className={ v_styles.vk__database_import_image } /> :
                  activeModule == 4 ? <img src={ comment_img.src } className={ v_styles.vk__database_import_image } /> : ''
                }
              </div>
          }
        </div>
        <div className={ v_styles.vk__database_filters }>
          <div className={ `${ v_styles.vk__database_filters_block } ${ v_styles.vk__database_filters_select }` }>
            <Select list={ list } handler={ selectHandler } moduleStyle='vk' activeItem={ activeModule } name='' />
          </div>
          {
            activeModule == 1 ? 
              <>
                <div className={ `${ v_styles.vk__database_filters_block }` }>
                  <h4>Количество комментариев</h4>
                  <InputMultiRange 
                    min={0}
                    max={1000}
                    change={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
                  />
                </div>
                <div className={ `${ v_styles.vk__database_filters_block }` }>
                  <h4>Возраст</h4>
                  <InputMultiRange 
                    min={0}
                    max={100}
                    change={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
                  />
                </div>
              </> : <></>
          }
          <button className={ v_styles.vk__database_filters_import } onClick={ importHandler }>
            <span>
              {
                !importModule ?
                  activeModule == 1 ? 'Импорт пользователей' :
                  activeModule == 2 ? 'Импорт групп' : 
                  activeModule == 3 ? 'Импорт постов' :
                  activeModule == 4 ? 'Импорт комментариев' : 'Модуль не найден' :
                  'Закрыть'
              }
            </span>
          </button>
        </div>
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