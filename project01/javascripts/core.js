var panels = document.querySelectorAll('.panel-item');

panels.forEach(function (panel) {
    panel.addEventListener('click', function (){
        removeActiveClass(panels);
        panel.classList.add('active');
    });
});

function removeActiveClass(doms) {
    doms.forEach(function (dom) {
        dom.classList.remove('active');
    });
}