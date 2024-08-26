function applyHoverEffects() {
    const listItems = document.querySelectorAll('.listItem');
    const isLargeDevice = window.matchMedia('(min-width: 768px)').matches;

    listItems.forEach(item => {
        const inside = item.querySelector('.inside');

        // Remove existing event listeners to avoid duplication
        item.removeEventListener('mouseover', handleMouseOver);
        item.removeEventListener('mouseout', handleMouseOut);

        if (isLargeDevice) {
            // Add event listeners only if the device is large
            item.addEventListener('mouseover', handleMouseOver);
            item.addEventListener('mouseout', handleMouseOut);
        } else {
            // Ensure the element is hidden on smaller devices
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
