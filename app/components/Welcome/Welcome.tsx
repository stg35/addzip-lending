import styles from './Welcome.module.scss';
import AddzipLogo from '@/public/background-logo-mobile.svg';

export const Welcome = (): JSX.Element => {
	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.heading}>
					<span>Streetwear</span>
					<span>Marketplace</span>
				</div>
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
					<AddzipLogo className={styles['background__first-logo']} />
				</div>
			</div>
		</>
	);
};
