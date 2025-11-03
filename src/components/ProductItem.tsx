import { useCartStore } from "@/store/cart";
import BtnAddToCart from "./BtnAddToCart";
import BtnDecrementIncrement from "./BtnDecrementIncrement";
import type { Dessert } from "@/type/products";

type ProductsProps = {
  product: Dessert;
};

function ProductItem({ product }: ProductsProps) {
  const { cartItems } = useCartStore();
  const quantity =
    cartItems.find((item) => item.name === product.name)?.quantity ?? 0;
  return (
    <div>
      <article key={product.name}>
        <div className="mb-9 relative">
          <picture>
            <source
              srcSet={product.image.desktop}
              media="(min-width: 1024px)"
              width={502}
              height={480}
            />
            <source
              srcSet={product.image.tablet}
              media="(min-width: 640px)"
              width={427}
              height={424}
            />
            <img
              src={product.image.mobile}
              alt={product.name}
              className={`w-full h-auto mb-4 rounded-xl ${
                quantity > 0 ? "outline-3 outline-primary" : ""
              }`}
              width={654}
              height={424}
            />
          </picture>
          <div className="absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2">
            {quantity > 0 ? (
              <BtnDecrementIncrement product={product} />
            ) : (
              <BtnAddToCart product={product} />
            )}
          </div>
        </div>
        <p className="text-preset-4 text-muted">{product.category}</p>
        <h2 className="text-preset-3">{product.name}</h2>
        <p className="text-preset-3 text-primary">
          ${product.price.toFixed(2)}
        </p>
      </article>
    </div>
  );
}

export default ProductItem;
