import { ReactNode } from 'react';

export default function Alert({ variant, children }: { variant?: string; children: ReactNode }) {
  return variant == 'success' ? (
    <div
      className='mb-4 rounded-lg border border-green-600 bg-green-200 p-3 text-sm font-normal text-green-600'
      role='alert'
    >
      {children}
    </div>
  ) : variant == 'danger' ? (
    <div className='mb-4 rounded-lg border border-red-600 bg-red-200 p-3 text-sm font-normal text-red-600' role='alert'>
      {children}
    </div>
  ) : variant == 'warning' ? (
    <div
      className='mb-4 rounded-lg border border-yellow-600 bg-yellow-200 p-3 text-sm font-normal text-yellow-600'
      role='alert'
    >
      {children}
    </div>
  ) : variant == 'info' ? (
    <div
      className='mb-4 rounded-lg border border-orange-600 bg-orange-200 p-3 text-sm font-normal text-orange-600'
      role='alert'
    >
      {children}
    </div>
  ) : variant == 'purple' ? (
    <div
      className='mb-4 rounded-lg border border-violet-600 bg-violet-200 p-3 text-sm font-normal text-violet-700'
      role='alert'
    >
      {children}
    </div>
  ) : variant == 'dark' ? (
    <div
      className='mb-4 rounded-lg border border-gray-600 bg-gray-200 p-3 text-sm font-normal text-gray-700'
      role='alert'
    >
      {children}
    </div>
  ) : (
    <div
      className='mb-4 rounded-lg border border-blue-600 bg-blue-200 p-3 text-sm font-normal text-blue-600'
      role='alert'
    >
      {children}
    </div>
  );
}
