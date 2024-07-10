'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './o23.module.css';

const O23 = () => {
  const [isState2, setIsState2] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    setIsState2(searchParams.get('id') === 'xy');
  }, [searchParams]);

  const handleClick = () => {
    setIsState2(prev => {
      const newState = !prev;
      router.push(newState ? '?id=xy' : '', { scroll: false });
      setHasInteracted(true);
      return newState;
    });
  };

  return (
    <AnimatePresence>
      <motion.div
        className={styles.o23}
        initial={false}
        animate={isState2 ? 'state2' : 'state1'}
        layout
        style={{
          width: isState2 ? 250 : 250,
          height: isState2 ? 450 : 250,
          backgroundColor: isState2 ? '#f75832' : '#ee2849',
          padding: isState2 ? 30 : 10,
          position: isState2 ? 'fixed' : 'relative',
          top: isState2 ? '0' : 'auto',
          right: isState2 ? '0' : 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        transition={{ duration: hasInteracted ? 1 : 0, ease: [0.9, 0, 0.15, 1] }}
        onClick={handleClick}
      >
        <motion.div
          className={styles.textContainer}
          layout
          style={{ pointerEvents: 'none' }}
          transition={{ duration: hasInteracted ? 1 : 0, ease: [0.9, 0, 0.15, 1] }}
        >
          Element o23
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default O23;
