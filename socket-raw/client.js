let socket = new WebSocket("ws://localhost:8080")
socket.onmessage = message => {
    console.log(message)
    $(".console").append(`<p class="server">[Server]:${message.data}</p>`)}



$(document).ready(function() {
$(".send").on("click",function(){

    const message1 = $(".messageBox").val()
   socket.send(message1)
   $(".console").append(`<p class="client">[client12]:${message1}</p>`)
  

})
})
