let trigger = $('#trigger')
let board = $('#board')
let loaded = false

trigger.on('click', () => {
  if (board.is(':visible')) {
    board.slideUp()
  } else {
    // 首次加载情况，实现资源仅加载一次
    if (!loaded) {
      board.load('./board.html')
      board.slideDown()
      loaded = true
    } else {
      board.slideDown()
    }
  }
})
  
  
  
  