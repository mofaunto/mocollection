function StatsBar({ mountains }) {
  const stats = {
    total: mountains.length,
    hiked: mountains.filter((m) => m.status === 'chiqilgan').length,
    planned: mountains.filter((m) => m.status === 'rejada').length,
    totalHeight: mountains
      .filter((m) => m.status === 'chiqilgan' && m.balandlik)
      .reduce((sum, m) => sum + m.balandlik, 0)
  };

  const items = [
    { label: 'Jami', value: stats.total, icon: '🏔️' },
    { label: 'Chiqilgan', value: stats.hiked, icon: '✓' },
    { label: 'Rejada', value: stats.planned, icon: '📌' },
    { label: 'Jami balandlik', value: `${stats.totalHeight}m`, icon: '📈' }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
      {items.map((item, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl border border-ertalabki-tuman p-4"
        >
          <div className="flex items-center gap-2 text-ikkilamchi text-xs font-medium mb-1">
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </div>
          <p className="font-heading text-2xl text-vodiy-qaragayi">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}

export default StatsBar;