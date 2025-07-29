import clsx from 'clsx';

type ButtonVariants = 'default' | 'ghost' | 'danger';
type ButtonSizes = 'sm' | 'md' | 'lg';
type ButtonIconPosition = 'left' | 'top' | 'right';
type ButtonElementsPosition = 'left' | 'center' | 'right';

type ButtonProps = {
  variant?: ButtonVariants;
  size?: ButtonSizes;
  positionIcon?: ButtonIconPosition;
  elementPosition?: ButtonElementsPosition;
} & React.ComponentProps<'button'>;

export function Button({
  variant = 'default',
  size = 'md',
  positionIcon = 'left',
  elementPosition = 'center',
  ...props
}: ButtonProps) {
  const buttonVariants: Record<ButtonVariants, string> = {
    default: clsx('bg-blue-500 text-blue-100 hover:bg-blue-700'),
    ghost: clsx('bg-slate-400 text-slate-900 hover:bg-slate-500'),
    danger: clsx('bg-red-600 text-red-100 hover:bg-red-700'),
  };

  const buttonSizes: Record<ButtonSizes, string> = {
    sm: clsx(
      'text-xs/tight',
      'py-1',
      'px-2',
      'rounded-sm',
      '[&_svg]:w-3 [&_svg]:h-3'
    ),
    md: clsx(
      'text-base/tight',
      'py-2',
      'px-4',
      'rounded-md',
      '[&_svg]:w-4 [&_svg]:h-4'
    ),
    lg: clsx(
      'text-lg/tight',
      'py-4',
      'px-6',
      'rounded-lg',
      '[&_svg]:w-5 [&_svg]:h-5'
    ),
  };

  const buttonIconPosition: Record<ButtonIconPosition, string> = {
    left: clsx('flex-row gap-1'),
    top: clsx('flex-col gap-2'),
    right: clsx('flex-row-reverse gap-3'),
  };

  const buttonElementsPosition: Record<ButtonElementsPosition, string> = {
    left: clsx('justify-start'),
    center: clsx('justify-center'),
    right: clsx('justify-end'),
  };

  const buttonClasses = clsx(
    buttonVariants[variant],
    buttonSizes[size],
    buttonIconPosition[positionIcon],
    buttonElementsPosition[elementPosition],
    'flex items-center',
    'cursor-pointer',
    'transition',
    'disabled:bg-slate-200 disabled:text-slate-500 disabled:cursor-not-allowed',
    props.className
  );

  return <button {...props} className={buttonClasses} />;
}
