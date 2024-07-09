'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const ModalComponent = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(pathname === '/login-modal-open');

  useEffect(() => {
    if (pathname === '/login-modal-open') {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [pathname]);

  const toggleModal = () => {
    if (isOpen) {
      router.push('/');
    } else {
      router.push('/login-modal-open');
    }
  };

  return (
    <div
      onClick={toggleModal}
      style={{
        width: '250px',
        height: isOpen ? '650px' : '250px',
        backgroundColor: isOpen ? 'blue' : 'green',
        cursor: 'pointer',
      }}
    >
      Click me to {isOpen ? 'close' : 'open'} the modal
    </div>
  );
};

export default ModalComponent;
