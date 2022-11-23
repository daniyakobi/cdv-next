import MainContainer from '../components/MainContainer'
import Title from '../components/Title';
import y_styles from '../styles/socials/Youtube.module.scss'

export default function Youtube() {
  return (
    <MainContainer keywords='analys youtube page' namePage={ y_styles.youtube } moduleStyle='youtube' >
      <Title classNames={[ y_styles.title, y_styles.title__button ]} title={ 'YouTube' } text='Начать анализ' link='/youtube' backLink='/' />
      
    </MainContainer>
  )
}
