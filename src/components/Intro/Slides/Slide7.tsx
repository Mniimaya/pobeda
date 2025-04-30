import s from './Slide.module.scss';
export const Slide7 = () => {
  return (
    <div className={s.slideWrapper}>
      <div className={s.container}>
        <div className={s.quoteWrapper}>
          <h2 className={s.title}>ПОБЕДА</h2>
          <p className={s.quote}>«Победа! Это величайшее счастье для солдата - сознание того, что ты помог своему народу победить врага, отстоять свободу Родины, вернуть ей мир. Сознание того, что ты выполнил свой солдатский долг, долг тяжкий и благородный, выше которого нет ничего на земле!»</p>
          <p className={s.author}>Константин Константинович Рокоссовский</p>
        </div>
      </div>
    </div>
  );
};
