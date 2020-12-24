

// get value input

// userEnter.addEventListener("keyup", function(event) {
//     // Number 13 is the "Enter" key on the keyboard
//     if (event.keyCode === 13) {
//       // Cancel the default action, if needed
//       event.preventDefault();
//       // Trigger the button element with a click
//     //   userEnter.click()
//     }
// });

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
            html += `<div class="col-lg-${12 / loopTimes}">`;
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

