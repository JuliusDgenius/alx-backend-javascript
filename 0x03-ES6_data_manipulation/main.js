const mySet = new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']);
for (const item of mySet) {
  if (item.has('bon')) {
	  console.log(item);
  }
}
