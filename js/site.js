var serverURL = "https://tsssaver.1conan.com/";
				function getJSON(url) {
					var request = new XMLHttpRequest(),
						data;
					request.open('GET', url, false);
					request.onload = function () {
						if (request.status >= 200 && request.status < 400) {
							data = request.responseText;
						} else {
							return false;
						}
					};
					request.send();
					return JSON.parse(data);
				}
				function insertAfter(newNode, referenceNode) {
					referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
				}
				function removeElementById(a){
					var element = document.getElementById(a);
					if(element) {
						element.parentNode.removeChild(element);
					}
				}
				document.getElementById("showlink").onclick = function() {
					var inp_ECIDType = document.getElementById('inp_ECIDType').value;
					var inp_ecid = document.getElementById("inp_ecid").value;
					if(inp_ECIDType == 0) {
						var ecid = getJSON(serverURL + "conv.php?hex=" + inp_ecid);
						window.location = serverURL + "shsh/" + ecid.dec;
					} else if(inp_ECIDType == 1) {
						window.location = serverURL + "shsh/" + inp_ecid;
					}
				};
				document.getElementById('deviceType').onchange = function() {
					var deviceType = document.getElementById('deviceType');
                    var deviceModel = document.getElementById('deviceModel');
                    while(deviceModel.hasChildNodes()){
                        deviceModel.removeChild(deviceModel.lastChild);
                    }
					var modelList = getJSON(serverURL + "json/" + deviceType.value + ".json");
                    for(var i = 0; i < modelList.length; i++) {
                        var child = document.createElement('option');
                        var text = document.createTextNode(modelList[i]);
                        child.setAttribute('value', i);
                        child.appendChild(text);
                        deviceModel.appendChild(child);
                    }
					
				}
				document.getElementById('deviceModel').onchange = function() {
					var deviceModel = document.getElementById('deviceModel');
					var deviceType = document.getElementById('deviceType');
					var inp_bc = document.getElementById('inp_bc');
					var bcDiv = document.getElementById('bcDiv');
					if(deviceModel.value >= 15 && deviceModel.value <= 17 && deviceType.value == "iPhone") {
						bcDiv.removeAttribute('style');
						inp_bc.removeAttribute('name');
						inp_bc.setAttribute('name', 'boardConfig');
					} else {
						bcDiv.removeAttribute('style');
						bcDiv.setAttribute('style', 'display:none;');
						inp_bc.removeAttribute('name');
						inp_bc.setAttribute('name', 'boardConfig_bc');
					}
				}
				document.getElementById('apnonce').onchange = function() {
					var apnonce = document.getElementById('apnonce');
					var apnonceDiv = document.getElementById('apnonceDiv');
					var inp_apnonce = document.getElementById('inp_apnonce');
					if(apnonce.checked == true){
						apnonceDiv.removeAttribute('style');
						inp_apnonce.removeAttribute('name');
						inp_apnonce.setAttribute('name', 'apnonce');
					} else if(apnonce.checked == false) {
						apnonceDiv.removeAttribute('style');
						apnonceDiv.setAttribute('style', 'display:none;');
						inp_apnonce.removeAttribute('name');
						inp_apnonce.setAttribute('name', 'apnonce_ap');
					}
					
				}
				/*document.getElementById('deviceModel').onchange = function() {
					var deviceModel = document.getElementById('deviceModel');
					var deviceType = document.getElementById('deviceType');
					if(deviceModel.value >= 15 && deviceModel.value <= 17 && deviceType.value == "iPhone") {
						removeElementById('boardConfig');
						removeElementById('h1_bC');
						removeElementById('br_bC');
						removeElementById('br_bC2');
						
						var br_bC = document.createElement('br');
						br_bC.setAttribute('id', 'br_bC');
						insertAfter(br_bC, deviceModel);
						var br_bC = document.getElementById('br_bC');
						
						var br_bC2 = document.createElement('br');
						br_bC2.setAttribute('id', 'br_bC2');
						insertAfter(br_bC2, br_bC);
						var br_bC2 = document.getElementById('br_bC2');
						
						var h1_bC = document.createElement('h1');
						var text = document.createTextNode('Internal Name/Model | Board Configuration : ');
						h1_bC.setAttribute('id', 'h1_bC');
						h1_bC.setAttribute('class', 'note');
						h1_bC.appendChild(text);
						insertAfter(h1_bC, br_bC2);
						
						var boardConfig = document.createElement('input');
						boardConfig.setAttribute('type', 'text');
						boardConfig.setAttribute('name', 'boardConfig'); 
						boardConfig.setAttribute('id', 'boardConfig');
						boardConfig.setAttribute('style', 'width:100%');
						boardConfig.setAttribute('placeholder', 'Type Board Configuration Here...');
						insertAfter(boardConfig, h1_bC);
					} else {
						removeElementById('boardConfig');
						removeElementById('h1_bC');
						removeElementById('br_bC');
						removeElementById('br_bC2');
					}
				}*/
