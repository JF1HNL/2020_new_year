console.log("%cあけましておめでとう！", "color:red;font-size:30px;")
const html = {
  to: document.querySelector('.to'),
  body: document.querySelector('.body'),
  from: document.querySelector('.from')
}

function url_read(){
  if(!document.location.search){
    window.location.href = '../'
  }
  var text_ary = document.location.search
    .replace('?', '')
    .split('&')
    .map(function(value){
      return value
        .split('=')
        .map(function(value){
          return decodeURIComponent(value)
        })
    })
  
  var text_object = {}
  for(let i in text_ary){
    text_object[text_ary[i][0]] = text_ary[i][1]
  }
  console.log(text_object)
  
  function make_body_html(e){
    var body_html = ''
    console.log(e)
    var e_ary = e.split('\n')
    console.log(e_ary)
    for(let i in e_ary){
      body_html += `<div>${e_ary[i]}</div>`
    }
    return body_html
  }
  
  html.to.textContent += text_object.to + 'へ'
  html.body.innerHTML = make_body_html(text_object.body);
  html.from.textContent += text_object.from + 'より'
}

url_read()


