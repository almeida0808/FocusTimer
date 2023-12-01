
let darkMode = true
const btnToggle = document.querySelector('#toggleMode')

btnToggle.addEventListener('click', (event) => {
    toggleMode()

  const mode = darkMode ? 'light' : 'dark'
    event.currentTarget.querySelector('span').textContent = `${mode} mode ativado!`
    darkMode = !darkMode 
})

function toggleMode(){
document.documentElement.classList.toggle('light')
    

}

    