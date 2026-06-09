import './App.css'
import { PagesProvider } from './context/pagesContext'
import { AppRouter } from './Router/router'

export function App() {
  return (
    <PagesProvider>
      <AppRouter />
    </PagesProvider>

  )
}
