'use client'

import { useCallback, useRef } from 'react'

export type NaverMapType = naver.maps.Map
type Lat = number
type Lng = number
export type Coordinates = [Lat, Lng]

export const INITIAL_CENTER: Coordinates = [37.5262411, 126.99289439]
export const INITIAL_ZOOM = 10

export function useNaverMap() {
  const mapRef = useRef<NaverMapType | null>(null)

  const initializeMap = useCallback((map: NaverMapType) => {}, [])

  return {
    initializeMap,
  }
}
