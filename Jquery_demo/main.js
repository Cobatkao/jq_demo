let trigger = $('#trigger')
let board = $('#board')
let loaded = false

let form = $('#search')
let input = $('input#username')
let reuslt = $('#result')
let username;

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

form.on('submit', (e) => {
  e.preventDefault()
  username = input.val()
  $.ajax('https://api.github.com/users/' + username)
    .done(((data) => {
      let html = 
        "<div>用户名：" + data.login + "</div>" +
        "<div>介绍：" + (data.bio || '这用户很懒，什么都木有填') + "</div>"
      reuslt.html(html)
    }))
})
  
// 常规用法
// $.ajax('https://api.github.com/users/CobatKao', {
//   method: 'get',
//   data: {
//     username: 'whh',
//     password: 'asdf'
//   },
//   success: function() {
//     // 成功回调
//     console.log(成功)
//   },
//   error: function() {
//     // 失败回调
//     console.log(失败)
//   }
// })
  
  
  