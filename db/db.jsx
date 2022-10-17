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
      "False.",
    ],
    [
      "Which of the following are practised in level 3 thinking during testing?",
      "Testing is a mental discipline, everyone in an organization strives to test thoroughly.",
      "Testing is done mainly by developers, to debug their code.",
      "Testing is done to identify failures and reduce risks.",
      "Testing is done to show absence of errors.",
    ],
    [
      "Which of the following best defines usability testing?",
      "Testing done to ensure that the software looks nice.",
      "Testing done to ensure that the software is usable by all the users.",
      "Testing done to understand how users can use a software.",
      "Testing done to ensure that the user interface of the software is as specified in the requirements.",
    ],
    [
      "Which of the following is a list of white-box testing techniques?",
      "Unit testing, performance testing.",
      "Integration testing, stress testing.",
      "Unit testing, integration testing.",
      "Usability testing, performance testing.",
    ],
    [
      "As per the lectures, which of the following sentences best defines a test case?",
      "A test case contains only inputs to the software artifact.",
      "A test case contains inputs to the software artifact along with the expected outputs.",
      "A test case contains inputs to the software artifact and a decision on pass or fail.",
      "A test case contains inputs to the software artifact, which is run and the actual output is also recorded as a part of the test case.",
    ],
    [
      "When do we say that a set of test cases T satisfies the test requirements TR for a coverage criterion C?",
      "For every test requirement  tr ∈ TR, there is exactly one test case t ∈ T such that t satisfies tr.",
      "For some test requirement  tr ∈ TR, there is some test case t such that t∈T such that t satisfies tr.",
      "For some test requirement  tr∈TR, all the test cases t∈T are such that t satisfies tr.",
      "For every test requirement  tr ∈ TR, there is at least one test case t ∈ T such that t satisfies tr.",
    ],
    [
      "When do we say that a coverage criterion C1 subsumes a coverage criterion C2?",
      "C1  subsumes C2 iff some test case that satisfies C1 also satisfies C2.",
      "C1  subsumes C2 iff every test case that satisfies C1 also satisfies C2.",
    ],
    [
      "What does the JUnit assertion assertFalse(val1 > val2) return whenval1 is less than val2?",
      "True",
      "False",
    ],
  ],
  week2: [
    [
      "Which of the following best defines an infeasible test path?",
      "An infeasible test path is one that does not exist in the graph.",
      "An infeasible test path is one that can be executed by a failed test case.",
      "An infeasible test path is one that cannot be executed by any test case.",
      "An infeasible test path is one that does not start at an initial vertex or end at a final vertex.",
    ],
    [
      "How are test requirements defined and met in graphs-based structural coverage criteria?",
      "Test requirements are basically the same as test paths, they are given as test paths.",
      "Test requirements are defined as properties of test paths and they are met by using test paths that satisfy each test requirement.",
    ],
    [
      "In control flow graphs, which of the terms below represents a basic block?",
      "A basic block is a sequence of statements such that there is no branching in the sequence.",
      "A basic block is any sequence of statements that occurs as a path in the control flow graph.",
    ],
    [
      "Consider a control flow graph G corresponding to a method and a strongly connected component S in C. Which of the following does S represent in the code that G corresponds to?",
      "S  represents the entire method in case the method does not have loops.",
      "S  represents a loop in the method.",
    ],
    [
      "Which of the algorithms will return the shortest paths between two nodes in a control flow graph?",
      "Breadth first search.",
      "Depth first search.",
    ],
    [
      "State true or false: There are test paths that achieve node coverage but not edge coverage.",
      "True",
      "False",
    ],
    [
      "Which of the following test paths achieve edge coverage?",
      "Test path [1, 2, 3, 2, 4].",
      "Test paths [1, 2, 4] and [1, 2, 3, 2].",
      "Both the paths above achieve edge coverage.",
      "None of the above two paths achieve edge coverage.",
    ],
    [
      "State yes or no: In the graph above, the test path [1, 2, 3, 2, 4] tours the pair of edges [3, 2, 3].",
      "Yes.",
      "No",
    ],
    [
      "The test paths {[1, 2, 4], [1, 2, 3, 2, 3, 2, 4]} achieve which of the following coverage criteria?",
      "Node coverage only.",
      "Edge coverage only.",
      "Node and edge coverage only.",
      "Edge pair coverage.",
    ],
    [
      "State true or false: The test path [1, 2, 3, 2, 4] achieves edge coverage.",
      "True.",
      "False.",
    ],
  ],
};

export const rightAnswers = {
  week1: [3, 2, 2, 3, 4, 3, 2, 4, 2, 1],
  week2: [3, 2, 1, 2, 1, 2, 3, 1, 4, 1],
};

export const images = {
  week1: ["","","","","","","","","",""],
  week2: [
    "",
    "",
    "",
    "",
    "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc22_cs61/w2q5.JPG",
    "",
    "",
    "",
    "",
    "",
  ],
};
export default navItems;
