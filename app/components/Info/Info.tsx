import styles from './Info.module.scss';

export const Info = (): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.text}>
				<div>
					Платформа, на которой <span>российские стритвир бренды</span> продают свою одежду и
					аксессуары
				</div>
				<div>
					Маркетплейс, где ваш уличный стиль обретает новую жизнь — продавайте и анонсируйте дропы
				</div>
			</div>
		</div>
	);
};
