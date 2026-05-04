Вот полная документация для твоего компонента `ThemeToggle` в формате Markdown:

```markdown
# ThemeToggle Component

## Обзор

`ThemeToggle` — это переключатель темы (светлая/темная), реализованный на основе кастомного Material-UI Switch с анимированной иконкой солнца/луны. Компонент интегрирован с системой тем `ThemeContext` и автоматически синхронизирует состояние.

---

## 📦 Импорт

```tsx
import ThemeToggle from './path/to/ThemeToggle';
```

---

## 🎨 Внешний вид

Компонент представляет собой стилизованный тумблер (switch) с:

- **Размер**: 62×34 пикселя
- **Thumb (круглая часть)**: 32×32 пикселя с иконкой
- **Состояния**:
  - 🌙 **Темная тема** (checked) — thumb слева, иконка луны/звезд
  - ☀️ **Светлая тема** (unchecked) — thumb справа, иконка солнца
- **Анимация**: плавное перемещение thumb при переключении
- **Цветовая схема**: автоматически адаптируется под текущую тему Material-UI

---

## 🚀 Использование

### Базовое использование

```tsx
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div>
      <ThemeToggle />
    </div>
  );
}
```

### Размещение в хедере

```tsx
import ThemeToggle from './components/ThemeToggle';
import { AppBar, Toolbar, Typography } from '@mui/material';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Мое приложение
        </Typography>
        <ThemeToggle />
      </Toolbar>
    </AppBar>
  );
}
```

### С дополнительными стилями

```tsx
<ThemeToggle />

// С кастомными отступами через sx-пропс
<ThemeToggle sx={{ m: 2, mr: 3 }} />
```

---

## ⚙️ API

### Props

Компонент принимает все стандартные пропсы Material-UI `Switch`, включая:

| Пропс | Тип | По умолчанию | Описание |
|-------|-----|--------------|----------|
| `sx` | `SxProps<Theme>` | `{ m: 1 }` | Кастомные стили Material-UI |
| `onClick` | `() => void` | `toggleTheme` | Переопределение обработчика клика |
| `checked` | `boolean` | `theme === 'dark'` | Переопределение состояния (не рекомендуется) |

---

## 🔄 Интеграция с системой тем

### Зависимости

Компонент использует кастомный хук `useTheme()` из `ThemeProviders`:

```tsx
const { theme, toggleTheme } = useTheme();
```

- **`theme`** — текущая тема (`'light'` или `'dark'`)
- **`toggleTheme`** — функция переключения темы

### Поведение

1. При клике на переключатель вызывается `toggleTheme()`
2. Тема меняется глобально во всем приложении
3. Состояние сохраняется в `localStorage`
4. Иконка на переключателе анимированно меняется (солнце ↔ луна)
5. Классы на `html`-элементе обновляются (`light-theme` / `dark-theme`)

---

## 🎨 Кастомизация стилей

### Изменение цветов

```tsx
// Пример переопределения цветов через sx
<ThemeToggle sx={{
  '& .MuiSwitch-thumb': {
    backgroundColor: '#ff6b6b',
  },
  '& .MuiSwitch-track': {
    backgroundColor: '#4ecdc4',
  }
}} />
```

### Изменение размера

```tsx
// Кастомные размеры
<ThemeToggle sx={{
  width: 80,
  height: 40,
  '& .MuiSwitch-switchBase': {
    transform: 'translateX(8px)',
    '&.Mui-checked': {
      transform: 'translateX(32px)',
    },
  },
  '& .MuiSwitch-thumb': {
    width: 36,
    height: 36,
  },
}} />
```

### Замена иконок

Чтобы заменить SVG-иконки, нужно отредактировать `backgroundImage` в `styled` компоненте:

```tsx
// Для thumb (круглая часть)
'& .MuiSwitch-thumb::before': {
  backgroundImage: `url('data:image/svg+xml;utf8,<svg>...ТВОЯ ИКОНКА...</svg>')`,
}

