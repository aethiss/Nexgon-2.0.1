const FBSDK = require('react-native-fbsdk')
const {
  LoginManager,
} = FBSDK

// Attempt a login using the Facebook login dialog,
// asking for default permissions.
export default function facebookLoginManager() {
  LoginManager.logInWithReadPermissions(['public_profile']).then(
    (result) => {
      if (result.isCancelled) {
        console.log('Login was cancelled')
      } else {
        console.log(`Login was successful with permissions: ${result.grantedPermissions.toString()}`)
      }
    },
    (error) => {
      console.log(`Login failed with error: ${error}`)
    },
  )
}
