import type { context, IAuthenticate } from './useAuthenticate.ts'

export default class Dev implements IAuthenticate {
    type: string
    constructor(){
        this.type = 'dev'
    }

    static factory = ()=>{
        return new Dev()
    }

    verify = ({ id, password } : context)=>{
        alert("개발모드")
        return true
    }
    authenticate = ({ id, password } : context)=>{
        return true
    }
}