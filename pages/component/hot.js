import Axios from 'axios'
import axios from 'axios'

// export const getHot = async () => {
//     const res = await axios.get('https://api.artogo.tw/v0.1/exhibition/homepage');
//     console.log(res.data);
//     return{
//         props: { hot: data }
//     }
// }

// const Hot = ({hot}) => {
//     return(
//         <div className="container">
//             <div className="Hot">
//                 <div className="titleContainer">
//                     <h2 className="titleText">熱門展覽</h2>
//                     <h3 className="titleSub">Trending exhibitions</h3>
//                 </div>
//                 <div className="hot">
//                 </div>
//             </div>
//         </div>
//     )
// }

export function Gethot(){
    let data;
    axios.get('https://api.artogo.tw/v0.1/exhibition/homepage')
    // let data = res.data.hot;
    .then((res) => {
        console.log(res);
        // const data = res.data.hot;
        data = res.data.hot;
        console.log(data);
    })
    return{
        props: { hots: data }
    }
}

const Hot = ({hots}) => {
    console.log(hots)
    return(
        <div className="container">
            <div className="hotSection">
                <div className="titleContainer">
                    <h2 className="titleText">熱門展覽</h2>
                    <h3 className="titleSub">Trending exhibitions</h3>
                </div>
                <div className="hotData">
                    {hots.map(hot => (
                        <h1>{hot.name_zh}</h1>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Gethot;