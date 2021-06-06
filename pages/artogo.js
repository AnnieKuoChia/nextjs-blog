import axios from "axios";
import Header from "../layout/header";
import Hot from "../component/hot";
import Banner from "../component/banner";
import Showroom from "../component/recommended_showroom";
import Footer from "../layout/footer";

export default function Home({ hots, banners, exhibitions, showroom, creations}) {
    console.log("hots", hots);
    console.log("banners", banners);
    console.log("exhibitions", exhibitions);
    console.log("showroom", showroom);
    console.log("creations", creations);
    return (
        <div className="content">
        <Header />
        <Banner banners={banners}/>
        <Hot hots={hots} />
        <Showroom showroom={showroom} />
        <Footer />
        </div>
    );
}
  
export const getStaticProps = async () => {
    const res = await axios.get("https://api.artogo.tw/v0.1/exhibition/homepage");
    const dataBanner = res.data.banner;
    const dataHot = res.data.hot;
    const dataExhibition = res.data.recommended_exhibition;
    const dataShowroom = res.data.recommended_showroom;
    const dataCreation = res.data.recommended_creation;
    return {
        props: {
            hots: dataHot,
            banners: dataBanner,
            exhibitions: dataExhibition,
            showroom: dataShowroom,
            creations: dataCreation
        },
    };
};
