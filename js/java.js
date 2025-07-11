var BookmarkNameInput=document.getElementById("bookmark-name");
var WebSiteURLInput=document.getElementById("WebSite URL");

var SitesList=[];

if(localStorage.getItem("SitesContainer")!==null){
    SitesList = JSON.parse(localStorage.getItem("SitesContainer"));
    displaysites();
}

function Addsites(){
if(ValidationName() && Validationurl()){
        var site = {
        bookmarkname : BookmarkNameInput.value,
        siteURL : WebSiteURLInput.value,
        }

    SitesList.push(site);
    localStorage.setItem("SitesContainer",JSON.stringify(SitesList));
    displaysites();
    clearform();
}
else{

}
};

function displaysites(){
   var box="";
    for (var i = 0 ; i < SitesList.length; i++ ){
        box += `
                <tr>
                    <td>${i+1}</td>
                    <td>${SitesList[i].bookmarkname}</td>
                    <td><button onclick="searchURL(${i})" class="btn mybtn1"><i class="fa-solid fa-eye"></i>visit</button></td>
                    <td><button onclick="deletesite(${i})" class="btn mybtn2"><i class="fa-solid fa-trash"></i>Delete</button></td>
                </tr>
        `
        document.getElementById("sitelistt").innerHTML = box;
    }
};

function clearform(){
    BookmarkNameInput.value=null;
    WebSiteURLInput.value=null;
};

function deletesite(index){
    SitesList.splice(index,1);
    localStorage.setItem("SitesContainer",JSON.stringify(SitesList));
    displaysites();
};

function ValidationName(){
    var regex = /^[a-zA-Z][a-zA-Z0-9]{2,19}$/;
    var text = BookmarkNameInput.value;

    if(regex.test(text)){
        BookmarkNameInput.classList.add("is-valid");
        BookmarkNameInput.classList.remove("is-invalid");
        return true ;
    }
    else{
        BookmarkNameInput.classList.remove("is-valid");
        BookmarkNameInput.classList.add("is-invalid");
        return false ;
    }

}
function Validationurl(){
    var regex = /^[a-zA-Z][a-zA-Z0-9]{1,19}\.[a-zA-Z]{1,5}$/;
    var text = WebSiteURLInput.value;

    if(regex.test(text)){
        WebSiteURLInput.classList.add("is-valid");
        WebSiteURLInput.classList.remove("is-invalid");
        return true ;
    }
    else{
        WebSiteURLInput.classList.remove("is-valid");
        WebSiteURLInput.classList.add("is-invalid");
        return false ;
    }

}

function searchURL(index){
    var surl=SitesList[index].siteURL
    window.open(surl)
}