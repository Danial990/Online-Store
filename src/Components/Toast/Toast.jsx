import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

function Toast({ type = "info", message = "", id = 0 }) {

    useEffect(() => {
        if (message) {
            toast[type](message)
        }
    }, [type, message, id]);

    return (
        <ToastContainer
            position="bottom-center"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
        />
    );
}

export default Toast;