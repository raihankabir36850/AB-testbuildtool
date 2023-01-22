const deliveryBanner = (id) => {
  const htmlStr = `
    <div class="${id}__deliverybanner">
        <div class="${id}__deliverybanner__content__image">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="22" viewBox="0 0 36 22" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M29.8169 1.97888H7.9809V6.4155H2.65659C2.45066 6.4155 2.27271 6.56164 2.22956 6.7662L1.01939 12.5034C1.00213 12.5852 0.996352 12.6691 1.00222 12.7526L1.43009 18.838H4.49541C4.48993 18.7648 4.48713 18.6908 4.48713 18.6162C4.48713 17.0235 5.75806 15.7324 7.32582 15.7324C8.89358 15.7324 10.1645 17.0235 10.1645 18.6162C10.1645 18.6908 10.1617 18.7648 10.1562 18.838H20.6541C20.6486 18.7648 20.6458 18.6908 20.6458 18.6162C20.6458 17.0235 21.9167 15.7324 23.4845 15.7324C25.0522 15.7324 26.3231 17.0235 26.3231 18.6162C26.3231 18.6908 26.3286 18.7648 26.3231 18.838H29.8169V1.97888ZM8.85434 8.19015H3.61369L2.74025 13.0704H8.85434V8.19015Z" fill="#427E2C"/>
            <path d="M26.3231 18.838C26.3286 18.7648 26.3231 18.6908 26.3231 18.6162C26.3231 17.0235 25.0522 15.7324 23.4845 15.7324C21.9167 15.7324 20.6458 17.0235 20.6458 18.6162C20.6458 18.6908 20.6486 18.7648 20.6541 18.838M26.3231 18.838C26.2116 20.3271 24.9788 21.5 23.4845 21.5C21.9902 21.5 20.7656 20.3271 20.6541 18.838M26.3231 18.838H29.8169V1.97888H7.9809V6.4155H2.65659C2.45066 6.4155 2.27271 6.56164 2.22956 6.7662L1.01939 12.5034C1.00213 12.5852 0.996352 12.6691 1.00222 12.7526L1.43009 18.838H4.49541M20.6541 18.838H10.1562M10.1562 18.838C10.1617 18.7648 10.1645 18.6908 10.1645 18.6162C10.1645 17.0235 8.89358 15.7324 7.32582 15.7324C5.75806 15.7324 4.48714 17.0235 4.48714 18.6162C4.48714 18.6908 4.48993 18.7648 4.49541 18.838M10.1562 18.838C10.0447 20.3271 8.8201 21.5 7.32582 21.5C5.83153 21.5 4.60691 20.3271 4.49541 18.838M3.61369 8.19015H8.85434V13.0704H2.74025L3.61369 8.19015Z" stroke="#427E2C"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M25.6337 5.23235C25.6337 4.71896 26.0499 4.30277 26.5633 4.30277H33.0703C33.5837 4.30277 33.9999 4.71896 33.9999 5.23235C33.9999 5.74574 33.5837 6.16193 33.0703 6.16193H26.5633C26.0499 6.16193 25.6337 5.74574 25.6337 5.23235Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M25.6337 9.88024C25.6337 9.36684 26.0499 8.95066 26.5633 8.95066H33.0703C33.5837 8.95066 33.9999 9.36684 33.9999 9.88024C33.9999 10.3936 33.5837 10.8098 33.0703 10.8098H26.5633C26.0499 10.8098 25.6337 10.3936 25.6337 9.88024Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.0985 6.16193C25.3284 6.16193 24.7041 6.7862 24.7041 7.55629C24.7041 8.32638 25.3284 8.95066 26.0985 8.95066H32.6055C33.3756 8.95066 33.9999 8.32638 33.9999 7.55629C33.9999 6.7862 33.3756 6.16193 32.6055 6.16193H26.0985ZM32.6055 6.62671H26.0985C25.5851 6.62671 25.1689 7.0429 25.1689 7.55629C25.1689 8.06968 25.5851 8.48587 26.0985 8.48587H32.6055C33.1189 8.48587 33.5351 8.06968 33.5351 7.55629C33.5351 7.0429 33.1189 6.62671 32.6055 6.62671ZM25.6337 7.55629C25.6337 7.2996 25.8418 7.0915 26.0985 7.0915H32.6055C32.8622 7.0915 33.0703 7.2996 33.0703 7.55629C33.0703 7.81299 32.8622 8.02108 32.6055 8.02108H26.0985C25.8418 8.02108 25.6337 7.81299 25.6337 7.55629Z" fill="#427E2C"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.0985 6.62671H32.6055C33.1189 6.62671 33.5351 7.0429 33.5351 7.55629C33.5351 8.06968 33.1189 8.48587 32.6055 8.48587H26.0985C25.5851 8.48587 25.1689 8.06968 25.1689 7.55629C25.1689 7.0429 25.5851 6.62671 26.0985 6.62671ZM26.0985 7.0915C25.8418 7.0915 25.6337 7.2996 25.6337 7.55629C25.6337 7.81299 25.8418 8.02108 26.0985 8.02108H32.6055C32.8622 8.02108 33.0703 7.81299 33.0703 7.55629C33.0703 7.2996 32.8622 7.0915 32.6055 7.0915H26.0985Z" fill="#427E2C"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.0985 1.51404C25.3284 1.51404 24.7041 2.13832 24.7041 2.9084C24.7041 3.67849 25.3284 4.30277 26.0985 4.30277H32.6055C33.3756 4.30277 33.9999 3.67849 33.9999 2.9084C33.9999 2.13832 33.3756 1.51404 32.6055 1.51404H26.0985ZM32.6055 1.97883H26.0985C25.5851 1.97883 25.1689 2.39501 25.1689 2.9084C25.1689 3.4218 25.5851 3.83798 26.0985 3.83798H32.6055C33.1189 3.83798 33.5351 3.4218 33.5351 2.9084C33.5351 2.39501 33.1189 1.97883 32.6055 1.97883ZM25.6337 2.9084C25.6337 2.65171 25.8418 2.44362 26.0985 2.44362H32.6055C32.8622 2.44362 33.0703 2.65171 33.0703 2.9084C33.0703 3.1651 32.8622 3.37319 32.6055 3.37319H26.0985C25.8418 3.37319 25.6337 3.1651 25.6337 2.9084Z" fill="#427E2C"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.0985 1.97883H32.6055C33.1189 1.97883 33.5351 2.39501 33.5351 2.9084C33.5351 3.4218 33.1189 3.83798 32.6055 3.83798H26.0985C25.5851 3.83798 25.1689 3.4218 25.1689 2.9084C25.1689 2.39501 25.5851 1.97883 26.0985 1.97883ZM26.0985 2.44362C25.8418 2.44362 25.6337 2.65171 25.6337 2.9084C25.6337 3.1651 25.8418 3.37319 26.0985 3.37319H32.6055C32.8622 3.37319 33.0703 3.1651 33.0703 2.9084C33.0703 2.65171 32.8622 2.44362 32.6055 2.44362H26.0985Z" fill="#427E2C"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.0985 10.8098C25.3284 10.8098 24.7041 11.4341 24.7041 12.2042C24.7041 12.9743 25.3284 13.5985 26.0985 13.5985H32.6055C33.3756 13.5985 33.9999 12.9743 33.9999 12.2042C33.9999 11.4341 33.3756 10.8098 32.6055 10.8098H26.0985ZM32.6055 11.2746H26.0985C25.5851 11.2746 25.1689 11.6908 25.1689 12.2042C25.1689 12.7176 25.5851 13.1338 26.0985 13.1338H32.6055C33.1189 13.1338 33.5351 12.7176 33.5351 12.2042C33.5351 11.6908 33.1189 11.2746 32.6055 11.2746ZM25.6337 12.2042C25.6337 11.9475 25.8418 11.7394 26.0985 11.7394H32.6055C32.8622 11.7394 33.0703 11.9475 33.0703 12.2042C33.0703 12.4609 32.8622 12.669 32.6055 12.669H26.0985C25.8418 12.669 25.6337 12.4609 25.6337 12.2042Z" fill="#427E2C"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.0985 11.2746H32.6055C33.1189 11.2746 33.5351 11.6908 33.5351 12.2042C33.5351 12.7176 33.1189 13.1338 32.6055 13.1338H26.0985C25.5851 13.1338 25.1689 12.7176 25.1689 12.2042C25.1689 11.6908 25.5851 11.2746 26.0985 11.2746ZM26.0985 11.7394C25.8418 11.7394 25.6337 11.9475 25.6337 12.2042C25.6337 12.4609 25.8418 12.669 26.0985 12.669H32.6055C32.8622 12.669 33.0703 12.4609 33.0703 12.2042C33.0703 11.9475 32.8622 11.7394 32.6055 11.7394H26.0985Z" fill="#427E2C"/>
        </svg>
        </div>
        <div class="${id}__deliverybanner__content">
            <div class="${id}__deliverybanner__content__text">
                <h2 class="${id}__deliverybanner__content__text__title">Fastest Delivery</h2>
                <p class="${id}__deliverybanner__content__text__description"><b>2-3 day</b> delivery as standard (<a target="_blank" href="/help/delivery">learn more</a>)</p>
            </div>
        </div>
    </div>
    `;
  return htmlStr.trim();
};

export default deliveryBanner;
