import HeaderContext from '../../context/HeaderContext'
import './index.css'

const ShelfItem = props => {
  const {shelfItemDetails, isActive, updatedActiveShelf} = props
  const {label} = shelfItemDetails
  const shelfValue = shelfItemDetails.value

  const onClickShelfItem = () => {
    updatedActiveShelf(shelfValue)
  }

  const activeShelfClassName = isActive ? 'active-shelf' : ''

  return (
    <HeaderContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const darkThemeText = isDarkTheme ? 'shelf-item-dark-theme-text' : ''

        return (
          <li className="shelf-item">
            <button
              type="button"
              className={`shelf-button ${activeShelfClassName} ${darkThemeText}`}
              onClick={onClickShelfItem}
            >
              {label}
            </button>
          </li>
        )
      }}
    </HeaderContext.Consumer>
  )
}

export default ShelfItem

/*
import './index.css'

const ShelfItem = props => {
  const {shelfItemDetails, isActive, updatedActiveShelf} = props
  const {value, label} = shelfItemDetails

  const onClickShelfItem = () => {
    updatedActiveShelf(value)
  }

  const activeShelfClassName = isActive ? 'active-shelf' : ''

  return (
    <li className="shelf-item">
      <button
        type="button"
        className={`shelf-button ${activeShelfClassName}`}
        onClick={onClickShelfItem}
      >
        {label}
      </button>
    </li>
  )
}

export default ShelfItem
*/
