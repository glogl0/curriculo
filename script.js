//itens
const item1 = document.getElementById('item1');
const item2 = document.getElementById('item2');
const item3 = document.getElementById('item3');

// func em js
function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// chamei a func
item1.addEventListener('click', function() {
    scrollToSection('sobre');
});
item2.addEventListener('click', function() {
    scrollToSection('xp');
});
item3.addEventListener('click', function() {
    scrollToSection('ctt');
});
