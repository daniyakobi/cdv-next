import v_styles from '../styles/socials/Vk.module.scss'
import NavLink from './NavLInk'

const VkGroups = ({ count, groups, view }) => {
  return (
    <>
      {
        groups.length != 0 ?
          groups.map((item, index) => {
            if (index < count) {
              return (
                <div className={ `${v_styles.vk__tabs_list_item} ${ view == 1 ? v_styles.grid_item : view == 2 ? v_styles.list_item : '' }` } key={ item.id }>
                  <div className={ v_styles.vk__tabs_list_item_head }>
                    <div className={ v_styles.vk__tabs_list_item_name }>
                      <p>{ item.name }</p>
                      <a href={ item.link } target='_blank'>{ item.group_id }</a>
                    </div>
                  </div>
                  <div className={ v_styles.vk__tabs_list_item_stat }>
                    <div className={ v_styles.vk__tabs_list_item_stat_item }>
                      <span>{ item.POSTS.reduce((partialSum, a) => partialSum + a.number_of_comments, 0) }</span>
                      <span>Комментарии</span>
                    </div>
                    <div className={ v_styles.vk__tabs_list_item_stat_item }>
                      <span>{ item.number_of_participants }</span>
                      <span>Подписчики</span>
                    </div>
                    <div className={ v_styles.vk__tabs_list_item_stat_item }>
                      <span>{ item.number_of_uploaded_posts }</span>
                      <span>Посты</span>
                    </div>
                  </div>
                  <NavLink href='/vk'>
                    <a className={ v_styles.vk__tabs_list_item_link }>
                      Посмотреть группу
                    </a>
                  </NavLink>
                </div>
              )
            }
          }) : 'Группы не найдены'
      }
    </>
  )
}

export default VkGroups