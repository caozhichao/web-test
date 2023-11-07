globalThis.addEventListener('install', async (e) => {
  console.log('install', e);
});
globalThis.addEventListener('activate', async (e) => {
  console.log('activate', e);
});
globalThis.addEventListener('fetch', async (e) => {
  console.log('fetch', e.request.url);
});
