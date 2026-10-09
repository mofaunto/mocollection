const STATUS_LABELS = {
  chiqilmagan: 'Chiqilmagan',
  rejada: 'Rejada',
  chiqilgan: 'Chiqilgan'
};

const STATUS_STYLES = {
  chiqilmagan: 'bg-ertalabki-tuman text-ikkilamchi',
  rejada: 'bg-zenit-osmoni/15 text-zenit-osmoni',
  chiqilgan: 'bg-alp-yaylovi text-ohaktosh'
};

function MountainCard({ mountain, onEdit, onDelete }) {
  const statusStyle = STATUS_STYLES[mountain.status] || 'bg-ertalabki-tuman text-ikkilamchi';
  const statusLabel = STATUS_LABELS[mountain.status] || mountain.status;
  const hasImage = !!mountain.imageUrl;

  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-ertalabki-tuman">
      {/* Image / Hero section */}
      <div className="relative h-52 bg-gradient-to-br from-vodiy-qaragayi via-archazor to-alp-yaylovi overflow-hidden">
        {hasImage ? (
          <img
            src={mountain.imageUrl}
            alt={mountain.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        ) : (
          <div className="flex items-center justify-center h-full text-6xl opacity-40">
            🏔️
          </div>
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-archa-tuni/90 via-archa-tuni/20 to-transparent"></div>

        {/* Status chip */}
        <span className={`absolute top-4 right-4 text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm ${statusStyle}`}>
          {statusLabel}
        </span>

        {/* Title at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-5 text-ohaktosh">
          <h3 className="font-heading text-2xl leading-tight mb-1">
            {mountain.title}
          </h3>
          <p className="text-sm text-ohaktosh/80">
            {mountain.davlat}
            {mountain.balandlik && ` · ${mountain.balandlik}m`}
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        {/* Rating + advice */}
        <div className="flex items-center justify-between mb-3">
          {mountain.rating ? (
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={i < mountain.rating ? 'text-qaragay-postlogi' : 'text-ertalabki-tuman'}
                >
                  ★
                </span>
              ))}
            </div>
          ) : (
            <span className="text-xs text-ikkilamchi/60">Reyting yo'q</span>
          )}

          {mountain.maslahatBeraman && (
            <span className="text-xs bg-alp-yaylovi/15 text-archazor px-2 py-1 rounded-full font-medium">
              ✓ Maslahat
            </span>
          )}
        </div>

        {mountain.description && (
          <p className="text-sm text-ikkilamchi line-clamp-2 mb-4">
            {mountain.description}
          </p>
        )}

        {/* Actions */}
        <div className="flex gap-2 pt-3 border-t border-ertalabki-tuman">
          <button
            onClick={() => onEdit(mountain)}
            className="flex-1 text-sm font-medium py-2 rounded-lg text-vodiy-qaragayi hover:bg-ertalabki-tuman/50 transition"
          >
            Tahrirlash
          </button>
          <button
            onClick={() => onDelete(mountain)}
            className="flex-1 text-sm font-medium py-2 rounded-lg text-qaragay-postlogi hover:bg-qaragay-postlogi/10 transition"
          >
            O'chirish
          </button>
        </div>
      </div>
    </article>
  );
}

export default MountainCard;