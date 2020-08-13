import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { incrementWins, incrementLosses } from './features/stats'

// Component
const App = ({ wins, losses, incrementWins, incrementLosses }) => (
  <div
    style={{
      width: `100vw`,
      height: `100vh`,
      display: `flex`,
      flexDirection: `column`,
      justifyContent: `center`,
      alignItems: `center`
    }}
  >
    <p>Wins: {wins}</p>
    <p>Losses: {losses}</p>
    <button onClick={incrementWins}>Increment Wins</button>
    <button onClick={incrementLosses}>Increment Losses</button>
  </div>
)

// Prop Types
App.propTypes = {
  wins: PropTypes.number,
  losses: PropTypes.number,
  incrementWins: PropTypes.func,
  incrementLosses: PropTypes.func
}

// Connect to Redux
const mapStateToProps = state => ({
  wins: state.stats.wins,
  losses: state.stats.losses
})

const mapDispatchToProps = {
  incrementWins,
  incrementLosses
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
