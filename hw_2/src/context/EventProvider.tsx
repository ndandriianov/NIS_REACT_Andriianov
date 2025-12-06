import { useCallback, useState, type ReactNode } from 'react';
import { EventContext } from './EventContext';

type EventProviderProps = {
  children: ReactNode;
};

export const EventProvider = ({ children }: EventProviderProps) => {
  const [events, setEvents] = useState<string[]>([]);

  const addEvent = useCallback((event: string) => {
    setEvents(prev => [...prev, event]);
  }, []);

  const clearEvents = useCallback(() => {
    setEvents([]);
  }, []);

  return (
    <EventContext.Provider value={{ events, addEvent, clearEvents }}>
      {children}
    </EventContext.Provider>
  );
};