const projects = [
  {
    title: "Amazekart",
    class: "wf",
    rnxz: "",
    linkX: "https://amaze-kart1.netlify.app",
    matter:
      "Amazekart is simple Ecommerce website which based on Clothing brand.One of my first projects",
  
  },
  {
    title: "portfolio",
    class: "pf",
    rnxz: "",
    linkX: "https://aj-portfolio7474.netlify.app",
    matter:
      "This Portfolio website ensures you to show my expertise in various Skills",
   
  },
  {
    title: "lizmotors",
    class: "lz",
    rnxz: "",
    linkX: "https://liz-motors.netlify.app",
    matter:
      "Lizmotors, uer-friendly website for a car manufacturer's timeline mindmap with interactive features. ",
    
  },
  {
    title: "ArtVerse",
    class: "ap",
    rnxz: "",
    linkX: "https://artverse7474.netlify.app",
    matter:
      "ArtVerse made with JavaScript plugin based which includes animations, interactions.  ",
    
  },
  {
    title: " doublePros",
    class: "dp",
    rnxz: "",
    linkX:  "https://doublepros.netlify.app",
    matter:
      "A simple user-login with TWO individual projects in it",
    
  },
  {
    title: "TempPro",
    class: "snsa",
    rnxz: "",
    linkX: "https://temp-pro.netlify.app/",
    matter:
      "A General Temparature converter website.",
   
  },
  {
    title: "visit github",
    class: "gh",
    rnxz: "for more",
    linkX: "https://github.com/ajaykumarreddy7474",
    matter: "Visit my Github Account",
    
  },
];
const listContainer = document.querySelector(".wholeList");

projects.forEach(
  ({ title, class: className, linkX, rnxz, matter }) => {
    const listItem = document.createElement("li");
    listItem.className = "listItem";
    listItem.innerHTML = `<a href='${linkX}' target="_blank" class='prolink'>${title}</a> <div class="inside ${className}"> <h1>${title} ${rnxz}</h1> 
<p>${matter}</p>


</div> `;
    listContainer.appendChild(listItem);
  }
);
