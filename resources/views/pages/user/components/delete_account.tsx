import { Button } from '@mantine/core'

export function DeleteAccount() {
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
        <Button color="red">Delete Account</Button>
      </div>
    </section>
  )
}
