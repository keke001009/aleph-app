import type { Config } from 'https://deno.land/x/aleph/types.d.ts'

export default <Config>{
  framework: 'react',
  build: {
    target: 'es2015',
    browsers: { chrome: 90, safari: 12 },
    outputDir: '/dist',
  },
  ssr: true,
  server: {
    middlewares: [
      ({ response, data }, next) => {
        response.headers.set('server', 'Aleph.js')
        data.set('foo', 'bar')
        next()
      }
    ]
  }
}