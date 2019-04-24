const getCurrentSize = () => {
  const newSize = window.innerWidth
  let size
  if (newSize > 1400) {
    size = 'L'
  } else if (newSize >= 1000 && newSize <= 1400) {
    size = 'M'
  } else if (newSize < 1000) {
    size = 'S'
  }
  return size
}

export default { getCurrentSize }
