const tiktokUrlRegex: RegExp = /https?:\/\/(?:www\.)?tiktok\.com\/(?:@\w+\/video\/|v\/)?(\d+)/
const tiktokBaseSiteRegex: RegExp = /(?:www\.)?tiktok\.com/

chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    chrome.tabs.create({ url: 'options.html' })
  } else if (details.reason === 'update' && /^(((0|1)\..*)|(2\.(0|1)(\..*)?))$/.test(details.previousVersion!)) {
    chrome.storage.sync.clear()
  }
})

chrome.tabs.onActivated.addListener((activeInfo) => {
  try {
    chrome.tabs.query({ active: true, lastFocusedWindow: true, windowId: activeInfo.windowId }, async ([tab]) => {
      if (tab?.url && !tab?.url?.includes('chrome://') && tiktokBaseSiteRegex.test(tab.url)) {
        chrome.action.setBadgeText({ text: 'O' })
        await getCookies(tab.url)
          .then((res) => {
            console.log('COOKIES:', tab.url, 'DATA:', parseCookies(res))
          })
          .catch((err) => {
            console.error(err)
          })
      } else {
        chrome.action.setBadgeText({ text: 'X' })
      }
    })
  } catch (err) {
    console.error(err)
  }
})

chrome.tabs.onUpdated.addListener(() => {
  try {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, async ([tab]) => {
      if (tab?.url && !tab?.url?.includes('chrome://') && tiktokBaseSiteRegex.test(tab.url)) {
        chrome.action.setBadgeText({ text: 'O' })
        await getCookies(tab.url)
          .then((res) => {
            console.log('COOKIES:', tab.url, 'DATA:', parseCookies(res))
          })
          .catch((err) => {
            console.error(err)
          })
      } else {
        chrome.action.setBadgeText({ text: 'X' })
      }
    })
  } catch (err) {
    console.error(err)
  }
})

chrome.runtime.onMessage.addListener((message: any) => {
  console.log('RECEIVED MESSAGE:', message)
})

// chrome.runtime.onMessage.addListener()
// chrome.downloads.onDeterminingFilename.addListener()

interface Cookie {
  name: string
  value: string
}

function parseCookies(cookies: Cookie[]): string {
  return cookies.map((cookie) => `${cookie.name}=${cookie.value}`).join('; ')
}

function getCookies(url: string): Promise<chrome.cookies.Cookie[]> {
  return new Promise((resolve, reject) => {
    chrome.cookies.getAll({ url }, (cookies) => {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError)
      } else {
        resolve(cookies)
      }
    })
  })
}
