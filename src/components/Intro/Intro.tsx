import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import s from './Intro.module.scss';
import { IconArrowLeft } from '../../assets/IconArrowLeft';
import { IconArrowRight } from '../../assets/IconArrowRight';
import slide1 from './assets/slide1.webp';
import slide2 from './assets/slide2-1.webp';
import slide2People from './assets/slide2-2.webp';
import slide2Tree from './assets/slide2-tree.webp';
import slide3 from './assets/slide3-1.webp';
import slide3People from './assets/slide3-people.webp';
import slide3Tree from './assets/slide3-tree.webp';
import slide4 from './assets/slide4.webp';
import slide41 from './assets/slide4-1.webp';
import slide5 from './assets/slide5.webp';
import slide6 from './assets/slide6.webp';
import slide6Tree from './assets/slide6-1.webp';
import slide7 from './assets/slide7.webp';
import slide7Tree from './assets/slide7Tree.webp';
import slide8 from './assets/slide8.webp';
import svg80 from './assets/80.svg';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

type ImageRef = HTMLImageElement | HTMLDivElement | null;
type SlideRef = HTMLDivElement | null;

const imagesArray: number[][] = [[0], [1, 2, 3], [4, 5, 6], [7, 8], [9], [10, 11], [12, 13], [14]];

