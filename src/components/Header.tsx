import { DatePicker } from "antd";

export default function Header() {
  return (
    <div className="flex flex-row h-20 w-full justify-between items-center px-6 bg-gradient-to-r from-[#4D736F] from-10% via-[#669993] via-30% to-[#4D736F] to-90%">
      <h3 className="text-white font-medium">
        Good morning, <span className="font-semibold">Enjelin Morgeana</span>
      </h3>
      <div>
        <DatePicker className="w-64 h-10" />
      </div>
    </div>
  );
}
