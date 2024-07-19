
import './App.css'
import CakeContainers from './Components/CakeContainers'
import { Provider } from 'react-redux'
import store from './Redux/store'
import HookCakeContainer from './Components/HookCakeContainer'
import IceContainer from './Components/IceContainer'
import HookIceContainer from './Components/HookIceContainer'
import NewCakeContainers from './Components/NewCakeContainers'
import ItemContainer from './Components/ItemContainer'
import UserContainer from './Components/UserContainer'


function App() {


  return (
    <Provider store={store}>
      <div>
        <UserContainer/>
        {/* <ItemContainer cake/>
        <ItemContainer/>
        <CakeContainers />
        <HookCakeContainer/>
        <IceContainer/>
        <HookIceContainer/>
        <NewCakeContainers/> */}
      </div>
      
    </Provider>

  )
}

export default App
