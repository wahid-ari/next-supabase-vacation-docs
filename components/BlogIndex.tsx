import Link from 'next/link';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import { getPagesUnderRoute } from 'nextra/context';

export default function BlogIndex({ more = 'Read more' }: { more: string }) {
  const length = getPagesUnderRoute('/blog').length;
  return getPagesUnderRoute('/blog').map((page: any, index) => {
    return (
      <div key={index + 1} className='my-8'>
        <h3 className='text-2xl font-medium text-neutral-800'>
          <Link
            href={page.route}
            className='text-neutral-900 no-underline transition-all hover:text-orange-500 dark:text-white dark:hover:text-orange-500'
          >
            {page.meta?.title || page.frontMatter?.title || page.name}
          </Link>
        </h3>
        <p className='!mt-0 pt-3 opacity-80'>
          {page.frontMatter?.description}{' '}
          <Link
            href={page.route}
            className='text-orange-500 transition-all duration-300 hover:text-orange-600 hover:underline'
          >
            {more + ' ➔'}
          </Link>
        </p>
        {page.frontMatter?.date ? (
          <p className='!mt-0 flex items-center gap-1 pt-2.5 text-sm text-gray-600 dark:text-neutral-400'>
            <CalendarDaysIcon className='h-5 w-5' />
            {page.frontMatter.date}
          </p>
        ) : null}
        {index + 1 < length && <hr className='mt-10 border-t dark:border-neutral-800' />}
      </div>
    );
  });
}

{
  /* <Link href={page.route} passHref key={index + 1}>
  <div className="mt-8 mb-10 group">
    <h3 className="text-2xl text-neutral-800 font-medium dark:text-white group-hover:text-orange-500 dark:group-hover:text-orange-500 transition-all duration-300">
      {page.meta?.title || page.frontMatter?.title || page.name}
    </h3>
    <p className="opacity-80 !mt-0 pt-3">
      {page.frontMatter?.description}{" "}
      <Link href={page.route} className="text-orange-500 hover:text-orange-600 transition-all">
        {more + " ➔"}
      </Link>
    </p>
    {page.frontMatter?.date ? (
      <p className="text-gray-600 dark:text-neutral-400 text-sm !mt-0 pt-3 flex items-center gap-1">
        <CalendarDaysIcon className="h-5 w-5" />
        {page.frontMatter.date}
      </p>
    ) : null}
  </div>
  {index + 1 < length && <hr className="border-t dark:border-neutral-800 mt-10" />}
</Link> */
}
