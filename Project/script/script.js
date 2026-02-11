const buttons = document.querySelectorAll('.cards__btn');
const gallery = document.getElementById('gallery');

const franceBlocks = gallery.innerHTML;

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {e.preventDefault()

        //Смнеа активной кнопки
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const file = btn.getAttribute('data-file');

        if(!file){
            gallery.innerHTML = franceBlocks;
            return;
        }

        fetch(file).then(respose => respose.text()).then(data => {
            gallery.innerHTML = data;
        })

        .catch(err => console.log('Ошибка загрузки!', err));
    });
});
