import { useRef } from "react";

export default function Alert(props: any) {
  const ref = useRef(null);
  let timeout = null;

  const removeAlert = () => {
    clearTimeout(timeout);
    setTimeout(() => ref && ref.current.remove(), 500);
    ref.current.classList.add('headout');
  }
  
  timeout = setTimeout(removeAlert, 5000);
  return (
    <div ref={ref} className="snackbar-alert">
      <button onClick={removeAlert}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="18" viewBox="0 0 24 24" stroke="white">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <span className="px-5">{props.title}</span>
    </div>
  );
}
