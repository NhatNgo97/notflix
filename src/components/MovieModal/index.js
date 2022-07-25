import { Box, Modal, Typography } from "@mui/material";
import { useContext } from "react";
import { GenresContext } from "../../contexts/GenresProvider";
import { ModalContext } from "../../contexts/ModalProvider";
import { countRuntime, getMovieTrailerPath } from "../../helpers";
import PosterBackground from "../PosterBackground/PosterBackground";
import ModalAbout from "./ModalAbout";
import "./movie-modal.css";
import RecommendItems from "./RecommendItems";
function MovieModal() {
  const { isModalVisible, setIsModalVisible, movieModal } =
    useContext(ModalContext);
  const { mediaType } = useContext(GenresContext);
  const credit = {
    creator: movieModal.data?.production_companies,
    cast: movieModal.data?.credits?.cast,
    genres: movieModal.data?.genres,
  };
  const id = movieModal.data?.id;

  const modalBanner = {
    backdropPath: movieModal.data.backdrop_path,
    trailerPath: getMovieTrailerPath(movieModal.data),
  };

  return (
    <Modal
      style={{
        overflowY: "scroll",
        height: "100%",
        width: "100%",
        position: "fixed",
      }}
      open={isModalVisible}
      onClose={() => setIsModalVisible(false)}
    >
      <div className="modal__container">
        <div className="modal__banner">
          <PosterBackground
            tempBackdrop={movieModal.data.backdrop_path}
            trailerPath={modalBanner.trailerPath}
            isPlaying={true}
            isAutoPlayed={true}
          />
          <div className="banner__content">
            <h2 className="banner__title">{movieModal.data.original_title}</h2>
            <div className="banner__btns"></div>
          </div>
        </div>
        <div className="modal__content">
          <div className="modal__infos">
            <div className="modal__info-left modal__info">
              <div className="modal__info__general">
                <span className="info-vote">
                  {movieModal.data.vote_average} Rate
                </span>
                <span className="info-year">
                  {movieModal.data.release_date}{" "}
                </span>
                <span className="info-season">
                  {countRuntime(movieModal.data.runtime)}{" "}
                </span>
                <span className="info-HD">HD</span>
              </div>
              <p className="modal__info__description">
                {movieModal.data.overview}
              </p>
            </div>
            <div className="modal__info-right modal__info">
              <div className="modal__info_cast">
                <span className="credit__title">Cast :</span>
                {credit?.cast?.slice(0, 4).map((item, index) => {
                  return (
                    <span className="credits">
                      <a>{(index ? ", " : "") + `${item.name}`}</a>
                    </span>
                  );
                })}
                {credit?.cast?.length > 4 && (
                  <span className="credits">
                    <a> , more</a>
                  </span>
                )}
              </div>
              <div className="modal__info_genres">
                <span className="credit__title">Genres :</span>
                {credit?.genres?.slice(0, 4).map((item, index) => {
                  return (
                    <span className="credits">
                      <a>{(index ? ", " : "") + `${item.name}`}</a>
                    </span>
                  );
                })}
                {credit?.genres?.length > 4 && (
                  <span className="credits">
                    <a> , more</a>s
                  </span>
                )}
              </div>
            </div>
          </div>
          <RecommendItems id={id} />
          <ModalAbout about={credit} />
        </div>
      </div>
    </Modal>
  );
}

export default MovieModal;
