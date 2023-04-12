import { createBrowserRouter } from 'react-router-dom'
import { LINKS } from '../constants'

const routerCreate = () =>
  createBrowserRouter(Object.keys(LINKS).map(name => ({ ...LINKS[name] })))

export { routerCreate }
