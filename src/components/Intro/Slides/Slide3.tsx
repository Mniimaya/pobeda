import s from './Slide.module.scss';
export const Slide3 = () => {
  return (
    <div className={s.slideWrapper}>
      <div className={s.container}>
        <div className={s.quoteWrapper}>
          <h2 className={s.title}>Сталинградская битва</h2>
          <p className={s.quote}>«Наш Сталинград – гордость и слава народа, олицетворение его доблести, сверкающий символ стойкости, непревзойденного мужества»</p>
          <p className={s.author}>Алексей Семёнович Чуянов</p>
        </div>
      </div>
    </div>
  );
};
