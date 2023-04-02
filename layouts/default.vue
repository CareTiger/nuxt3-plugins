<template>
    <div class="min-h-screen">
        <header>
            <div
                class="flex w-screen bg-gray-100 h-16 px-4 text-gray-800 items-center justify-between"
            >
                <NuxtLink to="/">Nuxt3-Plugins</NuxtLink>
            </div>
        </header>
        <main class="p-4">
            <slot></slot>
        </main>
        <footer
            class="fixed bottom-0 text-center w-full text-gray-700 p-2 text-xs z-10 bg-white py-4 border-t"
        >
            &copy; Sampyl - 2023
        </footer>
    </div>
</template>
<style>
html {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
        sans-serif;
}
</style>
