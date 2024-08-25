const circleCursor = document.getElementById('circleCursor');
document.addEventListener('mousemove', (e) => {
circleCursor.style.left = e.clientX+25+`px`;
circleCursor.style.top = e.clientY+30+`px`
});
document.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'DIV') {
        circleCursor.style.width = '40px';  // Increase width
        circleCursor.style.height = '40px'; // Increase height
    }
});

document.addEventListener('mouseout', (e) => {
    if (e.target.tagName === 'DIV') {
        circleCursor.style.width = '120px';  // Reset width
        circleCursor.style.height = '120px'; // Reset height
    }
});
