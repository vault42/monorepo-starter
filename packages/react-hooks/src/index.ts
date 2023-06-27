'use client'

import { useEffect, useState } from 'react';

const storage = {
  key: 'last-visit-date',
  save: (value: string) => window.localStorage.setItem(storage.key, value),
  retrieve: () => window.localStorage.getItem(storage.key) ?? null,
}

export const useLastVisitDate = () => {
  const [lastVisitDate, setLastVisitDate] = useState<null | string>(null);

  // On page load retrieve the last visit date if exists
  useEffect(() => {
    const value = storage.retrieve();
    setLastVisitDate(value);
  }, []);

  // On page close save current date
  useEffect(() => {
    const handler = () => {
      const currentDate = new Date().toISOString();
      storage.save(currentDate);
    }
    window.addEventListener('beforeunload', handler);
    return () => {
      window.removeEventListener('beforeunload', handler);
    }
  }, []);

  return lastVisitDate;
}