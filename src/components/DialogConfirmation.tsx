import TableOrder from "./TableOrder";
import { Button } from "./ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import OrderConfirmedIcon from "@/assets/images/icon-order-confirmed.svg";

function DialogConfirmation() {
  return (
    <div className="w-full py-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button size={"lg"} className="w-full py-4">
            Confirm Order
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <img
                className="mb-4"
                src={OrderConfirmedIcon}
                alt=""
                width={48}
                height={48}
              />
              <h2 className="mb-2 text-preset-1">Order Confirmation</h2>
            </DialogTitle>
            <DialogDescription>
              <p className="text-muted text-base">
                We hope you enjoy your food!
              </p>
            </DialogDescription>
          </DialogHeader>
          <TableOrder />
          <DialogFooter>
            <Button size={"lg"} className="py-4 w-full">
              Start New Order
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default DialogConfirmation;
