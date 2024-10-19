import { Link, usePage } from '@inertiajs/react'
import { Alert, Container } from '@mantine/core'
import { Icon } from '~/components/icons'
import { useAlert } from '~/hooks/use_alert'
import { PageProps } from '~/types'
import { AppLayout } from '~/views/layouts/app'
import { UpdateProfile } from './components/update_profile'

export default function UserProfilePage({
  mustVerifyEmail,
}: App.Pages.ProfileEditPage) {
  const { alert: alertData, user } = usePage<PageProps & App.Data.ShareData>()
    .props

  const alert = useAlert(alertData)

  return (
    <AppLayout title="Profile">
      <div>
        <Container
          size="xs"
          className="flex flex-col gap-8 rounded-2xl border border-slate-100 p-8"
        >
          <section className="flex flex-col gap-3">
            <h1 className="text-xl font-bold">Profile Information</h1>
            <p>
              Update your account&apos;s profile information and email
              address.Update your account&apos;s profile information and email
              address.
            </p>
          </section>
          {mustVerifyEmail && user.email_verified_at === null && !alert ? (
            <Alert
              variant="light"
              radius="md"
              color="blue"
              classNames={{ message: '' }}
              icon={<Icon name="info" size="lg" className="" />}
            >
              Your email address is unverified.{' '}
              <Link
                href={route('verification.send')}
                method="post"
                as="button"
                className="inline underline hover:text-brand-500"
              >
                Click here to re-send the verification email.
              </Link>
            </Alert>
          ) : null}

          {alert && (
            <Alert
              variant="light"
              radius="md"
              color={alert.color}
              classNames={{ message: alert.class }}
              icon={
                <Icon name={alert.icon} size="lg" className={alert.class} />
              }
            >
              {alert.message}
            </Alert>
          )}

          <UpdateProfile name={user.name} email={user.email} />
        </Container>
      </div>
    </AppLayout>
  )
}
