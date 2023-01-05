const Ball = (props) => {
  return (
    <div className="ball-container">
      <button
        id="ball"
        className={props.class}
        onClick={() => props.loadPage()}
      ></button>
    </div>
  );
};

export default Ball;
