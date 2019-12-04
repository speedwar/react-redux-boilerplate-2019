import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import LoaddingScreen from 'shared/LoaddingScreen/LoaddingScreen'

// React.lazy and Suspense is not yet available for server side rendering
// If you want to do code-splitting in a server-rendered app,
// Loadable Components is highly recommended
const Demo = lazy(() => import('./pages/Demo/Demo'))

const Root = () => (
  <Suspense fallback={ LoaddingScreen }>
    <Demo />
  </Suspense>
)

ReactDOM.render(
  <Root />, 
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
