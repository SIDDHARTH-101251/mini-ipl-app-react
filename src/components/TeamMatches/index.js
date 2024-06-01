import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch/index'
import MatchCard from '../MatchCard/index'

import './index.css'

class TeamMatches extends Component {
  state = {bgStyle: '', lmd: {}, recent: [], img: '', loading: true}

  componentDidMount() {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const latestMatchDetails = data.latest_match_details
    const recentMatch = data.recent_matches
    const teamBannerUrl = data.team_banner_url
    const lmd = {
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      id: latestMatchDetails.id,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.match_status,
    }
    console.log(lmd)
    const recent = recentMatch.map(eachItem => ({
      umpires: eachItem.umpires,
      result: eachItem.result,
      manOfTheMatch: eachItem.man_of_the_match,
      id: eachItem.id,
      date: eachItem.date,
      venue: eachItem.venue,
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      firstInnigs: eachItem.first_innings,
      secondInnings: eachItem.second_innings,
      matchStatus: eachItem.match_status,
    }))
    this.setState({
      bgStyle: id.toLowerCase(),
      lmd,
      recent,
      img: teamBannerUrl,
      loading: false,
    })
  }

  render() {
    const {bgStyle, img, lmd, recent, loading} = this.state
    return loading ? (
      <div>
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    ) : (
      <div className={`teamBg ${bgStyle}`}>
        <img src={img} alt="team banner" className="banner" />
        <div>
          <h1 className="latest_matches">Latest Matches</h1>
        </div>
        <LatestMatch lmd={lmd} />
        <div className="recent-match-container">
          {recent.map(eachItem => (
            <MatchCard key={eachItem.id} team={eachItem} />
          ))}
          <MatchCard />
        </div>
      </div>
    )
  }
}

export default TeamMatches
