import React from 'react'

interface Props {
  appDomain: string | undefined;
}

const Footer = ({ appDomain }: Props) => {
  return (
    <footer className='w-full bg-slate-900 py-10 px-4'>
      <div className='max-w-[1200px] w-full mx-auto'>
        <h1 className='text-white text-2xl py-6'>
          <a href={appDomain}>
            <img src="/images/evelogo_text001.png" alt="さがそうイベントの場 EVENT NOVA" className='max-w-[180px] bg-white p-4 hover:opacity-75 transition-all ease-in-out' />
          </a>
        </h1>
        <ul className='text-white text-sm underline flex flex-col gap-4 text-sm'>
          <li>
            <a href="https://www.tohgashi.co.jp/pdf/privacypolicy2024.10.pdf" target='_blank'>
              プライバシーポリシー
            </a>
          </li>
          <li>
            <a href="https://www.tohgashi.co.jp/contact/" target='_blank'>
              お問い合わせ
            </a>
          </li>
          <li>
            <a href="https://www.tohgashi.co.jp/" target='_blank'>
              運営会社
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer