import * as React from "react";
import ImageGalleryOne from "../../assets/desktop/image-woman-in-videocall.jpg";
import ImageGalleryTwo from "../../assets/desktop/image-women-videochatting.jpg";
import ImageGalleryThree from "../../assets/desktop/image-men-in-meeting.jpg";
import ImageGalleryFour from "../../assets/desktop/image-man-texting.jpg";

interface Props {}

const styles = {
  imageContainer: "rounded-[8px]",
  image: "w-full h-full object-cover rounded-[8px]",
};

const Gallery: React.FunctionComponent<Props> = (props) => {
  return (
    <>
      <div className="grid gap-[2%] grid-cols-2 sm:grid-cols-4 w-full p-6">
        <div className={styles.imageContainer}>
          <img
            src={ImageGalleryOne}
            alt="gallery-image-1"
            className={styles.image}
          />
        </div>
        <div className={styles.imageContainer}>
          <img
            src={ImageGalleryTwo}
            alt="gallery-image-2"
            className={styles.image}
          />
        </div>
        <div className={styles.imageContainer}>
          <img
            src={ImageGalleryThree}
            alt="gallery-image-3"
            className={styles.image}
          />
        </div>
        <div className={styles.imageContainer}>
          <img
            src={ImageGalleryFour}
            alt="gallery-image-4"
            className={styles.image}
          />
        </div>
      </div>
    </>
  );
};

export default Gallery;
