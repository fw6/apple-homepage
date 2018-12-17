var oBanner = document.getElementById('banner'),
  oPicNum = oBanner.getElementsByClassName('pic-num')[0],
  oPics = oBanner.getElementsByClassName('pics')[0],
  aI = oPics.getElementsByTagName('i'),
  aLi = oPicNum.getElementsByTagName('li'),
  oSearch = document.getElementById('searchit'),
  oSearchCover = document.getElementById('search-cover'),
  oSearchBox = document.getElementById('search-box'),
  oSearchCancel = document.getElementById('search-cancel')

var bannerAttr = {
    width: window.getComputedStyle(oBanner).width.replace(/(px)?/gi, ''),
    height: window.getComputedStyle(oBanner).height.replace(/(px)?/gi, '')
  },
  grid = {
    row: 20, // 行
    column: 22 // 列
  },
  aIAttr = {
    width: (bannerAttr.width / grid.column).toFixed(5),
    height: (bannerAttr.height / grid.row).toFixed(5)
  },
  imgSrc = [
    'https://www.apple.com/v/home/dy/images/heroes/holiday/subhead/holiday_hero_subhead_1b_large.jpg',
    'https://www.apple.com/cn/home/images/heroes/holiday/holiday_hero_1c_large.jpg',
    'https://www.apple.com/v/home/dy/images/heroes/holiday/subhead/holiday_hero_subhead_2a_large.jpg'
  ]

oSearch.addEventListener('click', () => {
  searchboxWrapper.style.display = 'block'
  oSearchCover.style.display = 'block'
  oSearchBox.style.display = 'block'
  animation(oSearchCover, {
    opacity: 1,
    left: '50px',
    height: '44px'
  }, {
    timing: 'Circ',
    timingType: 'easeIn',
    duration: 500
  })

  animation(oSearchBox, {
    right: '50%',
    opacity: 1,
    transform: {
      start: function () {
        return {
          translateX: {
            start: 100,
            change: -50,
            unit: '%'
          }
        }
      },
      up: function (start, now, duration, key, timingFn) {
        var transform = ''
        for (var attr in start) {
          var em = 'deg'
          if (attr == 'scale') {
            em = ''
          } else if (attr === 'translateX') {
            em = start[attr].unit
          }
          transform +=
            attr +
            '(' +
            timingFn(
              now,
              start[attr].start,
              start[attr].change,
              duration
            ) +
            em +
            ') '
        }
        this.style.transform = transform
      }
    }
  }, {
    timing: 'Bounce',
    timingType: 'easeIn',
    delay: 100,
    duration: 500
  })
}, false)

var closeInputBox = () => {
  animation(oSearchCover, {
    opacity: 0,
    left: '500px',
    height: '0px'
  }, {
    timing: 'Circ',
    timingType: 'easeOut',
    duration: 500
  }, () => {
    oSearchCover.style.display = 'none'
  })

  animation(oSearchBox, {
    right: 0,
    opacity: 0,
    transform: {
      start: function () {
        return {
          translateX: {
            start: 50,
            change: 50,
            unit: '%'
          }
        }
      },
      up: function (start, now, duration, key, timingFn) {
        var transform = ''
        for (var attr in start) {
          var em = 'deg'
          if (attr == 'scale') {
            em = ''
          } else if (attr === 'translateX') {
            em = start[attr].unit
          }
          transform +=
            attr +
            '(' +
            timingFn(
              now,
              start[attr].start,
              start[attr].change,
              duration
            ) +
            em +
            ') '
        }
        this.style.transform = transform
      }
    }
  }, {
    timing: 'Bounce',
    timingType: 'easeOut',
    delay: 100,
    duration: 500
  }, () => {
    oSearchBox.style.display = 'none'
    searchboxWrapper.style.display = 'none'
  })
}
oSearchCancel.addEventListener('click', closeInputBox, false)

searchboxWrapper.addEventListener('click', (e) => {
  if (e.target === searchboxWrapper) {
    closeInputBox()
  }
}, true)

playvideo.addEventListener('click', () => {
  videoWrapper.style.display = 'block'
  animation(videoWrapper, {
    transform: {
      start: () => ({
        scale: {
          start: 0,
          change: 1
        }
      }),
      up: function (start, now, duration, key, timingFn) {
        var transform = ''
        for (var attr in start) {
          var em = 'deg'
          if (attr == 'scale') {
            em = ''
          }
          transform +=
            attr +
            '(' +
            timingFn(
              now,
              start[attr].start,
              start[attr].change,
              duration
            ) +
            em +
            ') '
        }
        this.style.transform = transform
      }
    }
  }, {
    timing: 'Expo',
    timingType: 'easeIn',
    duration: 500
  }, () => {
    setTimeout(() => {
      videoMedia.play()
    }, 1200)
  })
})

