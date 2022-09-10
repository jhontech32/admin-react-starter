const getUserToken = async () => {
  let data = await localStorage.getItem('userToken')
  const parsed = JSON.parse(data) || null
  return parsed
}

const get = async (key) => {
  let data = []
  try {
    data = await localStorage.getItem(key)
    return data
  } catch (error) {
    console.log('Storage Failed:', error)
  }
}

const set = async (key, data) => {
  try {
    await localStorage.setItem(key, data)
  } catch (error) {
    console.log('Storage Failed:', error)
  }
}

const remove = async (key) => {
  try {
    const removeProgress = await localStorage.removeItem(key)
    return removeProgress
  } catch (error) {
    console.log('Storage Failed:', error)
  }
}

export {
  getUserToken,
  get,
  set,
  remove
}
