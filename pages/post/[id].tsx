import { useDeno, useRouter } from 'aleph/react'
import React from 'react'

export default function PostId() {
  const {
    basePath,      // string, should be '/'
    locale,        // string, should be 'en'
    defaultLocale, // string, should be 'en'
    locales,       // string[], should be ['en']
    pathname,      // string, should be '/post/hello-world'
    routePath,     // string, should be '/post/[slug]'
    params,        // object, should be {slug: 'hello-world'}
    query,         // URLSearchParams, `query.get('theme')` should be 'dark'
  } = useRouter()

  return (
    <div className="page">
      <head>
        <title>{pathname}</title>
      </head>
    </div>
  )
}
