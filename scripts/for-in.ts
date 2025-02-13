const user = {
    name: "Alice",
    age: 25,
    city: "New York",
  };

//   console.log(user["age"]);
  
  // Using for...in
  for (const key in user) {
    console.log(`${key}: ${user[key as keyof typeof user]}`);
  }