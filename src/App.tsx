import { twMerge } from 'tailwind-merge'
import { useEffect, useState } from 'react'
import { QRCode } from 'react-qrcode-logo'
import { GreenNationLogo } from './assets/icons/GreenNationLogo.tsx'
import Footer from './components/Footer.tsx'
import { Logo } from './assets/icons/Logo.tsx'

function App() {
  const [prevScrollPos, setPrevScrollPos] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [prevScrollPos])

  return (
    <main className={twMerge('font-poppins')}>
      <div className='fixed top-0 z-[100] w-full'>
        <div
          className={twMerge('relative z-[100]', prevScrollPos ? 'backdrop-blur-[15px]' : 'backdrop-blur-[3px]')}
          style={{ background: 'transparent' }}
        >
          <div className='container mx-auto flex w-full items-center justify-between px-4 pt-5 lg:px-0 lg:pb-5 lg:pt-6 custom_xl:max-w-[1376px] custom_xxl:max-w-[1400px]'>
            <div className='flex shrink cursor-pointer items-center gap-[9px]'>
              <Logo className='h-[19.329px] w-[19.329px] lg:h-[30px] lg:w-[30px] custom_xl:h-[40px] custom_xl:w-[40px]' />

              <div className='block'>
                <GreenNationLogo
                  color='black'
                  className='w-[143.732px] lg:w-[200px] xl:w-[221.128px] custom_xl:w-[290px]'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={'bg-white -mb-[290px] pb-[290px] px-2 pt-10 md:pt-0 md:px-0'}>
        <div className={'h-[100vh] text-center flex items-center justify-center flex-col'}>
          <QRCode
            value='https://store.greennation.green/'
            size={415}
            qrStyle={'fluid'}
            logoImage={'./gn-logo.png'}
            logoWidth={120}
            logoHeight={120}
            bgColor={'#ffffff'}
            eyeRadius={30}
            eyeColor={'#43E8B3'}
          />
          <h1 className={'text-[23px] md:text-[56px] font-bold text-center mt-[50px] md:mt-[115px]'}>
            Utilisez votre téléphone pour ouvrir le lien.
          </h1>
          <p className={'text-[14px] md:text-[26px] text-center'}>
            Scannez le code QR ou ouvrez la page sur votre téléphone et cliquez sur le bouton pour aller sur l’app Green
            Nation.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default App
