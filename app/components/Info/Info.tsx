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
					src={'/mockup.svg'}
					alt=""
					width={472.45}
					height={500.494}
				/>
			</div>
		</div>
	);
};
