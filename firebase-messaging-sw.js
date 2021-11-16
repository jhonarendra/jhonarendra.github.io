
importScripts(
  'https://www.gstatic.com/firebasejs/8.0.1/firebase-app.js'
)
importScripts(
  'https://www.gstatic.com/firebasejs/8.0.1/firebase-messaging.js'
)
const c = { data: { alp: ['A', 'B', 'C', 'D', 'E', 'F','G', 'H', 'I', 'J', 'K', 'L','M', 'N', 'O', 'P', 'Q', 'R','S', 'T', 'U', 'V', 'W', 'X','Y', 'Z','a', 'b', 'c', 'd', 'e', 'f','g', 'h', 'i', 'j', 'k', 'l','m', 'n', 'o', 'p', 'q', 'r','s', 't', 'u', 'v', 'w', 'x','y', 'z','1', '2', '3', '4', '5','6', '7', '8', '9', '0','.', ',', ':', '-'], sh: 37}, m: { e: (val, sh = c.data.sh) => { return [...val].map(char => m.sc(char, sh)).join('')}, d: (val, sh = c.data.sh) => { const rs = (c.data.alp.length - sh) % c.data.alp.length; return [...val].map(char => c.m.sc(char, rs)).join('')}, sc: (char, sh) => { const ii = c.data.alp.includes(char); if (ii) { const op = c.data.alp.indexOf(char); const np = (op + sh) % c.data.alp.length; return c.data.alp[np]} else { return char }}}}
firebase.initializeApp({"apiKey":c.m.d('ltW,4Vme9uA.UTAEYfIvg059'+','+'1KybEew2EbCen6'),"appId":c.m.d('XjcfcZcbfXfacbjTB:jYgb,aYYC-,fCZ-aAgffade'),"authDomain":c.m.d('GELK,OBKAO,kDFQER:hCFOB:,PB,MMh-LJ'),"messagingSenderId":c.m.d('cfcZcbfXfacb'),"projectId":c.m.d('GELK,OBKAO,kDFQER:'),"storageBucket":c.m.d('GELK,OBKAO,kDFQER:h,MMPMLQh-LJ')})

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging()

// Setup event listeners for actions provided in the config:
self.addEventListener('notificationclick', function(e) {
  const actions = [{"action":"Jhonarendra","url":"https:\u002F\u002Fjhonarendra.github.io"}]
  const action = actions.find(x => x.action === e.action)
  const notification = e.notification

  if (!action) return

  if (action.url) {
    clients.openWindow(action.url)
    notification.close()
  }
})
