import React from 'react'


function EducationCard({image, degree, institution, graduation_year, award, modules}) {
	return (
    	<div className='glass_card p-5'>
			<img className="aspect-video" src={image} alt="university logo"></img>
			<div className='mt-3'>
				<h3>{degree}</h3>
				<p>{institution}</p>
				<div className='flex justify-between mt-3'>
					<p><b>Award:</b> {award}</p>
					<p><b>Graduated Year:</b> {graduation_year}</p>
				</div>
			</div>
    	</div>
  	)
}

export default EducationCard
