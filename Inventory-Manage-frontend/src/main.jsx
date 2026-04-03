import { createRoot } from 'react-dom/client'
import { App } from './App'
import { AppProvider } from './context/TrialContext'

const root = createRoot(document.getElementById('app'))
root.render(
  <AppProvider>
    <App />
  </AppProvider>
)
