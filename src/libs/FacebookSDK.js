import { LoginManager, GraphRequest, GraphRequestManager, AccessToken } from 'react-native-fbsdk'

export function FacebookProfile(token) {
  return new Promise((resolve, reject) => {
    const infoRequest = new GraphRequest(
      '/me',
      {
        accessToken: token,
        parameters: {
          fields: {
            string: 'email,name,picture',
          },
        },
      },
      (error: ?Object, result: ?Object) => {
        if (error) {
          // console.log(`Error fetching data: ${error.toString()}`)
          return reject(new Error(error.toString()))
        }
        // console.log('I MIEI DATI !:', result)
        return resolve(result)
      },
    )

    new GraphRequestManager().addRequest(infoRequest).start()
  })
}

// Attempt a login using the Facebook login dialog,
// asking for default permissions.
export function facebookLoginManager() {
  return new Promise((resolve, reject) => {
    LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(
      // eslint-disable-next-line consistent-return
      (result) => {
        if (result.isCancelled) {
          // console.log('Login was cancelled')
          return reject(new Error('Login was cancelled'))
        }
        // console.log(`Login was successful with permissions:
        // ${result.grantedPermissions.toString()}`)
        AccessToken.getCurrentAccessToken().then((data) => {
          FacebookProfile(data.accessToken)
            .then(profileResult => resolve(profileResult))
            .catch((err) => {
              reject(new Error(err))
            })
        })
      },
      (error) => {
        // console.log(`Login failed with error: ${error}`)
        reject(new Error(error))
      },
    )
  })
}
