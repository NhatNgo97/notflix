import { truncate } from "../../helpers";

function RecommendItem({ backdrop, rate, year, description, name }) {
  return (
    <div className="recommend__item">
      <div className="recommend__backdrop">
        <img
          className="recommend__backdrop__img"
          src={"https://image.tmdb.org/t/p/original/" + backdrop}
          alt={`poster`}
        />
        <h4 className="recommend__title">{name}</h4>
      </div>
      <div className="recommend__content">
        <div className="recommend__content__header">
          <div className="recommend__content__header-left">
            <span className="recommend__year">{year}</span>
          </div>
          <div className="recommend__content__header-left">
            <button> +</button>
          </div>
        </div>
        <div className="recommend__content__desc">
          {truncate(description, 120)}
        </div>
      </div>
    </div>
  );
}

export default RecommendItem;
