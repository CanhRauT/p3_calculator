document.addEventListener("DOMContentLoaded", function() {
    // Event handler for the "Calculate" button
    document.getElementById("cal").addEventListener("click", function() {
        // Get the selected radio button
        var selectedMode = document.querySelector('input[name="mode"]:checked').id;

        // input values
        var num1Value = parseFloat(document.getElementById("num1").value);
        var num2Value = parseFloat(document.getElementById("num2").value);
        var num3Value = parseFloat(document.getElementById("num3").value);

        // perform based on which radio select
        var result;
        switch (selectedMode) {
            case "min":
                result = Math.min(num1Value, num2Value, num3Value);
                break;
            case "max":
                result = Math.max(num1Value, num2Value, num3Value);
                break;
            case "median":
                result = (num1Value + num2Value + num3Value) / 3;
                break;
            case "mean":
                result = (num1Value + num2Value + num3Value) / 3;
                break;
            case "range":
                result = Math.max(num1Value, num2Value, num3Value) - Math.min(num1Value, num2Value, num3Value);
                break;
            default:
                result = "Invalid mode";
                break;
        }

        // show result
        document.getElementById("result").textContent = "Result: " + result;
    });
});
