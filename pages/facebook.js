import MainContainer from '../components/MainContainer'
import Title from '../components/Title';
import f_styles from '../styles/socials/Facebook.module.scss'

export default function Facebook() {
  return (
    <MainContainer keywords='analys facebook page' namePage={ f_styles.facebook } moduleStyle='facebook' >
      <Title classNames={[ f_styles.title, f_styles.title__button ]} title={ 'Facebook' } text='Начать анализ' link='/facebook' backLink='/' />
      
    </MainContainer>
  )
}
