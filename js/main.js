let box = '<div class = "box"></div>'
let box_list = document.querySelector('.box_list')

let a = prompt('Введите число')
for (let b = 1; b <= a; b++){
    box_list.insertAdjacentHTML('beforeend', box)
}