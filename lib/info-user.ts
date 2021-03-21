import { get, set } from 'local-storage'

export const ipUser = async () => {
    if (get('IP_USER')) {
      return
    }
  
    const ipify = await fetch(
      'https://api.ipify.org/?format=json'
    ).then((response) => response.json())

    set('IP_USER', ipify.ip)
    set('DEVICE_USER', window.navigator?.userAgent)
}
  