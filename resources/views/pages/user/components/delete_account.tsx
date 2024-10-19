import { useForm } from '@inertiajs/react'
import { Alert, Button, Modal, PasswordInput } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Icon } from '~/components/icons'

export function DeleteAccount() {
  const [opened, { open, close }] = useDisclosure(false)
  const form = useForm<{ password: string }>({
    password: '',
  })

  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <h4 className="text-xl font-semibold">Delete Account</h4>
        <p>Permanently delete your account.</p>
        <p className="text-xs">
          Once your account is deleted, all of its resources and data will be
          permanently deleted. Before deleting your account, please download any
          data or information that you wish to retain.
        </p>
      </div>

      <div>
        <Button color="red" onClick={open}>
          Delete Account
        </Button>
      </div>

      <Modal
        opened={opened}
        title="Are you sure you want to delete your account?"
        centered
        size="lg"
        radius="lg"
        classNames={{ content: 'p-6', title: 'font-bold text-lg' }}
        closeOnClickOutside={false}
        onClose={() => {
          form.clearErrors()
          form.reset()
          close()
        }}
      >
        <div className="flex flex-col gap-8">
          <Alert
            variant="light"
            radius="md"
            color="red"
            classNames={{ message: 'text-red-800' }}
            icon={
              <Icon name="triangle-alert" size="lg" className="text-red-800" />
            }
          >
            Once your account is deleted, all of its resources and data will be
            permanently deleted. Please enter your password to confirm you would
            like to permanently delete your account.
          </Alert>

          <form
            className="flex flex-col gap-8"
            onSubmit={(event) => {
              event.preventDefault()

              form.delete(route('profile.destroy'), {
                onSuccess: () => close(),
                onFinish: () => form.reset(),
              })
            }}
          >
            <PasswordInput
              name="password"
              label="Password"
              placeholder="Password"
              data-autofocus={Boolean(form.errors.password)}
              value={form.data.password}
              error={form.errors.password}
              onChange={(event) => {
                form.setData('password', event.target.value)
              }}
            />

            <div className="flex items-center justify-end gap-6">
              <Button
                color="gray"
                variant="light"
                onClick={() => {
                  form.clearErrors()
                  form.reset()
                  close()
                }}
              >
                Cancel
              </Button>
              <Button color="red" type="submit" loading={form.processing}>
                Delete Account
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </section>
  )
}
