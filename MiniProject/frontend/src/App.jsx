import { useState, useEffect, useCallback } from 'react'

const API = 'http://localhost:5000/api/anime'

const STATUSES = ['Plan to Watch', 'Watching', 'Completed', 'On Hold']

const STATUS_CLASS = {
  'Watching':      'watching',
  'Completed':     'completed',
  'Plan to Watch': 'plan',
  'On Hold':       'hold',
}

const STATUS_DOT = {
  'Watching':      '🔵',
  'Completed':     '🟢',
  'Plan to Watch': '🟣',
  'On Hold':       '🟡',
}

// ─── Helpers ────────────────────────────────────────────────────────────────

function getProgress(watched, total) {
  if (!total || total === 0) return 0
  return Math.min(100, Math.round((watched / total) * 100))
}

function emptyForm() {
  return {
    title: '',
    genre: '',
    totalEpisodes: '',
    watchedEpisodes: '0',
    rating: '',
    status: 'Plan to Watch',
  }
}

function animeToForm(a) {
  return {
    title: a.title,
    genre: a.genre,
    totalEpisodes: String(a.totalEpisodes),
    watchedEpisodes: String(a.watchedEpisodes),
    rating: a.rating != null ? String(a.rating) : '',
    status: a.status,
  }
}

// ─── Validate Form ─────────────────────────────────────────────────────────

function validateForm(form) {
  const errors = {}
  if (!form.title.trim()) errors.title = 'Title is required'
  if (!form.genre.trim()) errors.genre = 'Genre is required'
  const total = parseInt(form.totalEpisodes, 10)
  const watched = parseInt(form.watchedEpisodes, 10)
  if (!form.totalEpisodes || isNaN(total) || total < 1)
    errors.totalEpisodes = 'Must be a positive number'
  if (form.watchedEpisodes === '' || isNaN(watched) || watched < 0)
    errors.watchedEpisodes = 'Cannot be negative'
  if (!isNaN(total) && !isNaN(watched) && watched > total)
    errors.watchedEpisodes = 'Cannot exceed total episodes'
  if (form.rating !== '') {
    const r = parseFloat(form.rating)
    if (isNaN(r) || r < 0 || r > 10) errors.rating = 'Must be 0 – 10'
  }
  if (!form.status) errors.status = 'Status is required'
  return errors
}

