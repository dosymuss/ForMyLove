import { useEffect, useState } from "react";
import { getImages } from "../api/api";
import Card from "../ui/card/Card";
import { IImage } from "../types/types";
import LogoForOther from "../ui/logoForOther/LogoForOther";
import imagesPagePosh from "../image/imagesPagePosh.svg";
import imagesPagePosh2 from "../image/imagesPagePosh2.svg";
import imagesPagePosh2Act from "../image/imagesPagePosh2Act.svg";

import styles from "../styles/ImagePage.module.scss";

const ImagePage = () => {
  const [data, setData] = useState<IImage[]>([]);
  const [showPosh1, setShowPosh1] = useState<boolean>(false);
  const [showPosh2, setShowPosh2] = useState<boolean>(false);

  async function fetchData() {
    try {
      const result = await getImages();
      if (Array.isArray(result)) {
        setData(result);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.main}>
      <button
        onClick={() => setShowPosh1(!showPosh1)}
        className={showPosh1 ? styles.poshBtnOne : styles.poshBtnOneHiden}
      >
        <img src={imagesPagePosh} alt="" />
      </button>
      <button
        onClick={() => setShowPosh2(!showPosh2)}
        className={showPosh2 ? styles.poshBtnTwo : styles.poshBtnTwoHiden}
      >
        <img src={showPosh2 ? imagesPagePosh2Act : imagesPagePosh2} alt="" />
      </button>
      <LogoForOther item={1} text="Images"/>
      <div className={styles.cardDiv}>
        {data.length > 0 &&
          data.map((item) => {
            let likesListLokal = localStorage.getItem("likes");
            let likesList: number[] = likesListLokal
              ? JSON.parse(likesListLokal)
              : [];
            let isLike: boolean = false;
            if (likesList.includes(item.id)) {
              isLike = true;
            } else {
              isLike = false;
            }
            return (
              <Card
                id={item.id}
                albumId={item.albumId}
                thumbnailUrl={item.thumbnailUrl}
                title={item.title}
                url={item.url}
                key={item.id}
                isLike={isLike}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ImagePage;

// повторение всего что сегодня сделал

// const text = localStorage.getItem("likes")
// const number = text?JSON.parse(text):[]

// const fetch =async () => {
//   try {
//     const res = await getImages()

//   } catch (error) {
//     throw error
//   }
// }
