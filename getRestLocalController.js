({
    invoke : function(component, event, helper) {
        var args = event.getParam("arguments");
        
        return new Promise(function(resolve, reject) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = $A.getCallback(function() {
                if (this.readyState === 4) { // DONE
                    if (this.status >= 200 && this.status < 300) {
                        var response = JSON.parse(xhttp.responseText);
                        component.set("v.churnVal", response);
                        resolve();
                    } else {
                        var errorText = "";
                        if (this.status === 0) {
                            errorText = 'Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.';
                        } else {
                            errorText = this.statusText;
                        }
                        reject(new Error(errorText));
                    }
                }
            });
            xhttp.open("GET", "https://127.0.0.1:2222/biomatch/capture/cbe89a3a56f3ccbc/16009e5bd8da81e6/5f6efce701023958/2/0/2/77d60b99982a8c9e97c9f0beb680e09b0ca0b07dcd5ed4e0061b51aa0879de9eac144e197d4106507969e1241a99fc1c0cea1dcc75fd1bad7fec63728327d7d05e95099cb5c614fc0c37088d13d9fec5c6524aeebad4955eb441900a3d37b04f081a066fc423b4b8a61b553b71bde69997f387ee02d044e10439df495d9609d98a5e7c7bbadb3351ba751c57c1475728689d1b46b81a8e7c55be8e7bf99b569f3266abbce39df800ae265750ba8f5874f5b77b4d280c96979a1d17c345d0225bfa50b6fd33834108dabae85bfb5c49211dfdc69bd7937e1d13c18569d2c5495e67b4fa8bd0c9a26373d25a4d07fc68cf9b00352ea6d118ac662028f7da1c8035/0.31454995813989206", true);
            xhttp.send(null); 
        });    
    }
})
