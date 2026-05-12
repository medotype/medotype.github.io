(function () {
    const savedTheme = localStorage.getItem('user-theme');
    
    window.applyTheme = function (theme) {
        document.body.classList.forEach(className => {
            if (className.startsWith('theme-')) {
                document.body.classList.remove(className);
            }
        });

        if (theme && theme !== 'default') {
            document.body.classList.add(theme);
        }
    };

    if (savedTheme) {
        applyTheme(savedTheme);
    }
})();
