import { useDispatch, useSelector } from "react-redux";
import TimeIcon from "../../svg/Tiime";
import s from "./PlayList.module.scss";
import cn from "classnames";
import { treningSubCategoryActions } from "../../../store/trening/treningSubCatSlice";
const PlayList = ({ title, videos, ...props }) => {
  const dispatch = useDispatch();
  
  const selected_video = useSelector(
    (state) => state.treningSubCategory.selected_video
  );
  return (
    <div {...props} className={s.wrapper}>
      <h4 className={s.title}>{title}</h4>
      <ul className={s.list}>
        {videos.length &&
          videos.map((el) => (
            <button
              key={el.id}
              className={cn(s.item, el.id === selected_video?.id ? s.active : "")}
              onClick={() => {
                dispatch(treningSubCategoryActions.setSelectedVideo(el));
                console.log(el.id === selected_video?.id);
              }}
            >
              <span className={s.icon}>
                {el.id === selected_video?.id ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                  >
                    <path
                      d="M14 28C6.26801 28 0 21.7319 0 14C0 6.26801 6.26801 0 14 0C21.7319 0 28 6.26801 28 14C28 21.7319 21.7319 28 14 28ZM9.8 9.8V18.2H12.6V9.8H9.8ZM15.4 9.8V18.2H18.2V9.8H15.4Z"
                      fill="#65926B"
                    />
                  </svg>
                ) : (
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="14" cy="14" r="14" fill="#65926B" />
                    <path
                      d="M18.918 14.2772L11.8522 18.9877C11.699 19.0899 11.4921 19.0485 11.39 18.8953C11.3535 18.8405 11.334 18.7762 11.334 18.7104V9.28939C11.334 9.10529 11.4832 8.95605 11.6673 8.95605C11.7331 8.95605 11.7975 8.97553 11.8522 9.01204L18.918 13.7225C19.0711 13.8247 19.1125 14.0316 19.0104 14.1848C18.986 14.2214 18.9546 14.2528 18.918 14.2772Z"
                      fill="white"
                    />
                  </svg>
                )}
              </span>

              <div className={s.name}>{el.title}</div>

              <div className={s.time}>
                <span className={s.time_icon}>
                  <TimeIcon />
                </span>
                <div className={s.time_number}>{el.duration}</div>
              </div>
            </button>
          ))}
      </ul>
    </div>
  );
};

export default PlayList;

