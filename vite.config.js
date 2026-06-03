import { defineConfig } from 'vite';

export default defineConfig({
    root: 'src',
    base: '/WebLottery/',
    build: {
        outDir: '../dist',
        emptyOutDir: true
    }
})