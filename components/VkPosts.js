import Image from 'next/image'
import v_styles from '../styles/socials/Vk.module.scss'
import NavLink from './NavLInk'

const VkPosts = ({ count, posts, view }) => {
  return (
    <>
      {
        posts.length != 0 ?
          posts.map((item, index) => {
            { console.log(item.illustrations) }
            if (index < count) {
              return (
                <div className={ `${v_styles.vk__tabs_list_item} ${v_styles.post} ${ view == 1 ? v_styles.grid_item : view == 2 ? v_styles.list_item : '' }` } key={ item.id }>
                  <div className={ v_styles.vk__tabs_list_item_illustration }>
                    {
                      item.illustrations && item.illustrations !== '' ?
                        <imG src={ item.illustrations } alt={ item.id } /> : <div><span>Нет иллюстрации</span></div>
                    }
                  </div>
                  <div className={ v_styles.vk__tabs_list_item_text }>
                    <p>{ item.text !== '' ? item.text : 'Нет текста поста' }</p>
                  </div>
                  <div className={ v_styles.vk__tabs_list_item_statistics }>
                    <div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.47998 18.35L10.58 20.75C10.98 21.15 11.88 21.35 12.48 21.35H16.28C17.48 21.35 18.78 20.45 19.08 19.25L21.48 11.95C21.98 10.55 21.08 9.35003 19.58 9.35003H15.58C14.98 9.35003 14.48 8.85003 14.58 8.15003L15.08 4.95003C15.28 4.05003 14.68 3.05003 13.78 2.75003C12.98 2.45003 11.98 2.85003 11.58 3.45003L7.47998 9.55003" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10"/>
                        <path d="M2.38 18.35V8.55002C2.38 7.15002 2.98 6.65002 4.38 6.65002H5.38C6.78 6.65002 7.38 7.15002 7.38 8.55002V18.35C7.38 19.75 6.78 20.25 5.38 20.25H4.38C2.98 20.25 2.38 19.75 2.38 18.35Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>{ item.number_of_likes }</span>
                    </div>
                    <div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.0714 19.0699C16.0152 22.1263 11.4898 22.7867 7.78642 21.074C7.23971 20.8539 6.79148 20.676 6.36537 20.676C5.17849 20.683 3.70117 21.8339 2.93336 21.067C2.16555 20.2991 3.31726 18.8206 3.31726 17.6266C3.31726 17.2004 3.14642 16.7602 2.92632 16.2124C1.21283 12.5096 1.87411 7.98269 4.93026 4.92721C8.8316 1.02443 15.17 1.02443 19.0714 4.9262C22.9797 8.83501 22.9727 15.1681 19.0714 19.0699Z" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15.9393 12.413H15.9483" stroke="#130F26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M11.9303 12.413H11.9393" stroke="#130F26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7.92128 12.413H7.93028" stroke="#130F26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>{ item.number_of_comments }</span>
                    </div>
                    <div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.51 4.23001L18.07 8.51001C21.91 10.43 21.91 13.57 18.07 15.49L9.51 19.77C3.75 22.65 1.4 20.29 4.28 14.54L5.15 12.81C5.37 12.37 5.37 11.64 5.15 11.2L4.28 9.46001C1.4 3.71001 3.76 1.35001 9.51 4.23001Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5.44 12H10.84" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>{ item.number_of_reposts }</span>
                    </div>
                  </div>
                  <NavLink href='/vk'>
                    <a className={ v_styles.vk__tabs_list_item_link }>
                      Посмотреть пост
                    </a>
                  </NavLink>
                </div>
              )
            }
          }) : 'Посты не найдены'
      }
    </>
  )
}

export default VkPosts