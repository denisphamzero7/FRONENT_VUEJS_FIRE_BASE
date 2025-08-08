import Swal from 'sweetalert2'
export function useSwal() {
  const showAlert = async (options) => {
    await Swal.fire(options)
  }
  const showSuccess = async (message) => {
    return await showAlert({
      title: ' google',
      text: message,
      icon: 'success',
      position: 'top-end',
    })
  }
  const showError = async (message) => {
    return await showAlert({
      title: 'Error',
      text: message,
      icon: 'error',
      position: 'top-end',
    })
  }
  const showConfirm = async (message) => {
    return await showAlert({
      title: 'Are you sure?',
      text: message,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    })
  }
  return{
    showSuccess,showError,showConfirm
  }
}
