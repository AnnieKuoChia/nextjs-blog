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
            <li key={idx} className="hotCard">
              <img src={hot.banner} />
              <h5>{hot.name_zh}</h5>
              <p>{hot.curator}</p>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hot;
