import './index.css'

const MatchCard = props => {
  const {team} = props
  // Check if team is provided before accessing its properties
  if (!team) {
    return ''
  }

  const competingTeamLogo = team.competingTeamLogo || ''
  const result = team.result || ''
  const matchStatus = team.matchStatus || ''
  const competingTeam = team.competingTeam || ''

  const match = matchStatus === 'Won' ? 'green' : 'red'

  return (
    <li className="match-card">
      <img
        src={competingTeamLogo}
        alt={`Competing Team ${competingTeam}`}
        className="team-logo"
      />
      <p className="competing-team">{competingTeam}</p>
      <p className="team-result">{result}</p>
      <p className={match}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
