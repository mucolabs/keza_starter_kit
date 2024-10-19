import { Container, Divider } from '@mantine/core'
import { AppLayout } from '~/views/layouts/app'
import { DeleteAccount } from './components/delete_account'
import { UpdatePassword } from './components/update_password'

export default function UserSettingsPage() {
  return (
    <AppLayout title="Settings">
      <div>
        <Container
          size="xs"
          className="flex flex-col gap-12 rounded-2xl border border-slate-100 p-8"
        >
          <UpdatePassword />
          <Divider />
          <DeleteAccount />
        </Container>
      </div>
    </AppLayout>
  )
}
