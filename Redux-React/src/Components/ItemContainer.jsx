import React from 'react'
import { connect } from 'react-redux'
import {buyCake,buyIce} from '../Redux'

function ItemContainer(props) {
  return (
    <div>
      <h2>Item -{props.item}</h2>
      <button onClick={props.buyItem}>Buy Item</button>
    </div>
  )
}

const mapStateToProps = (state,ownProps) => {
    const itemState = ownProps.cake
    ?state.cake.numOfCakes
    :state.ice.numOfIce

    return{
        item : itemState
    }
}

const mapDispatchToProps = (dispatch,ownProps) =>{
  const dispatchFunction = ownProps.cake
  ? () => dispatch(buyCake())
  : () => dispatch(buyIce())

  return{
    buyItem : dispatchFunction
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer)
