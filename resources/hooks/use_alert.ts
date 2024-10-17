import { IconName } from '~/components/icons'

export function useAlert(alert: App.Data.ToastData | null) {
  if (!alert) return

  const getColor = (type: typeof alert.type) => {
    if (type === 'success') return 'green'
    if (type === 'error') return 'red'

    return 'gray'
  }

  const getClasses = (type: typeof alert.type) => {
    if (type === 'success') return 'text-green-800'
    if (type === 'error') return 'text-red-800'
  }

  const getIcons = (type: typeof alert.type): IconName => {
    if (type === 'success') return 'circle-check'
    if (type === 'error') return 'triangle-alert'

    return 'info'
  }

  return {
    color: getColor(alert.type),
    class: getClasses(alert.type),
    icon: getIcons(alert.type),
    message: alert.message,
  }
}
