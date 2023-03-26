import styled from 'styled-components'
import { Search } from '@styled-icons/bootstrap/Search'
import { History } from '@styled-icons/material-sharp/History'
import { PinAngle } from '@styled-icons/bootstrap/PinAngle'
import { LocationPin } from '@styled-icons/entypo/LocationPin'

type Selected = {
  selected: boolean
}

export const Wrapper = styled.div`
  background: linear-gradient(
    0deg,
    rgb(172, 172, 199) 3%,
    rgb(115 115 185) 98%
  );
  border-top: 50px solid rgb(165 166 234);
  width: calc(100% - 55px);
  height: 200px;
  position: absolute;
  bottom: 0;
  z-index: 1000;
  overflow-y: scroll;
`

export const PathWrapper = styled.div<Selected>`
  border-bottom: 1px solid rgb(127 127 255);
  padding: 10px 35px;
  background: ${(props) =>
    props.selected
      ? 'linear-gradient(302deg, rgb(49, 49, 148) 3%, rgb(127, 127, 255) 98%);'
      : '#dbddf2'};
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: start;
  cursor: pointer;
  p {
    color: ${(props) => (props.selected ? 'white' : 'black')};
    margin-top: 0;
    margin-bottom: 0;
  }
`

export const PinIcon = styled(PinAngle)<Selected>`
  color: ${(props) => (props.selected ? 'white' : 'rgb(127 127 255)')};
`

export const RouteNumber = styled.p`
  font-weight: 500;
  margin-right: auto;
`

export const LocationIcon = styled(LocationPin)<Selected>`
  color: ${(props) => (props.selected ? 'white' : 'rgb(127 127 255)')};
`

export const PointsWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 0;
`
