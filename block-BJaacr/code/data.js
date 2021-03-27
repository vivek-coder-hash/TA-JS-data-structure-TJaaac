const got = {
  houses: [
    {
      name: "Starks",
      people: [
        {
          name: "Eddard Stark",
          description:
            "Lord of Winterfell - Warden of the North - Hand of the King - Married to Catelyn (Tully) Stark",
        },
        {
          name: "Benjen Stark",
          description:
            "Brother of Eddard Stark - First ranger of the Night's Watch",
        },
        {
          name: "Robb Stark",
          description:
            "Son of Eddard and Catelyn Stark - Direwolf: Grey Wind",
        },
        {
          name: "Sansa Stark",
          description:
            "Daughter of Eddard and Catelyn Stark - Direwolf: Lady",
        },
        {
          name: "Arya Stark",
          description:
            "Daughter of Eddard and Catelyn Stark - Direwolf: Nymeria",
        },
        {
          name: "Brandon Stark",
          description:
            "Son of Eddard and Catelyn Stark - Direwolf: Summer",
        },
        {
          name: "Rickon Stark Upper",
          description:
            "Son of Eddard and Catelyn Stark - Direwolf: Shaggydog",
        },
        {
          name: "Jon Snow",
          description:
            "Bastard son of Eddard Stark - Steweard in the Night's Watch - Direwolf: Ghost",
        },
      ],
    },
    {
      name: "Lannisters",
      people: [
        {
          name: "Tywin Lannister",
          description:
            "Lord of Casterly Rock - Warden of the West",
        },
        {
          name: "Tyrion Lannister",
          description:
            "Son of Tywin Lannister - The Imp",
        },
        {
          name: "Jaime Lannister",
          description:
            "The Kingslayer - Knight of the Kingsgaurd - Son of Tywin Lannister",
        },
        {
          name: "Cersei Baratheon",
          description:
            "Married to King Robert Baratheon - Daughter of Tywin Lannister",
        },
      ],
    },
  ],
};


for (i=0 ; i<got.houses.length ; i++) {
  console.log(got.houses[i].name)
}


for (i=0 ; i < got.houses[0].people.length ;i++) {
  console.log(got.houses[0].people[i].name)
}


for (i=0 ; i < got.houses[1].people.length ;i++) {
  console.log()
}

for (i=0 ; i < got.houses[1].people.length ;i++) {
  console.log(got.houses[1].people[i].description)
}



for (i=0 ; i < got.houses[1].people.length ;i++) {
  console.log(`I am ${got.houses[1].people[i].name} and my bio is ${got.houses[1].people[i].description}`)
}


for (i=0 ; i < got.houses[0].people.length ;i++) {
  console.log(`I am ${got.houses[0].people[i].name} and my bio is ${got.houses[0].people[i].description}`)
}

for (i=0 ; i < got.houses[0].people.length ;i++) {
  if (got.houses[0].people[i].name == "Robb Stark")  {

 
  console.log(`I am ${got.houses[0].people[i].name} and my bio is ${got.houses[0].people[i].description}`)
}
}


for (i=0 ; i < got.houses[1].people.length ;i++) {
  if (got.houses[1].people[i].name == "Tywin Lannister")  {

 
  console.log(`I am ${got.houses[1].people[i].name} and my bio is ${got.houses[1].people[i].description}`)
}
}

var houseNames    = []

for (i=0 ; i<got.houses.length ; i++)  {
  houseNames.push(got.houses[i].name)
}

console.log(houseNames)


console.log(got.houses[0].people.length)


console.log(got.houses[1].people.length)

let obj ={}
for (i=0 ; i<got.houses.length ; i++) {
  obj[got.houses[i].name] = got.houses[i].people.length
}

console.log(obj)


for (i=0 ; i < got.houses.length ;i ++) {
  

  for (j=i ; j<got.houses[i].people.length ;j++) {
    console.log(got.houses[i].people[j].name)
  }

}


var allPeople  = []

for (i=0 ; i < got.houses.length ;i ++) {
  

  for (j=i ; j<got.houses[i].people.length ;j++) {
    allPeople.push(got.houses[i].people[j].name)
  }

}

console.log(allPeople)
console.log(allPeople.length)


var allDescription =[]

for (i=0 ; i < got.houses.length ;i ++) {
  

  for (j=i ; j<got.houses[i].people.length ;j++) {
    allDescription.push(got.houses[i].people[j].description)
  }

}

console.log(allDescription)

console.log(allDescription.length)


for (i=0 ; i < got.houses.length ;i ++) {
  

  for (j=i ; j<got.houses[i].people.length ;j++) {
    if (got.houses[i].people[j].description.length>30) {
      console.log(got.houses[i].people[j].description+ " ---")
    }
  }

}