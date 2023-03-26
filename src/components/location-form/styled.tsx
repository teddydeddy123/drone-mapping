import styled from 'styled-components'
import { CurrentLocation } from '@styled-icons/boxicons-regular/CurrentLocation'

export const Wrapper = styled.div`
  position: absolute;
  right: 75px;
  z-index: 44444;
  background-color: white;
  padding: 10px 15px;
  border-radius: 10px;
  box-sizing: border-box;
  width: 85%;
  display: flex;
  top: 10px;
  align-items: center;
  gap: 20px;
  box-shadow: 0 0 200px 3px cadetblue;
`

export const InputWrapper = styled.div`
  max-width: 320px;
  width: 100%;
  border-right: 1px solid green;
  padding: 3px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Input = styled.input`
  background-color: white;
  font-size: 17px;
  border: none;
  padding: 2px 10px;
  color: black;
  &:focus {
    outline: none;
  }
`

export const GeoIcon = styled(CurrentLocation)`
  color: navy;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`

export const SearchButton = styled.button`
  background-color: blue;
  opacity: 0.5;
  color: white;
  border: none;
  max-width: 120px;
  width: 100%;
  &:hover {
    background-color: #2aa755;
    opacity: 0.7;
    color: white;
    border: none;
  }
`

export const SaveButton = styled.button`
  background-color: blue;
  opacity: 0.5;
  color: white;
  border: none;
  max-width: 150px;
  width: 100%;
  margin-left: auto;
  &:hover {
    background-color: #2aa755;
    opacity: 0.7;
    color: white;
    border: none;
  }
`
