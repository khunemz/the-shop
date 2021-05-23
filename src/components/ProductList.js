import React, {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { setProducts } from '../redux/actions/productActions'
import Product from './Product';
import axios from 'axios';
const ProductList = () => {
  const products = useSelector(state => state)
  const dispatch = useDispatch();
  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get(`https://fakestoreapi.com/products`).catch((err) => { console.log(err); });
      dispatch(setProducts(response.data));
    }

    getProducts();
  }, [])
  return (
    <>
      <div className="">
        <Product />
      </div>
    </>
  )
}

export default ProductList
