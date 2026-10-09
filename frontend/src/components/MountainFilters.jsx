const STATUS_OPTIONS = [
  { value: 'all', label: 'Barchasi' },
  { value: 'chiqilgan', label: 'Chiqilgan' },
  { value: 'rejada', label: 'Rejada' },
  { value: 'chiqilmagan', label: 'Chiqilmagan' }
];

const SORT_OPTIONS = [
  { value: 'newest', label: 'Eng yangi' },
  { value: 'oldest', label: 'Eng eski' },
  { value: 'rating', label: 'Reyting' },
  { value: 'title', label: 'Alifbo' }
];

function MountainFilters({
  statusFilter,
  onStatusChange,
  searchQuery,
  onSearchChange,
  sortOrder,
  onSortChange,
  totalCount
}) {
  return (
    <div className="space-y-4 mb-6">
      {/* Search + Sort row */}
      <div className="flex flex-col md:flex-row gap-3">
        <div className="relative flex-1">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-ikkilamchi/60">
            🔍
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Tog' qidirish..."
            className="w-full bg-white border border-ertalabki-tuman rounded-xl pl-11 pr-4 py-3 text-archa-tuni placeholder-ikkilamchi/50 focus:outline-none focus:border-yozgi-osmon focus:ring-2 focus:ring-yozgi-osmon/20 transition"
          />
        </div>

        <select
          value={sortOrder}
          onChange={(e) => onSortChange(e.target.value)}
          className="bg-white border border-ertalabki-tuman rounded-xl px-4 py-3 text-archa-tuni focus:outline-none focus:border-yozgi-osmon transition cursor-pointer"
        >
          {SORT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Status pills */}
      <div className="flex flex-wrap gap-2">
        {STATUS_OPTIONS.map((opt) => {
          const active = statusFilter === opt.value;
          return (
            <button
              key={opt.value}
              onClick={() => onStatusChange(opt.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                active
                  ? 'bg-vodiy-qaragayi text-ohaktosh shadow-md'
                  : 'bg-white text-ikkilamchi border border-ertalabki-tuman hover:border-archazor hover:text-vodiy-qaragayi'
              }`}
            >
              {opt.label}
            </button>
          );
        })}

        <div className="ml-auto flex items-center text-sm text-ikkilamchi">
          <span className="font-medium text-vodiy-qaragayi">{totalCount}</span>
          <span className="ml-1">ta topildi</span>
        </div>
      </div>
    </div>
  );
}

export default MountainFilters;