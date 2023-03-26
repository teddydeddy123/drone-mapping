import { useEffect, useState } from 'react'
import * as S from './styled'

type Location = {
  lat: number
  lng: number
}

type Props = {
  pathsHistory: Location[][]
  setLocationMarkerKey: React.Dispatch<React.SetStateAction<number | null>>
}

export const HistoryBar = ({ pathsHistory, setLocationMarkerKey }: Props) => {
  const [selectedPath, setSelectedPath] = useState<number>(-1)

  const handleSelect = (number: number) => {
    setLocationMarkerKey(number)
    setSelectedPath(number)
  }

  useEffect(() => {
    setSelectedPath(-1)
  }, [pathsHistory])

  return (
    <S.Wrapper>
      {pathsHistory.map((path, i) => (
        <S.PathWrapper
          key={i}
          onClick={() => handleSelect(i)}
          selected={selectedPath === i}
        >
          <S.PinIcon size={20} selected={selectedPath === i} />
          <S.RouteNumber>{`ROUTE ${i + 1}`}</S.RouteNumber>
          <S.PointsWrapper>
            <p>{path.length} POINTS</p>
            <S.LocationIcon selected={selectedPath === i} size={25} />
          </S.PointsWrapper>
        </S.PathWrapper>
      ))}
    </S.Wrapper>
  )
}

export default HistoryBar
