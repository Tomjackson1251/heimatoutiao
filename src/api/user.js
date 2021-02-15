import requset from '@/utils/request'

export const login = data => {
  return requset({
    method: 'POST',
    url: '/app/v1_0/authorizations',
    data
  })
}
