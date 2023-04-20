import { Header } from './ui/components'
import { Explore, Moon, Presentation } from './ui/screens'

import './app.scss'

function App() {
  return (
    <div className="t-start-page">
      <Header />
      <Presentation />
      <Explore />
      <Moon />
    </div>
  )
}

export { App }
