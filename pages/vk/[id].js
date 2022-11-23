import { useRouter } from 'next/router'
import v_style from '../../styles/socials/Vk.module.scss'

export default function VkDetails({ data }) {
  return (
    <MainContainer keywords='vk details database page' namePage={ v_styles.vk } moduleStyle='vk'>
      <VkContainer classBlock={ v_styles.vk__database } text='Закрыть' link='/vk' backLink={ '/vk' }>
        { data.id }
      </VkContainer>
    </MainContainer>
  )
}

export const getServerSideProps = async () => {
  let username = 'kd'
  let password = 'kd@onemorepass'
  let headers = new Headers()
  headers.set('Authorization', 'Basic ' + Buffer.from(username + ":" + password).toString('base64'))

  const { query } = useRouter()

  const res_data = await fetch(`http://moshme25.beget.tech/api/social_users/${ query.id }`, { method: 'GET', headers: headers })
  const data = await res_data.json()
  
  return {
    props: {
      data
    }
  };
};