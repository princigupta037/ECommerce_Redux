import React, { useEffect} from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { Row,Col,ListGroup, Image, Form,Button,Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart } from '../actions/cartActions'


const CartScreen = ({ match, location, history}) => {
     
    const productId = match.params.id

    const qty = location.search ? Number(location.search.split('=')[1]) : 1 

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)

    const { cartItems } = cart

    console.log('cartItems',cartItems)

    useEffect( () => {
        console.log('productId  ',productId)
        console.log('qty  ',qty)
        if(productId) {
            dispatch(addToCart(productId, qty))
        }
    },[dispatch, productId, qty])

    //console.group(qty) 
    return (
        <div>
            Cart
        </div>
    )
}

export default CartScreen
