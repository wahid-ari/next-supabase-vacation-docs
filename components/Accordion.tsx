import { ReactNode } from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import cn from 'clsx';

type Props = {
  title?: string;
  body?: ReactNode | string;
};

export default function Accordion({ title, body }: Props) {
  return (
    <div className='mt-4 w-full'>
      <div className='w-full rounded-2xl'>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={cn(
                  'flex w-full items-center justify-between align-middle text-[15px]',
                  'rounded-lg py-2 pl-4 pr-2 text-left font-medium text-neutral-700 dark:text-neutral-300',
                  '!bg-[#f5f5f5] hover:!bg-[#eeeeeeda] dark:!bg-neutral-900 dark:hover:!bg-neutral-800',
                  'shadow-sm transition-all duration-200',
                )}
              >
                <span>{title}</span>
                <ChevronRightIcon
                  className={`${
                    open ? 'rotate-90 transform transition-transform duration-300' : 'transition-transform duration-300'
                  } h-5 w-5 text-neutral-700 dark:text-neutral-300`}
                />
              </Disclosure.Button>
              <Transition
                enter='transition duration-200 ease-out'
                enterFrom='transform scale-95 opacity-0'
                enterTo='transform scale-100 opacity-100'
                leave='transition duration-75 ease-out'
                leaveFrom='transform scale-200 opacity-100'
                leaveTo='transform scale-95 opacity-0'
              >
                <Disclosure.Panel className='py-3 pl-4 pr-2 text-base'>{body}</Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
