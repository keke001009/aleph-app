import type { context, IAuthenticate } from './useAuthenticate.ts'

export default class Simple implements IAuthenticate {
    type: string
    constructor(){
        this.type = 'simple'
    }

    static factory = ()=>{
        return new Simple()
    }

    verify = ({ id, password } : context)=>{
        alert("간편인증")
        return true
    }
    authenticate = ({ password } : context)=>{
        fetch('/api/login/simple', { 
          method : 'POST', 
          headers: {
            "Content-Type": "application/json",
          },
          body : JSON.stringify({ password })
        })
        .then((res)=>console.log(res))
        .catch(e => console.error(e))
        return true
    }
}