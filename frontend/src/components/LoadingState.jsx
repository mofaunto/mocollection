function LoadingState({ message = 'Yuklanmoqda...' }) {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="w-10 h-10 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
      <p className="text-gray-500 mt-4">{message}</p>
    </div>
  );
}

export default LoadingState;