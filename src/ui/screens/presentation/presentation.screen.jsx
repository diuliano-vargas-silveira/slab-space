import { Button } from '../../components'
import { iconRocket } from '../../assets'
import { createArrayWithCheckPoints } from '../../../utils/create-array.utils'
import { SocialInformations } from './components'

import './presentation.style.scss'

const LENGTH_RULER = 18
const CHECKPOINTS = [
  { position: 1, value: 50 },
  { position: 9, value: 60 },
  { position: 17, value: 70 },
]
const RULER = createArrayWithCheckPoints(LENGTH_RULER, CHECKPOINTS)

const Presentation = () => {
  const renderRuler = () => (
    <span className="t-start-page__presentation__ruler">
      {RULER.map((ruler, index) => {
        const activatedClassName = ruler !== '' ? '--active' : ''

        return (
          <span
            className={`t-start-page__presentation__metric${activatedClassName}`}
            key={index}
          >
            {ruler}
          </span>
        )
      })}
    </span>
  )

  return (
    <section className="t-start-page__presentation">
      <section className="t-start-page__text">
        <h2 className="t-start-page__presentation__title">
          EXPLORE THE UNIVERSE AND FEEL THE SENSATION
        </h2>
        <p className="t-start-page__presentation__text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
          dignissimos odit enim sed eos, magni eum eius ex totam obcaecati
          eligendi, quibusdam sint amet!
        </p>
        <div className="t-start-page__presentation__buttons">
          <Button className="t-start-page__presentation__button" suffix="P">
            Watch Space Agency
          </Button>
          <Button
            className="t-start-page__presentation__button-ticket"
            suffix="A"
          >
            Get Ticket
          </Button>
        </div>
      </section>
      <SocialInformations />

      <img
        src={iconRocket}
        alt="a spaceship, flying in the space!"
        className="t-start-page__presentation__spaceship"
      />
      {renderRuler()}
    </section>
  )
}

export { Presentation }
