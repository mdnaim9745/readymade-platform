import translate, { TRANSLATION_CONTEXT } from "./translate";
import { useParams } from "next/navigation";

const useLocale = (context: TRANSLATION_CONTEXT) => {
  const { lang } = useParams();
  const t = translate(lang, context);

  return { t };
};

export default useLocale;
