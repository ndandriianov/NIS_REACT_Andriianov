import React, {useCallback, useEffect, useReducer, useRef, useState} from 'react';
import {type Pet, type PetAction} from "./types.ts";
import styles from './PetCard.module.scss';
import {ActionButton} from "../PetActions/ActionButton.styled.ts";
import {usePetLifecycle} from "../../hooks/usePetLifecycle.ts";


const MAX_ENERGY = 10;
const MAX_LEVEL = 100;
const MAX_MOOD = 2;

const MIN = 0;

const DEFAULT_ENERGY = 5;
const DEFAULT_LEVEL = 1;
const DEFAULT_MOOD = 1;


type PetCardProps = {
  pet: Pet;
  onLog: (message: string) => void;
}

const initialState = (pet: Pet) => ({
  ...pet
});

function petCardReducer(state: Pet, action: PetAction): Pet {
  switch (action.type) {
    case "FEED":
      if (action.energy > 0) {
        return {
          ...state,
          energy: Math.min(state.energy + action.energy, MAX_ENERGY)
        }
      } else return state;
    case "LEVEL_UP":
      if (state.energy > 0) {
        return {
          ...state,
          level: Math.min(state.level + 1, MAX_LEVEL)
        }
      } else return state;
    case "CHEER":
      if (state.energy > 0) {
        return {
          ...state,
          mood: Math.min(state.mood + 1, MAX_MOOD)
        }
      } else return state;
    case "RESET":
      return {
        ...state,
        energy: DEFAULT_ENERGY,
        level: DEFAULT_LEVEL,
        mood: DEFAULT_MOOD
      }
    case "TIRE": {
      const newEnergy = Math.max(state.energy - 1, 0);
      let newMood = state.mood;

      if (newEnergy <= 2) newMood = 0;
      else if (newEnergy <= 5) newMood = 1;
      else newMood = 2;

      return {
        ...state,
        energy: newEnergy,
        mood: newMood
      };
    }
    case "SET_MOOD":
      console.log("SET_MOOD", state.energy);
      return {
        ...state,
        mood: Math.min(Math.max(action.mood, MIN), MAX_MOOD)
      }
  }
}

const PetCard: React.FC<PetCardProps> = React.memo(({pet, onLog}) => {
  const [state, dispatch] = useReducer(petCardReducer, pet, initialState);
  const [energyToAdd, setEnergyToAdd] = useState(1);
  const avatarRef = useRef<HTMLImageElement>(null);

  usePetLifecycle({state, dispatch, interval: 2000});

  useEffect(() => {
    if (avatarRef.current) {
      avatarRef.current.classList.add(styles.animate);
      const timeout = setTimeout(() => {
        avatarRef.current?.classList.remove(styles.animate);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [state]);

  const handleFeed = useCallback(() => {
    dispatch({type: "FEED", energy: energyToAdd});
    onLog(`${state.name} был накормлен: +${energyToAdd} энергии`);
  }, [state.name, onLog, energyToAdd]);

  const handleLevelUp = useCallback(() => {
    dispatch({type: "LEVEL_UP"});
    onLog(`${state.name} был повышен уровень`);
  }, [state.name, onLog]);

  const handleCheer = useCallback(() => {
    dispatch({type: "CHEER"});
    onLog(`${state.name} было улучшено настроение`);
  }, [state.name, onLog]);

  const handleReset = useCallback(() => {
    dispatch({type: "RESET"});
    onLog(`${state.name} был сброшен`);
  }, [state.name, onLog]);

  return (
    <div className={styles.petCard}>
      <img ref={avatarRef} src={state.avatar} alt={state.name}/>
      <div className={styles.petName}>{state.name}</div>

      <div className={styles.petRow}>
        <div>Настроение</div>
        <div className={styles.petNumeric}>{state.mood}</div>
      </div>
      <div className={styles.petRow}>
        <div>Энергия</div>
        <div className={styles.petNumeric}>{state.energy}</div>
      </div>
      <div className={styles.petRow}>
        <div>Уровень</div>
        <div className={styles.petNumeric}>{state.level}</div>
      </div>

      <div className={styles.feedContainer}>
        <input
          type="number"
          defaultValue={1}
          min="1"
          max="10"
          step="1"
          onChange={(e) => {
            const num = Number(e.target.value);
            if (!isNaN(num)) setEnergyToAdd(num);
          }}
        />
        <ActionButton mood={state.mood} onClick={handleFeed}>
          Feed
        </ActionButton>
      </div>

      <div className={styles.actions}>
        <ActionButton mood={state.mood} onClick={handleLevelUp}>
          Level Up
        </ActionButton>
        <ActionButton mood={state.mood} onClick={handleCheer}>
          Cheer
        </ActionButton>
        <ActionButton mood={state.mood} onClick={handleReset}>
          Reset to default
        </ActionButton>
      </div>
    </div>
  );
});

export default PetCard;