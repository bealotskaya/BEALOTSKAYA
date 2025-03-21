    const themeButton = document.getElementById('theme');
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');


    const sunImage = new Image();
    sunImage.src = '../../main/static/main/img/sun.png'; // Путь к изображению для светлой темы

    const moonImage = new Image();
    moonImage.src = '../../main/static/main/img/moon.png'; // Путь к изображению для темной темы

        if (localStorage.getItem('theme') === 'dark') {
            body.classList.add('dark-theme');
            body.classList.remove('light-theme');
            themeIcon.src = '../../main/static/main/img/moon.png'; 
            } 
        else {
                themeIcon.src = '../../main/static/main/img/sun.png'; 
            };


        themeButton.addEventListener('click', function() {
            body.classList.toggle('dark-theme');
            body.classList.toggle('light-theme');

    
        if (body.classList.contains('dark-theme')) {
            themeIcon.src = '../../../../main/static/main/img/moon.png'; 
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.src = '../../../../main/static/main/img/sun.png'; 
            localStorage.setItem('theme', 'light');
        }
    });
