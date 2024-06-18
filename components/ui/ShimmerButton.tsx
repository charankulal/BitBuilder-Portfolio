'use client'
import React from 'react'

const ShimmerButton = ({title, icon, position, handleClick, otherClasses}:{
  title: string,
  icon: React.ReactNode,
  position:string,
  handleClick?:()=>void,
  otherClasses?:string
}) => {
  return (
    <button
      onClick={handleClick}
      className={`inline-flex h-12 animate-shimmer items-center justify-center
      rounded-md border border-slate-100 mt-8
      bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%]
      px-6 font-medium text-slate-00 transition-colors focus:outline-none focus:ring-2
      focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-xl ${otherClasses}`}>
      {position === 'left' && icon}
      <span>{title}</span>
      {position === 'right' && icon}
    </button>
  )
}

export default ShimmerButton
