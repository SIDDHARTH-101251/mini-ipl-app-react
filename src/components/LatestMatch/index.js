import './index.css'

const LatestMatch = props => {
  const {lmd} = props
  const {
    umpires,
    result,
    venue,
    manOfTheMatch,
    date,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = lmd
  return (
    <div className="latest-match-container">
      <div className="latest-match-top-section">
        <div>
          <p className="competor">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="result">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competing-team-logo"
        />
      </div>
      <div className="medium-device-image-container">
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competing-team-logo-2"
        />
      </div>
      <hr className="horizontal-rule" />
      <div className="latest-match-bottom-section">
        <p className="innings">First Innings</p>
        <p className="team">{firstInnings}</p>
        <p className="innings">Second Innings</p>
        <p className="team">{secondInnings}</p>
        <p className="innings">Man Of The Match</p>
        <p className="team">{manOfTheMatch}</p>
        <p className="innings">Umpires</p>
        <p className="team">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
