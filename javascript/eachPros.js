let listItems=document.querySelectorAll('.listItem');
    listItems.forEach(item=>{
        let inside=item.querySelector('.inside');
        item.addEventListener('mouseover',()=>{inside.style.display = 'block';});
        item.addEventListener('mouseout', () => {inside.style.display = 'none';});
    })

    