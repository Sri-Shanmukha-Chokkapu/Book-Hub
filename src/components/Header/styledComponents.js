import styled from 'styled-components'

export const LogoutPopupContent = styled.div`
  background-color: ${props => (props.theme === true ? '#f5f7fa' : '#000000')};
  border-radius: 8px;
  width: 250px;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => (props.theme === true ? '#000000' : '#f5f7fa')};
  @media screen and (min-width: 768px) {
    width: 100%;
    padding: 25px;
  }
`

export const Btn = styled.button`
  background-color: ${props => (props.outline ? 'transparent' : '#0284c7')};
  width: 80px;
  height: 35px;
  margin: 5px;
  color: ${props => (props.outline ? '#0284c7' : 'white')};
  border-radius: 5px;
  outline: none;
  border: 1px solid #0284c7;
`
