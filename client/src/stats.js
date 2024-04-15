export const stats = [
{
    name: 'Workouts Completed',
    key: 'workouts_completed',
}
];

export function getStatValue(key) {
  return localStorage.getItem(key) ?? 0;
}

export function setStatValue(key, value) {
    localStorage.setItem(key, value);
}

export function incrementStatValue(key, amount = 1) {
    setStatValue(key, Number(getStatValue(key)) + amount);
}
