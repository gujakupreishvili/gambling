import { Suspense } from "react";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Sidebar from "./components/sidebar/sidebar";


export default function Home() {
  return (
    <>
    <Header />
    <Suspense fallback={<div>Loading page...</div>}>
      <Main />
    </Suspense>
    <Sidebar />
    <Footer />
    </>
  );
}
