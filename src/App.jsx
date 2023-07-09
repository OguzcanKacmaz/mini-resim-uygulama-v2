import { useState } from 'react'
import { products as productsObj } from './data/products'
import ImgNotSelected from './components/ImgNotSelected';
import ImgContainer from './components/ImgContainer';
function App() {
  
  const [products, setProducts] = useState(productsObj)
  const [activeProduct, setIsActiveProduct] = useState(products.find(item=>item.isActive))
function handleProductSelect(productId){
  const selectedProduct=productsObj.find(products=>products.id===productId);
  selectedProduct.isActive=true;
  setIsActiveProduct(selectedProduct)
  const notSelectedProducts=productsObj.filter(item=>item.id!==productId).map(item=>{
    return{
      ...item,
      isActive:false
    }
  })
  const newProducts=[
    ...notSelectedProducts,
    selectedProduct
  ].sort((a,b)=>(a.id-b.id))
  setProducts(newProducts)
}
  return (
    <main className='container'>
      {
        activeProduct ? <img src={activeProduct.imgName} alt="" style={{width:"100%"}} /> : <ImgNotSelected/>
      }
     <ImgContainer products={products} handleProductSelect={handleProductSelect}/>    
    </main>
  )
}

export default App
