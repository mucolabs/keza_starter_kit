import { useForm } from '@inertiajs/react'
import { Button, FocusTrap, PasswordInput } from '@mantine/core'

export function UpdatePassword() {
  const form = useForm<App.Data.Auth.PasswordData>({
    current_password: '',
    password: '',
    password_confirmation: '',
  })
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

          form.put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => form.reset(),
            onError: (errors) => {
              if (errors.password) {
                form.reset('password', 'password_confirmation')
              }

              if (errors.current_password) {
                form.reset('current_password')
              }
            },
          })
        }}
      >
        <div className="flex flex-col gap-5">
          <FocusTrap active={Boolean(form.errors.current_password)}>
            <PasswordInput
              required
              name="current_password"
              label="Current Password"
              placeholder="Current Password"
              value={form.data.current_password}
              error={form.errors.current_password}
              onChange={(event) => {
                form.setData('current_password', event.target.value)
              }}
            />
          </FocusTrap>

          <FocusTrap active={Boolean(form.errors.password)}>
            <PasswordInput
              required
              name="password"
              label="Password"
              placeholder="Password"
              value={form.data.password}
              error={form.errors.password}
              onChange={(event) => {
                form.setData('password', event.target.value)
              }}
            />
          </FocusTrap>

          <PasswordInput
            required
            name="password_confirmation"
            label="Confirm Password"
            placeholder="Confirm Password"
            value={form.data.password_confirmation}
            error={form.errors.password_confirmation}
            onChange={(event) => {
              form.setData('password_confirmation', event.target.value)
            }}
          />
        </div>
        <div>
          <Button type="submit" loading={form.processing}>
            Update password
          </Button>
        </div>
      </form>
    </section>
  )
}
