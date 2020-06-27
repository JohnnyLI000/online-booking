function passKeyword(keyword){    
    //const requestData = `customerName=${keyword}`;
    document.getElementById("tbl").innerHTML = "";
    document.getElementById("confirmation-div").style.display= "none";
    url ="requestSearch.php?keyword=" +keyword;  
    const request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            console.log(data);

            var tBody = document.getElementById("tbl");

            var head = document.createElement("tr");
            var c1 = document.createElement("th");
            var c2 = document.createElement("th");
            var c3 = document.createElement("th");
            var c4 = document.createElement("th");
            var c5 = document.createElement("th");
            var c6= document.createElement("th");
            var c7 = document.createElement("th");
            var c8 = document.createElement("th");

            var v1 = document.createTextNode("Reference Number");
            var v2 = document.createTextNode("customer Name");
            var v3 = document.createTextNode("contact phone number");
            var v4 = document.createTextNode("pick up address");
            var v5 = document.createTextNode("destination address");
            var v6 = document.createTextNode("date");
            var v7 = document.createTextNode("time");
            var v8 = document.createTextNode("has booking assignd");

            c1.appendChild(v1);
            c2.appendChild(v2);
            c3.appendChild(v3);
            c4.appendChild(v4);
            c5.appendChild(v5);
            c6.appendChild(v6);
            c7.appendChild(v7);
            c8.appendChild(v8);

            head.appendChild(c1);
            head.appendChild(c2);
            head.appendChild(c3);
            head.appendChild(c4);
            head.appendChild(c5);
            head.appendChild(c6); 
            head.appendChild(c7);
            head.appendChild(c8);
            tBody.appendChild(head);

            for(var a = 0; a < data.length; a++) {
                var id = data[a].id;
                var customerName = data[a].customerName;
                var contactPhone = data[a].contactPhone;
                var pickUpAddress = data[a].pickUpAddress;
                var destinationAddress = data[a].destinationAddress;
                var date = data[a].pickUpDate;
                var time= data[a].pickUpTime;
                var status = data[a].bookingStatus;




                var newRow = document.createElement("tr");
                var c1 = document.createElement("td");
                var c2 = document.createElement("td");
                var c3 = document.createElement("td");
                var c4 = document.createElement("td");
                var c5 = document.createElement("td");
                var c6 = document.createElement("td");
                var c7 = document.createElement("td");
                var c8 = document.createElement("td");

                var v1 = document.createTextNode(id);
                var v2 = document.createTextNode(customerName);
                var v3 = document.createTextNode(contactPhone);
                var v4 = document.createTextNode(pickUpAddress);
                var v5 = document.createTextNode(destinationAddress);
                var v6 = document.createTextNode(date);
                var v7 = document.createTextNode(time);
                var v8 = document.createTextNode(status);

                c1.appendChild(v1);
                c2.appendChild(v2);
                c3.appendChild(v3);
                c4.appendChild(v4);
                c5.appendChild(v5);
                c6.appendChild(v6);
                c7.appendChild(v7);
                c8.appendChild(v8);

                newRow.appendChild(c1);
                newRow.appendChild(c2);
                newRow.appendChild(c3);
                newRow.appendChild(c4);
                newRow.appendChild(c5);
                newRow.appendChild(c6);
                newRow.appendChild(c7);
                newRow.appendChild(c8);

                newRow.addEventListener('click', select, false);
                tBody.appendChild(newRow);

            }
        }

    };
    request.send();

}

