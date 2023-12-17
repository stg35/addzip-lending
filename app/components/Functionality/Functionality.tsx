'use client';
import styles from './Functionality.module.scss';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import cn from 'classnames';

enum CardType {
	Main,
	Catalog,
	Brand,
	Item,
}

export const Functionality = (): JSX.Element => {
	const [cardState, setCardState] = useState<CardType>(CardType.Main);

	return (
		<div className={styles.wrapper}>
			<div className={styles.heading}>Основной функционал</div>
			<div className={styles.functionality}>
				<AnimatePresence>
					{cardState == CardType.Main && (
						<motion.div
							layout
							className={styles.card}
							key={CardType.Main}
							initial={{ opacity: 0, y: 200 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.75, type: 'spring' }}
						>
							<Image src={'/mockup.svg'} alt="" width={472.45} height={500.494} />
						</motion.div>
					)}
					{cardState == CardType.Catalog && (
						<motion.div
							layout
							className={styles.card}
							key={CardType.Catalog}
							initial={{ opacity: 0, y: 200 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.75, type: 'spring' }}
						>
							<Image src={'/mockup.svg'} alt="" width={472.45} height={500.494} />
						</motion.div>
					)}
					{cardState == CardType.Brand && (
						<motion.div
							layout
							className={styles.card}
							key={CardType.Main}
							initial={{ opacity: 0, y: 200 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.75, type: 'spring' }}
						>
							<Image src={'/mockup.svg'} alt="" width={472.45} height={500.494} />
						</motion.div>
					)}
					{cardState == CardType.Item && (
						<motion.div
							layout
							className={styles.card}
							key={CardType.Item}
							initial={{ opacity: 0, y: 200 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.75, type: 'spring' }}
						>
							<Image src={'/mockup.svg'} alt="" width={472.45} height={500.494} />
						</motion.div>
					)}
				</AnimatePresence>
				<div className={styles.info}>
					<div>
						Маркетплейс, где ваш уличный стиль обретает новую жизнь продавайте и анонсируйте дропы
					</div>
					<div>
						Уникальное пространство для развития вашего уличного бренда — продажи и свежие релизы
					</div>
					<Image src={'/black-winter-star.svg'} alt="" width={25} height={25} />
					<Image src={'/winter-star.svg'} alt="" width={25} height={25} />
				</div>
				<nav className={styles.navigation}>
					<div
						className={cn({ [styles.active]: cardState == CardType.Main })}
						onClick={(): void => setCardState(CardType.Main)}
					>
						Главная страница
					</div>
					<div
						className={cn({ [styles.active]: cardState == CardType.Catalog })}
						onClick={(): void => setCardState(CardType.Catalog)}
					>
						Каталог
					</div>
					<div
						className={cn({ [styles.active]: cardState == CardType.Brand })}
						onClick={(): void => setCardState(CardType.Brand)}
					>
						Страница бренда
					</div>
					<div
						className={cn({ [styles.active]: cardState == CardType.Item })}
						onClick={(): void => setCardState(CardType.Item)}
					>
						Карточка товара
					</div>
				</nav>
			</div>
		</div>
	);
};
