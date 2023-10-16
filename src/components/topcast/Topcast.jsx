import React, { useEffect } from "react";
import Styles from "./index.module.scss";
import { fetchTopCastData } from "../../features/counter/topCastSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Error from "../errorPage/Error";

function Topcast() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.topCastData.data);
  const error = useSelector((state) => state.topCastData.error);

  useEffect(() => {
    dispatch(fetchTopCastData(id));
  }, [id]);

  return (
    <>
      {data && (
        <div className={Styles.main}>
          <div className={Styles.main__container}>
            <div className={Styles.main__container__content}>
              <h2>Top Cast</h2>
              <div className={Styles.main__container__content__flex}>
                {data?.cast?.slice(0, 6).map((item) => {
                  return (
                    <div className={Styles.main__container__content__flex__wrap}>
                      <div className={Styles.main__container__content__flex__wrap__img}>
                        <img src={`https://image.tmdb.org/t/p/original/${item.profile_path}`} alt="Actor Img" />
                      </div>
                      <h4>{item.original_name}</h4>
                      <p>{item.character}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
      {error && <Error />}
    </>
  );
}

export default Topcast;
