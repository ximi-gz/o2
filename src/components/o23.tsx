'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import styles from './o23.module.css';

const O23 = () => {
  const [isState2, setIsState2] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const id = searchParams.get('id');
    if (id === 'xy') {
      setIsState2(true);
    }
    setIsLoaded(true); // Setze geladenen Zustand auf true
  }, [searchParams]);

  const handleClick = () => {
    const newState = !isState2;
    setIsState2(newState);
    if (newState) {
      router.push('?id=xy'); // Zustand 2 zur URL hinzufügen
    } else {
      router.push(''); // Zustand 1 zur URL zurücksetzen
    }
  };

  if (!isLoaded) {
    return null; // Warten auf das Laden der Parameter
  }

  return (
    <motion.div
      className={styles.o23}
      initial={false}
      animate={isState2 ? 'state2' : 'state1'}
      variants={{
        state1: { width: 200, height: 300, backgroundColor: 'green' },
        state2: { width: 300, height: 500, backgroundColor: 'yellow' }
      }}
      transition={{ duration: 0.5 }}
      onClick={handleClick}
    >
      Element o23
    </motion.div>
  );
};

export default O23;
