function ErrorState({ message, onRetry }) {
  return (
    <div className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center">
      <p className="text-4xl mb-3">⚠️</p>
      <h3 className="text-lg font-semibold text-red-800 mb-2">
        Xatolik yuz berdi
      </h3>
      <p className="text-red-700 mb-4">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
        >
          Qaytadan urinish
        </button>
      )}
    </div>
  );
}

export default ErrorState;