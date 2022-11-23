import MainContainer from '../components/MainContainer'
import Title from '../components/Title';
import i_styles from '../styles/socials/Instagram.module.scss'

export default function Instagram() {
  return (
    <MainContainer keywords='analys instagram page' namePage={ i_styles.inst } moduleStyle='inst' >
      <Title classNames={[ i_styles.title, i_styles.title__button ]} title={ 'Instagram' } text='Начать анализ' link='/instagram' backLink='/' />
      
    </MainContainer>
  )
}
