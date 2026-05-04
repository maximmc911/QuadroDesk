Вот полная документация для твоего `ThemeContext` модуля:

---

# 📚 ThemeContext Документация

## Обзор

`ThemeContext` — это система управления темами для React-приложений, построенная на встроенном хуке `useContext`. Позволяет переключать между светлой (`light`) и темной (`dark`) темами на глобальном уровне с автоматическим сохранением состояния в `localStorage`.

---

## 📦 Импорт

```typescript
import { ThemeProvider, useTheme } from './path/to/ThemeContext';
```

---

## 🔧 API

### `ThemeProvider`

Компонент-провайдер, который должен обернуть всё приложение или его часть, где требуется доступ к теме.

#### Props

| Имя | Тип | Обязательный | Описание |
|-----|-----|--------------|----------|
| `children` | `ReactNode` | Да | Дочерние компоненты, которые будут иметь доступ к контексту темы |

#### Пример использования

```tsx
// main.tsx или App.tsx
import { ThemeProvider } from './contexts/ThemeContext';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
```

---

### `useTheme()`

Кастомный хук для доступа к состоянию темы и функциям управления ею.

#### Возвращаемое значение

Хук возвращает объект типа `ThemeContextValue` со следующими полями:

| Поле | Тип | Описание |
|------|-----|----------|
| `theme` | `'light' \| 'dark'` | Текущая активная тема |
| `setTheme` | `(theme: Theme) => void` | Функция для прямой установки темы |
| `toggleTheme` | `() => void` | Функция для переключения между темами |
| `isDark` | `boolean` | `true`, если текущая тема — `'dark'` |
| `isLight` | `boolean` | `true`, если текущая тема — `'light'` |

#### Ошибки

Хук выбрасывает ошибку `'useTheme must be used within a ThemeProvider'`, если используется вне `ThemeProvider`.

#### Примеры использования

```tsx
// Пример 1: Простое переключение темы
function ThemeSwitcher() {
  const { theme, toggleTheme, isDark } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      {isDark ? '☀️ Светлая' : '🌙 Темная'}
      <span>Текущая: {theme}</span>
    </button>
  );
}
```

```tsx
// Пример 2: Прямая установка темы
function ThemeButtons() {
  const { setTheme, isDark, isLight } = useTheme();
  
  return (
    <div>
      <button 
        onClick={() => setTheme('light')}
        disabled={isLight}
      >
        Светлая
      </button>
      <button 
        onClick={() => setTheme('dark')}
        disabled={isDark}
      >
        Темная
      </button>
    </div>
  );
}
```

```tsx
// Пример 3: Условный рендеринг на основе темы
function ThemedComponent() {
  const { isDark, theme } = useTheme();
  
  return (
    <div style={{
      backgroundColor: isDark ? '#1a1a1a' : '#ffffff',
      color: isDark ? '#ffffff' : '#1a1a1a'
    }}>
      <p>Текущая тема: {theme}</p>
      {isDark && <p>🌙 Ночной режим включен</p>}
    </div>
  );
}
```

---

## 🎨 CSS Интеграция

Провайдер автоматически добавляет/удаляет классы на корневом элементе (`<html>`):

- При теме `'light'` → добавляется класс `light-theme`, удаляется `dark-theme`
- При теме `'dark'` → добавляется класс `dark-theme`, удаляется `light-theme`

### Пример глобальных стилей

```css
/* index.css */
:root {
  --bg-primary: #ffffff;
  --text-primary: #1a1a1a;
}

html.dark-theme {
  --bg-primary: #1a1a1a;
  --text-primary: #ffffff;
}

body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transition: background-color 0.3s ease, color 0.3s ease;
}
```

---

## 💾 Персистентность

Тема автоматически сохраняется в `localStorage` под ключом `'app-theme'`. При перезагрузке страницы тема восстанавливается из сохраненного значения.

### Очистка сохраненной темы

```typescript
// Если нужно сбросить сохраненную тему
localStorage.removeItem('app-theme');
// Тема вернется к значению по умолчанию ('light') при следующей загрузке
```

---

## 🧪 Типы (для разработчиков)

Если тебе нужно использовать типы в других частях приложения:

```typescript
// Импорт из твоего файла с типами
import type { Theme, ThemeContextValue } from '../../shared/types/theme.interface';

// Или экспорт из этого модуля (если нужно)
export type { Theme, ThemeContextValue } from '../../shared/types/theme.interface';
```

---

## 📋 Полный пример компонента

```tsx
import { useTheme } from './contexts/ThemeContext';

interface CardProps {
  title: string;
  description: string;
}

export function Card({ title, description }: CardProps) {
  const { isDark, toggleTheme, theme } = useTheme();
  
  return (
    <div className={`card ${theme}`}>
      <h2>{title}</h2>
      <p>{description}</p>
      <div>
        <span>Статус: {isDark ? '🌙' : '☀️'}</span>
        <button onClick={toggleTheme}>
          Сменить на {isDark ? 'светлую' : 'темную'}
        </button>
      </div>
    </div>
  );
}
```

---

## ⚠️ Важные замечания

1. **Обязательная обертка**: Все компоненты, использующие `useTheme()`, должны быть внутри `ThemeProvider`.

2. **Производительность**: При изменении темы перерендериваются **все** компоненты, использующие `useTheme()`. Для больших приложений рекомендуется мемоизация или разбиение контекстов.

3. **CSS классы**: Провайдер управляет классами на `document.documentElement`. Убедись, что это не конфликтует с другими системами.

4. **Серверный рендеринг (SSR)**: При использовании SSR нужно быть осторожным с `localStorage` и `document.documentElement`, так как они недоступны на сервере. Добавь проверку на `typeof window !== 'undefined'`.

### SSR-безопасная версия

```typescript
// Адаптация для SSR
const [theme, setTheme] = useState<Theme>(() => {
  if (typeof window === 'undefined') return 'light';
  const savedTheme = localStorage.getItem('app-theme');
  return savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : 'light';
});

useEffect(() => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('app-theme', theme);
  const root = document.documentElement;
  root.classList.add(`${theme}-theme`);
  root.classList.remove(theme === 'light' ? 'dark-theme' : 'light-theme');
}, [theme]);
```

---

## 🔗 Связанные файлы

- `shared/types/theme.interface.ts` — определения типов `Theme` и `ThemeContextValue`
- `index.css` — глобальные стили с CSS-переменными
- `main.tsx` / `App.tsx` — место для обертки приложения в `ThemeProvider`

---

## 📝 Changelog

| Версия | Описание |
|--------|----------|
| 1.0.0 | Initial release. Поддержка light/dark тем, localStorage, кастомный хук `useTheme` |

---

Эта документация покрывает все аспекты использования твоего `ThemeContext`. При необходимости дополни её примерами конкретных кейсов из вашего проекта.