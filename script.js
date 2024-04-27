let node = document.querySelector(".root");
let h1 = document.createElement("h1");

setTimeout(() => {
  setTimeout(() => {
    h1.innerHTML = "";
    h1.innerHTML = "Hey";
    //   console.log(h1);
    setTimeout(() => {
      h1.innerHTML = "";
      h1.innerHTML = "Just Listen to me";
      setTimeout(() => {
        h1.innerHTML = "";
        h1.innerHTML = "I Know you angry with me";
        setTimeout(() => {
          h1.innerHTML = "";
          h1.innerHTML = "But, You know what?";
          setTimeout(() => {
            h1.innerHTML = "";
            h1.innerHTML = "The most important one";
            setTimeout(() => {
              h1.innerHTML = "";
              h1.innerHTML = "The worldest secret";
              setTimeout(() => {
                h1.innerHTML = "";
                h1.innerHTML = "That is";
                setTimeout(() => {
                  h1.innerHTML = "";
                  h1.innerHTML = 3;
                  setTimeout(() => {
                    h1.innerHTML = "";
                    h1.innerHTML = 2;
                    setTimeout(() => {
                      h1.innerHTML = "";
                      h1.innerHTML = 1;
                      setTimeout(() => {
                        h1.innerHTML = "";
                        h1.innerHTML = "I Love You soo much! ";
                      }, 1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 2000);
          }, 2000);
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
}, 1000);

node.appendChild(h1);
