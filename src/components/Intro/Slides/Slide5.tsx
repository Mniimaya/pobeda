import s from './Slide.module.scss';
export const Slide5 = () => {
  return (
    <div className={s.slideWrapper}>
      <div className={s.container}>
        <div className={s.quoteWrapper}>
          <h2 className={s.title}>Белорусская операция</h2>
          <p className={s.quote}>«Операция «Багратион» — это настоящий шедевр военного искусства, подлинное свидетельство того, что к 1944 году мы оставили немцев далеко позади в плане развития военной науки»</p>
          <p className={s.author}>Юрий Альбертович Кнутов</p>
        </div>
      </div>
    </div>
  );
};
