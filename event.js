document.querySelector("button").addEventListener("click", () => {
    let firstNumber = document.querySelector("#first-number").value;
    let secondeNumber = document.querySelector("#seconde-number").value;

    try {
        let result = divide(Number(firstNumber), Number(secondeNumber));
        document.querySelector("span").innerHTML = result;
    }
    catch (error) {
        document.querySelector("span").innerHTML = error;
    }
    finally {
        console.log("the divide is done");
    }
})