import { atom } from 'recoil';

const localStorageEffect = (key: string) => ({setSelf, onSet}: {setSelf: any, onSet: any}) => {
  const savedValue = localStorage.getItem(key);
  if (savedValue != null) {
    setSelf(JSON.parse(savedValue));
  }

  onSet((newValue: any, _:any, isReset:any) => {
    isReset
      ? localStorage.removeItem(key)
      : localStorage.setItem(key, JSON.stringify(newValue));
  });
};

export const userState = atom({
  key: 'userState', // Provide a default key value if localStorage.getItem() returns null
  default: JSON.parse(localStorage.getItem('userState') || 'null') || false,
  effects: [
    localStorageEffect('userState')
  ]
});
