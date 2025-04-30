import s from './Slide.module.scss';
export const Slide2 = () => {
  return (
    <div className={s.slideWrapper}>
      <div className={s.container}>
        <div className={s.quoteWrapper}>
          <h2 className={s.title}>БИТВА ЗА МОСКВУ</h2>
          <p className={s.quote}>«Когда меня спрашивают, что больше всего запомнилось из минувшей войны, я всегда отвечаю: битва за Москву»</p>
          <p className={s.author}>Георгий Константинович Жуков</p>
        </div>
      </div>
    </div>
  );
};
