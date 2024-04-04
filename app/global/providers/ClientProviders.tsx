'use client'

import React, { useEffect } from 'react'
import { useServiceWorker } from '@/app/global/hooks/useServiceWorker'

function ClientProviders({ children }: { children: React.ReactNode }) {
  const { registerServiceWorker, requestNotificationPermission } =
    useServiceWorker()

  useEffect(() => {
    registerServiceWorker()
    requestNotificationPermission()
  }, [])

  return <>{children}</>
}

export default ClientProviders
