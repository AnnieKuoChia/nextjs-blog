const Exhibitions = ({ exhibitions }) => {
    console.log("child", exhibitions);
    return (
      <div className="container">
        <div className="exhibitionsSection">
          <div className="titleContainer">
            <h2 className="titleText">為你推薦的展覽</h2>
            <h3 className="titleSub">Exhibitions for you</h3>
          </div>
          <div className="exhibitionsContainer">
            {exhibitions.map((exhibition, idx) => (
              <li key={idx} className="exhibitionsCard">
                <img src={exhibition.banner} />
                <h5>{exhibition.name_zh}</h5>
                <p>{exhibition.curator}</p>
              </li>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Exhibitions;
  