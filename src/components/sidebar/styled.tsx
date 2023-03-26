import styled from 'styled-components'
import { Search } from '@styled-icons/bootstrap/Search'
import { History } from '@styled-icons/material-sharp/History'

export const Wrapper = styled.div``

export const Sidebar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 30px;
  flex-direction: column;
  padding: 40px 0px;
  box-sizing: border-box;
  width: 55px;
  height: 100vh;
  position: fixed;
  right: 0;
  z-index: 3333;
  top: 0;
  box-shadow: 0px 20px 300px 30px black;
  background: linear-gradient(
    0deg,
    rgba(49, 49, 148, 1) 3%,
    rgba(127, 127, 255, 1) 98%
  );
`

export const IconBox = styled.div`
  padding-bottom: 15px;
  border-bottom: 1px solid white;
`

export const SearchIcon = styled(Search)`
  cursor: pointer;
  &:hover {
    transform: scale(1.07);
  }
`

export const HistoryIcon = styled(History)`
  cursor: pointer;
  &:hover {
    transform: scale(1.07);
  }
`
