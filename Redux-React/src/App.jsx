
import './App.css'
import CakeContainers from './Components/CakeContainers'
import { Provider } from 'react-redux'
import store from './Redux/store'
import HookCakeContainer from './Components/HookCakeContainer'
import IceContainer from './Components/IceContainer'
import HookIceContainer from './Components/HookIceContainer'


function App() {


  return (
    <Provider store={store}>
      <div>
        <CakeContainers />
        <HookCakeContainer/>
        <IceContainer/>
        <HookIceContainer/>
      </div>
      
    </Provider>

  )
}

export default App
