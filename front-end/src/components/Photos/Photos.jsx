import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import css from "./Photos.module.css";
import { useState } from "react";

export const Photos = ({ photos, name }) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  return (
    <>
      <div className={css.photos}>
        <div>
          {photos.map((photo, index) => {
            return (
              <li key={nanoid()}>
                <Link
                  onClick={() => setSelectedPhotoIndex(index)}
                  className={css.photoThumbnailLink}
                >
                  <img
                    src={photo}
                    alt={name}
                    title={name}
                    className={
                      selectedPhotoIndex === index
                        ? `${css.photoThumbnailImg} ${css.photoThumbnailImgActive}`
                        : css.photoThumbnailImg
                    }
                  />
                </Link>
              </li>
            );
          })}
        </div>
        <div className={css.photoBigContainer}>
          <img src={photos[selectedPhotoIndex]} className={css.photoBigImg} />
        </div>
      </div>
    </>
  );
};
