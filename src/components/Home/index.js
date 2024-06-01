import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teams: [], loading: true}

  componentDidMount() {
    this.getTeamCardData()
  }

  getTeamCardData = async () => {
    try {
      const response = await fetch('https://apis.ccbp.in/ipl')
      const data = await response.json()
      const {teams} = data
      const updatedData = teams.map(eachItem => ({
        id: eachItem.id,
        name: eachItem.name,
        teamImageUrl: eachItem.team_image_url,
      }))
      this.setState({
        teams: updatedData,
        loading: false, // Change loading state to false when data is fetched
      })
    } catch (error) {
      console.error('Error fetching team data:', error)
      this.setState({loading: false}) // Change loading state to false on error
    }
  }

  render() {
    const {teams, loading} = this.state
    return loading ? (
      <div>
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    ) : (
      <div className="app-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="main-heading">IPL Dashboard</h1>
        </div>
        <div className="teams-container">
          {teams.map(eachItem => (
            <TeamCard key={eachItem.id} teamData={eachItem} />
          ))}
        </div>
      </div>
    )
  }
}

export default Home
