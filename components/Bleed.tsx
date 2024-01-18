import { ReactNode } from 'react';

export default function Bleed({ children }: { children: ReactNode }) {
  return <div className='bleed relative -mx-6 mt-6 md:-mx-8 2xl:-mx-24'>{children}</div>;
}
