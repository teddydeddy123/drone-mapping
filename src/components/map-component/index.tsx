import { useEffect, useRef, useState } from 'react'
import { MapContainer, Marker, useMapEvents, Polyline } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import type { MapContainer as MapContainerType } from 'react-leaflet'
import markerIconPng from 'leaflet/dist/images/marker-icon.png'
import { Icon } from 'leaflet'
import * as S from './styled'
import GeoForm from '../location-form'
import HistoryBar from '../history-bar'

type Marker = {
  position: [number, number]
}

type LocationHistory = {
  lat: number
  lng: number
}

type Coordinates = [number, number]

type Props = {
  searchBar: boolean
  historyBar: boolean
}

export const MapLayer = ({ searchBar, historyBar }: Props) => {
  const mapRef = useRef<typeof MapContainerType>(null)
  const [position, setPosition] = useState<Coordinates>([
    46.521374036700415, 6.632122224350363,
  ]) // initial position
  const [singlePathHistory, setSinglePathHistory] = useState<LocationHistory[]>(
    [],
  )
  const [pathsHistory, setPathsHistory] = useState<LocationHistory[][]>([])
  const [selectedPathIndex, setSelectedPathIndex] = useState<number | null>(
    null,
  ) // new state variable

  useEffect(() => {
    setPosition(position)
    if (mapRef.current) {
      mapRef.current.setView(position)
    }
  }, [position])
  //UPDATES MAP POSITION WHEN CLICK 'FIND'

  const saveNewPath = () => {
    setPathsHistory(
      singlePathHistory.length > 0
        ? [...pathsHistory, singlePathHistory]
        : (alert('Please insert a starting point'), pathsHistory),
    )
    setSinglePathHistory([])
    setSelectedPathIndex(pathsHistory.length + 1) // update selected path index when new path is added
  }

  const LocationMarker = () => {
    const map = useMapEvents({
      click(e: any) {
        const newLocationHistory = { lat: e.latlng.lat, lng: e.latlng.lng }
        setSinglePathHistory([...singlePathHistory, newLocationHistory])
      },
    })

    const currentMarkers = singlePathHistory.map((marker, i) => (
      <Marker
        key={i}
        position={[marker.lat, marker.lng]}
        interactive={false}
        icon={
          new Icon({
            iconUrl: markerIconPng,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
          })
        }
      />
    ))

    const selectedMarkers =
      selectedPathIndex! >= 0 && selectedPathIndex! < pathsHistory.length
        ? pathsHistory[selectedPathIndex!].map((marker, i) => (
            <Marker
              key={i}
              position={[marker.lat, marker.lng]}
              interactive={false}
              icon={
                new Icon({
                  iconUrl: markerIconPng,
                  iconSize: [25, 41],
                  iconAnchor: [12, 41],
                })
              }
            />
          ))
        : null

    const currentPolyline =
      singlePathHistory.length > 1 ? (
        <Polyline
          positions={singlePathHistory}
          pathOptions={{ color: '#9100ff', weight: 3 }} //what other path options?
        />
      ) : null

    const selectedPolyline =
      selectedPathIndex! >= 0 && selectedPathIndex! < pathsHistory.length ? (
        <Polyline
          positions={pathsHistory[selectedPathIndex!]}
          pathOptions={{ color: '#9100ff', weight: 3 }}
        />
      ) : null

    return (
      <>
        {currentMarkers}
        {selectedMarkers}
        {currentPolyline}
        {selectedPolyline}
      </>
    )
  }

  return (
    <S.Wrapper>
      <MapContainer
        id="map"
        center={position}
        zoom={13}
        style={{ height: '100vh', width: '100%' }}
        ref={mapRef}
      >
        <LocationMarker />
        <S.TileLayerComponent
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright"></a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
      {searchBar && (
        <GeoForm setPosition={setPosition} saveNewPath={saveNewPath} />
      )}
      {historyBar && (
        <HistoryBar
          pathsHistory={pathsHistory}
          setLocationMarkerKey={setSelectedPathIndex}
        />
      )}
    </S.Wrapper>
  )
}

export default MapLayer
