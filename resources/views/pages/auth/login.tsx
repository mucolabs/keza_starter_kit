import { Link, useForm, usePage } from '@inertiajs/react'
import { Button, Checkbox, PasswordInput, TextInput } from '@mantine/core'
import { PageProps } from '~/types'
import AuthLayout from '~/views/layouts/auth'

export default function LoginPage() {
  const { status, canResetPassword } = usePage<
    PageProps & App.Pages.LoginCreatePage
  >().props

  const form = useForm<App.Data.Auth.LoginData>({
    email: '',
    password: '',
    remember: false,
    request: null,
  })

  return (
    <AuthLayout
      title="Login"
      intro={
        <div className="flex flex-col gap-1">
          <h1 className="font-roobert text-2xl font-extrabold">
            Connect to your account
          </h1>
          <p className="text-sm">
            Don&apos;t have an account?{' '}
            <Link
              href={route('register')}
              className="underline hover:text-brand-500"
            >
              Sign up
            </Link>
          </p>
        </div>
      }
    >
      <form
        className="flex flex-col gap-10"
        onSubmit={(event) => {
          event.preventDefault()
          form.post('/login')
        }}
      >
        {/* <Alert
          variant="light"
          color="red"
          radius="lg"
          title="Authentication failed"
          icon={<Icon name="circle-alert" />}
          classNames={{
            root: cn('text-red-900 bg-red-50 border border-red-100'),
            title: cn('font-roobert'),
            message: cn('text-inherit'),
          }}
        >
          The provided username/email or password is incorrect
        </Alert> */}

        <div className="flex flex-col gap-5">
          <TextInput
            name="email"
            placeholder="nom@example.com"
            label="Email Address"
            required
            error={form.errors.email}
            onChange={(event) => {
              form.setData('email', event.target.value)
            }}
          />

          <PasswordInput
            name="password"
            placeholder="Password"
            label="Password"
            required
            error={form.errors.password}
            onChange={(event) => {
              form.setData('password', event.target.value)
            }}
          />

          <div className="flex flex-wrap items-center justify-between">
            <Checkbox
              size="sm"
              radius="sm"
              label="Remember me"
              onChange={(event) => {
                form.setData('remember', Boolean(event.target.value))
              }}
            />
            <Link
              href={'/forgot-password'}
              className="text-sm underline hover:text-brand-500"
            >
              Forgot your password ?
            </Link>
          </div>
        </div>

        <Button type="submit" loading={form.processing} fullWidth>
          Login
        </Button>
      </form>
    </AuthLayout>
  )
}
