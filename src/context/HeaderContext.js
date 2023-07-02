import React from 'react'

const HeaderContext = React.createContext({
  activeNavId: '',
  updateActiveNavId: () => {},
  showNavIcons: false,
  onToggleIcon: () => {},
  onClose: () => {},
  isDarkTheme: false,
  onToggleTheme: () => {},
  favoritesList: [],
  removeAllFavorites: () => {},
  removeFavorites: () => {},
  addFavorites: () => {},
})

export default HeaderContext

/*
import React from 'react'

const HeaderContext = React.createContext({
  activeNavId: 1,
  updateActiveNavId: () => {},
  showNavIcons: false,
  onToggleIcon: () => {},
  onClose: () => {},
})

export default HeaderContext
*/
