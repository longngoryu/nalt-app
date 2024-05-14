import Header from "@components/Header";
import Sidebar from "@components/Sidebar";
import PaymentCard from "@components/PaymentCard";

export default function Home() {
  return (
    <main className="flex h-screen flex-row">
      <div className="w-2/12">
        <Sidebar />
      </div>
      <div className="w-10/12 flex flex-col">
        <Header />
        <div className="flex-1 bg-gradient-to-br from-[#BDE3DE] from-10% to-[#F6EEF8] to-90%">
          <div className="ml-14 mt-16">
            <PaymentCard />
          </div>
        </div>
      </div>
    </main>
  );
}
