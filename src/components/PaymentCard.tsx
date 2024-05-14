import Image from "next/image";
import paymentCard from "@public/paymentCard.svg";
import shadowCard from "@public/shadowCard.svg";
import arrowDown from "@public/arrowDown.svg";
import arrowUp from "@public/arrowUp.svg";

export default function PaymentCard() {
  return (
    <div className="relative text-white w-80 h-56 overflow-visible">
      <Image
        className="min-w-[22rem] h-auto absolute -top-2 -left-6"
        src={shadowCard}
        alt="shadow card"
      />
      <Image
        className="w-full h-full absolute top-0 left-0"
        src={paymentCard}
        alt="payment card"
      />

      <div className="absolute top-10 left-6">
        <h3 className="text-sm mb-1">Total Balance</h3>
        <p className="text-2xl font-medium">$ 2,548.00</p>
      </div>
      <div className="absolute left-6 bottom-8 w-40">
        <div className="w-full flex justify-between items-center mb-2">
          <div className="flex items-center gap-x-2">
            <Image className="w-5 h-auto" src={arrowDown} alt="arrow down" />
            <p className="text-xs text-[#D0E5E4]">Income</p>
          </div>
          <div className="text-sm font-medium">$ 1,840.00</div>
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="flex gap-x-2">
            <Image className="w-5 h-auto" src={arrowUp} alt="arrow up" />
            <p className="text-xs text-[#D0E5E4]">Expenses</p>
          </div>
          <div className="text-sm font-medium">$ 284.00</div>
        </div>
      </div>
    </div>
  );
}
