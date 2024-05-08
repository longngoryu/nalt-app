import Header from "@components/Header";
import Sidebar from "@components/Sidebar";

export default function Home() {
  return (
    <main className="flex h-screen flex-row">
      <div className="w-2/12">
        <Sidebar />
      </div>
      <div className="w-10/12">
        <Header />
      </div>
    </main>
  );
}
