import { useEffect, useRef } from 'react'
import { toast } from 'sonner'

export function useToast(toastData: App.Data.FlashData | null) {
  const hasFired = useRef(false)
  useEffect(() => {
    if (toastData && !hasFired.current) {
      const { type, message } = toastData
      hasFired.current = true

      switch (type) {
        case 'success':
          toast.success(message)
          break
        case 'info':
          toast.info(message)
          break
        case 'warning':
          toast.warning(message)
          break
        case 'error':
          toast.error(message)
          break
        default:
          break
      }
    }
  }, [toastData])
}
