import { IconName } from '~/components/icons'

export function useAlert(alert: App.Data.FlashData | null) {
  if (!alert) return

  const getColor = (type: typeof alert.type) => {
    if (type === 'success') return 'green'
    if (type === 'error') return 'red'
    if (type === 'info') return 'blue'
    if (type === 'warning') return 'yellow'
    return 'gray'
  }

  const getClasses = (type: typeof alert.type) => {
    if (type === 'success') return 'text-green-800'
    if (type === 'error') return 'text-red-800'
    if (type === 'info') return 'text-blue-800'
    if (type === 'warning') return 'text-amber-800'
  }

  const getIcons = (type: typeof alert.type): IconName => {
    if (type === 'success') return 'circle-check'
    if (type === 'error') return 'triangle-alert'
    if (type === 'info') return 'info'
    if (type === 'warning') return 'circle-alert'

    return 'info'
  }

  return {
    color: getColor(alert.type),
    class: getClasses(alert.type),
    icon: getIcons(alert.type),
    message: alert.message,
  }
}
