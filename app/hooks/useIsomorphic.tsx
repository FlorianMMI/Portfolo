'use client';

import { useEffect, useState } from 'react';

export function useIsomorphicLayoutEffect(effect: () => void, deps?: React.DependencyList) {
  useEffect(effect, deps);
}

export function useMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}