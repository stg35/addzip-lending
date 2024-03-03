import styles from './Launch.module.scss';

export const Launch = (): JSX.Element => {
	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.heading}>
					Запуск <span>7 марта</span>
				</div>
				{/* <div className={styles.roadmap}>
					<div className={styles.month}>Июнь</div>
					<div className={cn(styles.infoWrapper, styles.left)}>
						<div className={styles.info}>
							<div className={styles.headingInfo}>Идея и аналитика рынка</div>
							<span>
								На нашей платформе все бренды находятся в одинаковых условиях, что открывает
								возможности малоизвестным и не только брендам привлечения новых клиентов
							</span>
						</div>
					</div>
					<div className={styles.month}>Июль</div>
					<div className={cn(styles.infoWrapper, styles.right)}>
						<div className={styles.info}>
							<div className={styles.headingInfo}>Сбор команды и разработка дизайна</div>
							<span>
								На нашей платформе все бренды находятся в одинаковых условиях, что открывает
								возможности малоизвестным и не только брендам привлечения новых клиентов
							</span>
						</div>
					</div>
					<div className={styles.month}>Август</div>
					<div className={cn(styles.infoWrapper, styles.left)}>
						<div className={styles.info}>
							<div className={styles.headingInfo}>Лендинг и привлечнение брендов</div>
							<span>
								На нашей платформе все бренды находятся в одинаковых условиях, что открывает
								возможности малоизвестным и не только брендам привлечения новых клиентов
							</span>
						</div>
					</div>
					<div className={styles.month}>Сентябрь</div>
					<div className={cn(styles.infoWrapper, styles.right)}>
						<div className={styles.info}>
							<div className={styles.headingInfo}>Начало разработки</div>
							<span>
								На нашей платформе все бренды находятся в одинаковых условиях, что открывает
								возможности малоизвестным и не только брендам привлечения новых клиентов
							</span>
						</div>
					</div>
					<div className={styles.month}>Октябрь</div>
					<div className={styles.last}>
						<div className={cn(styles.infoWrapper, styles.left)}>
							<div className={styles.info}>
								<div className={styles.headingInfo}>Начало маркетинговой компании</div>
								<span>
									На нашей платформе все бренды находятся в одинаковых условиях, что открывает
									возможности малоизвестным и не только брендам привлечения новых клиентов
								</span>
							</div>
						</div>
						<div className={styles.addition}>Запуск платформы</div>
					</div>
					<div className={styles.month}>Ноябрь</div>
	</div>*/}
			</div>
			<div className={styles['wrapper-mobile']}>
				Запуск <span>7 марта</span>
			</div>
		</>
	);
};
