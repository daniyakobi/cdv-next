import MainContainer from '../components/MainContainer'
import Title from '../components/Title';
import t_styles from '../styles/socials/Telegram.module.scss'


export default function Telegram() {
  return (
    <MainContainer keywords='analys telegram page' namePage={ t_styles.telegram } moduleStyle='telegram' >
      <Title classNames={[ t_styles.title, t_styles.title__button ]} title={ 'Telegram' } text='Начать анализ' link='/telegram/analys' backLink='/' />
      
    </MainContainer>
  )
}