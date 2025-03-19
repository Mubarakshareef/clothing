import { createContext, useContext, useReducer, useEffect } from 'react';

const WardrobeContext = createContext();

const initialState = {
  clothes: [],
  outfits: [],
  packingLists: [],
  events: [],
};

function wardrobeReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, clothes: [...state.clothes, action.payload] };
    case 'ADD_OUTFIT':
      return { ...state, outfits: [...state.outfits, action.payload] };
    case 'ADD_PACKING_LIST':
      return { ...state, packingLists: [...state.packingLists, action.payload] };
    case 'ADD_EVENT':
      return { ...state, events: [...state.events, action.payload] };
    default:
      return state;
  }
}

export function WardrobeProvider({ children }) {
  const [state, dispatch] = useReducer(wardrobeReducer, initialState);

  useEffect(() => {
    const savedState = localStorage.getItem('wardrobeState');
    if (savedState) {
      const parsedState = JSON.parse(savedState);
      Object.entries(parsedState).forEach(([key, value]) => {
        dispatch({ type: `LOAD_${key.toUpperCase()}`, payload: value });
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('wardrobeState', JSON.stringify(state));
  }, [state]);

  return (
    <WardrobeContext.Provider value={{ state, dispatch }}>
      {children}
    </WardrobeContext.Provider>
  );
}

export function useWardrobe() {
  return useContext(WardrobeContext);
}