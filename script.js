const filterNames = ["Accessible Route","Automatic Doors", "Door on-hold open devices", "Power-Assisted Doors", 
                     "Controlled Access Doors", "Accessible Lifts", "Platform Lifts", "Accessible Reception Counter",
                     "Hearing Loop Available", "Fully Accessible Toilet", "Accessible Ramp", "Fire Refuge Space",
                     "Emergency Exits", "Accessible Parking"];


function toggleOverlay(e){
    var mapDiv = document.getElementById("overlays");

    var buildingSelect = document.getElementById("building").value;
    var floorSelect = document.getElementById("floor").value;


    if(e.target.checked){
        var overlay = document.createElement("img");
        overlay.src = "Maps/"+buildingSelect+"/"+ floorSelect + "/" +e.target.name+".png";
        overlay.id = e.target.name;
        mapDiv.appendChild(overlay);
    }

    else if(!e.target.checked){
        var imgEl = document.getElementsByTagName("img");
        
        for(let i=0; i<imgEl.length; i++){
            if(imgEl[i].id === e.target.name){
                imgEl[i].parentNode.removeChild(imgEl[i])
            }
        }
    }

}


function createFilterMenu(){
    const filterList = document.getElementById("filter-list");
    
    var ul = document.createElement("ul");
    ul.id = "listCB";    

    for(let i=0; i < filterNames.length; i++){

        var li = document.createElement("li");

        var cb = document.createElement('input');          

        cb.type = "checkbox";
        cb.name = filterNames[i];
       
        var label = document.createElement('label')
        label.appendChild(document.createTextNode(filterNames[i]));

        li.appendChild(cb);
        li.appendChild(label);
       
        
        ul.appendChild(li);
    }

    filterList.appendChild(ul);

}


function addEventListenersCB(){
    var cbs = document.getElementsByTagName("input");
    
    for(let i=0; i<cbs.length; i++){
        cbs[i].addEventListener("click", toggleOverlay);
    }
}

function addEventListenerSelect(){
    var buildingSelect = document.getElementById("building");
    var floorSelect = document.getElementById("floor");

    buildingSelect.addEventListener("click", () =>{
        document.getElementById("base-img").src = "Maps/"+buildingSelect.value+"/"+ floorSelect.value + "/Base.png";
    });

    floorSelect.addEventListener("click", () =>{
        document.getElementById("base-img").src = "Maps/"+buildingSelect.value+"/"+ floorSelect.value + "/Base.png";
    });
    
}


window.onload = () =>{
    
    addEventListenerSelect();
    createFilterMenu();
    addEventListenersCB();
};