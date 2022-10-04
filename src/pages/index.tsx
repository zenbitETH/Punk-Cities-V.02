import { FC } from 'react'
import { APP_NAME } from '@/lib/consts'

import { BookOpenIcon, CodeIcon, ShareIcon } from '@heroicons/react/outline'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import LayoutNC from '@/components/LayoutNC'

const Home: FC = () => {
	return (
		<div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-night-100 sm:items-center py-4 sm:pt-0 font-exo">
			
			<ThemeSwitcher className="absolute bottom-6 right-6" />
			<LayoutNC/>
			
			

		</div>
	)
}

export default Home
