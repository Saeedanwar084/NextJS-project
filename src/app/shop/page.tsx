import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import Header from "@/layout/header/header";
import Footer from "@/layout/footer/footer";
import BreadcrumbAreaThree from "../components/breadcrumb/breadcrumb-area-3";
import ShopArea from "../components/shop/shop-area";
import FooterTwo from "@/layout/footer/footer-2";


export const metadata: Metadata = {
  title: "Shop Page",
};

export default function ShopPage() {
  return (
    <Wrapper>
      {/* header start */}
      <Header />
      {/* header end */}

      {/* main area start */}
      <main className="main--area">
        {/* breadcrumb area start */}
       <BreadcrumbAreaThree title="AI Model Marketplace" subtitle="Marketplace" />
        {/* breadcrumb area end */}

        {/* shop area start */}
        <ShopArea/>
        <FooterTwo/>
        {/* shop area end */}

      </main>
      {/* main area end */}

      {/* footer start */}
      <Footer/>
      {/* footer end */}
    </Wrapper>
  );
}
