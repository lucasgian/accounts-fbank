import accounts from './accounts'
import locations from './locations'

const API = (() => {
  const callAPI = async (endpoint: string, init?: RequestInit) => {
    try {
      return fetch(getUrl(endpoint), init).then((response) => response.json())
    } catch ({ response }) {
      // notifyError(response, url)
    }
  }

  const getUrl = (endpoint: string) => {
    return `http://127.0.0.1:8888/api/v1${endpoint}`
  }

  return {
    accounts: accounts(callAPI),
    locations: locations(callAPI)
  }
})()

export default API
