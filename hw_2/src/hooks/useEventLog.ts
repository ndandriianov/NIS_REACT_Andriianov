import {useContext} from 'react';
import {EventContext} from '../context/EventContext';

export const useEventLog = () => {
  const {events, addEvent, clearEvents} = useContext(EventContext);
  return {events, addEvent, clearEvents};
};