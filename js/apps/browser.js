import {createWindow} from '../../windowManager.js';
export function openBrowser(){
  const html = `<div style='display:flex;flex-direction:column;height:100%;'>
    <div style='background:#111;padding:2px;'>
      <input id='urlInput' type='text' placeholder='https://example.com' style='width:100%;background:#000;color:#0f0;border:1px solid #0f0;padding:2px;'>
      <button onclick='go()'>Go</button>
    </div>
    <iframe id='preview' style='flex:1;border:none;background:white;'></iframe>
    <script>
      function go(){const url=document.getElementById('urlInput').value;document.getElementById('preview').src=`/gateway?url=${encodeURIComponent(url)}`;}
    </script>
  </div>`;
  createWindow('Browser',html);
}