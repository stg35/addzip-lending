'use client';
import Image from 'next/image';
import styles from './Header.module.scss';
import { motion } from 'framer-motion';
import Arrow from '@/public/arrow.svg';
import Star from '@/public/winter-star.svg';

export const Header = (): JSX.Element => {
	return (
		<>
			<header className={styles.wrapper}>
				<div className={styles.header}>
					<Image src={'/addzip_logo_clear.svg'} alt={'addzip logo'} width={120} height={50} />
					<nav className={styles.nav}>
						<a href="#info">О нас</a>
						<a href="#contact">Контакты</a>
						<a href="#benefit">Преимущества</a>
						<a href="#partnership">Сотрудничество</a>
					</nav>
					<motion.a className={styles.joinButton} href="#partnership">
						<span>Присоединиться</span>
						<Arrow />
						<Star className={styles['winter-star']} />
					</motion.a>
				</div>
				<hr />
			</header>
			<header className={styles['mobile-wrapper']}>
				<div>
					<Image src={'/addzip_logo_clear.svg'} alt={'addzip logo'} width={120} height={50} />
				</div>
			</header>
		</>
	);
};
