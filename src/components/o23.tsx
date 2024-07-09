'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import styles from './o23.module.css';

const O23 = () => {
  const [isState2, setIsState2] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const id = searchParams.get('id');
    if (id === 'xy') {
      setIsState2(true);
      setShouldAnimate(false); // Keine Animation beim ersten Laden
    }
  }, [searchParams]);

  const handleClick = () => {
    const newState = !isState2;
    setIsState2(newState);
    setShouldAnimate(true); // Animationen bei Benutzerinteraktion aktivieren
    if (newState) {
      router.push('?id=xy'); // Nur ein Argument
    } else {
      router.push(''); // Nur ein Argument
    }
  };

  return (
    <motion.div
      className={styles.o23}
      initial={false}
      animate={isState2 ? 'state2' : 'state1'}
      variants={{
        state1: { width: 200, height: 300, backgroundColor: 'green' },
        state2: { width: 300, height: 500, backgroundColor: 'yellow' }
      }}
      transition={{ duration: shouldAnimate ? 0.5 : 0 }} // Animation nur bei Benutzerinteraktion
      onClick={handleClick}
    >
      Element o23
    </motion.div>
  );
};

export default O23;
