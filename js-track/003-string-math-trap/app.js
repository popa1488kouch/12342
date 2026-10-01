document.getElementById("calc-btn").addEventListener("click", () => {
    const val1 = document.getElementById("num1").value;
    const val2 = document.getElementById("num2").value;
    
    // BUG: 10 + 20 is becoming "1020" instead of 30
    const total = parseInt(val1) + parseInt(val2);
    
    document.getElementById("result").innerText = total;
});
