
var db =  firebase.firestore();


db.collection("cities").doc("LA")
    .onSnapshot(function(doc) {

        console.log("Current data: ", doc.data());
        nameFunction(doc.data().nameIndex)
    });


    function nameFunction(nameIndex){

    
        for (var i = 0; i < nameIndex; i++){

            var r = document.createElement('span');
            var y = document.createElement("INPUT");
            y.setAttribute("type", "text");
            y.setAttribute("placeholder", "Name");
            var g = document.createElement("IMG");
            g.setAttribute("src", "delete.png");
            y.setAttribute("Name", "textelement_" + i);
            r.appendChild(y);
            g.setAttribute("onclick", "removeElement('myForm','id_" + i + "')");
            r.appendChild(g);
            r.setAttribute("id", "id_" + i);
            document.getElementById("myForm").appendChild(r);
        }
      
        
        
        
        
        }