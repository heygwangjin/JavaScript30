const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  // console.log(this);
  // console.log(this.value);

  const suffix = this.dataset.sizing || '';

  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  if (this.name == 'spacing') {
    document.documentElement.style.setProperty(`--radius`, (Number(this.value) + 10) + suffix);
  }
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

