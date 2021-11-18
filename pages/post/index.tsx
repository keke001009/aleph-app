import { useDeno } from 'aleph/react'
import React from 'react'

export default function Post() {
  const version = useDeno(() => Deno.version.deno)

  return (
    <div className="page">
      <head>
        <title>Post 기본 페이지</title>
      </head>
      <p className="copyinfo">Built by Aleph.js in Deno {version}</p>
    </div>
  )
}
