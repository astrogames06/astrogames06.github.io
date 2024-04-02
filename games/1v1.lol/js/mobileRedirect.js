var userAgent=navigator.userAgent||navigator.vendor||window.opera;if(/bot|crawler|spider|crawling/i.test(userAgent)){}
else if(/windows phone/i.test(userAgent)){}
else if(/android/i.test(userAgent)){}
else if((/iPad|iPhone|iPod/.test(userAgent)&&!window.MSStream)||(navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform))){}