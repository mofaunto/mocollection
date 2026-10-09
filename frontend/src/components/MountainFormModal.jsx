import { useState, useEffect } from 'react';
import Modal from './Modal';

const EMPTY_FORM = {
  title: '',
  description: '',
  davlat: '',
  status: 'chiqilmagan',
  rating: '',
  imageUrl: '',
  maslahatBeraman: true
};

const inputClass =
  'w-full bg-white border border-ertalabki-tuman rounded-xl px-4 py-2.5 text-archa-tuni placeholder-ikkilamchi/50 focus:outline-none focus:border-yozgi-osmon focus:ring-2 focus:ring-yozgi-osmon/20 transition';

const labelClass = 'block text-sm font-medium text-vodiy-qaragayi mb-1.5';

function MountainFormModal({ isOpen, onClose, onSubmit, editingMountain, saving }) {
  const [form, setForm] = useState(EMPTY_FORM);

  useEffect(() => {
    if (editingMountain) {
      setForm({
        title: editingMountain.title || '',
        description: editingMountain.description || '',
        imageUrl: editingMountain.imageUrl || '',
        status: editingMountain.status || 'chiqilmagan',
        rating: editingMountain.rating ?? '',
        davlat: editingMountain.davlat || '',
        maslahatBeraman: editingMountain.maslahatBeraman ?? true
      });
    } else {
      setForm(EMPTY_FORM);
    }
  }, [editingMountain, isOpen]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={editingMountain ? 'Tog\'ni tahrirlash' : 'Yangi tog\' qo\'shish'}
      size="lg"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Nomi *</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Boburgoh"
              className={inputClass}
              autoFocus
            />
          </div>
          <div>
            <label className={labelClass}>Davlat *</label>
            <input
              type="text"
              name="davlat"
              value={form.davlat}
              onChange={handleChange}
              placeholder="O'zbekiston"
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label className={labelClass}>Tavsif</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Nima uchun bu tog'ni yaxshi ko'rasiz?"
            rows="3"
            className={`${inputClass} resize-none`}
          />
        </div>

        <div>
          <label className={labelClass}>Rasm URL</label>
          <input
            type="text"
            name="imageUrl"
            value={form.imageUrl}
            onChange={handleChange}
            placeholder="https://images.unsplash.com/..."
            className={inputClass}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Holat</label>
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="chiqilmagan">Chiqilmagan</option>
              <option value="rejada">Rejada</option>
              <option value="chiqilgan">Chiqilgan</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>Reyting (1-5)</label>
            <input
              type="number"
              name="rating"
              min="1"
              max="5"
              value={form.rating}
              onChange={handleChange}
              placeholder="5"
              className={inputClass}
            />
          </div>
        </div>

        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="maslahatBeraman"
            checked={form.maslahatBeraman}
            onChange={handleChange}
            className="w-4 h-4 accent-vodiy-qaragayi"
          />
          <span className="text-sm text-vodiy-qaragayi">
            Do'stlarimga maslahat beraman
          </span>
        </label>

        <div className="flex gap-3 pt-4 border-t border-ertalabki-tuman">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 border border-ertalabki-tuman text-ikkilamchi py-2.5 rounded-xl hover:bg-ertalabki-tuman/50 transition font-medium"
          >
            Bekor qilish
          </button>
          <button
            type="submit"
            disabled={saving}
            className="flex-1 bg-vodiy-qaragayi text-ohaktosh py-2.5 rounded-xl hover:bg-archa-tuni disabled:opacity-50 transition font-medium"
          >
            {saving ? 'Saqlanmoqda...' : editingMountain ? 'Saqlash' : 'Qo\'shish'}
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default MountainFormModal;