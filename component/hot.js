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
            <div key={idx} className="hotCard">
              <img src={hot.banner} />
              <p>{hot.name_zh}</p>
              <p>{hot.curator}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hot;
