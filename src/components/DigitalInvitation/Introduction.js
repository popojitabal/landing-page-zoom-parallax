'use client'
import { useRef } from 'react';
import styles from './style.module.scss';
import { useScroll, useTransform, motion } from 'framer-motion';
import Corner1 from '../../../public/digital-invitation/random-design-corner-1.png';
import Corner2 from '../../../public/digital-invitation/random-design-corner-2.png';
import Image from 'next/image';
const Component = () => {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const scaledComponents = [
        {
            type: 'text',
            text: 'INTRODUCTION PAGE',
            scale: scale4
        },
        {
            type: 'img',
            src: Corner1,
            scale: scale9
        },
        {
            type: 'img',
            src: Corner2,
            scale: scale6
        },
        {
            type: 'img',
            src: Corner1,
            scale: scale9
        },
        {
            type: 'img',
            src: Corner2,
            scale: scale6
        }
    ]


    return <div ref={container} className={styles.container}>
        <div className={styles.sticky}>
            {scaledComponents.map(({ type, scale, ...props }, index) => {
                return <motion.div key={index} className={styles.element} style={{scale}}>
                    <div className={styles.elementContainer}>
                        {type == 'text' && <div className={type == 'text' && styles.center100} style={{
                            fontSize: '20pt'
                        }}>{props.text}</div>}
                        {type == 'img' && <Image
                            src={props.src}
                            fill
                            alt="image"
                            placeholder='blur'
                        />}
                    </div>
                </motion.div>
            })}
        </div>
    </div>
}
export default Component