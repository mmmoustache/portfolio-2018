export function initServiceWorker() {   
  if (typeof window !== 'undefined') {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/portfolio-2018/sw.js').then((registration) => {
          // Registration was successful
          console.info('ServiceWorker registration successful with scope: ', registration.scope);
        }, (err) => {
          // registration failed :(
          console.error('ServiceWorker registration failed: ', err);
        });
      });
    }
  }
}
