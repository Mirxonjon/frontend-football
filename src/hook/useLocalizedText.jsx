import { useSelector } from "react-redux";

// Предполагая, что ваш state в Redux называется lang
const selectLang = (state) => state.lang.lang;

export const useLocalizedText = () => {
  const lang = useSelector(selectLang);

  const localizeText = (text) => {
    if (lang === "uz") {
      return text;
    } else if (lang === "ru") {
      return text + "_ru";
    }

    // По умолчанию возвращаем оригинальный текст для других языков
    return text;
  };

  return localizeText;
};

// Пример использования в компоненте
// const res = useLocalizedText();
// const localizedTitle = res('title');
// В зависимости от lang, localizedTitle будет 'title' или 'title_ru'

