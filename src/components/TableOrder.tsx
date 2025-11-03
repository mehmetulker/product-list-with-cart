import { useCartStore } from "@/store/cart";
function TableOrder() {
  const { cartItems, getOrderTotal } = useCartStore();
  return (
    <>
      <table className="bg-(--clr-rose-50) rounded-lg">
        <tbody>
          {cartItems.map((item) => {
            const qty = item.quantity ?? 1;
            const price = Number(item.price ?? 0);
            const itemTotal = (qty * price).toFixed(2);

            return (
              <tr
                className="flex items-center justify-between mb-4 pb-4 border-b border-(--clr-rose-100) p-4 "
                key={item.name}
              >
                <td className="flex gap-4">
                  <img
                    className="rounded-lg"
                    src={item.image.thumbnail}
                    alt="tiramisu thumbnail"
                    width={48}
                    height={48}
                  />
                  <div>
                    <h3 className="text-preset-4-bold">{item.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-primary text-preset-4-bold">
                        {qty}x
                      </span>
                      <span className="text-muted text-preset-4">
                        @ ${price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="text-preset-3">${itemTotal} </td>
              </tr>
            );
          })}

          <div
            className="my-6 flex p-4
               items-center justify-between"
          >
            <p className="text-preset-3 ">Order Total</p>
            <p>
              <strong> ${getOrderTotal()}</strong>
            </p>
          </div>
        </tbody>
      </table>
    </>
  );
}

export default TableOrder;
