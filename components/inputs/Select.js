import { useState } from 'react'
import s_styles from '../../styles/inputs/Select.module.scss'

const Select = ({ list, handler, moduleStyle, activeItem, name, classes = '' }) => {
  const [show, setShow] = useState(false)
  const showItems = (e) => {
    setShow(!show)
  }
  let ms = ''
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
    }
  }

  return(
    <div className={` ${ s_styles.select } ${ ms } ${ name }`}>
      {
        list.map((item) => {
          if(item.id == activeItem) {
            return (
              <div className={ `${ s_styles.select__item } ${ show ? s_styles.active : '' }` } onClick={ showItems } key={ item.id }>
                { item.icon ? <div className={ s_styles.select__item_icon }>{ item.icon }</div> : <></> }
                <div className={ s_styles.select__item_title }>{ item.title }</div>
              </div>
            )
          }
        })
      }
      {
        show ?
          <div className={ `${ s_styles.select__items } ${ classes }` }>
            {
              list.map((item) => {
                if(item.id != activeItem) {
                  return (
                    <div className={ s_styles.select__item } onClick={ handler } data-id={ item.id } key={ item.id }>
                      { item.icon ? <div className={ s_styles.select__item_icon }>{ item.icon }</div> : <></> }
                      <p className={ s_styles.select__item_title }>{ item.title }</p>
                    </div>
                  )
                }
              })
            }
          </div> : <></>
      }
      <div className={ `${ s_styles.select__arrow } ${ show ? s_styles.active : '' }` }>
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 6.80176H14.67C17.98 6.80176 19.34 9.15176 17.68 12.0218L16.34 14.3318L15 16.6418C13.34 19.5118 10.63 19.5118 8.96999 16.6418L7.62999 14.3318L6.28999 12.0218C4.65999 9.15176 6.00999 6.80176 9.32999 6.80176H12Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  )
}

export default Select