'use client';
import { Application } from '@/api/types/application';
import styles from './Partnership.module.scss';
import Image from 'next/image';
import { SubmitHandler, useForm } from 'react-hook-form';
import { createApplication } from '@/api/application/action';
import WinterStar from '@/public/winter-star.svg';

export const Partnership = (): JSX.Element => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<Omit<Application, 'id'>>();

	const onSubmit: SubmitHandler<Omit<Application, 'id'>> = async (data) => {
		await createApplication(data);
	};

	return (
		<div className={styles.wrapper} id="partnership">
			<div className={styles.heading}>
				<span>Сотрудничество</span>
				<div>
					<Image src={'/black-winter-star.svg'} width={34} height={34} alt={''} />
					<WinterStar className={styles['winter-star']} />
				</div>
			</div>
			<div className={styles.form}>
				<span className={styles.primary}>Присоединяйтесь к addZip одними из первых</span>
				<span>Вы можете абсолютно бесплатно разместить свой ассортимент на сайте</span>
				<div className={styles['heading-mobile']}>
					Вы можете абсолютно бесплатно разместить свой ассортимент на сайте
				</div>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input
						placeholder="Название бренда*"
						type="text"
						{...register('BrandName', { required: true })}
						aria-invalid={errors.BrandName ? 'true' : 'false'}
					/>
					{errors.BrandName && <p role="alert">{errors.BrandName.message}</p>}
					<input
						placeholder="Ссылка на сайт или ВК*"
						type="text"
						{...(register('Site'), { required: true })}
						aria-invalid={errors.Site ? 'true' : 'false'}
					/>
					{errors.Site && <p role="alert">{errors.Site.message}</p>}
					<input
						placeholder="Телеграм для связи*"
						type="text"
						{...(register('Telegram'), { required: true })}
						aria-invalid={errors.Telegram ? 'true' : 'false'}
					/>
					{errors.Telegram && <p role="alert">{errors.Telegram.message}</p>}
					<button>Присоединиться</button>
				</form>
			</div>
		</div>
	);
};
