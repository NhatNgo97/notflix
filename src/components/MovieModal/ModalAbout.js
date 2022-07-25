function ModalAbout({ about }) {
  return (
    <div className="modal__about">
      <h2>About </h2>
      <div className="about__creators">
        <span style={{ color: "grey" }} className="credit__title">
          Creators:{" "}
        </span>
        {about.creator.map((item, index) => {
          return (
            <span className="credits" key={item.id}>
              <a>{(index ? ", " : "") + `${item.name}`}</a>
            </span>
          );
        })}
      </div>
      <div className="about__cast ">
        <span style={{ color: "grey" }} className="credit__title">
          Cast:{" "}
        </span>
        {about.cast.map((item, index) => {
          return (
            <span className="credits" key={item.id}>
              <a>{(index ? ", " : "") + `${item.name}`}</a>
            </span>
          );
        })}
      </div>
      <div className="about__genres">
        <span style={{ color: "grey" }} className="credit__title">
          Genres :
        </span>
        {about.genres.map((item, index) => {
          return (
            <span className="credits" key={item.id}>
              <a>{(index ? ", " : "") + `${item.name}`}</a>
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default ModalAbout;
