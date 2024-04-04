import React, { useEffect, useRef } from 'react'
import {
  Coordinates,
  INITIAL_CENTER,
  INITIAL_ZOOM,
  NaverMapType,
} from '@/app/global/hooks/useNaverMap'
import Script from 'next/script'

type Props = {
  mapId?: string
  initialCenter?: Coordinates
  initialZoom?: number
  onLoad?: (map: NaverMapType) => void
}

function NaverMap({
  mapId = 'map',
  initialCenter = INITIAL_CENTER,
  initialZoom = INITIAL_ZOOM,
  onLoad,
}: Props) {
  const mapRef = useRef<NaverMapType | null>(null)

  const initializeMap = () => {
    const mapOptions = {
      center: new window.naver.maps.LatLng(...initialCenter),
      zoom: initialZoom,
      minZoom: 9,
      scaleControl: false,
      mapDataControl: false,
      logoControlOptions: {
        position: naver.maps.Position.BOTTOM_LEFT,
      },
    }
    // 새로운 네이버 맵 인스턴스 생성
    const map = new window.naver.maps.Map(mapId, mapOptions)
    mapRef.current = map

    if (onLoad) {
      onLoad(map)
    }
  }

  useEffect(
    () => () => {
      mapRef.current?.destroy()
    },
    [],
  )

  return (
    <div>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`}
        onReady={initializeMap}
      />
      <div id={mapId} style={{ width: '100%', height: '60vh' }} />
    </div>
  )
}

export default NaverMap
