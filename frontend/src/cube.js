


export default function cube() {
    let cube_side = 0
    const cube_sides = document.querySelectorAll('.side')
    const cube_buttons = document.querySelectorAll('#cube_button')
    cube_buttons.forEach(function (cube){
        cube.addEventListener('click', function(){
            const cube_active = document.querySelector('.side.active')
            cube_active.classList.remove('active')
            cube_sides[cube_side].classList.add('active')
            cube_side ++;
            if (cube_side === 6){
                cube_side = 0
            }
        })
    })
}
