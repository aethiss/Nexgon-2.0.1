import { LoginManager, GraphRequest, GraphRequestManager, AccessToken } from 'react-native-fbsdk'

export function FacebookProfile(token) {
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
        console.log(`Error fetching data: ${error.toString()}`)
      } else {
        console.log('I MIEI DATI !:', result)
      }
    },
  )

  new GraphRequestManager().addRequest(infoRequest).start()
}

// Attempt a login using the Facebook login dialog,
// asking for default permissions.
export function facebookLoginManager() {
  LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(
    (result) => {
      if (result.isCancelled) {
        console.log('Login was cancelled')
      } else {
        console.log(`Login was successful with permissions: ${result.grantedPermissions.toString()}`)
        AccessToken.getCurrentAccessToken().then((data) => { FacebookProfile(data.accessToken) })
      }
    },
    (error) => {
      console.log(`Login failed with error: ${error}`)
    },
  )
}
