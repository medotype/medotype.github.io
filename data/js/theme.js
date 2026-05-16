(function () {
    const savedTheme = localStorage.getItem('user-theme');
    
    if (savedTheme && savedTheme !== 'default') {
        if (document.body) {
            document.body.className = savedTheme;
        } else {
            document.addEventListener("DOMContentLoaded", function () {
                document.body.className = savedTheme;
            });
        }
    }
})();
