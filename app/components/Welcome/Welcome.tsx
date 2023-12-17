import styles from './Welcome.module.scss';
// import Addzip from '@/public/addZip-back.svg';

export const Welcome = (): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.heading}>
				<span>Streetwear в сборе</span>
				<span>Раскройте потенциал вашего бренда</span>
			</div>
			<video autoPlay muted loop className={styles.video}>
				<source src="/tipochki.mp4" />
			</video>
			<div className={styles.bottomBlur}></div>
			{/* <div className={styles.addzipWrapper}>
				<Addzip className={styles.addzip} />
			</div> */}
		</div>
	);
};
