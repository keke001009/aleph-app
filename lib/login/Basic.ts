import type { context, IAuthenticate } from './useAuthenticate.ts'

export default class Basic implements IAuthenticate {
    type: string
    constructor(){
        this.type = 'basic'
    }

    static factory = ()=>{
        return new Basic()
    }

    verify = ({ id, password } : context)=>{
        if(id.length > 4) {
            alert('id 체크')
            return false
        }
        if(password.length > 4) {
            alert('password 체크')
            return false
        }
        return true
    }
    authenticate = ({ id, password } : context)=>{
        fetch('/api/login/basic', { 
          method : 'POST', 
          headers: {
            "Content-Type": "application/json",
          },
          body : JSON.stringify({ id, password })
        })
        .then((res)=>console.log(res))
        .catch(e => console.error(e))
        return true
    }
}