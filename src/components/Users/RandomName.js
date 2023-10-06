export default function randomName()  {
    const colors = [
        "red",
        "blue",
        "green",
        "black",
        "orange",
        "pink",
        "purple",
        "cyan",
        "yellow",
    ];
    const animals = [
        "Panther",
        "Panda",
        "Lion",
        "Doggo",
        "Kitty",
        "Bird",
        "Piggy",
        "Salmon",
        "Giraffe",
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const animal = animals[Math.floor(Math.random() * animals.length)];
    return color + animal;
  };
  

  