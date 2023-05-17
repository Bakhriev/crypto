import './functions/burger.js'

const dropdowns = document.querySelectorAll('[data-dropdown]')

document.addEventListener('click', e => {
  let currentDropdown
  if (e.target.closest('[data-dropdown]')) {
    currentDropdown = e.target.closest('[data-dropdown]')
    currentDropdown.classList.toggle('active')
    onClickDropdown()
  }

  document.querySelectorAll('[data-dropdown].active').forEach((dropdown) => {
    if (dropdown === currentDropdown) return
    dropdown.classList.remove('active')
  })
})

function onClickDropdown() {
  dropdowns.forEach(dropdown => {
    const value = dropdown.querySelector('[data-dropdown-value]')
    dropdown.querySelectorAll('.picker__menu-item').forEach((item) => {
      item.addEventListener('click', () => {
        value.textContent = item.textContent
      })
    })
  })
}