closeVideo.addEventListener('click', () => {
  videoWrapper.style.transformOrigin = 'left top'
  videoMedia.pause()
  animation(videoWrapper, {
    transform: {
      start: () => ({
        scale: {
          start: 1,
          change: -1
        }
      }),
      up: function (start, now, duration, key, timingFn) {
        var transform = ''
        for (var attr in start) {
          var em = 'deg'
          if (attr == 'scale') {
            em = ''
          }
          transform +=
            attr +
            '(' +
            timingFn(
              now,
              start[attr].start,
              start[attr].change,
              duration
            ) +
            em +
            ') '
        }
        this.style.transform = transform
      }
    }
  }, {
    timing: 'Expo',
    timingType: 'easeOut',
    delay: 100,
    duration: 500
  }, () => {
    videoWrapper.style.transformOrigin = 'center'
    videoWrapper.style.display = 'none'
  })
})

function animate() {
  var index = 0
  bannerAttr = {
    width: window.getComputedStyle(oBanner).width.replace(/(px)?/gi, ''),
    height: window.getComputedStyle(oBanner).height.replace(/(px)?/gi, '')
  }
  aIAttr = {
    width: (bannerAttr.width / grid.column).toFixed(5),
    height: (bannerAttr.height / grid.row).toFixed(5)
  }

  // 创建碎片
  for (var i = 0; i < grid.row; i++) {
    for (var j = 0; j < grid.column; j++) {
      var oI = document.createElement('i')
      // i 的宽高
      oI.style.width = aIAttr.width + 'px'
      oI.style.height = aIAttr.height + 'px'
      // i 的背景
      oI.style.backgroundImage = 'url(' + imgSrc[index] + ')'
      oI.style.backgroundPositionX = -aIAttr.width * j + 'px'
      oI.style.backgroundPositionY = -aIAttr.height * i + 'px'
      oI.style.backgroundSize = 'auto ' + bannerAttr.height + 'px'
      // bannerAttr.width + 'px ' + bannerAttr.height + 'px'

      oPics.appendChild(oI)
    }
  }

  // 创建圆点
  for (var i = 0; i < imgSrc.length; i++) {
    var newLi = document.createElement('li')
    oPicNum.appendChild(newLi)
  }
  aLi[index].className = 'on'

  // 给圆圈添加点击事件
  var iLast
  for (var i = 0; i < imgSrc.length; i++) {;
    (function (i) {
      aLi[i].onclick = function () {
        iLast = index
        aLi[iLast].className = ''
        iLast = index = i
        run()
        aLi[iLast].className = 'on'
      }
    })(i)
  }

  // 自动播放
  ;
  (function autoPlay() {
    // _status = false;
    aLi[index].classList.toggle('on')
    index++
    index %= imgSrc.length
    aLi[index].classList.toggle('on')
    run()

    setTimeout(autoPlay, 15000)
  })()

  function run() {
    for (var i = 0, len = aI.length; i < len; i++) {
      animation(
        aI[i], {
          left: parseInt(Math.random() * bannerAttr.width * 2) - bannerAttr.width + 'px',
          top: parseInt(Math.random() * bannerAttr.height * 2) - bannerAttr.height + 'px',
          opacity: 0,
          transform: {
            start: function () {
              return {
                rotate: {
                  start: 0,
                  change: parseInt(Math.random() * 360) + 360
                },
                rotateX: {
                  start: 0,
                  change: parseInt(Math.random() * 360) + 360
                },
                rotateY: {
                  start: 0,
                  change: parseInt(Math.random() * 360) + 360
                },
                scale: {
                  start: 1,
                  change: Math.random() * 2
                }
              }
            },
            up: function (start, now, duration, key, timingFn) {
              var transform = ''
              for (var attr in start) {
                var em = 'deg'
                if (attr == 'scale') {
                  em = ''
                }
                transform +=
                  attr +
                  '(' +
                  timingFn(
                    now,
                    start[attr].start,
                    start[attr].change,
                    duration
                  ) +
                  em +
                  ') '
              }
              this.style.transform = transform
            }
          }
        }, {
          duration: parseInt(Math.random() * 500) + 650
        },
        function () {
          this.style.backgroundImage = 'url(' + imgSrc[index] + ')'
          animation(
            this, {
              left: 0,
              top: 0,
              opacity: 1,
              transform: {
                start() {
                  var scale = Math.random() * 2,
                    rotateX = parseInt(Math.random() * 360) + 360,
                    rotateY = parseInt(Math.random() * 360) + 360,
                    rotateZ = parseInt(Math.random() * 360) + 360
                  return {
                    rotate: {
                      start: rotateZ,
                      change: -rotateZ
                    },
                    rotateX: {
                      start: rotateX,
                      change: -rotateX
                    },
                    rotateY: {
                      start: rotateY,
                      change: -rotateY
                    },
                    scale: {
                      start: scale,
                      change: -scale + 1
                    }
                  }
                },
                up(start, now, duration, key, timingFn) {
                  var transform = ''
                  for (var attr in start) {
                    var em = 'deg'
                    if (attr == 'scale') {
                      em = ''
                    }
                    transform +=
                      attr +
                      '(' +
                      timingFn(
                        now,
                        start[attr].start,
                        start[attr].change,
                        duration
                      ) +
                      em +
                      ') '
                  }
                  this.style.transform = transform
                }
              }
            }, {
              duration: parseInt(Math.random() * 500) + 500
            }
          )
        }
      )
    }
  }
}
window.addEventListener('resize', animate)
animate()