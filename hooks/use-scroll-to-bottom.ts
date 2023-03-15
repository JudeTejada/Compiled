import { useCallback, useEffect, useState } from 'react';

type ScrollToBottom = {
  customHeight?: number;
};

export function useScrollToBottom(props: ScrollToBottom): Boolean {
  const { customHeight } = props;

  const [scrolledToBottom, setScrollToBottom] = useState(false);
  const handleScroll = useCallback(
    (e: Event) => {
      const targetHeight = customHeight ?? document.body.offsetHeight;
      if (window.innerHeight + window.scrollY >= targetHeight) {
        return setScrollToBottom(true);
      }

      console.log(window.scrollY);
      if (window.scrollY === 0) setScrollToBottom(false);
    },
    [customHeight]
  );

  useEffect(() => {
    window.document.addEventListener('scroll', handleScroll);

    return () => {
      window.document.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return scrolledToBottom;
}
