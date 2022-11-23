import Title from '../components/Title'
import v_styles from '../styles/socials/Vk.module.scss'

const VkContainer = ({ children, classBlock, text, link, backLink }) => {
  return ( 
    <>
    <Title classNames={[ v_styles.title, v_styles.title__button ]} title={ 'Вконтакте' } link={ link } text={ text } backLink={ backLink } />
      <div className={ classBlock }>
        { children }
      </div>
    </>
  );
}

export default VkContainer;