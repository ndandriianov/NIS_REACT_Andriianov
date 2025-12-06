import { useEffect } from 'react';
import type {Dispatch} from 'react';
import type {Pet, PetAction} from '../components/PetCard/types';

type UsePetLifecycleProps = {
  state: Pet;
  dispatch: Dispatch<PetAction>;
  interval?: number;
};

export const usePetLifecycle = ({ state, dispatch, interval = 5000 }: UsePetLifecycleProps) => {
  useEffect(() => {
    const timer = setInterval(() => {
      if (state.energy > 0) {
        dispatch({ type: 'TIRE' });
      }
    }, interval);

    return () => clearInterval(timer);
  }, [state.energy, dispatch, interval]);
};