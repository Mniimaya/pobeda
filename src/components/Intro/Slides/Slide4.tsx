import s from './Slide.module.scss';
export const Slide4 = () => {
  return (
    <div className={s.slideWrapper}>
      <div className={s.container}>
        <div className={s.quoteWrapper}>
          <h2 className={s.title}>Курская битва</h2>
          <p className={s.quote}>«В 2 часа 20 минут утра 5 июля всё вокруг закружилось и завертелось, началась мощная симфония величайшего сражения в районе Курской дуги, в которой особенно выделялись звуки тяжёлой артиллерии и разрывы реактивных снарядов М-31»</p>
          <p className={s.author}>Георгий Константинович Жуков</p>
        </div>
      </div>
    </div>
  );
};
