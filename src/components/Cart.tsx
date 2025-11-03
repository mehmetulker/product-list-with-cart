import { Card, CardHeader, CardTitle } from "./ui/card";
import { useCartStore } from "@/store/cart";

function Cart({ children }: { children: React.ReactNode }) {
  const { getProductTotal } = useCartStore();
  return (
    <div>
      <Card className="rounded-lg border-none shadow-none max-w-[400px] max-lg:max-w-none">
        <CardHeader>
          <CardTitle>
            <h2 className="text-primary text-preset-2">
              Your Cart ({getProductTotal()})
            </h2>
          </CardTitle>
        </CardHeader>
        {children}{" "}
      </Card>
    </div>
  );
}

export default Cart;
