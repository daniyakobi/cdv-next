import v_styles from '../styles/socials/Vk.module.scss'
import NavLink from './NavLInk'

export default function VkUsers({ count = users.length, users, view }) {
  return (
    <>
      {
        users.length !== 0 ?
          users.map((item, index) => {
            if (index < count) {
              return (
                <div className={ `${v_styles.vk__tabs_list_item} ${ view == 1 ? v_styles.grid_item : view == 2 ? v_styles.list_item : '' }` } key={ item.id }>
                  <div className={ v_styles.vk__tabs_list_item_head }>
                    <div className={ v_styles.vk__tabs_list_item_avatar }>
                      {
                        item.COMMENTS ?
                          item.COMMENTS[0].avatar && item.COMMENTS.avatar !== '' ?
                            <img src={ item.COMMENTS[0].avatar } alt={ `${ item.name } ${ item.second_name !== 'Фамилия не указана' ? item.second_name : '' }` } />
                            : '' : ''
                      }
                    </div>
                    <div className={ v_styles.vk__tabs_list_item_name }>
                      <p>{ item.COMMENTS[0].first_last_name }</p>
                      <a href={ item.link } rel="noreferrer">{ item.vk_id }</a>
                    </div>
                  </div>
                  <div className={ v_styles.vk__tabs_list_item_stat }>
                    <div className={ v_styles.vk__tabs_list_item_stat_item }>
                      <span>{ item.COMMENTS.length }</span>
                      <span>Комментарии</span>
                    </div>
                    <div className={ v_styles.vk__tabs_list_item_stat_item }>
                      <span>{ item.years !== 0 ? item.years : '-' }</span>
                      <span>Возраст</span>
                    </div>
                    <div className={ v_styles.vk__tabs_list_item_stat_item }>
                      <span>{ item.sex }</span>
                      <span>Пол</span>
                    </div>
                  </div>
                  <NavLink href={ `/vk/${ item.id }` }>
                    <a className={ v_styles.vk__tabs_list_item_link }>
                      Посмотреть профиль
                    </a>
                  </NavLink>
                </div>
              )
            }
          }) : 'Пользователи не найдены'
      }
    </>
  )
}