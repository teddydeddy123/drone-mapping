import { Dispatch, SetStateAction, useState } from 'react'
import * as S from './styled'

type Props = {
  setSearchBar: Dispatch<SetStateAction<boolean>>
  setHistoryBar: Dispatch<SetStateAction<boolean>>
}

export const SideBar = ({ setSearchBar, setHistoryBar }: Props) => {
  const handleToggleSearch = () => setSearchBar((prevState) => !prevState)

  const handleToggleHistory = () => setHistoryBar((prevState) => !prevState)

  return (
    <S.Wrapper>
      <S.Sidebar>
        <S.IconBox>
          <S.SearchIcon size={24} onClick={handleToggleSearch} />
        </S.IconBox>
        <S.IconBox>
          <S.HistoryIcon size={27} onClick={handleToggleHistory} />
        </S.IconBox>
      </S.Sidebar>
    </S.Wrapper>
  )
}

export default SideBar
