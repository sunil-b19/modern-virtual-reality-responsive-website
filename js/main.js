// navigation toogle 

const primaryNav = document.querySelector(".primary-navigation")
const navToggle = document.querySelectorAll(".nav-toggle")

navToggle.forEach((button) => {
  button.addEventListener('click', () => {
    primaryNav.classList.toggle('showNav')
  })
})

// dropdown menu

const dropdownMenu = document.querySelector(".dropdown")
const dropdwonMwenuToggle = document.querySelector(".dropdown-menu-toggle")


dropdwonMwenuToggle.addEventListener('click', () => {
  dropdownMenu.classList.toggle('showDropdownMenu')
})

