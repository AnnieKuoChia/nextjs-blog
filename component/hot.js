const Hot = ({ hots }) => {
    console.log("child", hots);
    return (
        <div className="container">
        <div className="hotSection">
            <div className="titleContainer">
            <h2 className="titleText">熱門展覽</h2>
            <h3 className="titleSub">Trending exhibitions</h3>
            </div>
            <div className="hotContainer">
            {hots.map((hot, idx) => (
                <div className="hotCard">
                    <img key={idx} src={hot.banner}/>
                    <p key={idx}>{hot.name_zh}</p>
                    <p key={idx}>{hot.curator}</p>
                </div>
            ))}
            </div>
        </div>
        </div>
    );
};
  
export default Hot;