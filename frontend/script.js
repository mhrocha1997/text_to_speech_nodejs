$(document).ready(function(){
    refreshComments();
})
 function listen(id){

    var audio = new Audio(`./audio/${id}.wav`);
    audio.play();

}

function refreshComments(){
    let xhttp = new XMLHttpRequest();
    
    xhttp.open('GET','http://localhost:8080/comments',true);
    xhttp.send();
    
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status ==200){
       
            let response = JSON.parse(this.responseText);
            let comments = document.getElementById("comments");
            comments.innerHTML = "";
            for(let i = 0;i<response.length;i++){
                let id = response[i].id;
                let comment = response[i].comment;

                data = JSON.stringify({id: id, comment: comment});
                comments.innerHTML = comments.innerHTML + ` 
                            <div class="card">
                                <div class="card-body">
                                    <p class="card-text"> ${comment}</p>
                                    <button onClick="listen(${id})" id="${id}" class="btn btn-primary">Ouvir</button>
                                </div>
                            </div>
                            `;  
                $(`#${id}`).prop('disabled',true);

                $.ajax({
                    url: "http://localhost:8080/play",
                    type: 'post',
                    datatype: 'json',
                    contentType: 'application/json',
                    data: data,
                    success: function(){
                        setTimeout(function(){ 
                            $(`#${id}`).prop('disabled',false);
                        }, 2000);
                    }
                });

                
                
            
            }
        }
    }

    
}


function register(){
    
    let comment = document.getElementById('comment').value;
    
    data = JSON.stringify({comment: comment});
    
    $.ajax({
        url: "http://localhost:8080/create",
        type: 'post',
        datatype: 'json',
        contentType: 'application/json',
        data: data
    });
 

    refreshComments();

}