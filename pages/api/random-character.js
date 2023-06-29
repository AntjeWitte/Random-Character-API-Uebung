import Chance from "chance";

const chance = new Chance();

export default function handler(request, response) {
  const character = {
    firstName: chance.first(),
    lastName: chance.last(),
    gender: chance.gender(),
    age: chance.age(),
    country: chance.country(),
    profession: chance.profession(),
    twitter: chance.twitter(),
  };

  //   if (!character) {
  //     response.status(404).json({ message: `Character  not found.` });
  //   }

  response.status(200).json(character);
}
