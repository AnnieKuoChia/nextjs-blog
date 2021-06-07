import Plyr from "plyr";

const Showroom = ({ showroom }) => {
  console.log("child", showroom);
  return (
    <div className="container">
      <div className="showroomSection">
        <Plyr type="youtube" videoId="CDFN1VatiJA" />
      </div>
    </div>
  );
};

export default Showroom;
