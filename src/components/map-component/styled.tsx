import styled from 'styled-components'
import { MapContainer, TileLayer } from 'react-leaflet'

export const MapComponent = styled(MapContainer)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
`

export const TileLayerComponent = styled(TileLayer).attrs((props: any) => ({
  className: props.className,
}))`
  position: absolute;
  left: 0;
  bottom: 0;
  .leaflet-bottom.leaflet-right {
    margin-right: 60px;
  }
`

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`
