import { usePage } from '@inertiajs/react'
import { PageProps } from '~/types'
import AuthLayout from '~/views/layouts/auth'

export default function LoginPage() {
  const { status, canResetPassword } = usePage<
    PageProps & App.Pages.LoginCreatePage
  >().props

  console.log({ status, canResetPassword })
  return (
    <AuthLayout title="Login">
      <h1>Login</h1>
    </AuthLayout>
  )
}
