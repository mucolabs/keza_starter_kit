import { Link, useForm } from '@inertiajs/react'
import { Button, PasswordInput, TextInput } from '@mantine/core'
import AuthLayout from '~/views/layouts/auth'

export default function SignupPage() {
  const form = useForm<App.Data.Auth.SignupData>({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  })
  return (
    <AuthLayout
      title="Signup"
      intro={
        <div className="flex flex-col gap-1">
          <h1 className="font-roobert text-2xl font-bold">
            Create your account
          </h1>
          <p className="text-sm">
            Already have an account?{' '}
            <Link
              href={route('login')}
              className="underline hover:text-amber-600"
            >
              Login
            </Link>
          </p>
        </div>
      }
    >
      <form className="flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <TextInput
            required
            name="name"
            placeholder="Tresor Muco"
            label="Full name"
            error={form.errors.name}
            onChange={(event) => {
              form.setData('name', event.target.value)
            }}
          />

          <TextInput
            required
            name="email"
            placeholder="name@example.com"
            label="Email Address"
            error={form.errors.email}
            onChange={(event) => {
              form.setData('email', event.target.value)
            }}
          />

          <PasswordInput
            required
            name="password"
            placeholder="Password"
            label="Password"
            error={form.errors.password}
            onChange={(event) => {
              form.setData('password', event.target.value)
            }}
          />

          <PasswordInput
            required
            name="password"
            label="Confirm Password"
            placeholder="Confirm Password"
            error={form.errors.password}
            onChange={(event) => {
              form.setData('password_confirmation', event.target.value)
            }}
          />
        </div>

        <Button type="submit" loading={form.processing} fullWidth>
          Create account
        </Button>
      </form>
    </AuthLayout>
  )
}
