var textWrapper = document.querySelector('.ml1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml1 .letter',
    scale: [0.3,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 80,
    delay: (el, i) => 50 * (i+1)
  })
  .add({
    targets: '.ml1 .line',
    scaleX: [0,1],
    opacity: [0.0,0.4],
    easing: "easeOutExpo",
    duration: 4000
  })