import styles from './Partnership.module.scss';
import Image from 'next/image';
//import cn from 'classnames';

export const Partnership = (): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.heading}>
				<span>Сотрудничество</span>
				<div>
					<Image src={'/black-winter-star.svg'} width={34} height={34} alt={''} />
					<Image src={'/winter-star.svg'} width={34} height={34} alt={''} />
				</div>
			</div>
			<div className={styles.form}>
				<span className={styles.primary}>
					Присоединяйтесь к addZip одними из первых и получите лучшие условия
				</span>
				<span>
					Вы сможете абсолютно бесплатно разместить свой ассортимент, комиссия взымается с продажи
				</span>
				<form>
					<input placeholder="Название бренда*" type="text" />
					<input placeholder="Ссылка на сайт или ВК*" type="text" />
					<input placeholder="Телеграм для связи*" type="text" />
					<button>Присоединиться</button>
				</form>
			</div>
		</div>
	);
};
