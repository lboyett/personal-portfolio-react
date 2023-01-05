import beachSunsetImg from "./images/beach-sunset.jpg";

const Home = () => {
  return (
    <div className="content">
      <div className="topdiv">
        <img id="beach-sunset" src={beachSunsetImg} alt="" />
        <div id="journey">Your journey starts here.</div>
      </div>
    </div>
  );
};

export default Home;
