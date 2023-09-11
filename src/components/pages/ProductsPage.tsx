
import React, {useContext} from 'react';
import Product from '../Product';
import { useProducts } from '../../hooks/products';
import Loader from '../Loader';
import ErrorMessage from '../ErrorMessage';
import Modal from '../Modal';
import CreateProduct from '../CreateProduct';
import { IProduct } from '../../models';
import { ModalContext } from '../context/ModelContext';


const ProductsPage = () => {
    const {loading, error, products, addProduct} = useProducts();
    const {modal, open, close} = useContext(ModalContext)

  const createHandler = (product: IProduct) => {
    close()
    addProduct(product);
  }

  return(
    <div className='container mx-auto max-w-2xl pt-5'>
    {loading && <Loader/>}
    {error && <ErrorMessage error={error}/>}
    {products.map(product => <Product product={product} key={product.id}/>)}

    {modal && <Modal title='Create new product' onClose={() => close()}>
      <CreateProduct onCreate={createHandler}/>
    </Modal>}

    <button 
      className='absolute bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2'
      onClick={() => open()}
    >
      +
    </button>
    </div>
  )
};

export default ProductsPage;