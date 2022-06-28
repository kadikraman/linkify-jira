document.addEventListener("click", onClick, false)

function onClick(ev) {
  let a = ev.target.closest('a');

  if (a) {
    const href = a.href;
    ev.preventDefault();
    if (href) {
      window.open(href);
    }
  }
}