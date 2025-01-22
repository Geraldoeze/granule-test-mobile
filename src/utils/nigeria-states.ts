import * as nigerianStates from "nigerian-states-and-lgas";
const allStates = nigerianStates.states();

// Get all states
export const getAllStates = (): string[] => {
  return allStates;
};

// // Get LGAs for a specific state
export const getAllLGAsInState = (state: string) => {
  const lgs = nigerianStates.lgas(state);
  return lgs;
};
