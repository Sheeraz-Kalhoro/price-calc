export const initialState = {
  gigs: [
    { _id:1, gigName: "Writing", gigPrice: 11.2 },
    { _id:2, gigName: "ReWriting", gigPrice: 7.8 },
    { _id:3, gigName: "Editing", gigPrice: 5.78 },
  ],
  gigsType: [
    {
      gigTypeName: "Essay(any type)",
      gigtypePrice: 4.2,
    },
    {
      gigTypeName: "Admission Essay",
      gigtypePrice: 4.2,
    },
    {
      gigTypeName: "Article Writing",
      gigtypePrice: 4.2,
    },
    {
      gigTypeName: "Article Review",
      gigtypePrice: 4.2,
    },
    {
      gigTypeName: "Movie Review",
      gigtypePrice: 4.2,
    },
    {
      gigTypeName: "Course Work",
      gigtypePrice: 4.2,
    },
    {
      gigTypeName: "Outline",
      gigtypePrice: 4.2,
    },
    {
      gigTypeName: "Marketing Plane",
      gigtypePrice: 4.2,
    },
    {
      gigTypeName: "Letters/Memos",
      gigtypePrice: 4.2,
    },
    {
      gigTypeName: "Case study",
      gigtypePrice: 4.2,
    },
    {
      gigTypeName: "Business Plan",
      gigtypePrice: 4.2,
    },
  ],
  page: 1,
  words: 275,
  totalGigPrice:'',
};

export function dispatcher(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        words: state.words + 275,
        page: state.page + 1,
        price: state.price + 11.2,
      };
    case "DECREMENT":
      return { ...state, words: state.words - 275, page: state.page - 1, price: state.price - 11.2, };
  }
}