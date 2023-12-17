'use client';
import Image from 'next/image';
import styles from './Header.module.scss';
import { motion } from 'framer-motion';
import Arrow from '@/public/arrow.svg';
import Star from '@/public/winter-star.svg';
import { useEffect, useState } from 'react';
import cn from 'classnames';

export const Header = (): JSX.Element => {
	const [isButtonHover, setIsButtonHover] = useState<boolean>(false);

	useEffect(() => {
		console.log(isButtonHover);
	}, [isButtonHover]);

	return (
		<>
			<header className={styles.wrapper}>
				<div className={styles.header}>
					<Image src={'/logo.svg'} alt={'addzip logo'} width={120} height={15.627} />
					<nav className={styles.nav}>
						<div>
							<a href="#">О нас</a>
							<a href="#">Контакты</a>
						</div>
						<div>
							<a href="#">Преимущества</a>
							<a href="#">Роадмап</a>
							<a href="#">Сотрудничество</a>
						</div>
					</nav>
					<motion.a
						className={styles.joinButton}
						onHoverStart={(): void => setIsButtonHover(true)}
						onHoverEnd={(): void => setIsButtonHover(false)}
						href=""
					>
						<span>Присоединиться</span>
						<Arrow className={cn({ [styles.active]: isButtonHover })} />
						<Star className={cn({ [styles.active]: isButtonHover })} />
					</motion.a>
				</div>
				<hr />
			</header>
		</>
	);
};
