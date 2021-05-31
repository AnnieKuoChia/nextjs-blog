import axios from "axios";
import Header from "../layout/header";
import Hot from "../component/hot";
import Footer from "../layout/footer";

export default function Home({ hots }) {
  console.log("hots", hots);

  return (
    <div className="content">
      <p>Test</p>
      <Header />
      <Hot hots={hots} />
      <Footer />
    </div>
  );
}

export const getStaticProps = async () => {
  // let data;
  // axios
  //   .get("https://api.artogo.tw/v0.1/exhibition/homepage")
  //   // let data = res.data.hot;
  //   .then((res) => {
  //     console.log(res);
  //     // const data = res.data.hot;
  //     data = res.data.hot;
  //     console.log(data);
  //   });

  const res = await axios.get("https://api.artogo.tw/v0.1/exhibition/homepage");

  const data = res.data.hot;

  return {
    props: { hots: data },
  };
};
