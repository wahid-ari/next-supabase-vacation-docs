import { ReactNode } from 'react';

export default function Badge({ variant, children }: { variant?: string; children: ReactNode }) {
  return variant == 'success' ? (
    <span className='mr-2 rounded bg-green-200 px-2 py-1 text-sm font-medium text-green-600'>{children}</span>
  ) : variant == 'danger' ? (
    <span className='mr-2 rounded bg-red-200 px-2 py-1 text-sm font-medium text-red-600'>{children}</span>
  ) : variant == 'warning' ? (
    <span className='mr-2 rounded bg-yellow-200 px-2 py-1 text-sm font-medium text-yellow-600'>{children}</span>
  ) : variant == 'info' ? (
    <span className='mr-2 rounded bg-orange-200 px-2 py-1 text-sm font-medium text-orange-600'>{children}</span>
  ) : variant == 'purple' ? (
    <span className='mr-2 rounded bg-violet-200 px-2 py-1 text-sm font-medium text-violet-700'>{children}</span>
  ) : variant == 'dark' ? (
    <span className='mr-2 rounded bg-gray-200 px-2 py-1 text-sm font-medium text-gray-700'>{children}</span>
  ) : (
    <span className='mr-2 rounded bg-blue-200 px-2 py-1 text-sm font-medium text-blue-600'>{children}</span>
  );
}
