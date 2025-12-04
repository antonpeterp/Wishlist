const display = document.getElementById("display");
const userinput = document.getElementById("userinput");
const striked = document.getElementById("strike");
let data = [];

function addtask(event) {
  event.preventDefault();
  let userinputvalue = userinput.value;
  data.push(userinputvalue);
  display.innerHTML = data
    .map((val, index) => {
      return `<ul>
      <li>
        <input type="radio" onclick="strikeItem(${index})" />
        <label id="label-${index}">${val}</label>
        <button id="deletebtn" onclick="deleteindx(${index})">DEL</button>
      </li>
    </ul>`;
    })
    .join("");
  userinput.innerText = ` `;
}

function strikeItem(index) {
  let label = document.getElementById(`label-${index}`);
  label.classList.toggle("striked");
}

function deleteindx(index) {
  data.splice(index, 1);

  display.innerHTML = data
    .map((val, index) => {
      return `<ul>
        <li>
          <input type="radio" />
          <label>${val}</label>
          <button id="deletebtn" onclick="deleteindx(${index})">DEL</button>
        </li>
      </ul>`;
    })
    .join("");
}
