'use client';
import { Application } from '@/api/types/application';
import styles from './Partnership.module.scss';
import Image from 'next/image';
import { SubmitHandler, useForm } from 'react-hook-form';
import { createApplication } from '@/api/application/action';
import WinterStar from '@/public/winter-star.svg';
import cn from 'classnames';

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
				<span className={cn(styles.primary, styles['form-heading'])}>
					Присоединяйтесь к addZip одними из первых
				</span>
				<span className={styles['form-heading']}>
					Вы можете абсолютно бесплатно разместить свой ассортимент на сайте
				</span>
				<div className={styles['heading-mobile']}>
					Вы можете абсолютно бесплатно разместить свой ассортимент на сайте
				</div>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input
						className={cn({ [styles['error']]: errors.BrandName })}
						placeholder="Название бренда*"
						type="text"
						{...register('BrandName', { required: 'Заполните поле' })}
						aria-invalid={errors.BrandName ? 'true' : 'false'}
					/>
					{errors.BrandName && (
						<span className={styles['error-text']}>{errors.BrandName.message}</span>
					)}
					<input
						className={cn({ [styles['error']]: errors.Site })}
						placeholder="Ссылка на сайт или ВК*"
						type="text"
						{...register('Site', { required: 'Заполните поле' })}
						aria-invalid={errors.Site ? 'true' : 'false'}
					/>
					{errors.Site && <span className={styles['error-text']}>{errors.Site.message}</span>}
					<input
						className={cn({ [styles['error']]: errors.Telegram })}
						placeholder="Телеграм для связи*"
						type="text"
						{...register('Telegram', { required: 'Заполните поле' })}
						aria-invalid={errors.Telegram ? 'true' : 'false'}
					/>
					{errors.Telegram && (
						<span className={styles['error-text']}>{errors.Telegram.message}</span>
					)}
					<button>Присоединиться</button>
				</form>
			</div>
		</div>
	);
};
