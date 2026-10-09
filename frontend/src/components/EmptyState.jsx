function EmptyState({ hasFilters, onAdd }) {
  return (
    <div className="bg-white rounded-2xl border border-ertalabki-tuman py-20 px-6 text-center">
      <div className="text-7xl mb-6 opacity-60">
        {hasFilters ? '🔍' : '🏔️'}
      </div>
      <h3 className="font-heading text-2xl text-vodiy-qaragayi mb-2">
        {hasFilters ? 'Hech narsa topilmadi' : 'Hozircha tog\'lar yo\'q'}
      </h3>
      <p className="text-ikkilamchi max-w-md mx-auto mb-6">
        {hasFilters
          ? 'Filtrlarni o\'zgartirib qayta urinib ko\'ring'
          : 'Birinchi tog\'ingizni qo\'shib, kundalikni boshlang!'}
      </p>

      {!hasFilters && onAdd && (
        <button
          onClick={onAdd}
          className="bg-vodiy-qaragayi text-ohaktosh px-6 py-3 rounded-xl hover:bg-archa-tuni transition font-medium"
        >
          + Birinchi tog'ni qo'shish
        </button>
      )}
    </div>
  );
}

export default EmptyState;