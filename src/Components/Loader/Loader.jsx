import "./loader.scss"
import {Bars} from "react-loader-spinner";
export const Loader = () => {
  return (
    <div className="load">
      <Bars  color="#1d1d2c" height={80} width={80} />
    </div>
  );
};
