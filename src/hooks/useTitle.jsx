import React, { useEffect, useRef } from 'react'

/**
 * A Custom Hook To Set A Title For A Page
 * * Not Recommended to use it in components to avoid multiple titles on one page
 */
const useTitle = (title, reTitleOnUnmounted=false) => {
  // Keep Tracking Of Title Of The Current The Page
  const titleRef = useRef(document.title).current
  
    useEffect(() => {
        document.title = title
  }, [title])

  
  useEffect(() => {
   /**
   * We need to set the title as the default title as long as reTitleOnUnmounted is false
   * * Note: We wanna only check on unmount
   */
    return () => {
        if (!reTitleOnUnmounted) {
            document.title = titleRef
        }
    }
  }, [])
}

export default useTitle