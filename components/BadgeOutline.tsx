import { ReactNode } from 'react';

export default function BadgeOutline({ variant, children }: { variant?: string; children: ReactNode }) {
  return variant == 'success' ? (
    <span className='mr-2 rounded border border-green-500 px-2 py-1 text-sm font-medium text-green-500'>
      {children}
    </span>
  ) : variant == 'danger' ? (
    <span className='mr-2 rounded border border-red-500 px-2 py-1 text-sm font-medium text-red-500'>{children}</span>
  ) : variant == 'warning' ? (
    <span className='mr-2 rounded border border-yellow-500 px-2 py-1 text-sm font-medium text-yellow-500'>
      {children}
    </span>
  ) : variant == 'info' ? (
    <span className='mr-2 rounded border border-orange-500 px-2 py-1 text-sm font-medium text-orange-500'>
      {children}
    </span>
  ) : variant == 'purple' ? (
    <span className='mr-2 rounded border border-violet-500 px-2 py-1 text-sm font-medium text-violet-500'>
      {children}
    </span>
  ) : variant == 'dark' ? (
    <span className='mr-2 rounded border border-gray-500 px-2 py-1 text-sm font-medium text-gray-700 dark:text-gray-300'>
      {children}
    </span>
  ) : (
    <span className='mr-2 rounded border border-blue-500 px-2 py-1 text-sm font-medium text-blue-500'>{children}</span>
  );
}
