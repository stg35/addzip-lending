import styles from './Benefits.module.scss';
import Image from 'next/image';

export const Benefits = (): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.heading}>Преимущества для брендов</div>
			<div className={styles.benefits}>
				<div className={styles.benefit}>
					<Image src={'/camera.svg'} alt="camera icon" width={50.943} height={45} />
					<div className={styles.benefitHeading}>Возможность заявить о себе</div>
					<div className={styles.info}>
						На нашей платформе все бренды находятся в одинаковых условиях, что открывает возможности
						малоизвестным и не только брендам привлечения новых клиентов
					</div>
				</div>
				<div className={styles.benefit}>
					<Image src={'/group.svg'} alt="camera icon" width={50.943} height={45} />
					<div className={styles.benefitHeading}>Увеличение потока новых клиентов</div>
					<div className={styles.info}>
						Реклама нашего сервиса позволяет каждому бренду получить больше покупателей
					</div>
				</div>
				<div className={styles.benefit}>
					<Image src={'/check.svg'} alt="camera icon" width={50.943} height={45} />
					<div className={styles.benefitHeading}>Мы отбираем только уникальные бренды</div>
					<div className={styles.info}>
						Мы отбираем лишь те бренды, которые обладают определённой уникальностью, чтобы не
						создавать перегруженности ассортимента и сохранять особый стиль каждого бренда
					</div>
				</div>
				<div className={styles.benefit}>
					<Image src={'/bell.svg'} alt="camera icon" width={50.943} height={45} />
					<div className={styles.benefitHeading}>Анонс предстоящих дропов</div>
					<div className={styles.info}>
						При помощи нашей платформы каждый бренд может объявить о предстоящих дропах, что поможет
						увеличить число покупателей
					</div>
				</div>
			</div>
		</div>
	);
};
