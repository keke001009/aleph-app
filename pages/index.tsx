import { useDeno } from 'aleph/react'
import React, { useState } from 'react'
import Logo from '~/components/logo.tsx'
import useCounter from '~/lib/useCounter.ts'
import useAuthenticate from '~/lib/login/useAuthenticate.ts'
import Basic from '~/lib/login/Basic.ts'
import { Input, Button } from "semantic"

// [TODO] : generic useAuthenticate hooks
export default function Home() {
  const [count, isSyncing, increase, decrease] = useCounter()
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const { onLogin } = useAuthenticate({
    id, password
  }, 
    Basic.factory()
  )

  const version = useDeno(() => Deno.version.deno)
  return (
    <div className="page">
      <head>
        <title>Hello World 11- Aleph.js</title>
        <link rel="stylesheet" href="../style/index.css" />
      </head>
      <p className="logo"><Logo /></p>
      <h1>Welcome to use <strong>Aleph.js</strong>!</h1>
      <Input value={id} onChange={(event : React.ChangeEvent<HTMLInputElement>) => setId(event.target.value)} />
      <Input type="password" value={password} onChange={(event : React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)} />
      <Button onClick={()=>{
        onLogin()
      }}>로그인</Button>
      <p className="links">
        <a href="https://alephjs.org" target="_blank">Website</a>
        <span></span>
        <a href="https://alephjs.org/docs/get-started" target="_blank">Get Started</a>
        <span></span>
        <a href="https://alephjs.org/docs" target="_blank">Docs</a>
        <span></span>
        <a href="https://github.com/alephjs/aleph.js" target="_blank">Github</a>
      </p>
      <div className="counter">
        <span>Counter:</span>
        {isSyncing && (
          <em>...</em>
        )}
        {!isSyncing && (
          <strong>{count}</strong>
        )}
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
      </div>
      <p className="copyinfo">Built by Aleph.js in Deno {version}</p>
    </div>
  )
}
