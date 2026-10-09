import { useState, useEffect, useMemo } from 'react';
import { toast } from 'sonner';
import {
  getMountains,
  createMountain,
  updateMountain,
  deleteMountain
} from '../api/mountains';
import MountainCard from '../components/MountainCard';
import MountainFormModal from '../components/MountainFormModal';
import MountainFilters from '../components/MountainFilters';
import ConfirmDialog from '../components/ConfirmDialog';
import EmptyState from '../components/EmptyState';
import StatsBar from '../components/StatsBar';
import LoadingState from '../components/LoadingState';
import ErrorState from '../components/ErrorState';

function Dashboard() {
  const [mountains, setMountains] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [statusFilter, setStatusFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('newest');

  const [formOpen, setFormOpen] = useState(false);
  const [editingMountain, setEditingMountain] = useState(null);
  const [saving, setSaving] = useState(false);

  const [deleteTarget, setDeleteTarget] = useState(null);
  const [deleting, setDeleting] = useState(false);

  const loadMountains = async () => {
    setLoading(true);
    setError('');
    try {
      setMountains(await getMountains());
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMountains();
  }, []);

  const filtered = useMemo(() => {
    let r = mountains;
    if (statusFilter !== 'all') r = r.filter((m) => m.status === statusFilter);
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      r = r.filter((m) => m.title.toLowerCase().includes(q));
    }
    const sorted = [...r];
    const sorters = {
      oldest: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
      rating: (a, b) => (b.rating || 0) - (a.rating || 0),
      title: (a, b) => a.title.localeCompare(b.title),
      newest: (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    };
    return sorted.sort(sorters[sortOrder] || sorters.newest);
  }, [mountains, statusFilter, searchQuery, sortOrder]);

  const hasFilters = statusFilter !== 'all' || searchQuery.trim() !== '';

  const openAdd = () => {
    setEditingMountain(null);
    setFormOpen(true);
  };

  const openEdit = (mountain) => {
    setEditingMountain(mountain);
    setFormOpen(true);
  };

  const handleSubmit = async (form) => {
    if (!form.title.trim() || !form.davlat.trim()) {
      toast.warning('Sarlavha va davlat to\'ldirilishi shart');
      return;
    }

    setSaving(true);
    try {
      const payload = {
        title: form.title.trim(),
        description: form.description.trim() || undefined,
        imageUrl: form.imageUrl.trim() || undefined,
        status: form.status,
        rating: form.rating ? Number(form.rating) : null,
        davlat: form.davlat.trim(),
        maslahatBeraman: form.maslahatBeraman
      };

      if (editingMountain) {
        const updated = await updateMountain(editingMountain.id, payload);
        setMountains((prev) =>
          prev.map((m) => (m.id === editingMountain.id ? updated : m))
        );
        toast.success('Tog\' yangilandi');
      } else {
        const created = await createMountain(payload);
        setMountains((prev) => [created, ...prev]);
        toast.success('Tog\' qo\'shildi');
      }

      setFormOpen(false);
      setEditingMountain(null);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    setDeleting(true);
    try {
      await deleteMountain(deleteTarget.id);
      setMountains((prev) => prev.filter((m) => m.id !== deleteTarget.id));
      toast.success('Tog\' o\'chirildi');
      setDeleteTarget(null);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setDeleting(false);
    }
  };

  if (loading) return <LoadingState message="Tog'lar yuklanmoqda..." />;
  if (error) return <ErrorState message={error} onRetry={loadMountains} />;

  return (
    <div className="max-w-5xl mx-auto">
      {/* Hero */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="font-heading text-4xl text-vodiy-qaragayi mb-1">
              Tog'larim
            </h1>
            <p className="text-ikkilamchi">
              Chiqqan va chiqmoqchi bo'lgan cho'qqilarim
            </p>
          </div>
          <button
            onClick={openAdd}
            className="bg-vodiy-qaragayi text-ohaktosh px-5 py-3 rounded-xl hover:bg-archa-tuni transition font-medium shadow-sm hover:shadow-md"
          >
            + Yangi tog'
          </button>
        </div>

        <StatsBar mountains={mountains} />
      </div>

      <MountainFilters
        statusFilter={statusFilter}
        onStatusChange={setStatusFilter}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        sortOrder={sortOrder}
        onSortChange={setSortOrder}
        totalCount={filtered.length}
      />

      {filtered.length === 0 ? (
        <EmptyState hasFilters={hasFilters} onAdd={openAdd} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((mountain) => (
            <MountainCard
              key={mountain.id}
              mountain={mountain}
              onEdit={openEdit}
              onDelete={setDeleteTarget}
            />
          ))}
        </div>
      )}

      <MountainFormModal
        isOpen={formOpen}
        onClose={() => setFormOpen(false)}
        onSubmit={handleSubmit}
        editingMountain={editingMountain}
        saving={saving}
      />

      <ConfirmDialog
        isOpen={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        onConfirm={handleDelete}
        title="Tog'ni o'chirish"
        message={`"${deleteTarget?.title}" ni o'chirishni tasdiqlaysizmi? Bu amalni qaytarib bo'lmaydi.`}
        loading={deleting}
      />
    </div>
  );
}

export default Dashboard;