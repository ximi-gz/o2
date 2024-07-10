'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import styles from './o23.module.css';

const O23 = () => {
  const [isState2, setIsState2] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false); // Um initiale Animation zu verhindern
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    setIsState2(searchParams.get('id') === 'xy');
  }, [searchParams]);

  const handleClick = () => {
    setIsState2(prev => {
      const newState = !prev;
      router.push(newState ? '?id=xy' : '', { scroll: false });
      setHasInteracted(true); // Benutzerinteraktion gesetzt
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
        height: isState2 ? 500 : 300,
        backgroundColor: isState2 ? '#f75832' : '#ee2849',
        padding: isState2 ? 30 : 10,
        position: isState2 ? 'fixed' : 'relative',
        top: isState2 ? '30%' : 'auto',
        right: isState2 ? '10%' : 'auto',
        fontSize: '16px', // Ensure consistent font size
        pointerEvents: 'auto', // Ensures element responds to click events
      }}
      transition={{ duration: hasInteracted ? 1 : 0, ease: [0.9, 0, 0.15, 1] }} // Dauer 0 bei Initialisierung
      onClick={handleClick}
    >
      Element o23
    </motion.div>
  );
};

export default O23;
