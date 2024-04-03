'use client'
import React, {useEffect} from 'react';
import {useServiceWorker} from "@/app/globals/hooks/useServiceWorker";

const ClientProviders = ({ children }: { children: React.ReactNode }) => {
    const {registerServiceWorker, requestNotificationPermission} = useServiceWorker()

    useEffect(() => {
        registerServiceWorker()
        requestNotificationPermission()
    }, [])

    return <>{children}</>
};

export default ClientProviders;