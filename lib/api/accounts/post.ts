import { Account } from '../../Interfaces'

const init = (account: Account) => ({
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-PINGOTHER': 'pingpong'
  },
  mode: 'cors',
  body: JSON.stringify(account)
})

const post = async (callAPI: any, url: string, account: Account) => {
  return await callAPI(
    url,
    init({ ...account, userIP: localStorage.getItem('IP_USER') || '', operatingSystem: localStorage.getItem('DEVICE_USER') || '' })
  )
}

export default post
