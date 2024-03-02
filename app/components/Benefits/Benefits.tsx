import styles from './Benefits.module.scss';
import Image from 'next/image';

export const Benefits = (): JSX.Element => {
	return (
		<div className={styles.wrapper} id="benefit">
			<div className={styles.heading}>Преимущества работы с нами</div>
			<div className={styles.benefits}>
				<div className={styles.benefit}>
					<Image src={'/noun-marketing.svg'} alt="camera icon" width={50.943} height={45} />
					<div className={styles.benefitHeading}>Возможность заявить о себе</div>
					<div className={styles.info}>
						На нашей платформе созданы все условия для того, чтобы даже начинающие бренды имели
						возможность транслировать свой tone of voice, набирать аудиторию и расти в обороте
					</div>
				</div>
				<div className={styles.benefit}>
					<Image src={'/group.svg'} alt="camera icon" width={50.943} height={45} />
					<div className={styles.benefitHeading}>Увеличение потока новых клиентов</div>
					<div className={styles.info}>
						Размещайте свои товары и получайте заказы от новых клиентов, расширяйте охват аудитории!
					</div>
				</div>
				<div className={styles.benefit}>
					<Image src={'/silence.svg'} alt="camera icon" width={50.943} height={45} />
					<div className={styles.benefitHeading}>Мы отбираем только уникальные бренды</div>
					<div className={styles.info}>
						Мы отбираем лишь те бренды, которые обладают определённой уникальностью, чтобы не
						создавать перегруженности ассортимента и сохранять особый стиль каждого бренда
					</div>
				</div>
				<div className={styles.benefit}>
					<Image src={'/drop.svg'} alt="camera icon" width={50.943} height={45} />
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
