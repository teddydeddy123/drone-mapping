import { Dispatch, SetStateAction, useState } from 'react'
import * as S from './styled'

type Coordinates = [number, number]

type Props = {
  setPosition: Dispatch<SetStateAction<Coordinates>>
  saveNewPath: () => void
}

export const GeoForm = ({ setPosition, saveNewPath }: Props) => {
  const [inputValue, setInputValue] = useState<Coordinates>([0, 0])

  const getCurrentLocation = () =>
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords
      const coordinates: Coordinates = [latitude, longitude]
      setInputValue(coordinates)
    })

  const handlePosition = () => setPosition(inputValue)

  function parseCoordinates(value: string): Coordinates {
    const [latitude, longitude] = value.split(',').map(parseFloat)
    return [latitude, longitude]
  }

  const formattedValue = inputValue.join(', ')

  return (
    <S.Wrapper>
      <S.InputWrapper>
        <S.Input
          value={formattedValue}
          onChange={(e: any) => setInputValue(parseCoordinates(e.target.value))}
        />
        <S.GeoIcon size={20} onClick={getCurrentLocation} />
      </S.InputWrapper>
      <S.SearchButton onClick={handlePosition}>FIND</S.SearchButton>
      <S.SaveButton onClick={saveNewPath}>Save Path</S.SaveButton>
    </S.Wrapper>
  )
}

export default GeoForm
