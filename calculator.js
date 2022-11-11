// <!-- JavaScript Code -->
      function insert(a) {
        document.getElementById("ans").value += a;
      }

      function che() {
        var res = [];
        var answer;

        if (document.getElementById("ans").value.includes("+")) {
          res = document.getElementById("ans").value.split("+");
          return parseInt(res[0]) + parseInt(res[1]);
        } else if (document.getElementById("ans").value.includes("-")) {
          res = document.getElementById("ans").value.split("-");
          return parseInt(res[0]) - parseInt(res[1]);
        } else if (document.getElementById("ans").value.includes("/")) {
          res = document.getElementById("ans").value.split("/");
          return parseInt(res[0]) / parseInt(res[1]);
        } else if (document.getElementById("ans").value.includes("%")) {
          res = document.getElementById("ans").value;
          return parseInt(res) / 100;
        } else {
          res = document.getElementById("ans").value.split("*");
          return (answer = parseInt(res[0]) * parseInt(res[1]));
        }
      }

      function button1() {
        var a = che();
        document.getElementById("ans").value = a;
      }

      function buttonclear() {
        document.getElementById("ans").value = " ";
      }

      function backspace() {
        var exp = document.getElementById("ans").value;
        document.getElementById("ans").value = exp.substring(
          0,
          exp.length - 1
        ); /* remove the element from total length */
      }