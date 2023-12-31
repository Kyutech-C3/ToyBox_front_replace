import type { ReactNode } from 'react';

import { Maximize, Minimize } from 'lucide-react';
import { FullScreen as ReactFullScreen } from 'react-full-screen';

import { useFullScreen } from './hook';
type Props = {
  children: ReactNode;
};

export const FullScreen: React.FC<Props> = ({ children }) => {
  const { handle, handleClick } = useFullScreen();
  return (
    <div className="relative select-none h-full w-full">
      <ReactFullScreen handle={handle} className="relative h-full w-full">
        {children}
        <button
          onClick={handleClick}
          className="absolute right-0 bottom-0 p-2 z-50"
        >
          {handle.active ? (
            <Minimize
              className="dark:text-black text-white shadow-black drop-shadow"
              size={36}
            />
          ) : (
            <Maximize
              className="dark:text-black text-white shadow-black drop-shadow"
              size={36}
            />
          )}
        </button>
      </ReactFullScreen>
    </div>
  );
};
