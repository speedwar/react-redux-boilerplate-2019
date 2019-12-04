import { demoConstants } from 'rx/constants'

const initialState = {
  isDempRequest: null,
  isDempSuccess: null,
  isDemoFailure: null,
  demo: null,
  demoError: null
}

export function demo(state = initialState, action) {
  switch (action.type) {
    case demoConstants.DEMO_REQUEST:
      return {
        ...state,
        isDempRequest: true,
        isDempSuccess: null,
        isDemoFailure: null,
        demo: null,
        demoError: null
      }
    case demoConstants.DEMO_SUCCESS:
      return {
        ...state,
        isDempRequest: null,
        isDempSuccess: true,
        isDemoFailure: null,
        demo: action.data,
        demoError: null
      }
    case demoConstants.DEMO_FAILURE:
      return {
        ...state,
        isDempRequest: null,
        isDempSuccess: null,
        isDemoFailure: true,
        demoError: action.error
      }
    default:
      return state
  }
}
