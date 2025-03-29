import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import css from "./Photos.module.css";
import { useState } from "react";

export const Photos = ({ photos, name }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(0);

  return (
    <>
      <div className={css.photos}>
        <div>
          {photos.map((photo, index) => {
            return (
              <li key={nanoid()}>
                <Link
                  to=""
                  onClick={() => setSelectedPhoto(index)}
                  className={css.photoThumbnailLink}
                >
                  <img
                    src={photo}
                    alt={name}
                    title={name}
                    className={css.photoThumbnailImg}
                  />
                </Link>
              </li>
            );
          })}
        </div>
        <div className={css.photoBigContainer}>
          <img src={photos[selectedPhoto]} className={css.photoBigImg} />
        </div>
      </div>
    </>
  );
};
