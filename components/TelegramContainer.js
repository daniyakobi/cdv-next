import Title from './Title'
import t_styles from '../styles/socials/Telegram.module.scss'

const TelegramContainer = ({ children, classBlock, text, link, backLink }) => {
  return ( 
    <>
    <Title classNames={[ t_styles.title, t_styles.title__button ]} title={ 'Телеграм' } link={ link } text={ text } backLink={ backLink } />
      <div className={ classBlock }>
        { children }
      </div>
    </>
  );
}

export default TelegramContainer;