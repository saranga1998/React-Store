
import './App.css'
import CakeContainers from './Components/CakeContainers'
import { Provider } from 'react-redux'
import store from './Redux/store'
import HookCakeContainer from './Components/HookCakeContainer'


function App() {


  return (
    <Provider store={store}>
      <div>
        <CakeContainers />
        <HookCakeContainer/>
      </div>
      
    </Provider>

  )
}

export default App
