

const leftArrow = document.getElementById('leftArrow');
if (leftArrow) {
  leftArrow.addEventListener('click', () => {
    sessionStorage.setItem('navDirection', 'rightToLeft'); 
    location.reload();
  });
}

const rightArrow = document.getElementById('rightArrow');
if (rightArrow) {
  rightArrow.addEventListener('click', () => {
    sessionStorage.setItem('navDirection', 'leftToRight');
    location.reload();
  });
}


document.addEventListener('DOMContentLoaded', () => {
  const videoElement = document.querySelector('video');
  const navigationDirection = sessionStorage.getItem('navDirection'); 

  if (videoElement) {
    if (navigationDirection === 'leftToRight') {
      videoElement.style.animation = 'WalkingClaireLefttoRight 5s ease-in-out forwards';
    } else if (navigationDirection === 'rightToLeft') {
      videoElement.style.animation = 'WalkingClaireRighttoLeft 5s ease-in-out forwards';
    }
  }
});
