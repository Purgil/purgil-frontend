'use client'

import { useRouter } from 'next/navigation'
import Test from '@/app/global/components/Test'
import React from 'react'
import NaverMap from '@/app/global/components/NaverMap'

function ExplorePageClient() {
  const router = useRouter()

  return (
    <div>
      <p>ExplorePage</p>
      <Test />
      <button onClick={router.back}>뒤로가기</button>
      <div>
        {process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}
        <NaverMap />
      </div>
    </div>
  )
}

export default ExplorePageClient
