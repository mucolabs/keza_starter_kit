import { Button, TextInput } from '@mantine/core'

export function UpdatePassword() {
  return (
    <section className="flex flex-col gap-6">
      <section className="flex flex-col gap-3">
        <h4 className="text-xl font-semibold">Update Password</h4>
        <p>
          Ensure your account is using a long, random password to stay secure.
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
  )
}
