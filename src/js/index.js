let buttonsDom = []
function getBtns() {
  const buttons = [...document.querySelectorAll(".buttons")];
  console.log(buttons);
  buttons.forEach((btn) => {
    const id = btn.dataset; 
    console.log(id);
    btn.addEventListener("click", (event) => {
    });
  });
  // console.log(arr);
}
getBtns();