export const Intro: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<SlideRef[]>([]);
  const headingsRef = useRef<ImageRef[]>([]);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const backgroundLight = useRef<HTMLDivElement>(null);
  const [isHandler, setIsHandler] = useState<boolean>(false);
  const [isFirstRender, setIsFirstRender] = useState<boolean>(true);
  const [isAnimation, setIsAnimation] = useState<boolean>(false);

  useEffect(() => {
    slidesRef.current = slidesRef.current.slice(0, 8);
  }, []);

  useEffect(() => {
    const totalSlides = slidesRef.current.length;
    let isScrolling = false;

    if (isFirstRender && backgroundLight.current && headingsRef.current[0]) {
      gsap.to(headingsRef.current[0], {
        duration: 1.3,
        opacity: 1,
        y: 0,
        ease: 'power3.out',
      });

      gsap.to(backgroundLight.current, {
        opacity: 1,
        duration: 0.9,
        ease: 'power2.inOut',
      });
      setIsFirstRender(false);
    }

    const scrollToSlide = (index: number) => {
      if (index < 0 || index >= totalSlides || isScrolling || !slidesRef.current[index] || !backgroundLight.current) return;

      setIsAnimation(true);
      isScrolling = true;

      // Основная анимация прокрутки
      gsap.to([containerRef.current, backgroundRef.current], {
        duration: 1.5,
        scrollTo: {
          x: slidesRef.current[index]?.offsetLeft || 0,
        },
        ease: 'power3.inOut',
        onStart: () => {
          isScrolling = true;
        },
        onComplete: () => {
          setActiveSlide(index);
          isScrolling = false;
          setIsHandler(false);

          // Анимация заголовков для текущего слайда
          imagesArray[index].forEach((number: number) => {
            if (headingsRef.current[number]) {
              gsap.to(headingsRef.current[number], {
                duration: 1.3,
                opacity: 1,
                y: 0,
                ease: 'power3.out',
              });
            }
          });

          // Скрытие заголовков для других слайдов
          imagesArray.forEach((arr, i) => {
            if (index !== i) {
              arr.forEach((item) => {
                if (headingsRef.current[item]) {
                  gsap.to(headingsRef.current[item], {
                    duration: 1,
                    opacity: 0,
                    y: 50,
                    ease: 'power3.out',
                  });
                }
              });
            }
          });

          // Анимация фонового света
          gsap.to(backgroundLight.current, {
            opacity: 1,
            duration: 1,
            ease: 'power2.inOut',
            onComplete: () => {
              setIsAnimation(false);
            },
          });
        },
      });

      gsap.to(backgroundLight.current, {
        opacity: 0,
        duration: 1,
        ease: 'power2.inOut',
        onComplete: () => {
          if (backgroundLight.current && slidesRef.current[index]) {
            gsap.to(backgroundLight.current, {
              x: slidesRef.current[index]?.offsetLeft || 0,
              duration: 1,
              ease: 'power3.out',
            });
          }
        },
      });
    };

    if (isHandler) scrollToSlide(activeSlide);

    const handleWheel = (evt: KeyboardEvent) => {
      if (isScrolling) return;

      if (evt.key === 'ArrowLeft') {
        if (activeSlide !== 0) {
          scrollToSlide(activeSlide - 1);
        }
      } else if (evt.key === 'ArrowRight') {
        if (activeSlide !== 7) {
          scrollToSlide(activeSlide + 1);
        }
      }
    };

    window.addEventListener('keydown', handleWheel);

    return () => {
      window.removeEventListener('keydown', handleWheel);
    };
  }, [activeSlide, isHandler, isFirstRender]);

  return (
    <div className={s.mainContainer}>
      <div className={`${s.mainWrapper} scroll-container`} ref={containerRef}>
        <div ref={backgroundRef} className={s.backgroundLand}></div>
        <div ref={backgroundRef} className={s.background}></div>
        <div ref={backgroundLight} className={s.backgroundLight}></div>
        <div className={`${s.innerWrapper} scroll-content`}>
          <div className={`${s.slideWrapper} ${s.slide1} slide`} ref={(el) => (slidesRef.current[0] = el)}>
            <div className={s.container}>
              <div className={s.quoteWrapper}>
                <h2 className={s.title}>Великая Отечественная война</h2>
                <div className={s.quoteBox}>
                  <p className={s.quote}>
                    «И 100, и 200 лет пройдет,
                    <br /> Никто войны забыть не сможет…»
                  </p>
                  <p className={s.author}>Константин Михайлович Симонов</p>
                </div>
              </div>
              <img ref={(el) => (headingsRef.current[0] = el)} className={s.slide1Img} src={slide1} />
            </div>
          </div>
          <div className={`${s.slideWrapper} slide`} ref={(el) => (slidesRef.current[1] = el)}>
            <div className={s.container}>
              <div className={s.quoteWrapper}>
                <h2 className={s.title}>БИТВА ЗА МОСКВУ</h2>
                <div className={s.quoteBox}>
                  <p className={s.quote}>
                    «Когда меня спрашивают, что больше всего запомнилось
                    <br /> из минувшей войны, я всегда отвечаю: битва за Москву»
                  </p>
                  <p className={s.author}>Георгий Константинович Жуков</p>
                </div>
              </div>
              <img ref={(el) => (headingsRef.current[1] = el)} className={s.slide2} src={slide2} />
              <img ref={(el) => (headingsRef.current[2] = el)} className={s.slide2People} src={slide2People} />
              <img ref={(el) => (headingsRef.current[3] = el)} className={s.slide2Tree} src={slide2Tree} />
            </div>
          </div>
          <div className={`${s.slideWrapper} slide`} ref={(el) => (slidesRef.current[2] = el)}>
            <div className={s.container}>
              <div className={`${s.quoteWrapper} ${s.quoteWrapperSlide3}`}>
                <h2 className={s.title}>Сталинградская битва</h2>
                <div className={s.quoteBox}>
                  <p className={s.quote}>
                    «Наш Сталинград – гордость и слава народа, олицетворение его <br />
                    доблести, сверкающий символ стойкости, непревзойденного мужества»
                  </p>
                  <p className={s.author}>Алексей Семёнович Чуянов</p>
                </div>
              </div>
              <img ref={(el) => (headingsRef.current[4] = el)} className={s.slide3} src={slide3} />
              <img ref={(el) => (headingsRef.current[5] = el)} className={s.slide3People} src={slide3People} />
              <img ref={(el) => (headingsRef.current[6] = el)} className={s.slide3Tree} src={slide3Tree} />
            </div>
          </div>
          <div className={`${s.slideWrapper} slide`} ref={(el) => (slidesRef.current[3] = el)}>
            <div className={s.container}>
              <div className={s.quoteWrapper}>
                <h2 className={s.title}>Курская битва</h2>
                <div className={`${s.quoteBox} `}>
                  <p className={s.quote}>
                    «В 2 часа 20 минут утра 5 июля всё вокруг закружилось и завертелось, началась <br /> мощная симфония величайшего сражения в районе Курской дуги, в которой особенно <br />
                    выделялись звуки тяжёлой артиллерии и разрывы реактивных снарядов М-31»
                  </p>
                  <p className={s.author}>Георгий Константинович Жуков</p>
                </div>
              </div>
            </div>

            <img ref={(el) => (headingsRef.current[7] = el)} className={s.slide4} src={slide4} />
            <img ref={(el) => (headingsRef.current[8] = el)} className={s.slide41} src={slide41} />
          </div>
          <div className={`${s.slideWrapper} slide`} ref={(el) => (slidesRef.current[4] = el)}>
            <div className={s.container}>
              <div className={s.quoteWrapper}>
                <h2 className={s.title}>Белорусская операция</h2>
                <div className={s.quoteBox}>
                  <p className={s.quote}>
                    «Операция «Багратион» — это настоящий шедевр военного искусства, <br /> подлинное свидетельство того, что к 1944 году мы оставили немцев <br /> далеко позади в плане развития военной науки»
                  </p>
                  <p className={s.author}>Юрий Альбертович Кнутов</p>
                </div>
              </div>
              <img ref={(el) => (headingsRef.current[9] = el)} className={s.slide5} src={slide5} />
            </div>
          </div>
          <div className={`${s.slideWrapper} slide`} ref={(el) => (slidesRef.current[5] = el)}>
            <div className={s.container}>
              <div className={s.quoteWrapper}>
                <h2 className={s.title}>Берлинская операция</h2>
                <div className={s.quoteBox}>
                  <p className={s.quote}>
                    «В воздух взвились тысячи разноцветных ракет. По этому сигналу вспыхнули 140 прожекторов, <br /> расположенных через каждые 200 метров. Более 100 миллиардов свечей освещали поле боя, <br />
                    ослепляя противника и выхватывая из темноты объекты атаки для наших танков и пехоты. Это была <br /> картина огромной впечатляющей силы, и, пожалуй, за всю жизнь я не помню подобного ощущения...»
                  </p>
                  <p className={s.author}>Георгий Константинович Жуков</p>
                </div>
              </div>
            </div>
            <img ref={(el) => (headingsRef.current[10] = el)} className={s.slide6} src={slide6} />
            <img ref={(el) => (headingsRef.current[11] = el)} className={s.slide6Tree} src={slide6Tree} />
          </div>
          <div className={`${s.slideWrapper} slide`} ref={(el) => (slidesRef.current[6] = el)}>
            <div className={s.container}>
              <div className={s.quoteWrapper}>
                <h2 className={s.title}>ПОБЕДА</h2>
                <div className={s.quoteBox}>
                  <p className={s.quote}>
                    «Победа! Это величайшее счастье для солдата - сознание того, что ты помог своему народу <br /> победить врага, отстоять свободу Родины, вернуть ей мир. Сознание того, что ты выполнил
                    <br />
                    свой солдатский долг, долг тяжкий и благородный, выше которого нет ничего на земле!»
                  </p>
                  <p className={s.author}>Константин Константинович Рокоссовский</p>
                </div>
              </div>
            </div>
            <img ref={(el) => (headingsRef.current[12] = el)} className={s.slide7} src={slide7} />
            <img ref={(el) => (headingsRef.current[13] = el)} className={s.slide7Tree} src={slide7Tree} />
          </div>
          <div className={`${s.slideWrapper} slide`} ref={(el) => (slidesRef.current[7] = el)}>
            <div className={s.container}>
              <div className={s.quoteWrapper}>
                <h2 className={s.title}>Гордость и защита родины</h2>
                <div className={s.quoteBox}>
                  <p className={s.quote}>«Только доблесть бессмертно живет, Ибо храбрые славны вовеки!»</p>
                  <p className={s.author}>Валерий Яковлевич Брюсов</p>
                </div>
              </div>
            </div>
            <div className={s.slideContent7} ref={(el) => (headingsRef.current[14] = el)}>
              <div>
                <img src={svg80} />
              </div>
              <img className={s.slide7People} src={slide8} />
            </div>
          </div>
        </div>
      </div>
      <div className={s.timeLine}>
        <button
          disabled={isAnimation}
          onClick={() => {
            setActiveSlide(7);
            setIsHandler(true);
          }}
          className={`${s.dateEnd} ${activeSlide === 7 && s.active}`}
        >
          2025
        </button>
        <span className={s.spanLine}></span>

        <button
          disabled={isAnimation}
          onClick={() => {
            setActiveSlide(6);
            setIsHandler(true);
          }}
          className={`${s.date} ${activeSlide === 6 && s.active}`}
        >
          1945
        </button>

        <button
          disabled={isAnimation}
          onClick={() => {
            setActiveSlide(5);
            setIsHandler(true);
          }}
          className={`${activeSlide === 5 && s.active}`}
        ></button>

        <button
          disabled={isAnimation}
          onClick={() => {
            setActiveSlide(4);
            setIsHandler(true);
          }}
          className={`${activeSlide === 4 && s.active}`}
        ></button>

        <button
          disabled={isAnimation}
          onClick={() => {
            setActiveSlide(3);
            setIsHandler(true);
          }}
          className={`${activeSlide === 3 && s.active}`}
        ></button>

        <button
          disabled={isAnimation}
          onClick={() => {
            setActiveSlide(2);
            setIsHandler(true);
          }}
          className={`${activeSlide === 2 && s.active}`}
        ></button>

        <button
          disabled={isAnimation}
          onClick={() => {
            setActiveSlide(1);
            setIsHandler(true);
          }}
          className={`${activeSlide === 1 && s.active}`}
        ></button>

        <button
          disabled={isAnimation}
          onClick={() => {
            setActiveSlide(0);
            setIsHandler(true);
          }}
          className={`${s.date} ${activeSlide === 0 && s.active}`}
        >
          1941
        </button>
      </div>
      {activeSlide !== 0 && (
        <button
          disabled={isAnimation || activeSlide === 0}
          type="button"
          className={s.sliderBtnLeft}
          onClick={() => {
            if (activeSlide !== 0) {
              setActiveSlide((prev) => prev - 1);
              setIsHandler(true);
            }
          }}
        >
          <IconArrowLeft />
        </button>
      )}

      {activeSlide !== 7 && (
        <button
          disabled={isAnimation || activeSlide === 7}
          type="button"
          className={s.sliderBtnRight}
          onClick={() => {
            if (activeSlide !== 7) {
              setActiveSlide((prev) => prev + 1);
              setIsHandler(true);
            }
          }}
        >
          <IconArrowRight />
        </button>
      )}
    </div>
  );
};
