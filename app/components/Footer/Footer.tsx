import styles from './Footer.module.scss';
import Image from 'next/image';
//import cn from 'classnames';

export const Footer = (): JSX.Element => {
	return (
		<footer className={styles.wrapper}>
			<div className={styles.stars}>
				<Image src={'/black-winter-star.svg'} width={34} height={34} alt={''} />
				<Image src={'/winter-star.svg'} width={34} height={34} alt={''} />
			</div>
			<div className={styles.code}>1000011111110000111000 1000011011110000110100 10000110000</div>
		</footer>
	);
};
