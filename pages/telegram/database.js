import { useState, useEffect } from 'react'
import TelegramContainer from '../../components/TelegramContainer'
import MainContainer from '../../components/MainContainer'
import Select from '../../components/inputs/Select'
import t_styles from '../../styles/socials/Telegram.module.scss'
import f_styles from '../../styles/Form.module.scss'
import tb_styles from '../../styles/Table.module.scss'

export default function Database({ channels, countries, supplies }) {
  const [supps, setSupps] = useState(supplies)
  const [country, setCountry] = useState({ id: 0, title: 'Все страны' })
  const [filters, setFilters] = useState({
    search: '',
    keyword: 'Все слова'
  })
  const [loading, setLoading] = useState(false)
  const [channel, setChannel] = useState({ id: 0, title: 'Все каналы' })
  const [activeCountryModule, setActiveCountryModule] = useState(0)
  const [activeChannelModule, setActiveChannelModule] = useState(0)

  const createCountriesList = () => {
    let all_countries = []
    all_countries.push({ id: 0, title: 'Все страны' })
    countries.forEach((item, index) => {
      if(item.name !== 'Россия') {
        all_countries.push({ id: index + 1, title: item.name })
      }
    }) 
    return all_countries
  }
  const createChannelsList = () => {
    let all_channels = []
    all_channels.push({ id: 0, title: 'Все каналы' })
    channels.forEach((item, index) => all_channels.push({ id: index + 1, title: item.name }) )
    return all_channels
  }

  const [allCountries, setAllCountries] = useState(createCountriesList())
  const [chans, setChannels] = useState(createChannelsList())

  // console.log('Все поставки', supps);
  // console.log(chans);
  // console.log(allCountries);

  const searchHandler = (value) => {
    setFilters({...filters, search: value })
    const tmpData = data.forEach((item) => {
      item.supplies.filter(sup => {
        if(sup && sup.country) {
          return sup.country.toLowerCase().includes(filters.search.toLowerCase())
        }
      })
    })
    setData(tmpData)
    if(filters.search === '') {
      setData(channels)
    }
  }

  const clearHandler = () => {
    setFilters({
      search: '',
      keyword: 'Все слова' 
    })
    setCountry({ id: 0, title: 'Все страны' })
    setChannel({ id: 0, title: 'Все каналы' })
    setActiveCountryModule(0)
    setActiveChannelModule(0)
    setChannels(chans)
    setSupps(supplies)
  }

  const selectCountryHandler = (val = 0) => {
    let value = val
    let tmpCountry = allCountries.filter(country => {
      return country.id == value
    })
    setActiveCountryModule(value)
    setCountry(tmpCountry[0])
  }

  const selectChannelHandler = (val = 0) => {
    let value = val
    setActiveChannelModule(value)
    let tmpChannel = chans.filter(chan => {
      return chan.id == value
    })
    setChannel(tmpChannel[0])
  }

  // Экспорт таблицы в docx
  const exportDocx = () => {
    
  }

  // Фильтр по странам
  useEffect(() => {
    setLoading(true)
    let tmp = []
    if(country.id == 0) setSupps(supplies)
    else {
      tmp = supps.filter((sup) => {
        return sup.name === country.title
      })
      setSupps(tmp)
    }
  }, [activeCountryModule, country, loading])
  // Фильтр по каналам
  useEffect(() => {
    setLoading(true)
    let tmpCountry = [], tmp = []
    if(channel.id == 0) setSupps(supplies)
    else {
      supps.forEach((item) => {
        tmpCountry.push({
          id: item.id,
          name: item.name,
          created_at: item.created_at,
          updated_at: item.updated_at,
          supplies: item.supplies.filter((sup) => {
            return sup.posts.channel === channel.title
          })
        })
      })
      tmp = tmpCountry.filter((item) => {
        return item.supplies.length != 0
      })
      setSupps(tmp)
      // console.log('Фильтр по каналам', tmpCountry);
    }
  }, [activeChannelModule, channel, loading])

  useEffect(() => {
    setLoading(false)
  }, [supps])

  return (
    <MainContainer keywords='telegram analys page' namePage={ t_styles.telegram } moduleStyle='telegram'>
      <TelegramContainer classBlock={ t_styles.telegram__database } text='Начать анализ' link='/telegram/analys' backLink={ '/telegram' }>
        <div className={ t_styles.telegram__database_filters }>
          <div className={ t_styles.telegram__database_filters_block }>
            <input className={ t_styles.telegram__database_filters_search } type='text' placeholder='Поиск...' name='search' id='search' onChange={ (e) => { searchHandler(e.target.value) } } value={ filters.search } />
          </div>
          <div className={ t_styles.telegram__database_filters_block }>
            <Select list={ allCountries } handler={ (e) => selectCountryHandler(e.target.dataset.id ? e.target.dataset.id : e.target.parentElement.dataset.id) } moduleStyle='telegram' activeItem={ activeCountryModule } name={ t_styles.telegram__database_filters_select } classes={ t_styles.telegram__database_filters_select_items } />
          </div>
          <div className={ t_styles.telegram__database_filters_block }>
            <Select list={ chans } handler={ (e) => selectChannelHandler(e.target.dataset.id ? e.target.dataset.id : e.target.parentElement.dataset.id) } moduleStyle='telegram' activeItem={ activeChannelModule } name={ t_styles.telegram__database_filters_select } classes={ t_styles.telegram__database_filters_select_items } />
          </div>
          <button className={ t_styles.telegram__database_filters_clear } onClick={ exportDocx }>Экспорт в docx</button>
          <button className={ t_styles.telegram__database_filters_clear } onClick={ clearHandler }>Сбросить</button>
        </div>
        <div className={ `${ t_styles.telegram__database_table } ${ tb_styles.table }` }>
          <div className={ `${ tb_styles.table__head } ${ t_styles.table__head }` }>
            <div className={ `${ tb_styles.table__column } ${ t_styles.table__column } ${ tb_styles.center }` }><p>id</p></div>
            <div className={ `${ tb_styles.table__column } ${ t_styles.table__column } ${ tb_styles.center }` }><p>Страна</p></div>
            <div className={ `${ tb_styles.table__column } ${ tb_styles.table__column_block } ${ t_styles.table__column_block } ${ t_styles.table__column } ${ tb_styles.center }` }>
              <div className={ `${ tb_styles.table__column } ${ t_styles.table__column } ${ tb_styles.center }` }><p>Образец ВВТ</p></div>
              <div className={ `${ tb_styles.table__column } ${ t_styles.table__column } ${ tb_styles.center }` }><p>Количество, шт</p></div>
              <div className={ `${ tb_styles.table__column } ${ t_styles.table__column } ${ tb_styles.center }` }><p>Дата поставки</p></div>
              <div className={ `${ tb_styles.table__column } ${ t_styles.table__column } ${ tb_styles.center }` }><p>Ключевые слова</p></div>
              <div className={ `${ tb_styles.table__column } ${ t_styles.table__column } ${ tb_styles.center }` }><p>Вид перевозки</p></div>
              <div className={ `${ tb_styles.table__column } ${ t_styles.table__column } ${ tb_styles.center }` }><p>Канал</p></div>
            </div>
          </div>
          <div className={ `${ tb_styles.table__list } ${ supps.length == 0 ? tb_styles.table__list_empty : '' }` }>
            {
              !loading && supps.map((sup) => {
                  if(sup.name !== 'Россия') {
                    return(
                      <div className={ `${ tb_styles.table__row } ${ t_styles.table__row }` } >
                        <div className={ `${ tb_styles.table__column } ${ t_styles.table__column } ${ tb_styles.top }` }><p>{ sup.id }</p></div>
                        <div className={ `${ tb_styles.table__column } ${ t_styles.table__column } ${ tb_styles.top }` }><p>{ sup ? sup.name : 'Неизвестно' }</p></div>
                        <div className={ `${ tb_styles.table__column } ${ tb_styles.table__column_col } ${ t_styles.table__column } ${ tb_styles.top }` }>
                          {
                            sup.supplies.map((item) => {
                              return(
                                <div className={ `${ tb_styles.table__row } ${ tb_styles.table__row_block } ${ t_styles.table__row }` } >
                                  <div className={ `${ tb_styles.table__column } ${ t_styles.table__column } ${ tb_styles.top }` }><p>{ item.tobject.name }</p></div>
                                  <div className={ `${ tb_styles.table__column } ${ t_styles.table__column } ${ tb_styles.top }` }><p>{ item.count }</p></div>
                                  <div className={ `${ tb_styles.table__column } ${ t_styles.table__column } ${ tb_styles.top }` }><p>{ item.posts.date.split(' ')[0] }</p></div>
                                  
                                  <div className={ `${ tb_styles.table__column } ${ t_styles.table__column } ${ tb_styles.top }` }><div>
                                    { item.keywords ? item.keywords.map(keyword => {
                                        return (
                                          <p>
                                            { keyword.text }
                                          </p>
                                        )
                                      }) : 'Нет слов'
                                    }
                                  </div></div>
                                  <div className={ `${ tb_styles.table__column } ${ t_styles.table__column } ${ tb_styles.top }` }><p>{ item.transfer_type ? item.transfer_type : '-' }</p></div>
                                  <div className={ `${ tb_styles.table__column } ${ t_styles.table__column } ${ tb_styles.top }` }><p>{ item.posts.channel }</p></div>
                                </div>
                              )
                            })
                          }
                        </div>
                      </div>
                    )
                  }
                })
            }
          </div>
        </div>
      </TelegramContainer>
    </MainContainer>
  )
}

export const getServerSideProps = async () => {
  let username = 'kd'
  let password = 'kd@onemorepass'
  let headers = new Headers()
  headers.set('Authorization', 'Basic ' + Buffer.from(username + ":" + password).toString('base64'))

  const res_channels = await fetch('http://moshme25.beget.tech/api/telegram_supply_all_grouped_by_channel', { method: 'GET', headers: headers })
  const channels = await res_channels.json()
  const res_countries = await fetch('http://moshme25.beget.tech/api/countries', { method: 'GET', headers: headers })
  const countries = await res_countries.json()
  const res_supplies = await fetch('http://moshme25.beget.tech/api/telegram_supply_all_grouped_by_country', { method: 'GET', headers: headers })
  const supplies = await res_supplies.json()
  
  return {
    props: {
      channels, countries, supplies
    }
  };
};