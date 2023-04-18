import { Header } from './ui/components'
import { Explore, Presentation } from './ui/screens'

import './app.scss'

function App() {
  return (
    <div className="t-start-page">
      <Header />
      <Presentation />
      <Explore />
    </div>
  )
}

export { App }
