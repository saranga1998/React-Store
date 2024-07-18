
import './App.css'
import CakeContainers from './Components/CakeContainers'
import { Provider } from 'react-redux'
import store from './Redux/store'
import HookCakeContainer from './Components/HookCakeContainer'
import IceContainer from './Components/IceContainer'
import HookIceContainer from './Components/HookIceContainer'
import NewCakeContainers from './Components/NewCakeContainers'
import ItemContainer from './Components/ItemContainer'


function App() {


  return (
    <Provider store={store}>
      <div>
        <ItemContainer cake/>
        <ItemContainer/>
        <CakeContainers />
        <HookCakeContainer/>
        <IceContainer/>
        <HookIceContainer/>
        <NewCakeContainers/>
      </div>
      
    </Provider>

  )
}

export default App
