
const OpenNewTab = () => {
    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };
    return {openInNewTab}      
}

export default OpenNewTab