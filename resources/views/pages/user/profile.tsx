import { Button, Container, TextInput } from '@mantine/core'
import { AppLayout } from '~/views/layouts/app'

export default function UserProfilePage() {
  return (
    <AppLayout title="Profile">
      <div>
        <Container
          size="xs"
          className="flex flex-col gap-8 rounded-2xl border border-slate-100 p-8"
        >
          <section className="flex flex-col gap-3">
            <h1 className="text-xl font-bold">Profile Information</h1>
            <p>
              Update your account&apos;s profile information and email
              address.Update your account&apos;s profile information and email
              address.
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
            <div className="self-end">
              <Button type="submit">Save</Button>
            </div>
          </form>
        </Container>
      </div>
    </AppLayout>
  )
}
