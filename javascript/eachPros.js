function applyHoverEffects() {
    const listItems = document.querySelectorAll('.listItem');
    const isLargeDevice = window.matchMedia('(min-width: 768px)').matches;

    listItems.forEach(item => {
        const inside = item.querySelector('.inside');
       
        item.removeEventListener('mouseover', handleMouseOver);
        item.removeEventListener('mouseout', handleMouseOut);

        if (isLargeDevice) {
          
            item.addEventListener('mouseover', handleMouseOver);
            item.addEventListener('mouseout', handleMouseOut);
        } else {
            
            inside.style.display = 'none';
        }
    });
}

function handleMouseOver(event) {
    const inside = event.currentTarget.querySelector('.inside');
    inside.style.display = 'block';
}

function handleMouseOut(event) {
    const inside = event.currentTarget.querySelector('.inside');
    inside.style.display = 'none';
}

// Initial setup
applyHoverEffects();

// Update on window resize
window.addEventListener('resize', applyHoverEffects);
