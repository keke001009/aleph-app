export interface context {
    id ?: string
    password ?: string
}

export interface IAuthenticate {
    verify : (context : context) => boolean
    authenticate : (context : context) => boolean
}

import { useCallback } from 'react'

export default function useLogin<T>(context : any, strategy : IAuthenticate) {
    const verify = useCallback(()=>{
        return strategy.verify(context)
    }, [context])

    const authenticate = useCallback(()=>{
        return strategy.authenticate(context)
    }, [context])

    const onLogin = useCallback(()=>{
        const isVerify = verify()
        if(isVerify && authenticate()) {
            return true
        }
    }, [verify, authenticate])

    return {
        onLogin
    }
}
