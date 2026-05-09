import {createWindow} from '../../windowManager.js';import {getLocal,setLocal} from '../../utils.js';
export function openNotes(){
  const tex = getLocal('notesContent','');
  const textarea = document.createElement('textarea');
  textarea.style.width='100%';textarea.style.height='100%';
  textarea.value=tex;
  textarea.addEventListener('input',()=>setLocal('notesContent',textarea.value));
  createWindow('Notes',textarea.outerHTML);
}