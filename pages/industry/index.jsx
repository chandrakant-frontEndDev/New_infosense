import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export default function index() {
    const router = useRouter()
    useEffect(() => {

        if (router.asPath === "/industry") {
            router.push('/')
        }

    }, [])
    return (
        <div></div>
    )
}

