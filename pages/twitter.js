import MainContainer from '../components/MainContainer'
import Title from '../components/Title';
import t_styles from '../styles/socials/Twitter.module.scss'

export default function Twitter() {
  return (
    <MainContainer keywords='analys twitter page' namePage={ t_styles.twitter } moduleStyle='twitter' >
      <Title classNames={[ t_styles.title, t_styles.title__button ]} title={ 'Twitter' } text='Начать анализ' link='/twitter' backLink='/' />
      
    </MainContainer>
  )
}
