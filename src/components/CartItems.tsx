import { CardAction, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import CarbonNeutralIcon from "@/assets/images/icon-order-confirmed.svg";
import DialogConfirmation from "./DialogConfirmation";
import { useCartStore } from "@/store/cart";

function CartItems() {
  const { cartItems, removeFromCart, getOrderTotal } = useCartStore();
  return (
    <div>
      <CardContent>
        <ul className="flex flex-col gap-4">
          {cartItems.map((item) => {
            const qty = item.quantity ?? 1;
            const price = Number(item.price ?? 0);
            const itemTotal = (qty * price).toFixed(2);
            const key = item.name;

            return (
              <li
                key={key}
                className="pb-4 border-b"
                style={{ borderColor: "var(--clr-rose-100)" }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-preset-4-bold">{item.name}</h3>
                    <div className="inline-flex gap-2 mb-2 items-baseline">
                      <span className="text-preset-4-bold text-primary">
                        {qty}x
                      </span>
                      <span className="text-preset-4 text-muted">
                        @ ${price.toFixed(2)}
                      </span>
                      <strong className="text-preset-4-bold text-muted">
                        ${itemTotal}
                      </strong>
                    </div>
                  </div>
                  <CardAction className="self-center">
                    <Button
                      onClick={() => removeFromCart(item.name)}
                      size={"icon"}
                      className="size-5 border-(--clr-rose-300)"
                      variant={"outline"}
                      aria-label="remove item"
                    >
                      <svg
                        className="size-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        fill="none"
                        viewBox="0 0 10 10"
                      >
                        <path
                          fill="#CAAFA7"
                          d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
                        />
                      </svg>
                    </Button>
                  </CardAction>
                </div>
              </li>
            );
          })}
        </ul>
        <div
          className="my-6 flex
               items-center justify-between"
        >
          <p className="text-preset-3 ">Order Total</p>
          <p className="text-preset-4-bold">
            <strong> ${getOrderTotal()}</strong>
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-6">
        <div className="flex items-center justify-center gap-2 py-4 bg-(--clr-rose-50) rounded-lg w-full">
          <img src={CarbonNeutralIcon} alt="Carbon Neutral Icon" />
          <p className="text-preset-4">
            This is a <b className="text-preset-4-bold">carbon-neutral </b>{" "}
            delivery
          </p>
        </div>
        <DialogConfirmation />
      </CardFooter>
    </div>
  );
}

export default CartItems;
