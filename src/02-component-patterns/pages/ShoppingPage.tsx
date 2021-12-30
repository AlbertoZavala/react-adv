import { ProductTitle, ProductButtons, ProductImage } from '../components';
import ProductCard from '../components';

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{
        display:'flex',
        flexDirection: 'row',
        flexWrap:'wrap'
        }}>
        
        <ProductCard product={product}>
          <ProductImage img={product.img}/>
          <ProductTitle />
          <ProductButtons />
        </ProductCard>      

        <ProductCard product={product}>
          <ProductCard.Image img={product.img}/>
          <ProductCard.Title title={product.title} />
          <ProductCard.Buttons />
        </ProductCard>          

        </div>      
    </div>
  )
}