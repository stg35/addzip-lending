import styles from './Welcome.module.scss';
import WelcomMobile from '@/public/welcome-mobile.svg';
import Arrow from '@/public/arrow-down.svg';
import WinterStar from '@/public/winter-star.svg';
import AnotherStar from '@/public/black-winter-star.svg';

export const Welcome = (): JSX.Element => {
	return (
		<>
			<div className={styles.wrapper}>
				{/* <div className={styles.heading}>
					<span>Streetwear</span>
					<span>Marketplace</span>
				</div> */}
				<video autoPlay muted loop className={styles.video}>
					<source src="/tipochki.mp4" />
				</video>
				<div className={styles.bottomBlur}></div>
				{/* <div className={styles.addzipWrapper}>
					<div>
						<Addzip className={styles.addzip} />
					</div>
				</div> */}
			</div>
			<div className={styles['wrapper-mobile']}>
				<div className={styles['background']}>
					<WelcomMobile className={styles['background__first-logo']} />
				</div>
				<div className={styles['content']}>
					<button>Присоединиться</button>
					<p className={styles['content__text']}>Стритвир Маркетплейс</p>
					<div className={styles['content__icons']}>
						<WinterStar className={styles['content__icons__winter-star']} />
						<Arrow className={styles['content__icons__arrow']} />
						<AnotherStar className={styles['content__icons__another-star']} />
					</div>
				</div>
			</div>
		</>
	);
};
