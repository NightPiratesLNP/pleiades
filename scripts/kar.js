

function createSnowflake() {
          const snowflake = document.createElement("div");
          snowflake.classList.add("snowflake");
          snowflake.textContent = "❄";
          snowflake.style.left = Math.random() * window.innerWidth + "px";
          snowflake.style.fontSize = Math.random() * 10 + 10 + "px";
          snowflake.style.animationDuration = Math.random() * 5 + 5 + "s";
          document.body.appendChild(snowflake);

           setTimeout(() => {
           snowflake.remove();
          }, 10000);
        }

        setInterval(createSnowflake, 200);
