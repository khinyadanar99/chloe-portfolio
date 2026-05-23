import React from 'react'

function Section({id, children}) {
  return (
    <section id={id} className="max-w-6xl mx-auto pb-20 scroll-mt-32">
        {children}
    </section>
  )
}

export default Section