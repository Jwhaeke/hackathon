function mySearch() {
    var seastr = (document.getElementById("search").value);

    if (seastr.length > 0) {

        seastr = seastr.toLowerCase();

        if (seastr == "harm") {
            document.getElementById(seastr).style.boxShadow = "0px 0px 30px red";
            reset(seastr);

        } else if (seastr == "jan") {
            document.getElementById(seastr).style.boxShadow = "0px 0px 30px red";
            reset(seastr);
        } else if (seastr == "sjaak") {
            document.getElementById(seastr).style.boxShadow = "0px 0px 30px red";
            reset(seastr);
        } else if (seastr == "christiaan") {
            document.getElementById(seastr).style.boxShadow = "0px 0px 30px red";
            reset(seastr);
        } else if (seastr == "jordie") {
            document.getElementById(seastr).style.boxShadow = "0px 0px 30px red";
            reset(seastr);
        } else {
            alert("Name not found");
        }
    } else {
        alert("Vul geldige naam in!")
    }
}

function mySearch2() {


    var qs = decodeURIComponent(window.location.search);
    var seastr = qs.substring(7);

    if (seastr.length > 0) {

        seastr = seastr.toLowerCase();

        if (seastr == "harm") {
            document.getElementById(seastr).style.boxShadow = "0px 0px 30px red";
            reset(seastr);

        } else if (seastr == "jan") {
            document.getElementById(seastr).style.boxShadow = "0px 0px 30px red";
            reset(seastr);
        } else if (seastr == "sjaak") {
            document.getElementById(seastr).style.boxShadow = "0px 0px 30px red";
            reset(seastr);
        } else if (seastr == "christiaan") {
            document.getElementById(seastr).style.boxShadow = "0px 0px 30px red";
            reset(seastr);
        } else if (seastr == "jordie") {
            document.getElementById(seastr).style.boxShadow = "0px 0px 30px red";
            reset(seastr);
        } else {
            alert("Name not found");
        }
    } else {
        alert("Vul geldige naam in!")
    }
}

function reset(searchstring) {

    setInterval(function() {
        document.getElementById(searchstring).style.boxShadow = "none";
    }, 4000);


}


function test() {

    if (document.getElementById("intxt").value.length > 0) {

        if (document.getElementById("intxt").value == "Diem") {

            alert("Diem is not allowed to come");

        } else {
            var link = "<a href='profile.html?myVar=" + document.getElementById("intxt").value + "' onclick='ref()'>"
            var x = document.getElementById("opgegeven");
            x.innerHTML += "<br>" + link + document.getElementById("intxt").value + "</a>"
        }

    } else {

        alert("Geef een geldige naam op!");

    }

}

function ref() {
    setInterval(function() {
        mySearch2(document.getElementById("intxt").value);
    }, 3000);


}