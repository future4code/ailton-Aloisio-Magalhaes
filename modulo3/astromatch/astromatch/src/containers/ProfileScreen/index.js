import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const ProfilePicture = styled.img`
  width: 100%;
`

class ProfileScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <ProfilePicture src={this.props.currentSelectedProfile.photo}/>
      </div>
    )
  }
}

ProfileScreen.propTypes = {

}

const mapStateToProps = (state) => ({
  currentSelectedProfile: state.profiles.currentSelectedProfile
})

export default connect(mapStateToProps)(ProfileScreen)
