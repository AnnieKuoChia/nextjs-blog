const Hot = ({ hots }) => {
  console.log("child", hots);

  return (
    <div className="container">
      <div className="hotSection">
        <div className="titleContainer">
          <h2 className="titleText">熱門展覽</h2>
          <h3 className="titleSub">Trending exhibitions</h3>
        </div>
        <div className="hotData">
          {hots.map((hot, idx) => (
            <h1 key={idx}>{hot.name_zh}</h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hot;
