/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './lib/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
        display: ['var(--font-outfit)', 'sans-serif'],
      },
      colors: {
        surface: 'var(--bg-primary)',
        'surface-2': 'var(--bg-secondary)',
        'surface-3': 'var(--bg-tertiary)',
        ink: 'var(--text-primary)',
        'ink-2': 'var(--text-secondary)',
        'ink-3': 'var(--text-muted)',
        brand: 'var(--primary)',
        'brand-2': 'var(--secondary)',
        line: 'var(--border)',
        'line-focus': 'var(--border-focus)',
        glass: 'var(--glass-bg)',
        'glass-line': 'var(--glass-border)',
        'warn-bg': 'var(--disclaimer-bg)',
        'warn-text': 'var(--disclaimer-text)',
        'warn-line': 'var(--disclaimer-border)',
        'ok-bg': 'var(--notice-bg)',
        'ok-text': 'var(--notice-text)',
        'ok-line': 'var(--notice-border)',
        field: 'var(--input-bg)',
        'active-bg': 'var(--active-sidebar)',
        'active-text': 'var(--active-sidebar-text)',
        'hover-bg': 'var(--card-hover-bg)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
      },
      transitionTimingFunction: {
        brand: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        fast: '200ms',
        normal: '350ms',
        slow: '500ms',
      },
      keyframes: {
        pageFadeIn: {
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        pulseSuccess: {
          '0%': { boxShadow: '0 0 0 0 rgba(16, 185, 129, 0.4)' },
          '70%': { boxShadow: '0 0 0 15px rgba(16, 185, 129, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(16, 185, 129, 0)' },
        },
      },
      animation: {
        pageFadeIn: 'pageFadeIn var(--transition-slow) forwards',
        scaleIn: 'scaleIn var(--transition-normal) forwards',
        pulseSuccess: 'pulseSuccess 2s infinite',
      },
    },
  },
  plugins: [],
};
