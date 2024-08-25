const projects = [
    { title: 'workflow', class: 'wf',linkX:'https://github.com/ajaykumarreddy7474/workflow'},
    { title: 'portfolio', class: 'pf',linkX:'/portfolio.html' },
    { title: 'TEMPPRO', class: 'tp',linkX:'/portfolio.html' },
    { title: 'CALCULATOR', class: 'cl',linkX:'/portfolio.html' },
    { title: 'DOUBLE-PRO', class: 'dp',linkX:'/portfolio.html' },
    { title: 'WEATHER-App', class: 'wa',linkX:'/portfolio.html' },
    { title: 'randdom', class: 'rnd',linkX:'/portfolio.html' }, 
    { title: 'WORKsS-CLONE', class: 'wc',linkX:'/portfolio.html' },
    { title: 'PAYROLL', class: 'pr' }
  ];
const listContainer=document.querySelector('.wholeList')

projects.forEach(({title,class:className,linkX})=>{
   
const listItem=document.createElement('li');
listItem.className='listItem';
listItem.innerHTML=
`<a href='${linkX}' target="_blank" class='prolink'>${title}</a> <div class="inside ${className}"> <h1>${title}</h1> </div> `
listContainer.appendChild(listItem);
});