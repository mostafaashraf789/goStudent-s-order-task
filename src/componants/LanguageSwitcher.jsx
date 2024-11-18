import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLang = localStorage.getItem("i18nextLng");

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <>
      <div dir="rtl">
        <select
          onChange={(e) => changeLanguage(e.target.value)}
          className="border border-gray-400 m-5  rounded-md p-2 bg-gray-100 outline-none "
          value={currentLang}
        >
          <option value="en">en</option>

          <option value="ar">ar</option>
        </select>
      </div>
    </>
  );
}

export default LanguageSwitcher;
