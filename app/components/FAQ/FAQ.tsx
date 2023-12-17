import { FaqSection } from '../FaqSection/FaqSection';
import styles from './faq.module.scss';
import Image from 'next/image';

export const FAQ = (): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.heading}>FAQ</div>
			<div className={styles.content}>
				<FaqSection
					heading={'Какой процент с продажи вы берете?'}
					content={
						'На нашей платформе все бренды находятся в одинаковых условиях, что открывает возможности малоизвестным и не только брендам привлечения новых клиентов'
					}
				/>
				<FaqSection
					heading={'Кто несет ответственность за товар и доставку?'}
					content={
						'На нашей платформе все бренды находятся в одинаковых условиях, что открывает возможности малоизвестным и не только брендам привлечения новых клиентов'
					}
				/>
				<FaqSection heading={'Зачем моему бренду addZip?'} content={'Зачем моему бренду addZip?'} />
				<FaqSection heading={'Когда запуск?'} content={'Зачем моему бренду addZip?'} />
			</div>
			<div className={styles.stars}>
				<Image src={'/black-winter-star.svg'} width={34} height={34} alt={''} />
				<Image src={'/winter-star.svg'} width={34} height={34} alt={''} />
			</div>
		</div>
	);
};
