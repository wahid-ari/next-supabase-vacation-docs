import { isValidElement, ReactNode } from 'react';
import cn from 'clsx';

export default function Tooltip({ tip, children }: { tip?: string; children?: ReactNode }) {
  if (!children) {
    return null;
  }

  const isText = isValidElement(children);

  return (
    <span className='group relative z-10 inline'>
      {underlineWhenTextOnly(children)}
      <span
        className={cn(
          'hidden w-fit group-hover:flex md:whitespace-nowrap',
          `${isText ? 'mb-1.5' : 'mb-0.5'} absolute bottom-full left-1/2 -translate-x-1/2 bg-neutral-900 pb-1`,
          'rounded-lg border border-slate-400 px-1.5 py-1 text-center text-xs text-slate-50',
        )}
      >
        {tip}
      </span>
    </span>
  );
}

function underlineWhenTextOnly(children) {
  if (isValidElement(children)) {
    return children;
  }

  return (
    <span className='underline decoration-slate-400 decoration-dotted decoration-2 underline-offset-4 dark:decoration-slate-500'>
      {children}
    </span>
  );
}
