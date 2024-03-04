import styles from './Info.module.scss';
import Image from 'next/image';

export const Info = (): JSX.Element => {
	return (
		<div className={styles.wrapper} id="info">
			<div className={styles.text}>
				<div>
					addZip - это агрегатор одежды и аксессуаров <span>российских стритвир брендов</span>
				</div>
				<div>Размещайте товары, анонсируйте дропы и полуйчайте новые заказы!</div>
			</div>
			<div className={styles.mockup}>
				<Image
					className={styles['mockup-image']}
					src={'/phone3.png'}
					alt=""
					width={400}
					height={700}
				/>
				<div className={styles['bottomBlur']}></div>
			</div>
		</div>
	);
};
