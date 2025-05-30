export const showLoader = () => {
    const loader = document.createElement('div');
    loader.id = 'loader';
    loader.innerHTML = '<img src="assets/loader.gif" alt="Loading...">';
    document.body.appendChild(loader);
  };
  
  export const hideLoader = () => {
    const loader = document.getElementById('loader');
    if (loader) {
      loader.remove();
    }
  };
