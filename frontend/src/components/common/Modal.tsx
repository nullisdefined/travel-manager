import React from 'react'
import { FiX } from 'react-icons/fi'

type Props = {
  title: string
  children: React.ReactNode
  closeModal: () => void
}

// (임시): 페이지 컨포넌트의 컨테이너에 relative를 반드시 추가해야 합니다
function Modal({ title, children, closeModal }: Props) {
  return (
    <div className="container absolute left-0 top-[-80px] z-50 flex h-screen items-center justify-center overflow-hidden bg-black bg-opacity-60 px-6">
      <div className="relative flex max-h-full w-full flex-col overflow-hidden rounded-md bg-gray-50">
        {/* header */}
        <div className="flex items-center justify-between bg-gray-200 p-4">
          <h2 className="font-bold">{title}</h2>
          <button onClick={closeModal}>
            <FiX className="text-lg" />
          </button>
        </div>
        {/* body */}
        <div className="p-4">{children}</div>
      </div>
    </div>
  )
}

export default Modal
