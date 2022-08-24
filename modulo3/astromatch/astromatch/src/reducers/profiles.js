const initialState = {
  profileToSwipe: null,
  matches: []
}

const profiles = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PROFILE_TO_SWIPE':
      return { ...state, profileToSwipe: action.payload.profile }
    case 'SET_MATCHES':
      return { ...state, matches: action.payload.matches}
    default:
      return state
  }
}

export default profiles
