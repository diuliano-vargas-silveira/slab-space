import { Header } from './ui/components/header/header.component'
import { Button } from './ui/components'
import { iconMouse, iconRocket } from './ui/assets'
import { createArrayWithCheckPoints } from './ui/utils/create-array.utils'
import { MEDIA_INFOS } from './ui/constants'

import './app.scss'

const LENGTH_RULER = 18
const CHECKPOINTS = [
  { position: 1, value: 50 },
  { position: 9, value: 60 },
  { position: 17, value: 70 },
]
const RULER = createArrayWithCheckPoints(LENGTH_RULER, CHECKPOINTS)

function App() {
  const renderRuler = () => (
    <span className="t-start-page__presentation__ruler">
      {RULER.map(ruler => {
        const activatedClassName = ruler !== '' ? '--active' : ''

        return (
          <span
            className={`t-start-page__presentation__metric${activatedClassName}`}
          >
            {ruler}
          </span>
        )
      })}
    </span>
  )

  return (
    <div className="t-start-page">
      <Header />
      <section className="t-start-page__presentation">
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
          <Button suffix="A">Get Ticket</Button>
        </div>
        <footer className="t-start-page__presentation__infos">
          <span className="t-start-page__presentation__scroll">
            <img
              src={iconMouse}
              alt="Mouse scroll"
              className="t-start-page__presentation__scroll-icon"
            />
            <p>
              Scroll to <strong> Explore</strong>
            </p>
          </span>

          <div className="t-start-page__presentation__social">
            <span className="t-start-page__presentation__follow-more">
              Follow More
            </span>
            <div className="t-start-page__presentation__social-medias">
              {Object.values(MEDIA_INFOS).map(({ name, url }) => (
                <a
                  className="t-start-page__presentation__social-link"
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>
        </footer>

        <img
          src={iconRocket}
          alt="a spaceship, flying in the space!"
          className="t-start-page__presentation__spaceship"
        />
        {renderRuler()}
      </section>
    </div>
  )
}

export { App }
