import { createContext, useReducer, ReactNode } from "react";
import { Meal } from "../types/meal";

type State = {
  items: Meal[];
};

type Action = {
  type: string;
  item?: Meal;
  id?: string;
};

type CartContext = {
  items: Meal[] | any;
  addItem: (item: Meal) => void;
  removeItem: (id: string) => void;
};

const CartContext = createContext({
  items: [],
  addItem: (item: Meal) => {},
  removeItem: (id: string) => {},
});

const cartReducer = (state: State, action: Action) => {
  if (action.type === "ADD_ITEM") {
    const existingIndex = state.items.findIndex(
      (item: Meal) => item.id === action.item!.id
    );

    const updatedItems = [...state.items];

    if (existingIndex > -1) {
      const existingItem = state.items[existingIndex];

      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity! + 1,
      };

      updatedItems[existingIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item!, quantity: 1 });
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === "REMOVE_ITEM") {
    const existingIndex = state.items.findIndex(
      (item: Meal) => item.id === action.id
    );

    const existingItem = state.items[existingIndex];
    const updatedItems = state.items;

    if (existingItem.quantity === 1) {
      updatedItems.splice(existingIndex, 1);
    } else {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity! - 1,
      };

      updatedItems[existingIndex] = updatedItem;
    }
    return { ...state, items: updatedItems };
  }

  return state;
};

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  const addItem = (item: Meal) => {
    dispatchCartAction({ type: "ADD_ITEM", item });
  };

  const removeItem = (id: string) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id });
  };

  const cartContext: CartContext = {
    items: cart.items,
    addItem,
    removeItem,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartContext;
