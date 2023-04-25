import { Button } from '../button/button.component'

import './quote-container.style.scss'

const QuoteContainer = ({ children, className }) => (
  <div className={`c-quote-container ${className}`}>
    <span className="c-quote-container__topic">- Explore more universes.</span>
    <p className="c-quote-container__quote-phrase">{children}</p>
    <Button className="c-quote-container__button">Readmore</Button>
  </div>
)

export { QuoteContainer }
