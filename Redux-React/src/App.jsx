
import './App.css'
import CakeContainers from './Components/CakeContainers'
import { Provider } from 'react-redux'
import store from './Redux/store'


function App() {


  return (
    <Provider store={store}>
      <div>
        <CakeContainers />
      </div>
      
    </Provider>

  )
}

export default App
