import React from 'react'
import ReactDOM from 'react-dom/client'
import posthog from 'posthog-js'
import App from './App'
import './index.css'

posthog.init('phc_ybydTymP5Ui953JHB8jG8u8papkK4SsmSXcRQgr6h7g4', {
  api_host: 'https://us.i.posthog.com',
  person_profiles: 'identified_only',
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
