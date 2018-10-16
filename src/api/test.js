import request from '../request'

export function test (data) {
  return request.get('/haha', {
    params: {
      ...data
    }
  })
}
