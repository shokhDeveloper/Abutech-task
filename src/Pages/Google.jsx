import { useFetching } from "../Utils";
import { useSelector } from "react-redux";
import BadRequest from "../assets/images/400-Bad-Request-Error.webp";
import RequestOk from "../assets/images/200-status-code.png";
import URLINVALID from "../assets/images/302_error_2-1920x1080.jpg";
import REQUESTERROR from "../assets/images/429.png";
export const Request = ({ name }) => {
  const { links } = useSelector(({ Reducer }) => Reducer);
  const find = links.find((item) => item.name === name);
  const { status } = useFetching(find.link, find.name);
  const handleRenderImage = (img) => {
    return (
      <img
        src={img}
        width={800}
        height={500}
        alt={`${name.toUpperCase()} Image`}
      />
    );
  };
  return (
    <>
      {status ? (
        <div className="hero-inner">
          {(function () {
            if (status === 200) {
              return handleRenderImage(RequestOk);
            } else if (status === 400) {
              return handleRenderImage(BadRequest);
            } else if (status === 302) {
              return handleRenderImage(URLINVALID);
            } else if (status === 429) {
              return handleRenderImage(REQUESTERROR);
            }
          })()}
        </div>
      ) : (
        <div className="loader-request">
          <h2 className="loader-request-title">Loading ...</h2>
        </div>
      )}
    </>
  );
};
