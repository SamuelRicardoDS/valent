import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyles } from './GlobalStyles.ts'
import { RelationshipProvider } from './context/RelationshipContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <RelationshipProvider>
      <App />
    </RelationshipProvider>
  </React.StrictMode>,
)
