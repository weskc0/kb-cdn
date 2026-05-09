export const $ = (sel) => document.querySelector(sel);
export const $$ = (sel) => [...document.querySelectorAll(sel)];
export const setLocal = (key, value) => localStorage.setItem(key, JSON.stringify(value));
export const getLocal = (key, fallback) => {
  const v = localStorage.getItem(key);
  return v ? JSON.parse(v) : fallback;
};