import React from 'react'

function Title({bgTitle, mainTitle}) {
  return (
    <div className="relative flex items-center justify-center mb-20">
        <h2 className="text-9xl font-bold tracking-[18px] text-black/3 uppercase hidden md:block">{bgTitle}</h2>
        <div className="absolute inset-0 flex items-center justify-center gap-6">
            <div className="w-16 h-1 bg-pink-500 rounded-full"></div>
            <span className="text-purple-900 text-3xl md:text-5xl font-light tracking-[6px]">{mainTitle}</span>
        </div>
    </div>
  )
}

export default Title