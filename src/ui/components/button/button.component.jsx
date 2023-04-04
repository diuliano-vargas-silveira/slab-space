import { iconCommand } from '../../assets'

import './button.style.scss'

const Button = ({ onClick, className, children, suffix }) => (
  <button onClick={onClick} className={`c-button ${className}`}>
    {children}
    <div className="c-button__suffix-container">
      <img
        src={iconCommand}
        alt="command button on mac or alt button in windows"
        className="c-button__suffix-container__icon"
      />
      {suffix && (
        <span className="c-button__suffix-container__text">{suffix}</span>
      )}
    </div>
  </button>
)

export { Button }
