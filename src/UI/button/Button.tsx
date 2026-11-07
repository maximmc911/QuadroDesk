

export const Button = () =>{
  return (
   
    <>
    {/* Primary — главное действие */}
<button className="px-5 py-2.5 radius-standart bg-main-focus text-white font-medium
  shadow-small hover:bg-hover-main-focus hover:shadow-backlight
  active:bg-main-focus transition-colors">
  Сохранить
</button>

{/* Secondary — второстепенное действие на surface */}
<button className="px-5 py-2.5 radius-standart bg-surface text-main-text font-medium
  border border-main-border hover:bg-hover-status active:bg-active-state
  transition-colors">
  Отмена
</button>

{/* Ghost — тихое действие без фона */}
<button className="px-5 py-2.5 radius-standart bg-transparent text-secondary-text font-medium
  hover:bg-hover-status hover:text-main-text active:bg-active-state
  transition-colors">
  Подробнее
</button>

{/* Danger — деструктивное действие */}
<button className="px-5 py-2.5 radius-standart bg-error text-white font-medium
  shadow-small hover:opacity-90 active:opacity-100
  transition-opacity">
  Удалить
</button>

{/* Success — подтверждение / завершение */}
<button className="px-5 py-2.5 radius-standart bg-success text-white font-medium
  shadow-small hover:opacity-90 transition-opacity">
  Завершить
</button>

{/* Icon-button круглый — например, закрыть / добавить */}
<button className="w-10 h-10 radius-full bg-raised-surface text-main-text
  border border-secondary-border shadow-small
  hover:bg-hover-status active:bg-active-state grid place-items-center
  transition-colors">
  +
</button>

{/* Disabled — неактивная кнопка */}
<button disabled className="px-5 py-2.5 radius-standart bg-disable-state
  text-muted-text font-medium cursor-not-allowed">
  Недоступно
</button>

{/* Premium — акцентная кнопка с premium-свечением */}
<button className="px-6 py-3 radius-premiumBlock bg-secondary-emphasis text-white
  font-semibold shadow-premium hover:brightness-110
  active:brightness-100 transition-[filter]">
  Апгрейд
</button>
    
    </>
  );
}