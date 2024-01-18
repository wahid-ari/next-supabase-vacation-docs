import { ReactNode } from 'react';

export default function AlertOutline({ variant, children }: { variant?: string; children: ReactNode }) {
  return variant == 'success' ? (
    <div className='mb-4 rounded-lg border border-green-500 p-3 text-sm font-normal text-green-500' role='alert'>
      {children}
    </div>
  ) : variant == 'danger' ? (
    <div className='mb-4 rounded-lg border border-red-500 p-3 text-sm font-normal text-red-500' role='alert'>
      {children}
    </div>
  ) : variant == 'warning' ? (
    <div className='mb-4 rounded-lg border border-yellow-500 p-3 text-sm font-normal text-yellow-500' role='alert'>
      {children}
    </div>
  ) : variant == 'info' ? (
    <div className='mb-4 rounded-lg border border-orange-500 p-3 text-sm font-normal text-orange-500' role='alert'>
      {children}
    </div>
  ) : variant == 'purple' ? (
    <div className='mb-4 rounded-lg border border-violet-500 p-3 text-sm font-normal text-violet-500' role='alert'>
      {children}
    </div>
  ) : variant == 'dark' ? (
    <div
      className='mb-4 rounded-lg border border-gray-500 p-3 text-sm font-normal text-gray-700 dark:text-gray-300'
      role='alert'
    >
      {children}
    </div>
  ) : (
    <div className='mb-4 rounded-lg border border-blue-500 p-3 text-sm font-normal text-blue-500' role='alert'>
      {children}
    </div>
  );
}
