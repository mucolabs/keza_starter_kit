<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        {{-- <title inertia>{{ config('app.name', 'Keza') }}</title> --}}
        <title inertia>A minimalist, beautiful, and production-ready starter kit - {{config('app.name', 'Keza')}}</title>
        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite([
            'resources/assets/css/app.css',
            'resources/assets/css/fonts.css',
            'resources/app.tsx',
            "resources/views/pages/{$page['component']}.tsx"
        ])
        @inertiaHead

        <script data-mantine-script="true">
            try {
                var _colorScheme = window.localStorage.getItem("mantine-color-scheme-value");
                var colorScheme = _colorScheme === "light" || _colorScheme === "dark" || _colorScheme === "auto" ? _colorScheme : "light";
                var computedColorScheme = colorScheme !== "auto" ? colorScheme : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
                document.documentElement.setAttribute("data-mantine-color-scheme", computedColorScheme);
            } catch (e) { }
        </script>
    </head>
    <body  class="font-sans antialiased selection:bg-brand-50 selection:text-brand-500 text-slate-800 min-h-dvh" >
            @inertia
        </body>
</html>
