let modalMsg = document.getElementById('modalMsg');
let btn = document.getElementById('btn');

function showModal() {
    modalMsg.style.display = 'block';
}
setTimeout(() => {
    showModal();
}, 5000);


btn.addEventListener('click', () => {
    modalMsg.style.display = 'none'; 
});
