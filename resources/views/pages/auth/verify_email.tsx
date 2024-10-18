import { Link, useForm } from '@inertiajs/react'
import { Button } from '@mantine/core'
import AuthLayout from '~/views/layouts/auth'

export default function AuthVerifyEmailPage() {
  const form = useForm({})
  return (
    <AuthLayout
      title="Email Verification"
      intro={
        <p>
          Thanks for signing up! Before getting started, could you verify your
          email address by clicking on the link we just emailed to you? If you
          didn't receive the email, we will gladly send you another.
        </p>
      }
    >
      <form
        className="flex items-center justify-end gap-6"
        onSubmit={(event) => {
          event.preventDefault()

          form.post(route('verification.send'))
        }}
      >
        <Button
          variant="light"
          component={Link}
          href={route('logout')}
          method="post"
          as="button"
        >
          Logout
        </Button>
        <Button type="submit" loading={form.processing}>
          Resend Verification Email
        </Button>
      </form>
    </AuthLayout>
  )
}
