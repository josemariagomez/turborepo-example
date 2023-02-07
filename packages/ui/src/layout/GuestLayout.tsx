import * as React from 'react'

export const GuestLayout = ({children}: React.PropsWithChildren) => {
  return (
    <div className="ui-flex ui-min-h-screen ui-flex-col">
      <header className='ui-bg-zinc-900 ui-text-zinc-300 ui-border-b ui-border-zinc-300 ui-px-4 ui-py-6 ui-flex ui-items-center ui-justify-between'>
        <div className='ui-font-black'>LOGO</div>
        <div className='ui-flex ui-space-x-4 ui-items-center'>
          <div>Enlace 1</div>
          <div>Enlace 2</div>
          <div>Enlace 3</div>
        </div>
      </header>
      <main className="ui-mx-auto ui-w-auto ui-flex-1 ui-flex ui-flex-col ui-items-center ui-justify-center ui-px-4 ui-pt-16 ui-pb-8 sm:ui-pt-24 lg:ui-px-8">
        {children}
      </main>
    </div>
  )
}