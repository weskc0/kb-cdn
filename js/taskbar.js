export function initTaskbar() {
  setInterval(() => {
    const now = new Date();
    document.querySelector('#clock').textContent = now.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});
  }, 1000);
}