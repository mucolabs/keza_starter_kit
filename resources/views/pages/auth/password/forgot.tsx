import { Link, useForm } from '@inertiajs/react'
import { Button, TextInput } from '@mantine/core'
import AuthLayout from '~/views/layouts/auth'

export default function PasswordForgotPage() {
  const form = useForm<App.Data.Auth.PasswordResetLinkData>({
    email: '',
  })

  return (
    <AuthLayout
      title="Forgot Password"
      intro={
        <div className="flex flex-col gap-3">
          <h1 className="font-roobert text-pretty text-2xl font-extrabold">
            Forgot your password ?
          </h1>
          <p className="text-sm">
            No problem. Just let us know your email address and we will email
            you a password reset link that will allow you to choose a new one.
            Already remember your credentials?{' '}
            <Link
              href={route('login')}
              className="underline hover:text-brand-500"
            >
              Sign in here
            </Link>
          </p>
        </div>
      }
    >
      <form
        className="flex flex-col gap-10"
        onSubmit={(event) => {
          event.preventDefault()

          form.post(route('password.email'))
        }}
      >
        <TextInput
          name="email"
          placeholder="name@example.com"
          label="Addresse email"
          required
          error={form.errors.email}
          onChange={(event) => form.setData('email', event.target.value)}
        />

        <Button type="submit" loading={form.processing} fullWidth>
          Email password reset link
        </Button>
      </form>
    </AuthLayout>
  )
}
