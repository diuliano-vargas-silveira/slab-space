import { iconRocket, imageMoon } from '../../assets'
import { Button, QuoteContainer } from '../../components'

import './moon.style.scss'

const Moon = () => {
  return (
    <section className="t-moon">
      <section className="t-moon__rocket">
        <QuoteContainer className="t-moon__rocket__quote">
          " You can be an astronàut, which focuses on stars, binoculars,
          galaxies and the universe. "
        </QuoteContainer>
        <img
          className="t-moon__rocket__image"
          src={iconRocket}
          alt="a spaceship, flying in the space!"
        />
      </section>
      <section className="t-moon__section">
        <img
          src={imageMoon}
          alt="The moon, our satellite"
          className="t-moon__section__image"
        />
        <section className="t-moon__section__text">
          <h2 className="t-moon__section__title">
            JOIN OTHERS TO EXPERIENCE AN EXTRAORDINARY GALAXY
          </h2>
          <Button className="t-moon__section__button">
            First Person - Its Free Now
          </Button>
          <footer className="t-moon__footer">
            <nav className="t-moon__footer__links">
              <a href="/" className="t-moon__footer__link">
                Privacy policy
              </a>
              <a href="/" className="t-moon__footer__link">
                Sitemap
              </a>
              <a href="/" className="t-moon__footer__link">
                Terms of Use
              </a>
            </nav>

            <h2 className="t-moon__footer__all-rights">
              Slab Space@ 2021-2022, All Rights Reserved
            </h2>
          </footer>
        </section>
      </section>
    </section>
  )
}

export { Moon }
