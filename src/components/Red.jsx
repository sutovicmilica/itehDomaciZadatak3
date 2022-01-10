import React from 'react'

export default function Red({ children, className }) {
  return (
    <div className={'row mt-4 d-flex align-items-center justify-content-center ' + className || ''}>
      {children}
    </div>
  )
}
