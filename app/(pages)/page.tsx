import React from 'react'
import Link from 'next/link'
import NaverMap from '@/app/global/components/NaverMap'
import HomePageClient from '@/app/(pages)/client'

function HomePage() {
  return (
    <div>
      <p>this is home page</p>
      <Link href={'/explore'}>explore</Link>
      <HomePageClient />
    </div>
  )
}

export default HomePage
