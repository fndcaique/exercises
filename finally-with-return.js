async function run() {
  try {
    return 1;
  } finally {
    return 2;
  }
}

run().then(console.log); // 2
