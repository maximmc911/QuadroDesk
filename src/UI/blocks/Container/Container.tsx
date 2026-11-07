
import type { BlockProps } from '../../../shared/types/componentsUI.interface';


export const Container = ({ className = '', children, ...rest }: BlockProps) => {
  return (
      <div
      {...rest}
      className={[
        'radius-standart overflow-hidden p-5',
        'bg-raised-surface',
        'border border-secondary-border',
        'shadow-(--small_shadow)',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  )
}
