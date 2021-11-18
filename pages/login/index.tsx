import { useDeno } from 'aleph/react'
import React, { useMemo, useState } from 'react'
import Logo from '~/components/logo.tsx'
import useAuthenticate from '~/lib/login/useAuthenticate.ts'
import Basic from '~/lib/login/Basic.ts'
import Simple from '~/lib/login/Simple.ts'
import Dev from '~/lib/login/Dev.ts'
import { Input, Button, Radio } from "semantic"

export default function Home() {
  const [loginType, setLoginType] = useState<string>('basic')
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const loginFactory = useMemo(()=>{
  const factory = {
        'basic' : Basic.factory(),
        'simple' : Simple.factory(),
        'dev' : Dev.factory(),
    } as any
    return factory[loginType] || Basic.factory()
  }, [loginType])
  const { onLogin } = useAuthenticate({
    id, password
  }, 
    loginFactory
  )
  

  const version = useDeno(() => Deno.version.deno)
  return (
    <div className="page">
      <head>
        <title>Hello World 11- Aleph.js</title>
      </head>
      <p className="logo"><Logo /></p>
      <h1>Welcome to use <strong>Aleph.js</strong>!</h1>
      <Radio name="login" label="id/password 로그인" value="basic" checked={loginType == "basic"} onChange={(event : React.ChangeEvent<HTMLInputElement>, { value }) => setLoginType(value)} />
      <Radio name="login" label="간편로그인" value={"simple"} checked={loginType == "simple"} onChange={(event, { value }) => setLoginType(value)} />
      <Radio name="login" label="개발모드" value={"dev"} checked={loginType == "dev"} onChange={(event, { value }) => setLoginType(value)} />
      <Input value={id} onChange={(event : React.ChangeEvent<HTMLInputElement>) => setId(event.target.value)} />
      <Input type="password" value={password} onChange={(event : React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)} />
      <Button onClick={()=>{
        onLogin()
      }}> { loginType } 로그인
      </Button>
    </div>
  )
}
