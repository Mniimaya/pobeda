import React from "react";
import s from "./Slide.module.scss";
export const Slide6 = () => {
  return (
    <div className={s.slideWrapper}>
      <div className={s.container}>
        <div className={s.quoteWrapper}>
          <h2 className={s.title}>Берлинская операция</h2>
          <p className={s.quote}>
            «В воздух взвились тысячи разноцветных ракет. По этому сигналу
            вспыхнули 140 прожекторов, расположенных через каждые 200 метров.
            Более 100 миллиардов свечей освещали поле боя, ослепляя противника и
            выхватывая из темноты объекты атаки для наших танков и пехоты. Это
            была картина огромной впечатляющей силы, и, пожалуй, за всю жизнь я
            не помню подобного ощущения...»
          </p>
          <p className={s.author}>Георгий Константинович Жуков</p>
        </div>
      </div>
    </div>
  );
};
