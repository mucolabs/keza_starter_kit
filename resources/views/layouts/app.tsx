import { Head, Link, usePage } from '@inertiajs/react'
import { Avatar, Container, Menu } from '@mantine/core'
import { ReactNode } from 'react'
import { Icon } from '~/components/icons'
import { Logo } from '~/components/logo'
import { useToast } from '~/hooks/use_toast'
import { PageProps } from '~/types'

type AppLayoutProps = Readonly<{ children: ReactNode }> & {
  title: string
}

export function AppLayout({ title, children }: AppLayoutProps) {
  const { toast, user } = usePage<PageProps & App.Data.ShareData>().props

  useToast(toast)

  return (
    <div className="flex min-h-dvh flex-col bg-zinc-100">
      <Head title={title} />
      <header className="bg-white py-3 ring-1 ring-zinc-950/5">
        <Container size="md" className="flex items-center justify-between">
          <Logo href={route('dashboard')} />
          <Menu>
            <Menu.Target>
              <Avatar
                color="initials"
                name={user.name}
                className="hover:cursor-pointer"
              />
            </Menu.Target>
            <Menu.Dropdown
              className="rounded-xl border-none shadow-lg outline outline-1 outline-transparent ring-1 ring-zinc-950/5"
              aria-hidden={false}
            >
              <p className="flex flex-col px-3 py-2 text-sm">
                <span className="block font-bold">{user.name}</span>
                <span className="block text-slate-500">{user.email}</span>
              </p>
              <Menu.Divider />
              <Menu.Label>Manage account</Menu.Label>
              <Menu.Item
                leftSection={<Icon name="circle-user-round" />}
                component={Link}
                href={route('user.profile')}
              >
                Profile
              </Menu.Item>
              <Menu.Item
                leftSection={<Icon name="settings" />}
                component={Link}
                href={route('user.settings')}
              >
                Settings
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item
                leftSection={<Icon name="log-out" />}
                color="red"
                href={route('logout')}
                component={Link}
                as="button"
                method="post"
              >
                Logout
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Container>
      </header>

      <main className="my-16 flex h-full flex-1">
        <Container
          size="md"
          className="flex w-full flex-col gap-8 bg-white p-6 ring-1 ring-zinc-950/5 sm:p-10 lg:rounded-2xl lg:p-10"
        >
          {children}
        </Container>
      </main>
    </div>
  )
}
