
// selecting dom
const menuItems = document.querySelectorAll('.menus li');

menuItems.forEach((menuItem) => {
    
  menuItem.addEventListener('click', () => {
    menuItems.forEach((item) => {
      item.classList.remove('active');
      (item as HTMLElement).style.textDecoration = 'none';
      (item as HTMLElement).style.color = '';
    });

    // remove existing hr if present
    const hr = menuItem.querySelector('hr');
    if (hr) {
        hr.remove();
    }

    menuItem.classList.add('active');
    (menuItem as HTMLElement).style.color = '#08cbfe';

    // add new hr to the clicked menu
    const newHr = document.createElement('hr');
    newHr.style.width = '100%';
    newHr.style.margin = '0';
    newHr.style.padding = '0';
    newHr.style.border = 'none';
    newHr.style.backgroundColor = 'red';
    menuItem.appendChild(newHr);
  });
});

const scrollToAbout = (sectionId:string) =>{
    const about = document.getElementById(sectionId);
   if(about){
    about.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
   }
    
}

