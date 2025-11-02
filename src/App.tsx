import { useEffect, useState } from "react";
import Cart from "./components/Cart";
import Container from "./components/Container";
import Products from "./components/Products";
import CartEmpty from "./components/CartEmpty";
import CartItems from "./components/CartItems";
import ProductItem from "./components/ProductItem";
import { type Dessert } from "./type/products";
import { useCartStore } from "./store/cart";

function App() {
  const [products, setProduct] = useState<Dessert[]>([]);
  const { cartItems } = useCartStore();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/desserts");
      const data = await response.json();
      setProduct(data);
    }
    fetchData();
  }, []);

  return (
    <main>
      <Container>
        <div className="grid grid-cols-[8fr_4fr] max-lg:grid-cols-1 gap-8 ">
          <Products>
            {products.map((product) => (
              <ProductItem key={product.name} product={product} />
            ))}
          </Products>

          <Cart>{cartItems.length > 0 ? <CartItems /> : <CartEmpty />}</Cart>
        </div>
      </Container>
    </main>
  );
}

export default App;
