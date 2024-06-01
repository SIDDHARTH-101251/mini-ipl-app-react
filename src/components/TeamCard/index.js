import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamData} = props
  // const {name, teamImageUrl} = teamData
  const teamImageUrl = teamData.teamImageUrl || '' // Assuming teamImageUrl might be missing
  const name = teamData.name || 'sid' // Assuming name might be missing
  const id = teamData.id || '1'
  return (
    <Link to={`/team-matches/${id}`} className="link-style">
      <li className="team-card">
        <img src={teamImageUrl} alt={name} className="team-logo" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
