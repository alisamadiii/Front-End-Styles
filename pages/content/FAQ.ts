type FAQTypes = {
  id: number;
  question: string;
  answer: string;
}[];

export type EachFAQTypes = {
  id: number;
  question: string;
  answer: string;
};

export const FAQ: FAQTypes = [
  {
    id: 1,
    question: "How do I apply?",
    answer:
      "Register in the UCAS Hub and complete the registration questions - confirm the year you want to start your studies and that you're interested in ‘Undergraduate’ level of study.",
  },
  {
    id: 2,
    question: "What are entry requirements?",
    answer:
      "Entry requirements vary between universities and colleges - a full list of universities and colleges and their minimum entry criteria can be found in our search tool. If you are unsure you meet a university/college's criteria, it is best to contact their admissions team for further guidance.",
  },
  {
    id: 3,
    question: "What is the UCAS Tariff?",
    answer:
      "The UCAS Tariff is a way of allocating points to qualifications. Not all qualifications attract UCAS Tariff points for various reasons. The university or college you're interested in may accept your qualifications as an appropriate entry route, even if they don't attract UCAS Tariff points.",
  },
  {
    id: 4,
    question: "Where can I find out about funding?",
    answer:
      "We don’t arrange student finance, but you can choose to allow us to share some of the details from your application with your regional funding organisation.",
  },
];
