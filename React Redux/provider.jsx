import { Provider } from 'react-redux'
import store from './store'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}> //similar to context API
    <App />
  </Provider>,
  rootElement
)

