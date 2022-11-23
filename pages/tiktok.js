import MainContainer from '../components/MainContainer'
import Title from '../components/Title';
import t_styles from '../styles/socials/Tiktok.module.scss'

export default function Tiktok() {
  return (
    <MainContainer keywords='analys tiktok page' namePage={ t_styles.tiktok } moduleStyle='tiktok' >
      <Title classNames={[ t_styles.title, t_styles.title__button ]} title={ 'TikTok' } text='Начать анализ' link='/tiktok' backLink='/' />
      
    </MainContainer>
  )
}
