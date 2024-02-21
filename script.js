document.addEventListener("DOMContentLoaded", () => {
  const ipInput = document.getElementById("ip");
  const btn = document.getElementById("btn");
  const outputDiv = document.getElementById("output");

  btn.addEventListener("click", () => {
    const inputValue = parseInt(ipInput.value);

    if (isNaN(inputValue)) {
      alert("Please enter a valid number.");
      return;
    }

    // Create promise to resolve after 2 seconds with the input number
    const firstPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(inputValue);
      }, 2000);
    });

    // Chain promises to perform operations
    firstPromise
      .then((number) => {
        // Print initial result
        outputDiv.textContent = `Result: ${number}`;
        return number;
      })
      .then((number) => {
        // Multiply by 2 and print result
        return new Promise((resolve) => {
          setTimeout(() => {
            const result = number * 2;
            outputDiv.textContent = `Result: ${result}`;
            resolve(result);
          }, 1000);
        });
      })
      .then((number) => {
        // Subtract 3 and print result
        return new Promise((resolve) => {
          setTimeout(() => {
            const result = number - 3;
            outputDiv.textContent = `Result: ${result}`;
            resolve(result);
          }, 1000);
        });
      })
      .then((number) => {
        // Divide by 2 and print result
        return new Promise((resolve) => {
          setTimeout(() => {
            const result = number / 2;
            outputDiv.textContent = `Result: ${result}`;
            resolve(result);
          }, 1000);
        });
      })
      .then((number) => {
        // Add 10 and print final result
        return new Promise((resolve) => {
          setTimeout(() => {
            const finalResult = number + 10;
            outputDiv.textContent = `Final Result: ${finalResult}`;
            resolve(finalResult);
          }, 1000);
        });
      })
      .catch((error) => {
        // Handle any errors
        outputDiv.textContent = `Error: ${error}`;
      });
  });
});
