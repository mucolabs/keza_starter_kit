import { Head, usePage } from '@inertiajs/react'
import { Alert, Button, Container } from '@mantine/core'
import type { ReactElement, ReactNode } from 'react'
import { Background } from '~/components/background'
import { Icon } from '~/components/icons'
import { Logo } from '~/components/logo'
import { useAlert } from '~/hooks/use_alert'
import { useToast } from '~/hooks/use_toast'
import { PageProps } from '~/types'

type AuthLayoutProps = Readonly<{ children: ReactNode }> & {
  title: string
  intro?: ReactElement
}

export default function AuthLayout({
  title,
  intro,
  children,
}: AuthLayoutProps) {
  const { toast, alert: alertData } = usePage<PageProps & App.Data.ShareData>()
    .props

  useToast(toast)
  const alert = useAlert(alertData)

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-zinc-100">
      <Background />
      <Head title={title} />
      <Container
        size="xs"
        className="z-50 flex w-full flex-col gap-8 bg-white/85 p-6 ring-1 ring-zinc-950/5 drop-shadow-sm sm:p-10 lg:rounded-2xl lg:p-10"
      >
        <div className="flex flex-col gap-10">
          <section className="flex flex-col gap-10">
            <div className="flex items-center justify-between">
              <Logo href="/" />
              <div className="">
                <Button
                  size="xs"
                  variant="light"
                  leftSection={<Icon name="phone" />}
                  component="a"
                  href="https://x.com/mucotreso"
                  target="_blank"
                >
                  Contact Us
                </Button>
              </div>
            </div>

            {intro && intro}
          </section>
        </div>
        {alert && (
          <Alert
            variant="light"
            radius="md"
            color={alert.color}
            classNames={{ message: alert.class }}
            icon={<Icon name={alert.icon} size="lg" className={alert.class} />}
          >
            {alert.message}
          </Alert>
        )}
        {children}
      </Container>
    </div>
  )
}
