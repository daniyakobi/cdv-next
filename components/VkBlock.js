import v_styles from '../styles/socials/Vk.module.scss'

const VkBlock = ({ classBlock, title, children }) => {
  return (
    <div className={ `${ v_styles.vk__block} ${ classBlock }` }>
      <div className={ v_styles.vk__block_title }>{ title }</div>
      <div className={ v_styles.vk__block_content }>
        { children }
      </div>
    </div>
  )
}

export default VkBlock