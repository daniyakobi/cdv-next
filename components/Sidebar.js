import NavLink from './NavLInk'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo.png'

import s_styles from '../styles/Sidebar.module.scss'
import m_styles from '../styles/Menu.module.scss'

const Sidebar = ({ moduleStyle }) => {
  let ms = '', mms = ''
  const modules = {
    0: 'vk',
    1: 'telegram',
    2: 'facebook',
    3: 'twitter',
    4: 'inst',
    5: 'youtube',
    6: 'tiktok'
  }
  for (let value of Object.values(modules)) {
    if(moduleStyle === value) {
      ms = s_styles[moduleStyle]
      mms = m_styles[moduleStyle]
    }
  }
  
  return (
    <div className={ `navigation__sidebar ${ s_styles.sidebar } ${ ms }` }>
        <div className={ s_styles.sidebar__logo }>
          <Link href='/'><a>Code <span>da-Vinchi</span></a></Link>
        </div>
        <Link href='/profile'>
          <a className={ s_styles.sidebar__user }>
            <Image src={ logo } alt='Аватар' width="75" height='75' />
            <span>admin</span>
          </a>
        </Link>
        <div className={ s_styles.sidebar__menu }>
          <ul className={ `${ m_styles.menu } ${ mms }` }>
            <li className={ `${ m_styles.menu__item }` }>
              <NavLink href='/' activeClassName={ m_styles.active }>
                <a className={ mms !== '' ? m_styles.active : '' }>
                  <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.81664 18.9583H4.44998C2.77498 18.9583 1.96664 18.1833 1.96664 16.5833V3.41666C1.96664 1.81666 2.78331 1.04166 4.44998 1.04166H7.81664C9.49164 1.04166 10.3 1.81666 10.3 3.41666V16.5833C10.3 18.1833 9.48331 18.9583 7.81664 18.9583ZM4.44998 2.29166C3.39164 2.29166 3.21664 2.57499 3.21664 3.41666V16.5833C3.21664 17.425 3.39164 17.7083 4.44998 17.7083H7.81664C8.87498 17.7083 9.04998 17.425 9.04998 16.5833V3.41666C9.04998 2.57499 8.87498 2.29166 7.81664 2.29166H4.44998V2.29166Z" fill="#2B2B46"/>
                    <path d="M17.4 11.4583H14.0333C12.3583 11.4583 11.55 10.6833 11.55 9.08332V3.41666C11.55 1.81666 12.3667 1.04166 14.0333 1.04166H17.4C19.075 1.04166 19.8833 1.81666 19.8833 3.41666V9.08332C19.8833 10.6833 19.0667 11.4583 17.4 11.4583ZM14.0333 2.29166C12.975 2.29166 12.8 2.57499 12.8 3.41666V9.08332C12.8 9.92499 12.975 10.2083 14.0333 10.2083H17.4C18.4583 10.2083 18.6333 9.92499 18.6333 9.08332V3.41666C18.6333 2.57499 18.4583 2.29166 17.4 2.29166H14.0333V2.29166Z" fill="#2B2B46"/>
                    <path d="M17.4 18.9583H14.0333C12.3583 18.9583 11.55 18.1833 11.55 16.5833V15.0833C11.55 13.4833 12.3667 12.7083 14.0333 12.7083H17.4C19.075 12.7083 19.8833 13.4833 19.8833 15.0833V16.5833C19.8833 18.1833 19.0667 18.9583 17.4 18.9583ZM14.0333 13.9583C12.975 13.9583 12.8 14.2417 12.8 15.0833V16.5833C12.8 17.425 12.975 17.7083 14.0333 17.7083H17.4C18.4583 17.7083 18.6333 17.425 18.6333 16.5833V15.0833C18.6333 14.2417 18.4583 13.9583 17.4 13.9583H14.0333Z" fill="#2B2B46"/>
                  </svg>
                  <span>Главная</span>
                </a>
              </NavLink>
              <ul>
                <li>
                  <NavLink href='/vk' activeClassName={ m_styles.active }>
                    <a>
                      <span>Вконтакте</span>
                    </a>
                  </NavLink>
                </li>
                <li>
                  <NavLink href='/telegram' activeClassName={ m_styles.active }>
                    <a>
                      <span>Telegram</span>
                    </a>
                  </NavLink>
                </li>
                <li>
                  <NavLink href='/facebook' activeClassName={ m_styles.active }>
                    <a>
                      <span>Facebook</span>
                    </a>
                  </NavLink>
                </li>
                <li>
                  <NavLink href='/twitter' activeClassName={ m_styles.active }>
                    <a>
                      <span>Twitter</span>
                    </a>
                  </NavLink>
                </li>
                <li>
                  <NavLink href='/instagram' activeClassName={ m_styles.active }>
                    <a>
                      <span>Instagram</span>
                    </a>
                  </NavLink>
                </li>
                <li>
                  <NavLink href='/youtube' activeClassName={ m_styles.active }>
                    <a>
                      <span>YouTube</span>
                    </a>
                  </NavLink>
                </li>
                <li>
                  <NavLink href='/tiktok' activeClassName={ m_styles.active }>
                    <a>
                      <span>TikTok</span>
                    </a>
                  </NavLink>
                </li>
              </ul>
            </li>
            {/* <li className={ m_styles.menu__item }>
              <NavLink href='/analys' activeClassName={ m_styles.active }>
                <a>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.2667 10.625H12.5C10.425 10.625 9.375 9.45001 9.375 7.12501V4.73334C9.375 3.88334 9.475 2.66667 10.3583 2.00001C11.1 1.45001 12.1667 1.40834 13.7417 1.86667C15.8083 2.46667 17.5333 4.19167 18.1333 6.25834C18.5917 7.82501 18.55 8.90001 18 9.63334C17.3333 10.525 16.1167 10.625 15.2667 10.625ZM11.9 2.80001C11.5583 2.80001 11.2917 2.86667 11.1167 3.00001C10.7917 3.24167 10.6333 3.80834 10.6333 4.73334V7.13334C10.6333 9.00001 11.35 9.38334 12.5083 9.38334H15.275C16.1917 9.38334 16.7583 9.22501 17.0083 8.90001C17.3 8.51667 17.275 7.75001 16.95 6.62501C16.4667 4.98334 15.05 3.55834 13.4083 3.08334C12.7917 2.89167 12.2917 2.80001 11.9 2.80001Z" fill="#2B2B46"/>
                    <path d="M9.22499 18.9583C8.78333 18.9583 8.33333 18.925 7.88333 18.85C4.47499 18.3 1.69999 15.5333 1.14999 12.125C0.44166 7.74167 3.26666 3.60834 7.59166 2.725C7.93333 2.65834 8.25833 2.875 8.33333 3.20834C8.39999 3.55 8.18333 3.875 7.84999 3.95C4.19166 4.7 1.79166 8.2 2.39999 11.925C2.86666 14.8083 5.20833 17.15 8.09166 17.6167C11.8333 18.2167 15.325 15.8083 16.0667 12.1333C16.1333 11.7917 16.4667 11.575 16.8 11.6417C17.1417 11.7083 17.3583 12.0417 17.2917 12.375C16.5 16.2667 13.1 18.9583 9.22499 18.9583Z" fill="#2B2B46"/>
                  </svg>
                  <span>Анализ</span>
                </a>
              </NavLink>
            </li> */}
            <li className={ m_styles.menu__item }>
              <NavLink href='/database' activeClassName={ m_styles.active }>
                <a>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.1667 18.9583H5.83332C2.15832 18.9583 1.04166 17.8417 1.04166 14.1667V5.83332C1.04166 2.15832 2.15832 1.04166 5.83332 1.04166H7.08332C8.54166 1.04166 8.99999 1.51666 9.58332 2.29166L10.8333 3.95832C11.1083 4.32499 11.15 4.37499 11.6667 4.37499H14.1667C17.8417 4.37499 18.9583 5.49166 18.9583 9.16666V14.1667C18.9583 17.8417 17.8417 18.9583 14.1667 18.9583ZM5.83332 2.29166C2.85832 2.29166 2.29166 2.85832 2.29166 5.83332V14.1667C2.29166 17.1417 2.85832 17.7083 5.83332 17.7083H14.1667C17.1417 17.7083 17.7083 17.1417 17.7083 14.1667V9.16666C17.7083 6.19166 17.1417 5.62499 14.1667 5.62499H11.6667C10.6 5.62499 10.25 5.25832 9.83332 4.70832L8.58332 3.04166C8.14999 2.46666 8.02499 2.29166 7.08332 2.29166H5.83332Z" fill="#2B2B46"/>
                  </svg>
                  <span>База данных</span>
                </a>
              </NavLink>
            </li>
            <li className={ m_styles.menu__item }>
              <NavLink href='/profile' activeClassName={ m_styles.active }>
                <a>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 10.625C7.35834 10.625 5.20834 8.47499 5.20834 5.83332C5.20834 3.19166 7.35834 1.04166 10 1.04166C12.6417 1.04166 14.7917 3.19166 14.7917 5.83332C14.7917 8.47499 12.6417 10.625 10 10.625ZM10 2.29166C8.05001 2.29166 6.45834 3.88332 6.45834 5.83332C6.45834 7.78332 8.05001 9.37499 10 9.37499C11.95 9.37499 13.5417 7.78332 13.5417 5.83332C13.5417 3.88332 11.95 2.29166 10 2.29166Z" fill="#2B2B46"/>
                    <path d="M17.1585 18.9583C16.8168 18.9583 16.5335 18.675 16.5335 18.3333C16.5335 15.4583 13.6001 13.125 10.0001 13.125C6.40013 13.125 3.4668 15.4583 3.4668 18.3333C3.4668 18.675 3.18346 18.9583 2.8418 18.9583C2.50013 18.9583 2.2168 18.675 2.2168 18.3333C2.2168 14.775 5.70846 11.875 10.0001 11.875C14.2918 11.875 17.7835 14.775 17.7835 18.3333C17.7835 18.675 17.5001 18.9583 17.1585 18.9583Z" fill="#2B2B46"/>
                  </svg>
                  <span>Профиль</span>
                </a>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={ s_styles.sidebar__logout }>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.2667 7.19165C10.425 7.19165 10.5833 7.24999 10.7083 7.37499C10.95 7.61665 10.95 8.01665 10.7083 8.25832L9.01667 9.94999L10.7083 11.6417C10.95 11.8833 10.95 12.2833 10.7083 12.525C10.4667 12.7667 10.0667 12.7667 9.825 12.525L7.69167 10.3917C7.45 10.15 7.45 9.74999 7.69167 9.50832L9.825 7.37499C9.94167 7.24999 10.1083 7.19165 10.2667 7.19165Z" fill="#2B2B46"/>
            <path d="M8.19166 9.32501L16.6667 9.32501C17.0083 9.32501 17.2917 9.60835 17.2917 9.95001C17.2917 10.2917 17.0083 10.575 16.6667 10.575L8.19166 10.575C7.84999 10.575 7.56666 10.2917 7.56666 9.95001C7.56666 9.60835 7.84999 9.32501 8.19166 9.32501Z" fill="#2B2B46"/>
            <path d="M10 2.70835C10.3417 2.70835 10.625 2.99169 10.625 3.33335C10.625 3.67502 10.3417 3.95835 10 3.95835C6.44167 3.95835 3.95833 6.44169 3.95833 10C3.95833 13.5584 6.44167 16.0417 10 16.0417C10.3417 16.0417 10.625 16.325 10.625 16.6667C10.625 17.0084 10.3417 17.2917 10 17.2917C5.70833 17.2917 2.70833 14.2917 2.70833 10C2.70833 5.70835 5.70833 2.70835 10 2.70835Z" fill="#2B2B46"/>
          </svg>
          <span>Выход</span>
        </div>
      </div>
  )
}

export default Sidebar