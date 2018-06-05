import { path } from 'ramda'

// eslint-disable-next-line import/prefer-default-export
export function getRouteName(navigation) {
  return path(['state', 'routeName'], navigation)
}

export function getActiveRouteName(navigationState) {
  if (!navigationState) {
    return null
  }
  const route = navigationState.routes[navigationState.index]
  // dive into nested navigators
  if (route.routes) {
    return getActiveRouteName(route)
  }
  return route.routeName
}
