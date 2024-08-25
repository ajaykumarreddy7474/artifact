let maincloseBtn=document.getElementById('maincloseBtn')
    let masterTitle=document.getElementById('masterTitle')
    let closeBtnInside=document.getElementById('closeBtnInside')
    maincloseBtn.addEventListener('click', ()=>{
        masterTitle.style.display='block'
    })
    closeBtnInside.addEventListener('click', ()=>{
        masterTitle.style.display='none'
    })