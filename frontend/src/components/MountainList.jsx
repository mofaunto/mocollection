import MountainCard from './MountainCard';

function MountainList({ mountains, onEdit, onDelete, hasFilters }) {
  if (mountains.length === 0) {
    return (
      <div className="text-center py-16 bg-white rounded-2xl border">
        <p className="text-5xl mb-4">🏔️</p>
        <h3 className="text-lg font-semibold text-gray-700 mb-2">
          {hasFilters ? 'Hech narsa topilmadi' : 'Hozircha tog\'lar yo\'q'}
        </h3>
        <p className="text-gray-500">
          {hasFilters
            ? 'Filtrlarni o\'zgartirib ko\'ring'
            : 'Birinchi tog\'ingizni qo\'shing!'}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {mountains.map((mountain) => (
        <MountainCard
          key={mountain.id}
          mountain={mountain}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default MountainList;