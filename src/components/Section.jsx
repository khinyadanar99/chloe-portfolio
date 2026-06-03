import React from 'react'

function Section({id, children}) {
  return (
    <section id={id} className="w-[90%] max-w-6xl mx-auto pb-30 scroll-mt-32">
        {children}
    </section>
  )
}

export default Section