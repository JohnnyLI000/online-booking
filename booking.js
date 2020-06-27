window.onload = function(){    
    const form = {
        customerName: document.getElementById('customerName'),
        contactPhone: document.getElementById('contactPhone'),
        pickUpAddress: document.getElementById('pickUpAddress'),
        destinationAddress: document.getElementById('destinationAddress'),
        date: document.getElementById('date'),
        time: document.getElementById('time'),
        submit: document.getElementById('btn-submit'),
        messages: document.getElementById('form-messages')
    };
    form.submit.addEventListener('click', () => {
        const request = new XMLHttpRequest();

        request.onload = () => {
            let responseObject = null;

            try {
                responseObject = JSON.parse(request.responseText);
            } catch (e) {
                console.error('Could not parse JSON!');
            }

            if (responseObject) {
                handleResponse(responseObject);
            }
        };

        const requestData = `customerName=${form.customerName.value}&contactPhone=${form.contactPhone.value}&pickUpAddress=${form.pickUpAddress.value}&destinationAddress=${form.destinationAddress.value}&date=${form.date.value}&time=${form.time.value}`;

        request.open('post', 'bookingProcess.php');
        request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        console.log(requestData);
        request.send(requestData);

    });

    function handleResponse (responseObject) {
        if (responseObject.ok) {
            const requestID= new XMLHttpRequest;

            requestID.open('GET', 'returnID.php');
            requestID.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            requestID.onreadystatechange = function() {
                if (requestID.readyState == 4 && requestID.status == 200) {
                    var id = JSON.parse(requestID.responseText);
                    document.getElementById('confirmation-message').innerHTML = 'Thank you! Your booking reference number is '+id[0].id+ ' You will be picked up in front of your provided address at '+form.time.value+' on '+form.date.value;
                    while (form.messages.firstChild) {
                        form.messages.removeChild(form.messages.firstChild);
                    }
                    form.messages.style.display = "none";
                    console.log(id);
                }
            }

            requestID.send();






        } else {
            while (form.messages.firstChild) {
                form.messages.removeChild(form.messages.firstChild);
            }

            responseObject.messages.forEach((message) => {
                const li = document.createElement('li');
                li.textContent = message;
                form.messages.appendChild(li);
            });

            form.messages.style.display = "block";
        }
    }

}

