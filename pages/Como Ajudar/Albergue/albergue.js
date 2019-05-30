function openBairro(BairroName) {
    var i;
    var x = document.getElementsByClassName("bairro");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(BairroName).style.display = "block";
}

function showPanel(panelIndex, colorCode) {
    var tabButtons = document.querySelectorAll('.botaoPanel');
    var tabPanels = document.querySelectorAll('.tabPanel');

    tabButtons.forEach(function(node) {
        node.style.backgroundColor = "";
        node.style.color="";
    });
    tabButtons[panelIndex].style.backgroundColor = colorCode;
    tabButtons[panelIndex].style.color="white";
    tabPanels.forEach(function(node) {
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
    tabPanels[panelIndex].style.backgroundColor=colorCode;
}