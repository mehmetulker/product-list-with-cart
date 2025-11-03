import { CardContent } from "./ui/card";
import EmptyIllustrationIcon from "@/assets/images/illustration-empty-cart.svg";

function CartEmpty() {
  return (
    <div className="mx-auto">
      <CardContent>
        <img src={EmptyIllustrationIcon} alt="" width={128} height={128} />
        <p className="my-4 text-preset-4-bold text-muted ">
          Your added items will appear here
        </p>
      </CardContent>
    </div>
  );
}

export default CartEmpty;
