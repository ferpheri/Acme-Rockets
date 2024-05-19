const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button')
    const mobileMenu = document.getElementById('mobile-menu')
    const themeToggleBtn = document.getElementById('theme-toggle-btn')
    const themeToggleIcon = document.getElementById('theme-toggle-icon')
    const root = document.documentElement

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
        hamburgerBtn.classList.toggle('toggle-btn')
    }

    const themeToggle = () => {
        root.classList.toggle('dark')
        if(root.classList.contains('dark')){
            themeToggleIcon.textContent = 'dark_mode'
        }else{
            themeToggleIcon.textContent = 'light_mode'
        }
    }

    hamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)
    themeToggleBtn.addEventListener('click', themeToggle)

}


document.addEventListener('DOMContentLoaded', initApp)