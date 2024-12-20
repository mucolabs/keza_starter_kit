import { Head, Link } from '@inertiajs/react'
import { Button, Container } from '@mantine/core'
import { Background } from '~/components/background'
import { Logo } from '~/components/logo'
import { PageProps } from '~/types'
import { techs } from './data'

export default function HomePage({ user }: PageProps) {
  return (
    <>
      <Head title="A minimalist, beautiful, and production-ready starter kit" />
      <div className="flex min-h-screen w-full justify-center">
        <Background />
        <Container
          size="md"
          className="z-50 flex flex-col items-center justify-center gap-6 py-24"
        >
          <div className="flex flex-col items-center justify-center gap-6">
            <Logo href="/" className="text-4xl" />
            <h1 className="text-pretty text-center font-sans text-4xl font-bold leading-tight text-slate-800 md:text-7xl lg:leading-tight">
              Minimalist & Beautiful Production-Ready Starter Kit
            </h1>
            <p className="mx-auto max-w-2xl text-pretty text-center text-lg md:text-xl">
              Get your project off the ground in just days with a polished,
              modern, and production-ready starter kit built with:
            </p>
          </div>

          {/* Techs */}
          <div className="flex flex-wrap items-center justify-center gap-10 gap-y-0 lg:gap-14">
            {techs.map(({ id, label, href, logo }) => {
              return (
                <a
                  key={id}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  title={label}
                  className="flex items-center opacity-60 grayscale transition hover:opacity-100"
                  href={href}
                >
                  {logo}
                </a>
              )
            })}
          </div>

          <div className="flex justify-center gap-6">
            <Button
              variant="outline"
              color="gray"
              className="bg-white"
              size="md"
              component="a"
              href="https://github.com/mucolabs/keza_starter_kit"
              target="_blank"
            >
              Explore the source code
            </Button>
            {user?.email ? (
              <Button
                size="md"
                className="drop-shadow-sm"
                component={Link}
                href={route('dashboard')}
              >
                Dashboard
              </Button>
            ) : (
              <Button size="md" component={Link} href={route('login')}>
                Sign in
              </Button>
            )}
          </div>
        </Container>
      </div>
    </>
  )
}
