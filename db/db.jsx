export const navItems = [
  "About",
  "Week 1",
  "Week 2",
  "Week 3",
  "Week 4",
  "Week 5",
  "Week 6",
  "Week 7",
  "Week 8",
  "Week 9",
  "Week 10",
  "Week 11",
  "Week 12",
];

export const questions = {
  week1: [
    [
      "Choose the right option to fill in the blank: Suppose a method M1 calls a method M2, which in turn, calls another method M3. The level of testing that tests for the interface of calls from M1 to M2 and then to M3 is called as",
      "Functional testing.",
      "Unit testing.",
      "Integration testing.",
      "System testing.",
    ],
    [
      "State true of false: A coverage criterion C1 said to subsume another coverage criterion C2 if there is at least one test case that satisfies C1 which also satisfies C2",
      "True",
      "False",
    ],
    [
      "State true or false: Testing can be used to find all the errors in code.",
      "True.",
      "False."
    ],
    [
      "Which of the following are practised in level 3 thinking during testing?",
      "Testing is a mental discipline, everyone in an organization strives to test thoroughly.",
      "Testing is done mainly by developers, to debug their code.",
      "Testing is done to identify failures and reduce risks.",
      "Testing is done to show absence of errors."
    ],
    [
      "Which of the following best defines usability testing?",
      "Testing done to ensure that the software looks nice.",
      "Testing done to ensure that the software is usable by all the users.",
      "Testing done to understand how users can use a software.",
      "Testing done to ensure that the user interface of the software is as specified in the requirements."
    ],
    [
      "Which of the following is a list of white-box testing techniques?",
      "Unit testing, performance testing.",
      "Integration testing, stress testing.",
      "Unit testing, integration testing.",
      "Usability testing, performance testing."
    ],
    [
      "As per the lectures, which of the following sentences best defines a test case?",
      "A test case contains only inputs to the software artifact.",
      "A test case contains inputs to the software artifact along with the expected outputs.",
      "A test case contains inputs to the software artifact and a decision on pass or fail.",
      "A test case contains inputs to the software artifact, which is run and the actual output is also recorded as a part of the test case."
    ],
    [
      "When do we say that a set of test cases T satisfies the test requirements TR for a coverage criterion C?",
      "For every test requirement  tr ∈ TR, there is exactly one test case t ∈ T such that t satisfies tr.",
      "For some test requirement  tr ∈ TR, there is some test case t such that t∈T such that t satisfies tr.",
      "For some test requirement  tr∈TR, all the test cases t∈T are such that t satisfies tr.",
      "For every test requirement  tr ∈ TR, there is at least one test case t ∈ T such that t satisfies tr."
    ],
    [
      "When do we say that a coverage criterion C1 subsumes a coverage criterion C2?",
      "C1  subsumes C2 iff some test case that satisfies C1 also satisfies C2.",
      "C1  subsumes C2 iff every test case that satisfies C1 also satisfies C2."
    ],
    [
      "What does the JUnit assertion assertFalse(val1 > val2) return whenval1 is less than val2?",
      "True",
      "False"
    ]
  ],
  week2: [
    [
      "State true of false: A coverage criterion C1 said to subsume another coverage criterion C2 if there is at least one test case that satisfies C1 which also satisfies C2",
      "True.",
      "False.",
    ],
    ["Week2: This is the second question", "Option-1", "Option-2", "Option-3"],
  ],
};

export const rightAnswers = {
  week1: [3, 2, 2, 3, 4, 3, 2, 4, 2, 1],
  week2: [2, 1],
};

export default navItems;
