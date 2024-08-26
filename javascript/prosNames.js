const projects = [
  {
    title: "Amazekart",
    class: "wf",
    rnxz: "",
    linkX: "https://github.com/ajaykumarreddy7474/workflow",
    matter:
      "Amazekart is simple Ecommerce website which based on Clothing brand.One of my first projects",
    deplylink: "Live Link",
    dlink: "https://amaze-kart1.netlify.app/",
  },
  {
    title: "portfolio",
    class: "pf",
    rnxz: "",
    linkX: "https://github.com/ajaykumarreddy7474/PortfolioT",
    matter:
      "Amazekart is simple Ecommerce website which based on Clothing brand.One of my first projects",
    deplylink: "Live Link",
    dlink: "https://amaze-kart1.netlify.app/",
  },
  {
    title: "lizmotors",
    class: "lz",
    rnxz: "",
    linkX: "https://github.com/ajaykumarreddy7474/TimeLineMap",
    matter:
      "Amazekart is simple Ecommerce website which based on Clothing brand.One of my first projects",
    deplylink: "Live Link",
    dlink: "https://amaze-kart1.netlify.app/",
  },
  {
    title: "AudioPlay",
    class: "ap",
    rnxz: "",
    linkX: "https://github.com/ajaykumarreddy7474/Audio",
    matter:
      "Amazekart is simple Ecommerce website which based on Clothing brand.One of my first projects",
    deplylink: "Live Link",
    dlink: "https://amaze-kart1.netlify.app/",
  },
  {
    title: "doublePros",
    class: "dp",
    rnxz: "",
    linkX: "https://github.com/ajaykumarreddy7474/doublePro",
    matter:
      "Amazekart is simple Ecommerce website which based on Clothing brand.One of my first projects",
    deplylink: "Live Link",
    dlink: "https://amaze-kart1.netlify.app/",
  },
  {
    title: "sensa",
    class: "snsa",
    rnxz: "",
    linkX: "https://github.com/ajaykumarreddy7474/sensa",
    matter:
      "Amazekart is simple Ecommerce website which based on Clothing brand.One of my first projects",
    deplylink: "Live Link",
    dlink: "https://amaze-kart1.netlify.app/",
  },
  {
    title: "visit github",
    class: "gh",
    rnxz: "for more",
    linkX: "https://github.com/ajaykumarreddy7474",
    matter: "Visit my Github Account",
    deplylink: "",
    dlink: "https://amaze-kart1.netlify.app/",
  },
];
const listContainer = document.querySelector(".wholeList");

projects.forEach(
  ({ title, class: className, linkX, rnxz, matter, deplylink, dlink }) => {
    const listItem = document.createElement("li");
    listItem.className = "listItem";
    listItem.innerHTML = `<a href='${linkX}' target="_blank" class='prolink'>${title}</a> <div class="inside ${className}"> <h1>${title} ${rnxz}</h1> 
<p>${matter}</p>
<a href="${dlink}" target="_blank"}><h2>${deplylink}</h2></a>

</div> `;
    listContainer.appendChild(listItem);
  }
);
