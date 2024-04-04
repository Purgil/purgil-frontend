'use client'

import React, { useEffect } from 'react'
import { useServiceWorker } from '@/app/global/hooks/useServiceWorker'
import { RecoilRoot } from 'recoil'

function ClientProviders({ children }: { children: React.ReactNode }) {
  const { registerServiceWorker, requestNotificationPermission } =
    useServiceWorker()

  useEffect(() => {
    registerServiceWorker()
    requestNotificationPermission()
  }, [])

  return <RecoilRoot>{children}</RecoilRoot>
}

export default ClientProviders
