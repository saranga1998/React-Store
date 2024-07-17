import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { buyCake } from '../Redux'

function HookCakeContainer() {
    const numOfCakes = useSelector(state=>state.cake.numOfCakes)
    const dispatch = useDispatch()
  return (
    <div>
      <p>Hook-Number of Cakes -{numOfCakes}</p>
      <button onClick={()=>dispatch(buyCake())}>Buy cake</button>
    </div>
  )
}

export default HookCakeContainer
