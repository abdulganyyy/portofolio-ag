import * as React from "react";

const TOAST_LIMIT = 3;
const TOAST_REMOVE_DELAY = 4000;

let count = 0;
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

const listeners = [];
let memoryState = { toasts: [] };

function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((l) => l(memoryState));
}

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };
    case "DISMISS_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toastId ? { ...t, open: false } : t
        ),
      };
    case "REMOVE_TOAST":
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };
    default:
      return state;
  }
}

function toast({ title, description }) {
  const id = genId();

  dispatch({
    type: "ADD_TOAST",
    toast: {
      id,
      title,
      description,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss(id);
      },
    },
  });

  setTimeout(() => {
    dispatch({ type: "REMOVE_TOAST", toastId: id });
  }, TOAST_REMOVE_DELAY);

  return { id, dismiss: () => dismiss(id) };
}

function dismiss(toastId) {
  dispatch({ type: "DISMISS_TOAST", toastId });
}

export function useToast() {
  const [state, setState] = React.useState(memoryState);

  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) listeners.splice(index, 1);
    };
  }, []);

  return { ...state, toast, dismiss };
}
