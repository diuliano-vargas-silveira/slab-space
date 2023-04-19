import { Button } from '../../components'
import { iconAstronaut, iconEarth, imageSatellite } from '../../assets'

import './explore.style.scss'

const Explore = () => {
  return (
    <section className="t-explore">
      <section className="t-explore__satellite">
        <img
          src={imageSatellite}
          alt="Satellite showing a part of earth in your mirror."
          className="t-explore__satellite__image"
        />
        <div className="t-explore__explain">
          <span className="t-explore__explain__topic">
            - Explore more universes.
          </span>
          <p className="t-explore__explain__quote-phrase">
            "Many go beyond the incredible technological advances that allow you
            to see them in real time. "
          </p>
          <Button className="t-explore__explain__button">Readmore</Button>
        </div>
      </section>
      <section className="t-explore__earth">
        <p className="t-explore__earth__quote-phrase">
          " It's all about Slabspace universe Labs explore - the ultimate space
          for new experiences based on the services it has provided. "
        </p>
        <h2 className="t-explore__earth__title">
          EXPLORE MORE UNIVERSES WITH EXTRAORDINARY NUANCES
        </h2>
        <img
          src={iconAstronaut}
          alt="An astronaut in your space suit, flying away"
          className="t-explore__earth__astronaut"
        />
        <img
          src={iconEarth}
          alt="The earth is blue."
          className="t-explore__earth__image"
        />
        <footer className="t-explore__earth__buttons">
          <Button className="t-explore__earth__button" suffix="O">
            Explore Universe
          </Button>
          <Button className="t-explore__earth__button" suffix="A">
            Learn More
          </Button>
        </footer>
      </section>
    </section>
  )
}

export { Explore }
