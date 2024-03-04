import styles from './Footer.module.scss';
import Image from 'next/image';
import WinterStar from '@/public/winter-star.svg';

export const Footer = (): JSX.Element => {
	return (
		<>
			<footer className={styles.wrapper} id="contact">
				<div className={styles.stars}>
					<Image src={'/black-winter-star.svg'} width={34} height={34} alt={''} />
					<WinterStar className={styles['winter-star']} />
				</div>
				<div className={styles['contacts']}>
					<a href="https://t.me/addzip_streetwear" target="_blank" rel="noopener noreferrer">
						<Image src={'/tg-mobile.svg'} width={40} height={40} alt="" />
					</a>
					<a href="https://vk.com/addzip_streetwear" target="_blank" rel="noopener noreferrer">
						<Image src={'/vk-mobile.svg'} width={45} height={45} alt="" />
					</a>
				</div>
			</footer>
			<footer className={styles['wrapper-mobile']}>
				<a href="https://t.me/addzip_streetwear" target="_blank" rel="noopener noreferrer">
					<Image src={'/tg-mobile.svg'} width={31} height={31} alt="" />
				</a>
				<a href="https://vk.com/addzip_streetwear" target="_blank" rel="noopener noreferrer">
					<Image src={'/vk-mobile.svg'} width={31} height={31} alt="" />
				</a>
			</footer>
		</>
	);
};
