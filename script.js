const tdElements = document.querySelectorAll('td')
const cardinal = document.querySelector('.cardinal')
const table = document.querySelector('table')

tdElements.forEach((tdElement) => {
  tdElement.addEventListener('dblclick', (e) => {
    e.target.querySelector('.transliteration').classList.toggle('show')
  })
})

cardinal.addEventListener('dblclick', (e) => {
  table.classList.toggle('show-ordinal')
})
