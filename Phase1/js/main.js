var i=1;

function addData() {
    let title = document.getElementById("blog-title").value;
    let description = document.getElementById("blog-textarea").value; 

    if(title=="" || description=="") {
        alert("Please fill in required fileds");
    } 

    else {
        document.getElementById("message").style.display = 'block';
        let titlePTag = document.createElement("p");  
        let aTag = document.createElement("a");
        titlePTag.setAttribute("class","title-grid")
        titlePTag.innerHTML = title;
        aTag.setAttribute("href","#");
        aTag.setAttribute("class","deleteLink");
        aTag.setAttribute("onClick","deleteBlog("+i+")");
        aTag.innerHTML = "X";
        let descriptionPTag = document.createElement("p");
        descriptionPTag.setAttribute("class","description-grid");
        descriptionPTag.innerHTML= description;

        let colTag = document.createElement("div");
        colTag.setAttribute("class","offset-1 col-md-3 col-sm-4 column-grid");
        colTag.setAttribute("id",i);
        //let rowTag = document.createElement("div");
        //rowTag.setAttribute("class","row");
        
        
        // let descriptioncolTag = document.createElement("div");
        // descriptioncolTag.setAttribute("class","col-md-5");
        // let descriptionrowTag = document.createElement("div");
        // descriptionrowTag.setAttribute("class","row");
        i++;
        // console.log("i = " +i);
        colTag.appendChild(titlePTag);
        colTag.appendChild(aTag);
        colTag.appendChild(descriptionPTag);
        //rowTag.appendChild(colTag);
        document.getElementById("row-grid").appendChild(colTag);

        setTimeout(function(){ 
            document.getElementById("message").style.display = 'none'; }, 3000);

        // descriptioncolTag.appendChild(descriptionPTag);
        // descriptionrowTag.appendChild(descriptioncolTag);
        // document.getElementById("blog-grid").appendChild(descriptionrowTag);
        resetData();
    }
}

function resetData() {
    document.getElementById("blog-title").value = '';
    document.getElementById("blog-textarea").value = '';
}

function deleteBlog(value) {
    document.getElementById(value).remove();
    
}