// ══════════════════════════════════════════════════════════
//  AnimeForm  (modal body)
// ══════════════════════════════════════════════════════════
function AnimeForm({ initial, onSubmit, onCancel, submitting, submitError }) {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})

  function set(field, value) {
    setForm(prev => ({ ...prev, [field]: value }))
    setErrors(prev => ({ ...prev, [field]: undefined }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const errs = validateForm(form)
    if (Object.keys(errs).length) { setErrors(errs); return }
    onSubmit(form)
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      {submitError && <div className="alert alert-error">{submitError}</div>}

      <div className="form-group">
        <label className="form-label" htmlFor="f-title">Title *</label>
        <input
          id="f-title"
          className={`form-input${errors.title ? ' error' : ''}`}
          placeholder="e.g. Attack on Titan"
          value={form.title}
          onChange={e => set('title', e.target.value)}
          maxLength={200}
        />
        {errors.title && <span className="form-error">{errors.title}</span>}
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="f-genre">Genre *</label>
        <input
          id="f-genre"
          className={`form-input${errors.genre ? ' error' : ''}`}
          placeholder="e.g. Action, Fantasy"
          value={form.genre}
          onChange={e => set('genre', e.target.value)}
          maxLength={100}
        />
        {errors.genre && <span className="form-error">{errors.genre}</span>}
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label" htmlFor="f-total">Total Episodes *</label>
          <input
            id="f-total"
            type="number"
            min="1"
            className={`form-input${errors.totalEpisodes ? ' error' : ''}`}
            placeholder="e.g. 24"
            value={form.totalEpisodes}
            onChange={e => set('totalEpisodes', e.target.value)}
          />
          {errors.totalEpisodes && <span className="form-error">{errors.totalEpisodes}</span>}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="f-watched">Watched Episodes *</label>
          <input
            id="f-watched"
            type="number"
            min="0"
            className={`form-input${errors.watchedEpisodes ? ' error' : ''}`}
            placeholder="e.g. 12"
            value={form.watchedEpisodes}
            onChange={e => set('watchedEpisodes', e.target.value)}
          />
          {errors.watchedEpisodes && <span className="form-error">{errors.watchedEpisodes}</span>}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label" htmlFor="f-rating">Rating (0–10)</label>
          <input
            id="f-rating"
            type="number"
            min="0"
            max="10"
            step="0.1"
            className={`form-input${errors.rating ? ' error' : ''}`}
            placeholder="Optional"
            value={form.rating}
            onChange={e => set('rating', e.target.value)}
          />
          {errors.rating && <span className="form-error">{errors.rating}</span>}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="f-status">Status *</label>
          <select
            id="f-status"
            className={`form-select${errors.status ? ' error' : ''}`}
            value={form.status}
            onChange={e => set('status', e.target.value)}
          >
            {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          {errors.status && <span className="form-error">{errors.status}</span>}
        </div>
      </div>

      <div className="form-actions">
        <button type="button" className="btn btn-ghost" onClick={onCancel} disabled={submitting}>
          Cancel
        </button>
        <button type="submit" className="btn btn-primary" disabled={submitting}>
          {submitting ? 'Saving…' : 'Save Anime'}
        </button>
      </div>
    </form>
  )
}

// ══════════════════════════════════════════════════════════
//  AnimeCard
// ══════════════════════════════════════════════════════════
function AnimeCard({ anime, onEdit, onDelete }) {
  const pct = getProgress(anime.watchedEpisodes, anime.totalEpisodes)
  const isCompleted = anime.status === 'Completed'

  return (
    <div className="anime-card">
      <div className="card-header">
        <h3 className="card-title" title={anime.title}>{anime.title}</h3>
        <span className={`status-badge ${STATUS_CLASS[anime.status] || 'plan'}`}>
          {STATUS_DOT[anime.status]} {anime.status}
        </span>
      </div>

      <div className="card-genre">
        <span>🎭</span>
        <span>{anime.genre}</span>
      </div>

      <div className="card-divider" />

      <div className="card-meta">
        <div className="episodes-info">
          <strong>{anime.watchedEpisodes}</strong>
          <span className="eps-label"> / {anime.totalEpisodes} eps</span>
        </div>
        <div className={`rating-badge${anime.rating == null ? ' no-rating' : ''}`}>
          {anime.rating != null ? (
            <><span>⭐</span><span>{Number(anime.rating).toFixed(1)}</span></>
          ) : (
            <span>—</span>
          )}
        </div>
      </div>

      <div className="progress-wrap">
        <div className="progress-label">
          <span>Progress</span>
          <span>{pct}%</span>
        </div>
        <div className="progress-bar">
          <div
            className={`progress-fill${isCompleted ? ' completed' : ''}`}
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      <div className="card-actions">
        <button
          id={`edit-${anime._id}`}
          className="btn btn-ghost btn-sm"
          style={{ flex: 1 }}
          onClick={() => onEdit(anime)}
          aria-label={`Edit ${anime.title}`}
        >
          ✏️ Edit
        </button>
        <button
          id={`delete-${anime._id}`}
          className="btn btn-danger btn-sm"
          style={{ flex: 1 }}
          onClick={() => onDelete(anime)}
          aria-label={`Delete ${anime.title}`}
        >
          🗑️ Delete
        </button>
      </div>
    </div>
  )
}

// ══════════════════════════════════════════════════════════
//  ConfirmDialog
// ══════════════════════════════════════════════════════════
function ConfirmDialog({ anime, onConfirm, onCancel, deleting }) {
  return (
    <div className="confirm-body">
      <span className="confirm-icon">🗑️</span>
      <p>
        Are you sure you want to delete <strong>{anime.title}</strong>?
        <br />This action cannot be undone.
      </p>
      <div className="confirm-actions">
        <button className="btn btn-ghost" onClick={onCancel} disabled={deleting}>Cancel</button>
        <button className="btn btn-danger" onClick={onConfirm} disabled={deleting}>
          {deleting ? 'Deleting…' : 'Delete'}
        </button>
      </div>
    </div>
  )
}

// ══════════════════════════════════════════════════════════
//  Modal wrapper
// ══════════════════════════════════════════════════════════
function Modal({ title, onClose, children }) {
  // Close on Escape key
  useEffect(() => {
    function handler(e) { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div className="modal-overlay" onClick={e => { if (e.target === e.currentTarget) onClose() }}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <div className="modal-header">
          <h2 id="modal-title">{title}</h2>
          <button className="modal-close" onClick={onClose} aria-label="Close modal">✕</button>
        </div>
        {children}
      </div>
    </div>
  )
}

// ══════════════════════════════════════════════════════════
//  App
// ══════════════════════════════════════════════════════════
export default function App() {
  const [animeList, setAnimeList]     = useState([])
  const [loading, setLoading]         = useState(true)
  const [fetchError, setFetchError]   = useState(null)
  const [search, setSearch]           = useState('')

  // Modal state: null | 'add' | 'edit' | 'delete'
  const [modal, setModal]             = useState(null)
  const [editTarget, setEditTarget]   = useState(null)   // anime being edited
  const [deleteTarget, setDeleteTarget] = useState(null) // anime being deleted

  const [submitting, setSubmitting]   = useState(false)
  const [submitError, setSubmitError] = useState(null)
  const [deleting, setDeleting]       = useState(false)

  // ── Fetch all anime ───────────────────────────────────
  const fetchAnime = useCallback(async () => {
    setLoading(true)
    setFetchError(null)
    try {
      const res = await fetch(API)
      if (!res.ok) throw new Error(`Server returned ${res.status}`)
      const data = await res.json()
      setAnimeList(data)
    } catch (err) {
      setFetchError('Could not connect to the server. Make sure the backend is running on port 5000.')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { fetchAnime() }, [fetchAnime])

  // ── Filtered list ─────────────────────────────────────
  const filtered = animeList.filter(a =>
    a.title.toLowerCase().includes(search.toLowerCase())
  )

  // ── Stats ─────────────────────────────────────────────
  const totalCount     = animeList.length
  const watchingCount  = animeList.filter(a => a.status === 'Watching').length
  const completedCount = animeList.filter(a => a.status === 'Completed').length

  // ── Handlers ──────────────────────────────────────────
  function openAdd() {
    setSubmitError(null)
    setModal('add')
  }

  function openEdit(anime) {
    setEditTarget(anime)
    setSubmitError(null)
    setModal('edit')
  }

  function openDelete(anime) {
    setDeleteTarget(anime)
    setModal('delete')
  }

  function closeModal() {
    if (submitting || deleting) return
    setModal(null)
    setEditTarget(null)
    setDeleteTarget(null)
    setSubmitError(null)
  }

  async function handleAdd(form) {
    setSubmitting(true)
    setSubmitError(null)
    try {
      const res = await fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: form.title.trim(),
          genre: form.genre.trim(),
          totalEpisodes: parseInt(form.totalEpisodes, 10),
          watchedEpisodes: parseInt(form.watchedEpisodes, 10) || 0,
          rating: form.rating !== '' ? parseFloat(form.rating) : null,
          status: form.status,
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed to add anime')
      setAnimeList(prev => [data, ...prev])
      setModal(null)
    } catch (err) {
      setSubmitError(err.message)
    } finally {
      setSubmitting(false)
    }
  }

  async function handleEdit(form) {
    setSubmitting(true)
    setSubmitError(null)
    try {
      const res = await fetch(`${API}/${editTarget._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: form.title.trim(),
          genre: form.genre.trim(),
          totalEpisodes: parseInt(form.totalEpisodes, 10),
          watchedEpisodes: parseInt(form.watchedEpisodes, 10) || 0,
          rating: form.rating !== '' ? parseFloat(form.rating) : null,
          status: form.status,
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed to update anime')
      setAnimeList(prev => prev.map(a => a._id === data._id ? data : a))
      setModal(null)
      setEditTarget(null)
    } catch (err) {
      setSubmitError(err.message)
    } finally {
      setSubmitting(false)
    }
  }

  async function handleDelete() {
    setDeleting(true)
    try {
      const res = await fetch(`${API}/${deleteTarget._id}`, { method: 'DELETE' })
      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Failed to delete anime')
      }
      setAnimeList(prev => prev.filter(a => a._id !== deleteTarget._id))
      setModal(null)
      setDeleteTarget(null)
    } catch (err) {
      alert(`Error: ${err.message}`)
    } finally {
      setDeleting(false)
    }
  }

  // ══════════════════════════════════════════════════════
  //  Render
  // ══════════════════════════════════════════════════════
  return (
    <div className="app">

      {/* ── Header ── */}
      <header className="header">
        <div className="container header-inner">
          <div className="logo">
            <div className="logo-icon" aria-hidden="true">⚔️</div>
            <span className="logo-text">Anime<span>Tracker</span></span>
          </div>
          <button id="open-add-modal" className="btn btn-primary btn-sm" onClick={openAdd}>
            + Add Anime
          </button>
        </div>
      </header>

      <main>
        <div className="container">

          {/* ── Hero ── */}
          <div className="hero">
            <h1>Your Anime Collection</h1>
            <p>Track every series — from first episode to finale.</p>
          </div>

          {/* ── Stats ── */}
          <div className="stats-row" aria-label="Collection summary">
            <div className="stat-card">
              <div className="stat-icon total">📚</div>
              <div className="stat-info">
                <div className="stat-number">{totalCount}</div>
                <div className="stat-label">Total Anime</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon watching">▶️</div>
              <div className="stat-info">
                <div className="stat-number">{watchingCount}</div>
                <div className="stat-label">Watching</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon completed">✅</div>
              <div className="stat-info">
                <div className="stat-number">{completedCount}</div>
                <div className="stat-label">Completed</div>
              </div>
            </div>
          </div>

          {/* ── Toolbar ── */}
          <div className="toolbar">
            <div className="search-wrap">
              <span className="search-icon" aria-hidden="true">🔍</span>
              <input
                id="search-input"
                className="search-input"
                type="search"
                placeholder="Search by title…"
                value={search}
                onChange={e => setSearch(e.target.value)}
                aria-label="Search anime by title"
              />
            </div>
          </div>

          {/* ── Error Banner ── */}
          {fetchError && (
            <div className="alert alert-error" role="alert">
              {fetchError}
              <button
                onClick={fetchAnime}
                style={{ marginLeft: '0.75rem', textDecoration: 'underline', background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit' }}
              >
                Retry
              </button>
            </div>
          )}

          {/* ── Content ── */}
          {loading ? (
            <div className="loading-wrap" aria-live="polite">
              <div className="spinner" />
              <span>Loading your collection…</span>
            </div>
          ) : (
            <div className="anime-grid">
              {filtered.length === 0 ? (
                <div className="empty-state">
                  <span className="empty-icon">🎌</span>
                  {search ? (
                    <>
                      <h3>No results for "{search}"</h3>
                      <p>Try a different title, or clear the search.</p>
                      <button className="btn btn-ghost" onClick={() => setSearch('')}>Clear Search</button>
                    </>
                  ) : (
                    <>
                      <h3>Your collection is empty</h3>
                      <p>Start by adding your favourite anime series.</p>
                      <button className="btn btn-primary" onClick={openAdd}>+ Add Your First Anime</button>
                    </>
                  )}
                </div>
              ) : (
                filtered.map(anime => (
                  <AnimeCard
                    key={anime._id}
                    anime={anime}
                    onEdit={openEdit}
                    onDelete={openDelete}
                  />
                ))
              )}
            </div>
          )}
        </div>
      </main>

      {/* ── Add Modal ── */}
      {modal === 'add' && (
        <Modal title="✨ Add New Anime" onClose={closeModal}>
          <AnimeForm
            initial={emptyForm()}
            onSubmit={handleAdd}
            onCancel={closeModal}
            submitting={submitting}
            submitError={submitError}
          />
        </Modal>
      )}

      {/* ── Edit Modal ── */}
      {modal === 'edit' && editTarget && (
        <Modal title="✏️ Edit Anime" onClose={closeModal}>
          <AnimeForm
            initial={animeToForm(editTarget)}
            onSubmit={handleEdit}
            onCancel={closeModal}
            submitting={submitting}
            submitError={submitError}
          />
        </Modal>
      )}

      {/* ── Delete Confirm Modal ── */}
      {modal === 'delete' && deleteTarget && (
        <Modal title="Delete Anime" onClose={closeModal}>
          <ConfirmDialog
            anime={deleteTarget}
            onConfirm={handleDelete}
            onCancel={closeModal}
            deleting={deleting}
          />
        </Modal>
      )}

    </div>
  )
}
