importScripts(
  'https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js'
)
importScripts(
  'https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js'
)
firebase.initializeApp({"apiKey":"AIzaSyB8XJdZxwdh29lK0YTXaPnN5h8LQh5f8CU","appId":"1:696365919465:web:205a422fca9f3c4d099478","authDomain":"jhonarendra-github.firebaseapp.com","messagingSenderId":"696365919465","projectId":"jhonarendra-github","storageBucket":"jhonarendra-github.appspot.com"})

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
