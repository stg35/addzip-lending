'use client';
import { Application } from '@/api/types/application';
import styles from './Partnership.module.scss';
import Image from 'next/image';
import { SubmitHandler, useForm } from 'react-hook-form';
import { createApplication } from '@/api/application/action';

export const Partnership = (): JSX.Element => {
	const { handleSubmit, register } = useForm<Omit<Application, 'id'>>();

	const onSubmit: SubmitHandler<Omit<Application, 'id'>> = async (data) => {
		const res = await createApplication(data);
		console.log(res.data, res.error);
	};

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
				<div className={styles['heading-mobile']}>
					Вы сможете абсолютно бесплатно разместить свой ассортимент, комиися взымается с продажи
				</div>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input placeholder="Название бренда*" type="text" {...register('BrandName')} />
					<input placeholder="Ссылка на сайт или ВК*" type="text" {...register('Site')} />
					<input placeholder="Телеграм для связи*" type="text" {...register('Telegram')} />
					<button>Присоединиться</button>
				</form>
			</div>
		</div>
	);
};
