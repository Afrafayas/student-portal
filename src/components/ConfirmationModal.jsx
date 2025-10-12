import ReactDOM from "react-dom"

function ConfirmationModal({ isOpen, onClose, onConfirm, studentName }) {
  if (!isOpen) return null

  const modalContent = (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 p-8 transform transition-all scale-100 animate-fadeIn border border-gray-100 relative">
        {/*   <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-t-2xl"></div> */}

        <h3 className="text-2xl font-bold text-gray-800 text-center mb-3">Delete Student</h3>

        <p className="text-center text-gray-600 mb-8">
          Are you sure you want to delete{" "}
          <span className="font-semibold text-red-600">{studentName}</span>?<br />
          This action cannot be undone.
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium transition-all duration-200 shadow-sm hover:shadow"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-500 to-rose-600 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-200"
          >
            Yes, Delete
          </button>
        </div>
      </div>
    </div>
  )

  // 👇 renders the modal *outside* your main layout (into <body>)
  return ReactDOM.createPortal(modalContent, document.body)
}

export default ConfirmationModal
