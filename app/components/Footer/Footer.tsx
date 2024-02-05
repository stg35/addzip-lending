import styles from './Footer.module.scss';
import Image from 'next/image';

export const Footer = (): JSX.Element => {
	return (
		<>
			<footer className={styles.wrapper}>
				<div className={styles.stars}>
					<Image src={'/black-winter-star.svg'} width={34} height={34} alt={''} />
					<Image src={'/winter-star.svg'} width={34} height={34} alt={''} />
				</div>
				<div className={styles.code}>1000011111110000111000 1000011011110000110100 10000110000</div>
			</footer>
			<footer className={styles['wrapper-mobile']}>
				<a href="#">
					<Image src={'/tg-mobile.svg'} width={31} height={31} alt="" />
				</a>
				<a href="#">
					<Image src={'/vk-mobile.svg'} width={31} height={31} alt="" />
				</a>
			</footer>
		</>
	);
};
