const circleCursor = document.getElementById('circleCursor');
document.addEventListener('mousemove', (e) => {
circleCursor.style.left = e.clientX+25+`px`;
circleCursor.style.top = e.clientY+30+`px`
});
//for about.html