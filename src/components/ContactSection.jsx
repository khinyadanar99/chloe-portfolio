import React from 'react'
import Section from './Section'
import Title from './Title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function ContactSection() {
  	return (
		<Section id="contact">
			<Title bgTitle="Connect" mainTitle="Contact"></Title>
			<div className='grid grid-cols-9 glass_card p-5 sm:p-15'>
				<div className='col-span-9 lg:col-span-4 text-center lg:text-left'>
					<h3 className="text-4xl! md:text-6xl font-bold leading-tight mb-8">
					Let's <span className='bg-linear-to-r from-purple-500 via-pink-400 to-blue-400 bg-clip-text text-transparent'>Build {" "}</span>
					<br />
					Something{" "}
					<span className="bg-linear-to-r from-purple-500 via-pink-400 to-blue-400 bg-clip-text text-transparent">
						Amazing{" "}
					</span>
					<br className='hidden lg:block'/>
					<span className="bg-linear-to-r from-purple-500 via-pink-400 to-blue-400 bg-clip-text text-transparent">
						Together
					</span>
					</h3>
	
					<div className="w-12 h-1 mx-auto lg:mx-0 bg-linear-to-r from-pink-500 to-purple-500 rounded-full mb-6" />
	
					<p className="text-gray-600 leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
					I'm currently open to Software Engineering,
					Web Development and UI/UX opportunities.
					Let's connect and create something impactful.
					</p>
	
					
				</div>
				<div className="hidden lg:flex justify-center col-span-1">
					<div className="relative h-full min-h-75 w-px bg-purple-200">
						<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-white" />
					</div>
				</div>
				<div className="space-y-6 col-span-9 lg:col-span-4">
							  
					<a href="mailto:chloe.aung07@email.com" className="flex items-center gap-5 p-3 sm:p-6 glass_card hover:scale-105">
						<div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center">
							<FontAwesomeIcon
							icon={faEnvelope}
							className="text-purple-500 text-xl"
							/>
						</div>

						<div>
							<h4 className="font-semibold text-lg">
							Email
							</h4>
							<p className="text-gray-600">
							chloe.aung07@gmail.com
							</p>
						</div>
					</a>

					<a href="https://github.com/khinyadanar99" target="_blank" rel="noreferrer" className="flex items-center gap-5 p-3 sm:p-6 glass_card hover:scale-105">
						<div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center">
							<FontAwesomeIcon
							icon={faGithub}
							className="text-purple-500 text-xl"
							/>
						</div>

						<div>
							<h4 className="font-semibold text-lg">
							GitHub
							</h4>
							<p className="text-gray-600">
							github.com/khinyadanar99
							</p>
						</div>
					</a>
					
					<a href="https://linkedin.com/in/chloe-aung" target="_blank" rel="noreferrer" className="flex items-center gap-5 p-3 sm:p-6 glass_card hover:scale-105">
						<div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center">
							<FontAwesomeIcon
							icon={faLinkedin}
							className="text-purple-500 text-xl"
							/>
						</div>

						<div>
							<h4 className="font-semibold text-lg">
							LinkedIn
							</h4>
							<p className="text-gray-600">
							linkedin.com/in/chloe-aung
							</p>
						</div>
					</a>
				</div>
				
			</div>
		</Section>
  	)
}

export default ContactSection