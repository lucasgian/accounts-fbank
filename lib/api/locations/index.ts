import list from './list'
import post from './post'
import { Location } from '../../../Interfaces'

const locations = (callAPI: Function) => {
    const url = '/locations'

    return {
        list: () => list(callAPI, url),
        post: (location: Location) => post(callAPI, url, location)
    }
}

export default locations
