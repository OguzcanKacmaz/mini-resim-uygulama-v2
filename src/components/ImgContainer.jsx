import ProductCard from "./ProductCard";

export default function ImgContainer({products ,handleProductSelect}){
    return (
        <div className="grid">
        {products
        .filter(item=>item.isAvailable)
        .map(product=>
        <ProductCard product={product} key={product.id} handleProductSelect={handleProductSelect}/>)} 
        </div>
    )
}