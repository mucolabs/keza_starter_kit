import { usePage } from '@inertiajs/react'
import { PageProps } from '~/types'
import AuthLayout from '~/views/layouts/auth'

export default function AuthVerifyEmailPage() {
  const {} = usePage<PageProps>().props
  return (
    <AuthLayout title="Email Verification">
      <h1>Content</h1>
    </AuthLayout>
  )
}
