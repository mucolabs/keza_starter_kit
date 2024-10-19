import { useForm } from '@inertiajs/react'
import { Button, TextInput } from '@mantine/core'

export function UpdateProfile({ name, email }: App.Data.ProfileData) {
  const form = useForm<App.Data.ProfileData>({ name, email })
  return (
    <form
      className="flex flex-col gap-8"
      onSubmit={(e) => {
        e.preventDefault()

        form.patch(route('profile.update'))
      }}
    >
      <div className="flex flex-col gap-5">
        <TextInput
          required
          name="name"
          label="Name"
          placeholder="Name"
          defaultValue={form.data.name}
          value={form.data.name}
          onChange={(event) => {
            form.setData('name', event.target.value)
          }}
        />
        <TextInput
          required
          type="email"
          name="email"
          label="Email Address"
          placeholder="name@example.com"
          defaultValue={form.data.email}
          value={form.data.email}
          onChange={(event) => {
            form.setData('email', event.target.value)
          }}
        />
      </div>
      <div className="self-end">
        <Button type="submit" loading={form.processing}>
          Save
        </Button>
      </div>
    </form>
  )
}
