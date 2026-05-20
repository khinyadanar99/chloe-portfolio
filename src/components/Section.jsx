import React from 'react'

function Section({children}) {
  return (
    <section className="max-w-6xl mx-auto pb-20">
        {children}
    </section>
  )
}

export default Section