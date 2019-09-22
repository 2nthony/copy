function copy(text, options = {}) {
  if (!text) return

  const mark = document.createElement('textarea')
  mark.value = text
  mark.style.all = 'unset'
  mark.style.height = '1px'
  mark.style.position = 'fixed'
  mark.style.top = '0'

  mark.addEventListener('copy', e => {
    e.stopPropagation()
    e.clipboardData.clearData()
    e.clipboardData.setData(options.format || 'text', text)
  })

  document.body.appendChild(mark)

  mark.select()

  const copySuccessful = document.execCommand('copy')

  document.body.removeChild(mark)

  return copySuccessful
}

export default copy
