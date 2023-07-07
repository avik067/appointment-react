// Write your code here

import './index.css'

const AppointmentItem = props => {
  const {details, trigger} = props
  const {id, title, date, stared} = details

  const activate = () => trigger(id)

  const starActive = !stared
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'

  return (
    <li className="list-container">
      <div className="row-apart">
        <p className="title-n">{title}</p>
        <div>
          <button
            className="star"
            data-testid="star"
            type="button"
            onClick={activate}
          >
            <img alt="star" src={starActive} />
          </button>
        </div>
      </div>
      <p className="result-date-show">Date:{date}</p>
    </li>
  )
}

export default AppointmentItem
