import { useEffect, useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigation = useNavigate()

  useLayoutEffect(() => {
    document.title = 'Green Nation'
  }, [])

  useEffect(() => {
    const APP_STORE_URL = 'https://apps.apple.com/app/green-nation/id1671758299'
    const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=green.greennation.app'
    const APP_DEEP_LINK = 'greennation://'
    const QP_PAGE = '/app'

    const userAgent = window.navigator.userAgent
    const isAndroid = /android/i.test(userAgent)
    // @ts-expect-error This is a hack to check if the user agent is iOS
    const isiOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream
    const fallbackUrl = isiOS ? APP_STORE_URL : isAndroid ? PLAY_STORE_URL : QP_PAGE

    // Deep Link
    if (isAndroid || isiOS) {
      window.location.href = APP_DEEP_LINK
    } else {
      navigation(QP_PAGE)
      return
    }

    // Set a fallback to redirect to the store if the app is not installed
    setTimeout(() => {
      window.location.href = fallbackUrl
    }, 4000)
  }, [])

  return (
    <div className='flex h-screen justify-center items-center gap-4'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='40'
        height='40'
        viewBox='0 0 40 40'
        fill='none'
        className='w-[19.329px] h-[19.329px] lg:h-[30px] lg:w-[30px] custom_xl:w-[40px] custom_xl:h-[40px]'
      >
        <g clipPath='url(#clip0_87_359)'>
          <path
            d='M35.2631 11.645L31.3582 15.2517V3.73828C33.1315 5.04382 34.6838 6.64753 35.9443 8.47699C36.6731 9.53548 36.3398 10.6951 35.2642 11.645H35.2631Z'
            fill='#3651F3'
          ></path>
          <path
            d='M39.5024 19.9976C39.5024 26.6978 36.2879 32.6292 31.3582 36.2583V24.4296C31.3582 20.9539 33.0069 17.6964 35.7771 15.6955L38.5202 13.7148C39.1577 15.6902 39.5024 17.8008 39.5024 19.9976Z'
            fill='#3651F3'
          ></path>
          <path
            d='M17.9611 10.6994L17.9631 10.7015C18.0483 11.2531 18.2591 14.3189 20.8932 16.4987C23.0975 18.3239 25.6288 18.8308 26.3546 18.7925V1.08461C23.4224 0.0474155 20.1716 -0.291216 16.7899 0.260391C8.61444 1.59788 2.13763 8.18202 0.779555 16.5615C-1.25963 29.1239 8.13164 39.9984 20.0003 39.9984C22.2253 39.9984 24.3631 39.6161 26.3546 38.9091V28.6042C26.3546 28.5691 26.3546 28.534 26.3525 28.5009H26.3546V27.7896C26.3546 23.4289 22.9064 19.8925 18.6557 19.8925H15.4318C15.5979 19.8978 16.5365 19.9553 17.2654 21.3801C17.8614 22.5451 17.9517 23.9081 17.9621 24.5077V28.5009H17.9642V30.6445C13.6096 29.5286 10.3847 25.4852 10.3847 20.6741C10.3847 15.863 13.6107 11.8218 17.9621 10.6983L17.9611 10.6994ZM17.9611 24.7643V24.5385C17.9621 24.6397 17.9611 24.7174 17.9611 24.7643Z'
            fill='#43E8B3'
          ></path>
        </g>
        <defs>
          <clipPath id='clip0_87_359'>
            <rect width='39' height='40' fill='white' transform='translate(0.5)'></rect>
          </clipPath>
        </defs>
      </svg>
      <div className='block'>
        <svg
          width='290'
          height='30'
          viewBox='0 0 290 30'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='w-[143.732px] xl:w-[221.128px] lg:w-[200px] custom_xl:w-[290px]'
        >
          <g clipPath='url(#clip0_87_346)'>
            <path
              d='M47.0112 18.8833C50.2775 16.5892 51.2108 12.9421 51.2108 10.8244C51.2108 3.23621 46.428 0.765625 39.5454 0.765625H29.6882V29.4127H36.2208V20.5892H40.712C41.5869 22.4715 42.4618 24.295 43.3367 26.1774C44.2699 28.1774 46.1947 29.4127 48.3528 29.4127H52.0857L47.0112 18.8244V18.8833ZM40.1287 15.0597H36.2208V6.35386H40.1287C43.5116 6.35386 44.5615 8.64798 44.5615 10.5892C44.5615 12.5303 43.5116 15.0597 40.1287 15.0597Z'
              fill='white'
            ></path>
            <path
              d='M75.4745 6.41245V0.824219H55.4685V29.4713H75.3579V23.883H62.0011V17.7654H73.3748V12.236H62.0011V6.41245H75.4745Z'
              fill='white'
            ></path>
            <path
              d='M99.6218 6.41245V0.824219H79.6157V29.4713H99.5051V23.883H86.1483V17.7654H97.522V12.236H86.1483V6.41245H99.6218Z'
              fill='white'
            ></path>
            <path
              d='M122.311 0.824219V19.1772L110.82 0.824219H103.821V29.4713H110.354V11.7066L119.394 25.5301C121.028 28.0007 123.711 29.4713 126.685 29.4713H128.843V0.824219H122.427H122.311Z'
              fill='white'
            ></path>
            <path
              d='M161.973 0.824219V19.1772L150.424 0.824219H143.425V29.4713H149.958V11.7066L159.582 26.4125C160.807 28.2948 162.906 29.4713 165.181 29.4713H168.389V0.824219H161.973Z'
              fill='white'
            ></path>
            <path
              d='M189.153 0.824219H180.404L171.014 29.5301H177.78L179.529 24.0595H190.086L191.778 29.5301H198.544L189.153 0.824219ZM180.813 18.3536L184.545 6.35363H184.837L188.453 18.3536H180.813Z'
              fill='white'
            ></path>
            <path
              d='M196.327 0.824219V6.41245H205.193V29.5301H211.667V6.41245H220.533V0.824219H196.269H196.327Z'
              fill='white'
            ></path>
            <path d='M223.683 0.824219V29.4713H230.215V0.824219H223.683Z' fill='white'></path>
            <path
              d='M247.655 0.353516C238.731 0.353516 234.356 5.58881 234.356 15.177C234.356 24.7653 238.731 30.0006 247.655 30.0006C256.579 30.0006 260.895 24.7653 260.895 15.177C260.895 5.58881 256.579 0.353516 247.655 0.353516ZM247.655 24.4712C243.105 24.4712 241.006 21.2947 241.006 15.177C241.006 9.0594 243.164 5.94175 247.655 5.94175C252.146 5.94175 254.304 9.0594 254.304 15.177C254.304 21.2947 252.263 24.4712 247.655 24.4712Z'
              fill='white'
            ></path>
            <path
              d='M283.584 0.824219V19.1772L272.035 0.824219H265.036V29.4713H271.569V11.7066L280.143 24.8242C282.068 27.7066 285.275 29.4713 288.717 29.4713H290V0.824219H283.584Z'
              fill='white'
            ></path>
            <path
              d='M24.2055 14.8235C25.3721 16 26.1303 17.6471 26.1303 19.4118V27.9412C24.3222 28.5882 22.1058 29.1765 19.7144 29.5882C18.1979 29.8235 16.6231 30 14.9899 30C12.3652 30 10.1488 29.5882 8.34071 28.7647C7.11585 28.1765 5.94932 27.3529 4.89944 26.4118C1.92478 23.5882 0 19.5882 0 15.1765C0 6.82353 6.76589 0 15.0483 0C23.3306 0 23.7389 2 26.5969 5.47059L21.2892 9.94118C19.7144 8.05882 17.4397 7 15.0483 7C10.5571 7 6.94087 10.6471 6.94087 15.1765C6.94087 19.7059 10.5571 23.3529 15.0483 23.3529C19.5394 23.3529 18.3146 22.8235 19.6561 21.8824V12.8824C21.4642 12.8824 23.039 13.5882 24.2055 14.8235Z'
              fill='white'
            ></path>
          </g>
          <defs>
            <clipPath id='clip0_87_346'>
              <rect width='290' height='30' fill='white'></rect>
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  )
}

export default Home
