import { useEffect } from "react";
import { GlobalStyle } from "./Utils";
import { RouterProvider } from "react-router-dom";
import { route } from "./Routes";
import { useSelector } from "react-redux";
import { Loader } from "./Components";
import { useLoader } from "./Utils/CustomHooks";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
function App() {
  const { loader } = useSelector(({ Reducer }) => Reducer);
  const { openLoader } = useLoader();
  useEffect(() => {
    if (loader) {
      openLoader();
    }
  }, [loader]);
  i18n.use(initReactI18next).init({
    fallbackLng: window.localStorage.getItem("language-task")
      ? window.localStorage.getItem("language-task")
      : "en",
    lng: window.localStorage.getItem("language-task")
      ? window.localStorage.getItem("language-task")
      : "en",
    resources: {
      en: {
        translation: {
          d: "Change site language",
          languageApi: "America",
          headerTitle: "Done for Abutech !",
        },
      },
      uz: {
        translation: {
          d: "Sayt tilini o'zgartirish",
          languageApi: "Uzbekistan",
          headerTitle: "Abutech kompaniyasi uchun tayyorlandi !",
        },
      },
      ru: {
        translation: {
          d: "Изменить язык сайта",
          languageApi: "Russia",
          languageList: {
            ru: "Pyc py",
            uz: "Узб Уз",
            en: "English en",
          },
          headerTitle: "Готово для Abutech",
        },
      },
    },
  });
  return (
    <>
      {loader ? <Loader /> : <RouterProvider router={route} />}
      <GlobalStyle />
    </>
  );
}

export default App;
