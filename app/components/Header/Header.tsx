import Image from 'next/image';
import styles from './Header.module.scss';

export const Header = (): JSX.Element => {
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
					<a className={styles.joinButton} href="">
						<span>Присоединиться</span>
						<Image src={'/arrow.svg'} alt="" width={67} height={16} />
						<Image src={'/winter-star.svg'} alt="" width={20.917} height={18.017} />
					</a>
				</div>
				<hr />
			</header>
		</>
	);
};
