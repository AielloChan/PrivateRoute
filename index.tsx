import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({
  component: Component,
  checkAuth,
  authPath = '/login',
  ...rest
}: {
  component: any
  checkAuth(): boolean
  authPath?: string
  [key: string]: any
}) => (
  <Route
    {...rest}
    render={props =>
      checkAuth() === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: authPath,
            state: { from: props.location },
          }}
        />
      )
    }
  />
)

export default PrivateRoute
