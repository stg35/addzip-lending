'use client';
import { useCallback, useState } from 'react';
import { FaqSectionProps } from './faqSection.props';
import styles from './faqSection.module.scss';
import Arrow from '@/public/faqArrow.svg';
import { AnimatePresence, Variants, motion } from 'framer-motion';

const presenceAnimation = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
};

const variants: Variants = {
	open: { rotate: '180deg' },
};

export const FaqSection = ({ heading, content }: FaqSectionProps): JSX.Element => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleArrowClick = useCallback(() => {
		setIsOpen(!isOpen);
	}, [isOpen]);

	return (
		<AnimatePresence>
			<div className={styles.wrapper}>
				<div className={styles.headingWrapper}>
					<div className={styles.heading}>{heading}</div>
					<motion.div
						className={styles.arrowWrapper}
						initial={false}
						variants={variants}
						animate={isOpen ? 'open' : 'notOpen'}
						onClick={(): void => handleArrowClick()}
					>
						<Arrow className={styles.arrow} />
					</motion.div>
				</div>
				{isOpen && (
					<motion.div key={'content'} className={styles.content} {...presenceAnimation}>
						{content}
					</motion.div>
				)}
			</div>
		</AnimatePresence>
	);
};
