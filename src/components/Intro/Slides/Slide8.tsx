import s from './Slide.module.scss';
export const Slide8 = () => {
  return (
    <div className={s.slideWrapper}>
      <div className={s.container}>
        <div className={s.quoteWrapper}>
          <h2 className={s.title}>Гордость и защита родины</h2>
          <p className={s.quote}>«Только доблесть бессмертно живет, Ибо храбрые славны вовеки!»</p>
          <p className={s.author}>Валерий Яковлевич Брюсов</p>
        </div>
      </div>
    </div>
  );
};
