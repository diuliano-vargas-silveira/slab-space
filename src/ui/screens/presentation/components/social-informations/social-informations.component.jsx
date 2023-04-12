import { MEDIA_INFOS } from '../../../../../constants'
import { iconMouse } from '../../../../assets'

const SocialInformations = () => {
  const renderSocialMedias = () => (
    <div className="t-start-page__presentation__social-medias">
      {Object.values(MEDIA_INFOS).map(({ name, url }, index) => (
        <a
          className="t-start-page__presentation__social-link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
        >
          {name}
        </a>
      ))}
    </div>
  )

  return (
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
        {renderSocialMedias()}
      </div>
    </footer>
  )
}

export { SocialInformations }
