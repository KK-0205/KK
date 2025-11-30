function switchScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    const target = document.getElementById(screenId);
    if (target) target.classList.add('active');
    target.scrollIntoView({ behavior: 'smooth' });

}

function switchLike(likeId) {
    document.querySelectorAll('.like-screen').forEach(screen => {
        screen.classList.remove('active');
    });
    const target = document.getElementById(likeId);
    if (target) target.classList.add('active');
    target.scrollIntoView({ behavior: 'smooth' });

}
