const STATUS_LABELS = {
  chiqilmagan: 'Chiqilmagan',
  rejada: 'Rejada',
  chiqilgan: 'Chiqilgan'
};

const STATUS_COLORS = {
  chiqilmagan: 'bg-gray-100 text-gray-700',
  rejada: 'bg-blue-100 text-blue-700',
  chiqilgan: 'bg-green-100 text-green-700'
};

function MountainCard({ mountain, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-2xl border shadow-sm overflow-hidden hover:shadow-md transition">
      {mountain.imageUrl && (
        <img
          src={mountain.imageUrl}
          alt={mountain.title}
          className="w-full h-40 object-cover"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
      )}

      <div className="p-4 space-y-3">
        <div className="flex justify-between items-start gap-2">
          <div>
            <h3 className="text-lg font-semibold">{mountain.title}</h3>
            <p className="text-sm text-gray-500">{mountain.davlat}</p>
          </div>

          <span className={`text-xs px-2 py-1 rounded-full ${STATUS_COLORS[mountain.status] || ''}`}>
            {STATUS_LABELS[mountain.status] || mountain.status}
          </span>
        </div>

        {mountain.description && (
          <p className="text-sm text-gray-700 line-clamp-2">
            {mountain.description}
          </p>
        )}

        {mountain.rating && (
          <p className="text-sm text-yellow-600">
            {'★'.repeat(mountain.rating)}{'☆'.repeat(5 - mountain.rating)}
          </p>
        )}

        <div className="flex gap-2 pt-2 border-t">
          <button
            onClick={() => onEdit(mountain)}
            className="flex-1 border rounded-lg py-2 text-sm hover:bg-gray-50"
          >
            Tahrirlash
          </button>
          <button
            onClick={() => onDelete(mountain.id)}
            className="flex-1 border border-red-200 text-red-600 rounded-lg py-2 text-sm hover:bg-red-50"
          >
            O'chirish
          </button>
        </div>
      </div>
    </div>
  );
}

export default MountainCard;