import { Button, Container, Divider, TextInput } from '@mantine/core'
import { AppLayout } from '~/views/layouts/app'

export default function UserSettingsPage() {
  return (
    <AppLayout title="Settings">
      <div>
        <Container
          size="xs"
          className="flex flex-col gap-12 rounded-2xl border border-slate-100 p-8"
        >
          {/* Update Password */}
          <section className="flex flex-col gap-6">
            <section className="flex flex-col gap-3">
              <h4 className="text-xl font-semibold">Update Password</h4>
              <p>
                Ensure your account is using a long, random password to stay
                secure.
              </p>
            </section>

            <form
              className="flex flex-col gap-8"
              onSubmit={(e) => {
                e.preventDefault()
              }}
            >
              <div className="flex flex-col gap-5">
                <TextInput required label="Name" defaultValue="Tresor Muco" />
                <TextInput
                  required
                  type="email"
                  label="Email Address"
                  defaultValue="mucotresor@gmail.com"
                />
              </div>
              <div>
                <Button type="submit">Save</Button>
              </div>
            </form>
          </section>

          <Divider />

          {/* Delete Account */}
          <section className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h4 className="text-xl font-semibold">Delete Account</h4>
              <p>Permanently delete your account.</p>
              <p className="text-xs">
                Once your account is deleted, all of its resources and data will
                be permanently deleted. Before deleting your account, please
                download any data or information that you wish to retain.
              </p>
            </div>

            <div>
              <Button color="red">Delete Account</Button>
            </div>
          </section>
        </Container>
      </div>
    </AppLayout>
  )
}