// Для состояния checked
'&.Mui-checked .MuiSwitch-thumb:before': {
  backgroundImage: `url('data:image/svg+xml;utf8,<svg>...ТВОЯ ИКОНКА ДЛЯ ТЕМНОЙ ТЕМЫ...</svg>')`,
}
```

---

## 🐛 Отладка

Компонент выводит в консоль текущую тему:

```tsx
console.log(theme); // 'light' или 'dark'
```

Это полезно для отслеживания изменений и отладки.

---

## 📁 Структура файлов

```
src/
├── components/
│   └── ThemeToggle.tsx          # Компонент переключателя
├── providers/
│   └── ThemeProviders.tsx        # Контекст темы (useTheme)
└── shared/
    └── types/
        └── theme.interface.ts    # Типы Theme и ThemeContextValue
```

---

## 🔧 Требования

### Зависимости

```json
{
  "@mui/material": "^5.x",
  "@emotion/react": "^11.x",
  "@emotion/styled": "^11.x",
  "react": "^18.x"
}
```

### Peer зависимости

- `ThemeProvider` должен быть обернут вокруг приложения (см. документацию `ThemeContext`)

---

## 💡 Примеры использования

### Пример 1: В панели навигации

```tsx
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ThemeToggle from './ThemeToggle';

function Navbar() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton edge="start" color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <ThemeToggle />
      </Toolbar>
    </AppBar>
  );
}
```

### Пример 2: В выпадающем меню

```tsx
import { Menu, MenuItem, ListItemText, ListItemIcon } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import ThemeToggle from './ThemeToggle';

function SettingsMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const { isDark } = useTheme();

  return (
    <>
      <Button onClick={(e) => setAnchorEl(e.currentTarget)}>
        Настройки
      </Button>
      <Menu anchorEl={anchorEl} open={!!anchorEl}>
        <MenuItem>
          <ListItemIcon>
            {isDark ? <DarkModeIcon /> : <LightModeIcon />}
          </ListItemIcon>
          <ListItemText>Тема</ListItemText>
          <ThemeToggle />
        </MenuItem>
      </Menu>
    </>
  );
}
```

### Пример 3: С сохранением позиции в URL

```tsx
import { useSearchParams } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { useTheme } from './ThemeProviders';
import { useEffect } from 'react';

function ThemedApp() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { theme, setTheme } = useTheme();

  // Синхронизация темы с URL параметром
  useEffect(() => {
    const themeParam = searchParams.get('theme');
    if (themeParam === 'light' || themeParam === 'dark') {
      setTheme(themeParam);
    }
  }, [searchParams]);

  // Обновление URL при смене темы
  useEffect(() => {
    setSearchParams({ theme });
  }, [theme]);

  return <ThemeToggle />;
}
```

---

## ⚠️ Известные ограничения

1. **SSR**: При использовании Next.js или Remix может потребоваться динамический импорт с отключением SSR:

```tsx
import dynamic from 'next/dynamic';

const ThemeToggle = dynamic(() => import('./ThemeToggle'), { ssr: false });
```

2. **Material-UI тема**: Компонент использует `theme.applyStyles()` из MUI, убедитесь, что у тебя настроен `ThemeProvider` от Material-UI.

3. **SVG иконки**: Иконки встроены как data-URI. Для смены иконок нужно пересобрать компонент или использовать пропсы для динамической замены.

---

## 🧪 Тестирование

### Пример теста с Jest и React Testing Library

```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from './ThemeProviders';
import ThemeToggle from './ThemeToggle';

describe('ThemeToggle', () => {
  it('переключает тему при клике', () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );
    
    const toggle = screen.getByRole('checkbox');
    fireEvent.click(toggle);
    
    // Проверяем, что тема изменилась
    expect(document.documentElement.classList.contains('dark-theme')).toBe(true);
  });
});
```

---

## 📝 Changelog

| Версия | Описание |
|--------|----------|
| 1.0.0 | Initial release. Кастомный Switch с иконками солнца/луны |
| 1.0.1 | Добавлен `console.log(theme)` для отладки |
| 1.0.2 | Интеграция с `ThemeContext` из отдельного файла |

---

## 🤝 Связанные компоненты

- `ThemeProvider` — провайдер контекста темы
- `useTheme` — хук для доступа к теме
- Документация `ThemeContext`

---

## 📄 Лицензия

MIT
```

Эта документация включает:
- Общее описание и визуал
- API и пропсы
- Примеры использования
- Кастомизацию
- Отладку
- Тестирование
- Известные проблемы и решения