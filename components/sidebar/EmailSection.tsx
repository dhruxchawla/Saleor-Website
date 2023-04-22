import React from 'react'

import { Button } from '../Button/Button'

function EmailSection() {
  return (
    <>
    <div className="mt-4 mb-4">
        <h2 className="checkout-section-header-active">
          Contact Details
        </h2>
      </div>
        <div className="flex justify-between items-center">
          <p className="text-base">email</p>
          <Button>Sign in</Button>
        </div>
        <form method="post">
          <div className="grid grid-cols-12 gap-4 w-full">
            <div className="col-span-full">
              <input
                type="text"
                autoComplete="email"
                className="w-full border-gray-300 rounded-lg shadow-sm text-base"
                spellCheck={false}
              />
              <p></p>
            </div>
            <div className="col-span-full">
              <button type="submit" className="btn-checkout-section">
                save
              </button>
            </div>
          </div>
        </form>
    </>
  )
}

export default EmailSection