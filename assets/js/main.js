
let userForm = document.querySelector(".header__form")
userForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let userEnter = document.querySelector(".numberOfSentences");

    if (userEnter.value) {
        console.log("user inputs")
        //function set col sentences
        setNumberInCol(Number(userEnter.value))
    } else {
        console.log("user does nothing!")
    }
})

let clearBtn = document.querySelector(".header__clear");
clearBtn.addEventListener("click", (e) => {
    e.preventDefault();
    //  get all data sentences
    let sentences = document.getElementsByClassName("sentence__input");
    // console.log(sentences)
    for(let i = 0; i < sentences.length; i++){
        sentences[i].value = "";
    }
})

let saveBtn = document.querySelector(".header__save");
saveBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // get all data sentences
    let sentences = document.getElementsByClassName("sentence__input");
    let data = [];
    for(let i = 0 ; i < sentences.length; i++){
        let sentence = {
            "number": i+1,
            "value": sentences[i].value
        }
        data.push(sentence);
    }
    // console.log("data: ", data)
    localStorage.clear();
    localStorage.setItem("sentences", JSON.stringify(data));
})

let restoreBtn = document.querySelector(".header__restore")
restoreBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let data = JSON.parse(localStorage.getItem("sentences"));
    // get all sentences
    let sentenceInput = document.getElementsByClassName("sentence__input")
    for(let i = 0; i < sentenceInput.length; i++){
        if(data[i].number == i+1){
            sentenceInput[i].value = data[i].value
        }
    }
})



function setNumberInCol(sentences) {
    document.querySelector(".row-content").innerHTML = ""
    let html = ``
    if (sentences <= 30) {
        for (let i = 1; i <= sentences; i++) {
            html += `
            <span class="sentence">
               <div class="sentence__title">
                    Câu số ${i < 10 ? `0${i}` : i} : 
               </div>
               <input type="text" class="sentence__input" />
            </span>
            `
        }
    } else {
        let limit = 30;
        let index = 0;
        loopTimes = Math.ceil(sentences / 30);
        for (let i = 1; i <= loopTimes; i++) {
            console.log(`time ${i}: `, limit)
            console.log(`index: ${index}`)
            html += `<div class="col-${12 / loopTimes}">`;
            for (let j = 1; j <= limit; j++) {
                html +=
                    `
                <span class="sentence">
                   <div class="sentence__title">
                        Câu số ${index == 0 & j < 10 ? `0${j + index}` : `${j + index}`} :
                   </div>
                   <input type="text" class="sentence__input" />
                </span>
                `
            }
            html += `</div>`;
            sentences = sentences - 30;
            if (sentences >= limit) {
                limit = 30;
                index += 30;

            } else {
                limit = sentences;
                index += 30;
            }

        }
    }


    // console.log("html: ", html)
    document.querySelector(".row-content").innerHTML = html;

}

function addClassWhenResize() {
    if(document.body.clientWidth < 769){
        document.querySelector(".content-container").classList.remove("container")
        document.querySelector(".content-container").classList.add("container-fluid")
    } else {
        document.querySelector(".content-container").classList.add("container")
    }
}


