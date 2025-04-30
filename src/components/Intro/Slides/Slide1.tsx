import s from './Slide.module.scss';
import slide1 from '../assets/slide1.png';

export const Slide1 = () => {
  return (
    <div className={s.slideWrapper}>
      <div className={s.container}>
        <div className={s.quoteWrapper}>
          <h2 className={s.title}>Великая Отечественная война</h2>
          <p className={s.quote}>
            «И 100, и 200 лет пройдет,
            <br /> Никто войны забыть не сможет…»
          </p>
          <p className={s.author}>"Константин Михайлович Симонов"</p>
        </div>
        <img className={s.slide1Img} src={slide1} />
      </div>
    </div>
  );
};
