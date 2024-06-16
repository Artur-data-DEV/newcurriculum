// hooks/useToastNotification.js
import { toast } from 'react-toastify';

const useToastNotification = () => {
  const notifySuccess = (message) => {
    toast.success(message);
  };

  const notifyError = (message) => {
    toast.error(message);
  };

  const notifyWarning = (message) => {
    toast.warn(message);
  };

  return { notifySuccess, notifyError, notifyWarning };
};

export default useToastNotification;
