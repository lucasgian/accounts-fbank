import { Location } from '../../Interfaces'

const init = (location: Location) => ({
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    mode: 'cors',
    cache: 'default',
    body: JSON.stringify(location)
})

const post = async (callAPI: any, url: string, location: Location) => {
    return await callAPI(url, init({...location}))
}
  
export default post
