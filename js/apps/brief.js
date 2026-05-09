import {createWindow} from '../../windowManager.js';

/**
 * Generate a simple “morning brief” window.
 * In a real implementation you would pull your calendar, email, and any
 * other data sources.  For now we add a static placeholder that lists the
 * 5‑star and 5‑star Shadow raid Pokémon that are available on the current
 * day.
 */
export function openBrief(){
  const today = new Date();
  const dateStr = today.toDateString();
  // ---- Placeholder data – replace with a real API call if you have one ----
  const fiveStar = ["Mewtwo", "Lugia", "Zapdos"];
  const fiveStarShadow = ["Gengar", "Hydreigon", "Darkrai"];
  // --------------------------------------------------------------------------
  const html = `
    <div style="padding:10px;">
      <h3>Morning Brief – ${dateStr}</h3>
      <p><strong>5‑Star Raids:</strong> ${fiveStar.join(', ')}</p>
      <p><strong>5‑Star Shadow Raids:</strong> ${fiveStarShadow.join(', ')}</p>
      <p> (Add your calendar / email summary here later.) </p>
    </div>`;
  createWindow('Morning Brief', html);
}