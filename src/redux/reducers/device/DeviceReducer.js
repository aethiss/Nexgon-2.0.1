import { Dimensions } from 'react-native'
import { createReducer } from '../../lib/ReducerHelper'

const { width, height } = Dimensions.get('window')

const initialState = {
  aspect_ratio: width / height,
}

const deviceReducer = createReducer(initialState, {
  UPDATE_DEVICE_RATIO: (currentState, { ratio }) => ({ ...currentState, aspect_ratio: ratio }),
})

export default deviceReducer
