import { useForm } from '@inertiajs/react'
import { Button, PasswordInput } from '@mantine/core'
import AuthLayout from '~/views/layouts/auth'

export default function AuthPasswordConfirmPage() {
  const form = useForm<{ password: string }>({
    password: '',
  })

  return (
    <AuthLayout
      title="Confirm Password"
      intro={
        <p>
          This is a secure area of the application. Please confirm your password
          before continuing.
        </p>
      }
    >
      <form
        className="flex w-full flex-col items-center justify-end gap-10"
        onSubmit={(event) => {
          event.preventDefault()

          form.post(route('password.confirm'), {
            onFinish: () => form.reset('password'),
          })
        }}
      >
        <div className="w-full">
          <PasswordInput
            name="password"
            label="Password"
            placeholder="Password"
            error={form.errors.password}
            value={form.data.password}
            onChange={(event) => {
              form.setData('password', event.target.value)
            }}
          />
        </div>
        <Button type="submit" loading={form.processing} fullWidth>
          Confirm
        </Button>
      </form>
    </AuthLayout>
  )
}
