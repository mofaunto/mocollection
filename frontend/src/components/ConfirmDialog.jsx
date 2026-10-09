import Modal from './Modal';

function ConfirmDialog({ isOpen, onClose, onConfirm, title, message, loading }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} size="md">
      <div className="text-center">
        <div className="text-5xl mb-4">⚠️</div>
        <p className="text-ikkilamchi mb-6">{message}</p>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 border border-ertalabki-tuman text-ikkilamchi py-2.5 rounded-xl hover:bg-ertalabki-tuman/50 transition font-medium"
          >
            Bekor qilish
          </button>
          <button
            onClick={onConfirm}
            disabled={loading}
            className="flex-1 bg-qaragay-postlogi text-ohaktosh py-2.5 rounded-xl hover:opacity-90 disabled:opacity-50 transition font-medium"
          >
            {loading ? 'O\'chirilmoqda...' : 'Ha, o\'chirish'}
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default ConfirmDialog;