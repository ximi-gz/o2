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
      variants={{
        state1: { width: 200, height: 300, backgroundColor: 'pink' },
        state2: { width: 300, height: 500, backgroundColor: 'orange' }
      }}
      transition={{ duration: hasInteracted ? 1 : 0, ease: [0.19, 1, 0.22, 1] }} // Dauer 0 bei Initialisierung
      onClick={handleClick}
    >
      Element o23
    </motion.div>
  );
};

export default O23;
