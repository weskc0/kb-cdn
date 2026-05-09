export function createWindow(title, content) {
  const win = document.createElement('div');
  win.className = 'window';
  win.innerHTML = `<div class="title-bar"><span class="title">${title}</span><button>×</button></div><div class="content">${content}</div>`;
  document.getElementById('windows').appendChild(win);
}
export function closeWindow(el) { el.remove(); }