async function funcName(url){
    try{

    
    const response = await fetch(url);
    var data = await response.json();
   // console.log(data);
    const element = document.getElementsByTagName("body")[0];
    let ele=`<div id="" class="maincon ml-0  mb-5" >
            <div class="row" id="header"> <h1 class="col text-center font-italic">          <span class="text-light">Ice</span> & <span class="" style="color:red">Fire</span>       </h1>
            </div> `;
            var colo=['lightblue','lightskyblue','lightsalmon'];
    for( var d in data)
    {const para = document.createElement("div");
    para.className="ml-0 mb-5";
         ele+=`<div class="container border mt-5 py-5 border-primary " style="background-color:${colo[d%colo.length]}">
        <div class="row"><div class="col-md-3 font-weight-bold">URL:</div><div class="col"><a href=${data[d].url}>`+data[d].url+`</a></div></div>
        <div class="row"><div class="col-md-3 font-weight-bold">ISBN:</div><div class="col">`+data[d].isbn+`</div></div>
        <div class="row"><div class="col-md-3 font-weight-bold">Name:</div><div class="col">`+data[d].name+`</div></div>
        <div class="row"><div class="col-md-3 font-weight-bold">Number Of Pages:</div><div class="col">`+data[d].numberOfPages+`</div></div>
        <div class="row"><div class="col-md-3 font-weight-bold">Authors:</div><div class="col">`+data[d].authors+`</div></div>
        <div class="row"><div class="col-md-3 font-weight-bold">Publishers:</div><div class="col">`+data[d].publisher+`</div></div>
        <div class="row"><div class="col-md-3 font-weight-bold">Date Of Release:</div><div class="col">`+data[d].released+`</div></div>
        <div class="row"><div class="col-md-3 font-weight-bold">Characters:</div><div class="col">`;
         console.log(data[d].name);
            let charar=[];
            for(var char in data[d].characters)
         {
             console.log(data[d].characters[char]);
             if(charar.length>5)
            { break;}
             let resp=await fetch(data[d].characters[char]);
             var data1=await resp.json();
             if(data1.name!='' && data1.name.toString().trim()!='')
            charar.push(data1.name);

         }   
         ele+=charar.sort().toString();
        ele+=`</div></div>
        </div>`;
        
        
    }
    ele+='</div>';
    //document.getElementById('spinner').style.display="none";
    element.innerHTML=ele;
}catch(err) {
    document.getElementsByTagName("body")[0].innerHTML = err.message;
  }

    
    }