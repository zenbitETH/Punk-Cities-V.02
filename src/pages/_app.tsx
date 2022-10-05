import 'tailwindcss/tailwind.css'
import '../styles/Hud.css'
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import Web3Provider from '@/components/Web3Provider'
import LayoutNC from '@/components/LayoutNC'
import ThemeSwitcher from '@/components/ThemeSwitcher'

const App = ({ Component, pageProps }) => {
	return (
		<ThemeProvider attribute="class">
			<Web3Provider>
				<div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-night-100 sm:items-center py-4 sm:pt-0 font-exo">
					<LayoutNC/>
					<ThemeSwitcher className="absolute bottom-6 right-6" />
					<Component {...pageProps} />
				</div>
			</Web3Provider>
		</ThemeProvider>
	)
}

export default App
