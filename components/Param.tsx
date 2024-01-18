import { ReactNode } from 'react';
import cn from 'clsx';

type Props = {
  name?: string;
  type?: string;
  defaultValue?: string;
  required?: boolean;
  optional?: boolean;
  hidden?: boolean;
  nameClasses?: string;
  children?: ReactNode;
};

export default function Param({
  name,
  type,
  defaultValue,
  required = false,
  optional = false,
  hidden = false,
  nameClasses,
  children,
}: Props) {
  if (hidden) {
    return null;
  }

  return (
    <div className='my-2 border-b py-3 dark:border-neutral-800'>
      <div className='flex font-mono text-sm'>
        {name && (
          <div className='flex-1 space-x-2 truncate py-px'>
            <span
              className={cn(
                'rounded-md border border-neutral-200 bg-neutral-100 px-1 py-px font-semibold dark:border-neutral-700 dark:bg-neutral-800',
                nameClasses,
                (nameClasses && !nameClasses.includes('text-')) || !nameClasses ? 'dark:text-neutral-200' : undefined,
              )}
            >
              {name}
            </span>
            {required && <span className='font-semibold text-red-500 dark:text-red-500'>*Required</span>}
            {optional && <span className='text-neutral-500 dark:text-neutral-300'>Optional</span>}
            {defaultValue && <span className='text-neutral-500 dark:text-neutral-300'>Default: {defaultValue}</span>}
          </div>
        )}
        {type && <div className='text-neutral-600 dark:text-neutral-300'>{type}</div>}
      </div>
      <div className='prose-sm prose-neutral dark:prose-dark mt-2'>{children}</div>
    </div>
  );
}
