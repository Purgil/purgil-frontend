'use client'

import React from 'react'
import Test from '@/app/global/components/Test'
import { useRouter } from 'next/navigation'

function ExplorePage() {
  const router = useRouter()
  return (
    <div>
      <p>ExplorePage</p>
      <Test />
      <button onClick={router.back}>뒤로가기</button>
    </div>
  )
}

export default ExplorePage
