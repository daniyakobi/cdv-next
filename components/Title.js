import Link from 'next/link'
import t_styles from '../styles/Title.module.scss'
import NavLink from './NavLInk'

const Title = ({ classNames, title, link, text, backLink }) => {
  return (
    <div className={ `${ t_styles.title } ${ classNames[0] }` }>
      <h1>
        <Link href={ backLink }>
          <a>
            <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.975 15.6833C7.81666 15.6833 7.65833 15.625 7.53333 15.5L2.475 10.4417C2.23333 10.2 2.23333 9.80001 2.475 9.55834L7.53333 4.50001C7.775 4.25834 8.175 4.25834 8.41666 4.50001C8.65833 4.74167 8.65833 5.14167 8.41666 5.38334L3.8 10L8.41666 14.6167C8.65833 14.8583 8.65833 15.2583 8.41666 15.5C8.3 15.625 8.13333 15.6833 7.975 15.6833Z" fill="black"/>
              <path d="M21.615 10.625H3.25166C2.80431 10.625 2.43333 10.3417 2.43333 10C2.43333 9.65833 2.80431 9.375 3.25166 9.375H21.615C22.0624 9.375 22.4333 9.65833 22.4333 10C22.4333 10.3417 22.0624 10.625 21.615 10.625Z" fill="black"/>
            </svg>
          </a>
        </Link>
        <span>{ title }</span>
      </h1>
      <NavLink href={ link }>
        <a className={ `${ t_styles.title__button } ${ classNames[1] }` }>{ text }</a>
      </NavLink>
    </div>
  )
}

export default Title