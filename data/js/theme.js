(function () {
    function syncTheme() {
        const savedTheme = localStorage.getItem('user-theme') || 'default';
        const targetClass = savedTheme === 'default' ? '' : savedTheme;

        if (document.body) {
            if (document.body.className !== targetClass) {
                document.body.className = targetClass;
            }
        } 
        
        if (document.documentElement.className !== targetClass) {
            document.documentElement.className = targetClass;
        }
    }

    syncTheme();

    document.addEventListener("DOMContentLoaded", syncTheme);

    window.addEventListener('storage', (e) => {
        if (e.key === 'user-theme') {
            syncTheme();
        }
    });

    setInterval(syncTheme, 100);
})();
