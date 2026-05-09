import {createWindow} from '../../windowManager.js';
export function openAbout(){
  const html = `<div style='padding:10px;'><h2>Mini Web OS</h2><p>Retro‑styled web operating system.</p><p>Version 1.0.0</p></div>`;
  createWindow('About', html);
}