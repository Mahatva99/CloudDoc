(function(){
    let btn = document.querySelector("#btnAddFolder");
    let divContainer = document.querySelector("#divContainer");
    let pageTemplates = document.querySelector("#pageTemplates");
    let fid = 0;


    btn.addEventListener("click", function(){
        let fname = prompt("Folder name?");
        if(!fname){
            return;
        }

        let divFolderTemplate = pageTemplates.content.querySelector(".folder");
        let divFolder = document.importNode(divFolderTemplate, true);

        let divName = divFolder.querySelector("[purpose = 'name']");
        divName.innerHTML = fname;
        divFolder.setAttribute("fid", ++fid);

        let spanDelete = divFolder.querySelector("span[action = 'delete']");
        spanDelete.addEventListener("click", function(){
            let flag = confirm("Do you want to delete the folder " + divName.innerHTML);
            if(flag == true){
                divContainer.removeChild(divFolder);
            }
        });
        
        let spanEdit = divFolder.querySelector("span[action = 'edit']");
        spanEdit.addEventListener("click", function(){
            let fname = prompt("Enter the new folder name");
            if(!fname){
                return
            }
            divName.innerHTML = fname;
        });
        
        
        
        divContainer.appendChild(divFolder);
    })
})();