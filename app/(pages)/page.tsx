import React from 'react'
import Link from 'next/link'

function HomePage() {
  return (
    <div>
      <p>this is home page</p>
      <Link href={'/explore'}>explore</Link>
    </div>
  )
}

export default HomePage
