import styles from './Welcome.module.scss';

export const Welcome = (): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.heading}>
				<span>Streetwear в сборе</span>
				<span>Раскройте потенциал вашего бренда</span>
			</div>
		</div>
	);
};
