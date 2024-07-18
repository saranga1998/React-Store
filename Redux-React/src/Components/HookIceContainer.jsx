import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { buyIce } from '../Redux'

function HookIceContainer() {

    const numOfIce = useSelector(state => state.ice.numOfIce)
    const dispatch = useDispatch()

  return (
    <div>
      <p>Hook :Number of Ice - {numOfIce}</p>
      <button onClick={() => dispatch(buyIce())}>Buy Ice Cream</button>
    </div>
  )
}

export default HookIceContainer
