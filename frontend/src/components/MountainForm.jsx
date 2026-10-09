const EMPTY_FORM = {
  title: '',
  description: '',
  davlat: '',
  status: 'chiqilmagan',
  rating: '',
  imageUrl: '',
  maslahatBeraman: true
};

function MountainForm({
  form,
  onChange,
  onSubmit,
  onCancel,
  isEditing,
  saving
}) {
  return (
    <form
      onSubmit={onSubmit}
      className="bg-white rounded-2xl shadow-sm border p-6 mb-8 space-y-4"
    >
      <h2 className="text-lg font-semibold">
        {isEditing ? 'Tog\'ni tahrirlash' : 'Yangi tog\' qo\'shish'}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={onChange}
          placeholder="Nomi *"
          className="border rounded-lg px-4 py-2 w-full"
        />
        <input
          type="text"
          name="davlat"
          value={form.davlat}
          onChange={onChange}
          placeholder="Davlat *"
          className="border rounded-lg px-4 py-2 w-full"
        />
      </div>

      <textarea
        name="description"
        value={form.description}
        onChange={onChange}
        placeholder="Tavsif"
        rows="2"
        className="border rounded-lg px-4 py-2 w-full resize-none"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <select
          name="status"
          value={form.status}
          onChange={onChange}
          className="border rounded-lg px-4 py-2 w-full"
        >
          <option value="chiqilmagan">Chiqilmagan</option>
          <option value="rejada">Rejada</option>
          <option value="chiqilgan">Chiqilgan</option>
        </select>

        <input
          type="number"
          name="rating"
          min="1"
          max="5"
          value={form.rating}
          onChange={onChange}
          placeholder="Reyting (1-5)"
          className="border rounded-lg px-4 py-2 w-full"
        />

        <input
          type="text"
          name="imageUrl"
          value={form.imageUrl}
          onChange={onChange}
          placeholder="Rasm URL"
          className="border rounded-lg px-4 py-2 w-full"
        />
      </div>

      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          name="maslahatBeraman"
          checked={form.maslahatBeraman}
          onChange={onChange}
          className="w-4 h-4"
        />
        <label className="text-sm">Maslahat beraman</label>
      </div>

      <div className="flex gap-3">
        <button
          type="submit"
          disabled={saving}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {saving ? 'Saqlanmoqda...' : isEditing ? 'Saqlash' : 'Qo\'shish'}
        </button>

        {isEditing && (
          <button
            type="button"
            onClick={onCancel}
            className="border px-6 py-2 rounded-lg hover:bg-gray-50"
          >
            Bekor qilish
          </button>
        )}
      </div>
    </form>
  );
}

export { EMPTY_FORM };
export default MountainForm;