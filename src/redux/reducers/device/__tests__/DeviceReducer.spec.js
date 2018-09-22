/* eslint-disable no-undef */
import DeviceReducer from '../DeviceReducer'

const fakeRation = 122

describe('@DeviceReducer', () => {
  it('Add New Ration', () => {
    const testReducer = DeviceReducer(
      {},
      {
        type: 'UPDATE_DEVICE_RATIO',
        ratio: fakeRation
      }
    )
    expect(testReducer).toMatchObject({ aspect_ratio: fakeRation })
  })
})
