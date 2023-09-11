import React, {useState, useEffect} from 'react';
import { IProduct } from '../models';
import axios, {AxiosError} from 'axios';

export function useProducts() {
  const[products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const[error, setError] = useState('');

  function addProduct(product: IProduct) {
    setProducts(prev => [...prev, product])
  }

  async function fetchProduts(){
    try{
      setError('');
      setLoading(true);
      const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products')
      setProducts(response.data);
      setLoading(false)
    }catch(err: unknown){
      const error = err as AxiosError
      setLoading(false)
      setError(error.message)    
    }
    
  }

  useEffect(() => {
    fetchProduts();
  }, [])

  return{products, error, loading, addProduct}
}