'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
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
    <motion.div
      className={styles.o23}
      initial={false}
      animate={isState2 ? 'state2' : 'state1'}
      layout
      style={{
        width: isState2 ? 300 : 200,
        height: isState2 ? 400 : 250,
        backgroundColor: isState2 ? '#FFA500' : '#FFC0CB',
        position: isState2 ? 'fixed' : 'relative',
        top: isState2 ? '30%' : 'auto',
        right: isState2 ? '0%' : 'auto',
      }}
      transition={{ duration: hasInteracted ? 1 : 0, ease: [0.9, 0, 0.15, 1] }} // Dauer 0 bei Initialisierung
      onClick={handleClick}
    >
      Element o23
    </motion.div>
  );
};

export default O23;
