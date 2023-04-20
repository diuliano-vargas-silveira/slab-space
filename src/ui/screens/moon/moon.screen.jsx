import { imageMoon } from '../../assets'
import { Button } from '../../components'

import './moon.style.scss'

const Moon = () => {
  return (
    <section className="t-moon">
      <span className="t-moon__topic">- Explore more universes.</span>
      <p className="t-moon__quote-phrase">
        " You can be an astronaut, which focuses on stars, binoculars, galaxies
        and the universe. "
      </p>
      <Button className="t-moon__button">Readmore</Button>
      <section className="t-moon__section">
        <img
          src={imageMoon}
          alt="The moon, our satellite"
          className="t-moon__section__image"
        />
        <h2 className="t-moon__section__title">
          JOIN OTHERS TO EXPERIENCE AN EXTRAORDINARY GALAXY
        </h2>
        <Button className="t-moon__section__button">
          First Person - Its Free Now
        </Button>
      </section>
    </section>
  )
}

export { Moon }
