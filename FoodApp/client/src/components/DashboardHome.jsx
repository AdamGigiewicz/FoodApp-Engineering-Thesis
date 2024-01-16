import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts, setAllProducts } from '../context/actions/productActions';

const DashboardHome = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if(!products){
      getAllProducts().then((data) => {
        dispatch(setAllProducts(data));
      });
    }
  },[])
  
  
  return (
    <div>
      DbHome
    </div>
  )
}

export default DashboardHome
