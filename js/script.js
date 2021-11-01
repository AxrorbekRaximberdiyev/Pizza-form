
var elPizzaListForm = document.querySelector(".pizza-list-form");
var elSelectInput = document.querySelector(".select-js");
var elSelectMassage = document.querySelector(".result-select");

elSelectInput.addEventListener("change", function (evt) {
    evt.preventDefault();

    var selectInput = elSelectInput.value;
    elSelectMassage.textContent = selectInput;


});

// ==============================================================

var radioArray = ["20sm", "25sm", "30sm"];
var elResultRadioMassage = document.querySelector(".result-radio")
var elTwoFormBlock = document.querySelector(".two-form")

for (var i = 0; i < radioArray.length; i++) {
    const element = radioArray[i];

    var newElRadioDiv = document.createElement("div");
    var newElRadiolabel = document.createElement("label");
    var newElRadioInput = document.createElement("input");

    newElRadioDiv.className = "div-flex";
    newElRadiolabel.setAttribute("for", element);
    newElRadiolabel.classList.add("circle-label");
    newElRadiolabel.textContent = element;
    newElRadioInput.type = "radio"
    newElRadioInput.id = element;
    newElRadioInput.classList.add("radio-input");
    newElRadioInput.value =  element;
    newElRadioInput.name = "radioCheck";

    newElRadiolabel.appendChild(newElRadioInput);
    newElRadioDiv.appendChild(newElRadiolabel);

    newElRadioInput.addEventListener("change", function (secondEvt) {
        secondEvt.preventDefault();

        var radioInput = this.value;

        if (radioInput) {
            elResultRadioMassage.textContent = this.value;
        }

    })

    elTwoFormBlock.appendChild(newElRadioDiv)

};

// ===============================================================

var elThreeFormBlock = document.querySelector(".three-form");
var elPizzaList = document.querySelector(".pizza-list");
var vegetables = ["pomidor", "kurka go'shti", "zaytun", "tuzlangan bodring", "qo'ziqorin", "qazi"];
var emptyBox = [];

for (var i = 0; i < vegetables.length; i++) {
    const vegetable = vegetables[i];

    var newElCheckInput = document.createElement("input");
    var newElCheckSpan = document.createElement("span");
    var newElCheckLabel = document.createElement("label");

    newElCheckInput.type = "checkbox";
    newElCheckInput.value = vegetable;
    newElCheckLabel.className = "checkbox-input";

    newElCheckSpan.textContent = vegetable;

    newElCheckLabel.appendChild(newElCheckInput);
    newElCheckLabel.appendChild(newElCheckSpan);
    elThreeFormBlock.appendChild(newElCheckLabel);
     
    newElCheckInput.addEventListener("change", function (thirdEvt) {
        thirdEvt.preventDefault();

        var vegetableIndex = emptyBox.indexOf(this.value);

        if (vegetableIndex > -1) {
            emptyBox.splice(vegetableIndex, 1)
        } else {
            emptyBox.push(this.value)
        };

        elPizzaList.innerHTML = "";

        for (var arrayValues of emptyBox) {
            var newElListItem = document.createElement("li");
            newElListItem.textContent = arrayValues;

            elPizzaList.appendChild(newElListItem);
        }

    })


};

// ===============================================================

var elFourFormBlock = document.querySelector(".four-form");
var elExtraList = document.querySelector(".extra-list");
var extraTables = [ "achchiq", "sosiskali"];
var ExtraEmptyBox = [];

for (var i = 0; i < extraTables.length; i++) {
    const extraElement = extraTables[i];

    var newElExtraInput = document.createElement("input");
    var newElExtraSpan = document.createElement("span");
    var newElExtraLabel = document.createElement("label");

    newElExtraInput.type = "checkbox";
    newElExtraInput.value = extraElement;
    newElExtraLabel.className = "extra-checkbox-input";

    newElExtraSpan.textContent = extraElement;

    newElExtraLabel.appendChild(newElExtraInput);
    newElExtraLabel.appendChild(newElExtraSpan);
    elFourFormBlock.appendChild(newElExtraLabel);
    // console.log(elFourFormBlock);



    newElExtraInput.addEventListener("change", function (fourth) {
        fourth.preventDefault();

        var index = ExtraEmptyBox.indexOf(this.value);

        if (index > -1) {
            ExtraEmptyBox.splice(index, 1)
        } else {
            ExtraEmptyBox.push(this.value)
        }

        elExtraList.innerHTML = "";

        for (var extraArray of ExtraEmptyBox) {
            var newElExtraItem = document.createElement("li");
            newElExtraItem.textContent = extraArray;


            elExtraList.appendChild(newElExtraItem);

        }

    })



}