function showUnsigned(){    
    //const requestData = `customerName=${keyword}`;
    document.getElementById("tbl").innerHTML = "";
    document.getElementById("confirmation-div").style.display= "none";

    url ="showUnsigned.php";  
    const request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            console.log(data);

            var tBody = document.getElementById("tbl");

            var head = document.createElement("tr");
            var c1 = document.createElement("th");
            var c2 = document.createElement("th");
            var c3 = document.createElement("th");
            var c4 = document.createElement("th");
            var c5 = document.createElement("th");
            var c6= document.createElement("th");
            var c7 = document.createElement("th");
            var c8 = document.createElement("th");

            var v1 = document.createTextNode("Reference Number");
            var v2 = document.createTextNode("customer Name");
            var v3 = document.createTextNode("contact phone number");
            var v4 = document.createTextNode("pick up address");
            var v5 = document.createTextNode("destination address");
            var v6 = document.createTextNode("date");
            var v7 = document.createTextNode("time");
            var v8 = document.createTextNode("has booking assignd");

            c1.appendChild(v1);
            c2.appendChild(v2);
            c3.appendChild(v3);
            c4.appendChild(v4);
            c5.appendChild(v5);
            c6.appendChild(v6);
            c7.appendChild(v7);
            c8.appendChild(v8);

            head.appendChild(c1);
            head.appendChild(c2);
            head.appendChild(c3);
            head.appendChild(c4);
            head.appendChild(c5);
            head.appendChild(c6); 
            head.appendChild(c7);
            head.appendChild(c8);
            tBody.appendChild(head);

            for(var a = 0; a < data.length; a++) {
                var id = data[a].id;
                var customerName = data[a].customerName;
                var contactPhone = data[a].contactPhone;
                var pickUpAddress = data[a].pickUpAddress;
                var destinationAddress = data[a].destinationAddress;
                var date = data[a].pickUpDate;
                var time= data[a].pickUpTime;
                var status = data[a].bookingStatus;

                var newRow = document.createElement("tr");
                var c1 = document.createElement("td");
                var c2 = document.createElement("td");
                var c3 = document.createElement("td");
                var c4 = document.createElement("td");
                var c5 = document.createElement("td");
                var c6 = document.createElement("td");
                var c7 = document.createElement("td");
                var c8 = document.createElement("td");

                var v1 = document.createTextNode(id);
                var v2 = document.createTextNode(customerName);
                var v3 = document.createTextNode(contactPhone);
                var v4 = document.createTextNode(pickUpAddress);
                var v5 = document.createTextNode(destinationAddress);
                var v6 = document.createTextNode(date);
                var v7 = document.createTextNode(time);
                var v8 = document.createTextNode(status);

                c1.appendChild(v1);
                c2.appendChild(v2);
                c3.appendChild(v3);
                c4.appendChild(v4);
                c5.appendChild(v5);
                c6.appendChild(v6);
                c7.appendChild(v7);
                c8.appendChild(v8);

                newRow.appendChild(c1);
                newRow.appendChild(c2);
                newRow.appendChild(c3);
                newRow.appendChild(c4);
                newRow.appendChild(c5);
                newRow.appendChild(c6);
                newRow.appendChild(c7);
                newRow.appendChild(c8);

                newRow.addEventListener('click', select, false);
                tBody.appendChild(newRow);

            }
        }

    };
    request.send();

}

function select(){
    var trs= document.getElementsByTagName("tr");
    for (var i = 0; i < trs.length; i++) 
    {
        if(trs[i]==this)
        {	
            if(trs[i].style.backgroundColor == 'yellow')
            {
                trs[i].style.backgroundColor = 'white';
            }
            else
            {
                trs[i].style.backgroundColor = 'yellow';
            }
        }
    }
    document.getElementById("assignButton").style.display= "block";
}

function assignTheBooking(){
    var tBody = document.getElementById("tbl");
    var trs= document.getElementsByTagName("tr");
    document.getElementById("confirmation-div").innerHTML = "";
    for (var i = 0; i < trs.length; i++) 
    {
        if(trs[i].style.backgroundColor == 'yellow')
        {
            var keyword = trs[i].cells[0].innerHTML;
            url ="signTheBooking.php?keyword=" +keyword;  
            const request = new XMLHttpRequest();
            request.open("GET", url, true);
            request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            request.send();
            document.getElementById("confirmation-div").innerHTML += "The booking request " + keyword + " has been assigned.<br>"
        }
    }
    document.getElementById("tbl").innerHTML = "";
    document.getElementById("confirmation-div").style.display= "block";


}
