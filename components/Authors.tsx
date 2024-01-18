import { ReactNode } from 'react';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';

export default function Authors({ date, children }: { date?: string; children?: ReactNode }) {
  return (
    <div className='mb-10 mt-4 flex flex-wrap items-center gap-x-1 gap-y-2 text-sm text-neutral-500 dark:text-gray-400'>
      <CalendarDaysIcon className='h-5 w-5' /> {date} by {children}
    </div>
  );
}

export function Author({ name, link }: { name?: string; link?: string }) {
  return (
    <span className="after:content-[','] last:after:content-['']">
      <a
        key={name}
        href={link}
        target='_blank'
        className='ml-1 mr-0.5 font-medium text-gray-800 transition-all duration-200 hover:text-orange-500 dark:text-gray-100 dark:hover:text-orange-500'
      >
        {name}
      </a>
    </span>
  );
}
