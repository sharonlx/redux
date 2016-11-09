export const COUNTER_DECREASE_ACTION = 'DECREMENT';
export const COUNTER_INCREASE_ACTION = 'INCREMENT';


export const descreaseCounter = (number) => {
  return {
    type: COUNTER_DECREASE_ACTION,
    data: number
  }
}
export const inscreaseCounter = (number) => {
  return {
    type: COUNTER_INCREASE_ACTION,
    data: number
  }
}
