/* import TextField from '@mui/material/TextField'


export const Input = () => {
  return (
    <>
       <TextField
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
        />
    
    </>
  )
} */


  
  export const Input = () => {
    return (
      <>
      
      {/* ==========================================================
    БАЗОВЫЙ ТЕКСТОВЫЙ INPUT — label сверху, placeholder
   ========================================================== */}
<div className="flex flex-col gap-1.5 w-full max-w-sm">
  <label htmlFor="task-title" className="text-sm font-medium text-main-text">
    Название задачи
  </label>
  <input
    id="task-title"
    type="text"
    placeholder="Введите название"
    className="h-11 w-full px-4 radius-small bg-input-bg text-main-text
      placeholder:text-muted-text border border-border-input outline-none
      focus:border-focus-status focus:ring-2 focus:ring-focus-status/20
      transition-colors"
  />
</div>

{/* ==========================================================
    С ЗАПОЛНЕННЫМ ЗНАЧЕНИЕМ (визуал заполненного поля)
   ========================================================== */}
<div className="flex flex-col gap-1.5 w-full max-w-sm">
  <label htmlFor="task-title-filled" className="text-sm font-medium text-main-text">
    Название задачи
  </label>
  <input
    id="task-title-filled"
    type="text"
    defaultValue="Планирование недели"
    className="h-11 w-full px-4 radius-small bg-input-bg text-main-text
      placeholder:text-muted-text border border-border-input outline-none
      focus:border-focus-status focus:ring-2 focus:ring-focus-status/20
      transition-colors"
  />
  <span className="text-xs text-muted-text">До 80 символов</span>
</div>

{/* ==========================================================
    MULTILINE (textarea) — вместо MUI multiline
   ========================================================== */}
<div className="flex flex-col gap-1.5 w-full max-w-sm">
  <label htmlFor="task-desc" className="text-sm font-medium text-main-text">
    Описание
  </label>
  <textarea
    id="task-desc"
    rows={4}
    placeholder="Добавьте детали…"
    className="w-full px-4 py-3 radius-small bg-input-bg text-main-text
      placeholder:text-muted-text border border-border-input outline-none
      resize-none focus:border-focus-status focus:ring-2 focus:ring-focus-status/20
      transition-colors"
  />
</div>

{/* ==========================================================
    PASSWORD — toggle-видимость справа (спецсимвол)
   ========================================================== */}
<div className="flex flex-col gap-1.5 w-full max-w-sm">
  <label htmlFor="pwd" className="text-sm font-medium text-main-text">
    Пароль
  </label>
  <div className="relative">
    <input
      id="pwd"
      type="password"
      defaultValue="••••••••"
      placeholder="Введите пароль"
      className="h-11 w-full pl-4 pr-12 radius-small bg-input-bg text-main-text
        placeholder:text-muted-text border border-border-input outline-none
        focus:border-focus-status focus:ring-2 focus:ring-focus-status/20
        transition-colors"
    />
    <button
      type="button"
      aria-label="Показать пароль"
      className="absolute right-1 top-1/2 -translate-y-1/2 w-9 h-9 radius-small
        grid place-items-center text-muted-text hover:text-main-text
        hover:bg-hover-status transition-colors"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2">
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    </button>
  </div>
</div>

{/* ==========================================================
    CURRENCY — префикс с валютой (спецсимвол слева)
   ========================================================== */}
<div className="flex flex-col gap-1.5 w-full max-w-sm">
  <label htmlFor="price" className="text-sm font-medium text-main-text">
    Стоимость
  </label>
  <div className="relative">
    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-text text-sm">
      ₽
    </span>
    <input
      id="price"
      type="text"
      inputMode="decimal"
      defaultValue="1 200"
      placeholder="0"
      className="h-11 w-full pl-9 pr-4 radius-small bg-input-bg text-main-text
        placeholder:text-muted-text border border-border-input outline-none
        focus:border-focus-status focus:ring-2 focus:ring-focus-status/20
        transition-colors"
    />
  </div>
</div>

{/* ==========================================================
    SEARCH — иконка слева
   ========================================================== */}
<div className="w-full max-w-sm">
  <div className="relative">
    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-text">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    </span>
    <input
      type="search"
      placeholder="Поиск задач…"
      className="h-11 w-full pl-11 pr-4 radius-small bg-input-bg text-main-text
        placeholder:text-muted-text border border-border-input outline-none
        focus:border-focus-status focus:ring-2 focus:ring-focus-status/20
        transition-colors"
    />
  </div>
</div>

{/* ==========================================================
    ERROR — состояние ошибки + сообщение
   ========================================================== */}
<div className="flex flex-col gap-1.5 w-full max-w-sm">
  <label htmlFor="email" className="text-sm font-medium text-main-text">
    Email
  </label>
  <input
    id="email"
    type="email"
    defaultValue="not-an-email"
    className="h-11 w-full px-4 radius-small bg-input-bg text-main-text
      placeholder:text-muted-text border border-error outline-none
      focus:border-error focus:ring-2 focus:ring-error/20 transition-colors"
  />
  <span className="text-xs text-error">Некорректный email</span>
</div>

{/* ==========================================================
    DISABLED
   ========================================================== */}
<div className="flex flex-col gap-1.5 w-full max-w-sm">
  <label htmlFor="readonly-field" className="text-sm font-medium text-muted-text">
    Только для чтения
  </label>
  <input
    id="readonly-field"
    type="text"
    defaultValue="Заблокировано"
    disabled
    className="h-11 w-full px-4 radius-small bg-disable-state text-muted-text
      border border-secondary-border outline-none cursor-not-allowed"
  />
</div>

{/* ==========================================================
    FOCUS-ВИЗУАЛ (как выглядит активное поле) — просто для справки
   ========================================================== */}
<div className="flex flex-col gap-1.5 w-full max-w-sm">
  <label htmlFor="focused" className="text-sm font-medium text-main-text">
    Активное поле
  </label>
  <input
    id="focused"
    type="text"
    defaultValue="Фокус"
    className="h-11 w-full px-4 radius-small bg-input-bg text-main-text
      placeholder:text-muted-text border border-focus-status outline-none
      ring-2 ring-focus-status/20 transition-colors"
  />
</div>

      
      
      </>
    )
  }
  
  
 
  