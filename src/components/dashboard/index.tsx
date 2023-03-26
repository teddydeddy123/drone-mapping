import { useEffect, useState } from 'react'
import MapLayer from '../map-component'
import SideBar from '../sidebar'
import WelcomeMessage from '../welcome-message'
import * as S from './styled'

export const Dashboard = () => {
  const [searchBar, setSearchBar] = useState(true)
  const [historyBar, setHistoryBar] = useState(false)
  const [isNewVisitor, setIsNewVisitor] = useState(false)

  useEffect(() => {
    const visits = localStorage.getItem('hasVisited')
    if (!visits) {
      localStorage.setItem('hasVisited', 'visited')
      setIsNewVisitor(true)
      setSearchBar(false)
    }
  }, [])

  return (
    <S.Wrapper>
      {isNewVisitor && <WelcomeMessage />}
      <MapLayer searchBar={searchBar} historyBar={historyBar} />
      <SideBar setSearchBar={setSearchBar} setHistoryBar={setHistoryBar} />
    </S.Wrapper>
  )
}

export default Dashboard
