'use client'
import React, {useEffect} from 'react';
import {useServiceWorker} from "@/app/globals/hooks/useServiceWorker";

const Test = () => {
    const {sendPushNotification} = useServiceWorker()

    // 푸시 알림 테스트
    const clickPushHandler = () => {
        sendPushNotification('매직포스 알림', '알림 가나요?');
    };

    return (
        <div>
            <button onClick={clickPushHandler}>
                버튼
            </button>
        </div>
    );
};

export default Test;