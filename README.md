# PrivateRoute

React route component with permission check

## Use

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'

import App from 'views/App'
import Login from 'views/Login'

const checkLogin = () => {
  ...do some check and return boolean result
}

const dom = (
  <Router>
    <Route path="/" render={() => <Redirect to="/home" />} exact />
    <PrivateRoute
      path="/home"
      component={App}
      authPath="/login"
      checkAuth={checkLogin}
    />
    <Route path="/login" component={Login} />
  </Router>
)

ReactDOM.render(dom, document.getElementById('root'))
```

When go "/home", private route will call `checkAuth` (here is checkLogin), when return `true`, route to "/home" successfully. But if `checkLogin` return false, you will be redirect to "authPage" (here is "/login").

Have fun 🙃
