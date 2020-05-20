const initialState = {
  pendingPets: [
    {
      name: "Cooper",
      animal: "dog",
      breed: "Dalmatian",
      image: "https://images.dog.ceo/breeds/dalmatian/cooper2.jpg",
    },
    {
      name: "Wrigley",
      animal: "dog",
      breed: "Dingo",
      image: "https://images.dog.ceo/breeds/dingo/n02115641_4265.jpg",
    },
    {
      name: "Rosie",
      animal: "dog",
      breed: "Golden Retriever",
      image:
        "https://images.dog.ceo/breeds/retriever-golden/n02099601_5188.jpg",
    },
    {
      name: "Casper",
      animal: "dog",
      breed: "Boxer",
      image: "https://images.dog.ceo/breeds/boxer/n02108089_11074.jpg",
    },
    {
      name: "Juniper",
      animal: "dog",
      breed: "Swiss Mountain",
      image: "https://images.dog.ceo/breeds/mountain-swiss/n02107574_1059.jpg",
    },
  ],
  currentPet: {
    name: "Pablo",
    animal: "dog",
    breed: "Cocker Spaniel",
    image: "https://images.dog.ceo/breeds/spaniel-cocker/n02102318_959.jpg",
  },
  pastPets: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "LIKE": {
      let newPastPets = [
        ...state.pastPets,
        { ...state.currentPet, status: "liked" },
      ];
      let newPet = state.pendingPets.splice(0, 1)[0];

      return {
        pendingPets: [...state.pendingPets],
        currentPet: newPet,
        pastPets: [...newPastPets],
      };
    }
    case "DISLIKE": {
      let newPastPets = [
        ...state.pastPets,
        { ...state.currentPet, status: "disliked" },
      ];
      let newPet = state.pendingPets.splice(0, 1)[0];

      return {
        pendingPets: [...state.pendingPets],
        currentPet: newPet,
        pastPets: [...newPastPets],
      };
    }
    case "SUPER_LIKE": {
      let newPastPets = [
        ...state.pastPets,
        { ...state.currentPet, status: "super liked" },
      ];
      let newPet = state.pendingPets.splice(0, 1)[0];

      return {
        pendingPets: [...state.pendingPets],
        currentPet: newPet,
        pastPets: [...newPastPets],
      };
    }
    default: {
      return state;
    }
  }
}
