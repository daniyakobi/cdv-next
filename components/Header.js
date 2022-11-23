import h_styles from '../styles/Header.module.scss'

const Header = ({ moduleStyle }) => {
  return (
    <div className={ `${ h_styles.header } ${ moduleStyle }` }>

    </div>
  )
}

export default Header