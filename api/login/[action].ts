import type { APIHandler } from 'aleph/types.d.ts'

export const handler: APIHandler = async ({ request, data, router, response }) => {
  let count = parseInt(localStorage.getItem('count') || '0')

  switch (router.params['action']) {
    case 'basic':
      const { id, password } = await request.json()
      
      if(id === 'test' && password === 'test') {
        response.json({
          success: true,
          status: 200,
        })
      }
      break
    default:
      response.status = 400
      response.json({
        error: 'UnknownAction',
        status: 400,
        message: `undefined action '${router.params['action']}'`
      })
      break
  }
}
