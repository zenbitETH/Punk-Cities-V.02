import { FC } from 'react'
import { APP_NAME } from '@/lib/consts'

import { BookOpenIcon, CodeIcon, ShareIcon } from '@heroicons/react/outline'
import ThemeSwitcher from '@/components/ThemeSwitcher'

import Layout from '../components/LayoutNC';

const Home: FC = () => {
	return (
		<div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center py-4 sm:pt-0">
			
			<ThemeSwitcher className="absolute bottom-6 right-6" />
			<Layout/>
			
			

		</div>
	)
}

export default Home
