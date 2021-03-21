import list from './list'
import post from './post'
import { Account } from '../../Interfaces'

const accounts = (callAPI: Function) => {
  const url = '/accounts'
  const urlAuth = `/security/auth`
  const urlRecover = `${url}/recover`
  const urlUpdatePassword = `${url}/change/password`

  return {
    list: () => list(callAPI, url),
    post: (account: Account) => post(callAPI, url, account),
    auth: (account: Account) => post(callAPI, urlAuth, account),
    recover: (email: Account) => post(callAPI, urlRecover, email),
    updatePassword: (account: any) => post(callAPI, urlUpdatePassword, account)
  }
}

export default accounts
