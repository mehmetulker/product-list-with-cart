import React from "react";
import { CardAction, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import CarbonNeutralIcon from "@/assets/images/icon-carbon-neutral.svg";
import DialogConfirmation from "./DialogConfirmation";

function CartItems() {
  return (
    <div>
      <CardContent>
        <ul className="flex flex-col gap-4">
          <li className="pb-4 border-b border-(--clr-rose-100)">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-preset-4-bold">Classic Tiramisu</h3>
                <div className="inline-flex gap-2 mb-2">
                  <span className="text-preset-4-bold text-primary">1x</span>
                  <span className="text-preset-4 text-muted">@ $5.50</span>
                  <strong className="text-preset-4-bold text-muted">
                    $5.50
                  </strong>
                </div>
              </div>
              <CardAction className="self-center">
                <Button
                  size={"icon"}
                  className="size-5 border-(--clr-rose-300)"
                  variant={"outline"}
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
          <li className="pb-4 border-b border-(--clr-rose-100)">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-preset-4-bold">Classic Tiramisu</h3>
                <div className="inline-flex gap-2 mb-2">
                  <span className="text-preset-4-bold text-primary">1x</span>
                  <span className="text-preset-4 text-muted">@ $5.50</span>
                  <strong className="text-preset-4-bold text-muted">
                    $5.50
                  </strong>
                </div>
              </div>
              <CardAction className="self-center">
                <Button size={"icon"} className="size-5" variant={"outline"}>
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
          <li className="pb-4 border-b border-(--clr-rose-100)">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-preset-4-bold">Classic Tiramisu</h3>
                <div className="inline-flex gap-2 mb-2">
                  <span className="text-preset-4-bold text-primary">1x</span>
                  <span className="text-preset-4 text-muted">@ $5.50</span>
                  <strong className="text-preset-4-bold text-muted">
                    $5.50
                  </strong>
                </div>
              </div>
              <CardAction className="self-center">
                <Button size={"icon"} className="size-5" variant={"outline"}>
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
        </ul>
        <div
          className="my-6 flex
               items-center justify-between"
        >
          <p className="text-preset-4">Order Total</p>
          <p>
            <strong> $16.50</strong>
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
