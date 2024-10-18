import { useForm } from '@inertiajs/react'
import { Button, PasswordInput, TextInput } from '@mantine/core'
import AuthLayout from '~/views/layouts/auth'

export default function AuthPasswordResetPage({
  email,
  token,
}: App.Pages.PasswordResetCreatePage) {
  const form = useForm<App.Data.Auth.PasswordResetData>({
    email,
    token,
    password: '',
    password_confirmation: '',
  })
  return (
    <AuthLayout title="Reset Password">
      <form
        className="flex flex-col gap-10"
        onSubmit={(event) => {
          event.preventDefault()

          form.post(route('password.store'), {
            onFinish: () => form.reset('password', 'password_confirmation'),
          })
        }}
      >
        <div className="flex flex-col gap-5">
          <TextInput
            name="email"
            type="email"
            label="Email address"
            value={form.data.email}
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
            value={form.data.password}
            onChange={(event) => {
              form.setData('password', event.target.value)
            }}
          />

          <PasswordInput
            required
            name="password_confirmation"
            placeholder="Password"
            label="Confirm Password"
            error={form.errors.password_confirmation}
            value={form.data.password_confirmation}
            onChange={(event) => {
              form.setData('password_confirmation', event.target.value)
            }}
          />
        </div>

        <div className="flex justify-end">
          <Button type="submit">Reset Password</Button>
        </div>
      </form>
    </AuthLayout>
  )
}
