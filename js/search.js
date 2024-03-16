document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.dropdown')
  const contents = document.querySelectorAll('.dropdown-content')
  const searchInput = document.getElementById('searchInput')
  const line = document.querySelectorAll('.dropdown__line')
  const icons = document.querySelectorAll('.icon use');

  const initialContentDisplay = {}
  contents.forEach(function (content) {
    initialContentDisplay[content.id] = content.style.display
  })

  contents.forEach(function (content) {
    content.style.display = 'none'
  })

  buttons.forEach(function (button, index) {
    button.addEventListener('click', function () {
      contents.forEach(function (content, contentIndex) {
        if (index === contentIndex) {
          content.style.display =
            content.style.display === 'none' ? 'block' : 'none';

          line.forEach(function (item) {
            item.classList.remove('active');
          });
          icons.forEach(function (icon) {
            icon.parentNode.classList.remove('active');
          });
          if (content.style.display === 'block') {
            line[index].classList.add('active');
            icons[index].setAttribute('xlink:href', './img/sprite.svg#open');
            icons[index].parentNode.classList.add('active');
          } else {
            icons[index].setAttribute('xlink:href', './img/sprite.svg#close');
            icons[index].parentNode.classList.remove('active');
          }
        } else {
          content.style.display = 'none';
          icons[contentIndex].setAttribute('xlink:href', './img/sprite.svg#close');
          icons[contentIndex].parentNode.classList.remove('active');
        }
      })
    })
  })

  searchInput.addEventListener('input', function () {
    let filter = this.value.trim().toLowerCase()

    if (filter === '') {
      buttons.forEach(function (button) {
        button.style.display = 'block'
      })
      return
    }

    buttons.forEach(function (button) {
      const content = button.querySelector('.dropdown-content')
      let hasVisibleItems = false

      if (!content) return

      let items = content.getElementsByTagName('label')

      Array.from(items).forEach(function (item) {
        let text = item.innerText.trim().toLowerCase()
        if (text.includes(filter)) {
          item.classList.add('show')
          hasVisibleItems = true
        } else {
          item.classList.remove('show')
        }
      })
      button.style.display = hasVisibleItems ? 'block' : 'none'
    })
  })
})
