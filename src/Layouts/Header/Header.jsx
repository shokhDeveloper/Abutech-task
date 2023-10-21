import "./header.scss";
import Logo from "../../assets/images/AbutechLogo.png";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setCountryFlag,
  setLanguageBox,
  setLanguageChange,
} from "../../Utils/redux/slice";
import { useTranslation } from "react-i18next";
import AmericaFlag from "../../assets/images/America-Flag.png";
import { useEffect } from "react";
import { Api } from "../../Utils";

export const Header = () => {
  const { languagesBox, defaultLanguage, flag } = useSelector(
    ({ Reducer }) => Reducer
  );
  const {
    i18n: { changeLanguage, t, language },
  } = useTranslation();
  const dispatch = useDispatch();
  const handleMouse = (type) => {
    if (type) {
      dispatch(setLanguageBox(true));
    } else {
      dispatch(setLanguageBox(false));
    }
  };
  const handleChangeLanguage = (language) => {
    changeLanguage(language);
    localStorage.setItem("language-task", language);
  };

  useEffect(() => {
    (async function () {
      try {
        const request = await Api.getCountryFlag(t("languageApi")).catch(
          (error) => console.log(error)
        );
        if (request.status === 200) {
          const response = await request.data;
          console.log(response);
          dispatch(setCountryFlag(response[0].flags.svg));
        }
      } catch (error) {
        return error;
      }
    })();
  }, [language]);
  return (
    <header
      className="site-header"
      onMouseLeave={() => dispatch(setLanguageBox(false))}
    >
      <div className="container">
        <div className="header-inner">
          <div className="header-child-box">
            <img
              className="site-logo"
              src={Logo}
              alt="Abutech Logo"
              width={100}
              onClick={() => window.location.reload()}
            />
            {/* Logo ni svg qila olmadim oldindan uzur ! */}
          </div>
          <div className="header-child-box">
            <h2>{t("headerTitle")}</h2>
          </div>
          <div className="header-child-box">
            <span
              onMouseEnter={() => handleMouse(true)}
              className="header-default-language"
              style={{
                backgroundImage: `url(${
                  flag === "https://flagcdn.com/as.svg" ? AmericaFlag : flag
                })`,
              }}
            >
              {language.toUpperCase()}
            </span>
            <div
              className="site-languages-box"
              onMouseLeave={() => handleMouse(false)}
              style={{ display: languagesBox ? "block" : "none" }}
            >
              <p className="site-language-discription">{t("d")}</p>
              <div className="site-language-box">
                <input
                  defaultChecked={language === "en" ? true : false}
                  type="radio"
                  onChange={(event) => handleChangeLanguage(event.target.value)}
                  name="site-language"
                  value={"en"}
                />
                <span>{language === "ru" ?  `${t("languageList.en").split(" ").slice(0, 1).join(" ")}  ${t("languageList.en").split(" ").slice(1, 2).join(" ").toUpperCase()}`: "English en"}</span>
              </div>
              <div className="site-language-box">
                <input
                  defaultChecked={language === "ru" ? true : false}
                  type="radio"
                  name="site-language"
                  onChange={(event) => handleChangeLanguage(event.target.value)}
                  value={"ru"}
                />
                <span>{language === "ru" ?  `${t("languageList.ru").split(" ").slice(0, 1).join(" ")}  ${t("languageList.ru").split(" ").slice(1, 2).join(" ").toUpperCase()}`: "Rus ru"}</span>
              </div>
              <div className="site-language-box">
                <input
                  defaultChecked={language === "uz" ? true : false}
                  type="radio"
                  name="site-language"
                  onChange={(event) => handleChangeLanguage(event.target.value)}
                  value={"uz"}
                />
                <span>{language === "ru" ? `${t("languageList.uz").split(" ").slice(0, 1).join(" ")}  ${t("languageList.uz").split(" ").slice(1, 2).join(" ").toUpperCase()}`: "Uzb uz"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
