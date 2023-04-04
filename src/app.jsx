import { Header } from './ui/components/header/header.component'
import { iconRocket } from './ui/assets'

import './app.scss'
import { Button } from './ui/components'

function App() {
  // const renderRuler = () => {
  //   return <div className="t-start-page__presentation__ruler"></div>
  // }

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

        <img
          src={iconRocket}
          alt="a spaceship, flying in the space!"
          className="t-start-page__presentation__spaceship"
        />
      </section>
    </div>
  )
}

export { App }
