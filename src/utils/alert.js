import { toast } from 'react-toastify'

const Success = (response) => {
  toast.success(
    typeof response === 'object' ? response.message : response,
    {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    })
}

const Error = (response) => {
  toast.error(
    typeof response === 'object' ? response.message : response,
    {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
}

export {
  Success,
  Error
}