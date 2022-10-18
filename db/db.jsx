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
  week3: [
    [
      "Which of the following represents a basic block in a control flow graph?",
      "A basic block of statements is a set of all statements that are a part of a function that the control flow graph represents.",
      "A basic block of statements is a sequence of statements such that if the first statement the sequence is executed then all the statements in the sequence will also be executed.",
    ],
    [
      "Consider a variable count of type int. Suppose there is a method that has a statement of the type count++;. Which of the following statements are correct regarding the data flow definition of count?",
      "The statement is a definition of count.",
      "The statement is a use of count.",
      "The statement is both a definition and use of count.",
      "The statement is neither a definition nor a use of count.",
    ],
    [
      "Consider a variable x of type double and suppose a particular method in Java has a statement if(Math.log(x)) >= 4.2, will it be considered a definition of x or a use of x?",
      "The statement is a definition of x.",
      "The statement is a use of x.",
    ],
    [
      "State true or false: Consider a variable x in a program. Not every definition of x will always reach a use.",
      "True.",
      "False.",
    ],
    [
      "Which of the following best defines a du-path for a variable x?",
      "A du-path is a simple path from a definition of x to a use of x without any further definitions of x in-between.",
      "A du-path is a path from a definition of x to a use of x without any further definitions of x in-between.",
      "A du-path is a simple path from a definition of x to a use of x without any further uses of x in-between.",
      "A du-path is a path from a definition of x to a use of x without any further uses of x in-between.",
    ],
    [
      "State yes or no: We group du-paths with respect to a variable by their definitions.",
      "Yes.",
      "No.",
    ],
    [
      "Is it true that the all-du-paths data flow coverage criterion subsumes prime path coverage?",
      "Yes.",
      "No.",
    ],
    [
      "Which of the following statements are true when it comes to comparing traditional source code coverage criteria with graph based coverage criteria?",
      "Node and statement coverage are the same, edge and branch coverage are the same.",
      "Edge and decision coverage are the same.",
    ],
    [
      "Which of the following defines a linearly independent path of execution in a control flow graph?",
      "A path in which there are no branches.",
      "A path which does not contain other paths within it.",
      "A path that represents structural complexity of a program.",
      "A path within a connected component.",
    ],
    [
      "State true or false: Node and edge coverage, as test requirements for structural coverage over graphs, are given with the input graph itself.",
      "True.",
      "False.",
    ],
  ],
  week4: [
    [
      "Which of the following best describes a test driver?",
      "It is a special purpose implementation of a software module, used to develop or test a component that calls it.",
      "It is a software component that replaces another component that takes care of the control and/or the calling of a software component.",
    ],
    [
      "If method A uses a variable v shared with method B, where A writes to v and B reads from v, then, it is an example of which kind of coupling interface listed below?",
      "Parameter coupling.",
      "Interface coupling.",
      "External coupling.",
      "Shared data coupling.",
    ],
    [
      "To test sequencing constraints that occur as requirements specification, which of the following tests are used?",
      "Tests are inputs to sequencing constraints that violate the constraints.",
      "Tests are inputs to sequencing constraints that satisfy the constraints.",
      "Tests are sequences of method calls, as they occur in the specification.",
      "Tests are randomly generated sequencing constraints.",
    ],
    [
      "A simple path from the last definition to the first use of a coupling variable is called as . .",
      "A du-path.",
      "A coupling du-path.",
    ],
    [
      "State Yes or No: Are control flow graphs representing code the same as finite state machines that represent the same code?",
      "Yes.",
      "No.",
    ],
    [
      "Consider the graph below that depicts the calls to file handler methods open(), close(),read() and write(). Any procedure/method that uses these methods has to satisfy the following sequencing constraints: (1) An open(f) must be executed before every write(t), (2) An open(f) must be executed before every close(), (3) A write(f) may not be executed after a close() unless there is an open(f) in between, (4) A write(t) should be executed before every close(). <br /><br /> <img src='https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc22_cs61/w4-g2.PNG' /><br /><br /> Answer the following questions with reference to the sequencing constraints and the graph a method that uses these constraints.<br/><br />Which of the following is true with reference to the graph satisfying the sequencing constraints?",
      "All the sequencing constraints are satisfied.",
      "Constraints (1) and (2) are satisfied but (3) and (4) are not.",
      "Constraints (1), (2) and (3) are satisfied but (4) is not.",
      "All constraints are violated."
    ],
    [
      "State true or false: The path (1,4,5,7) satisfies constraint (4).",
      "True.",
      "False."
    ],
    [
      "State true or false: The path (1,2,3,7) satisfies all the constraints.",
      "True.",
      "False."
    ],
    [
      "State yes or no: Does the path (1,4,6,7) violate any of the constraints?",
      "Yes.",
      "No."
    ],
    [
      "State true or false: The path (1,4,6,4,6,7) satisfies all the constraints.",
      "Yes.",
      "No."
    ]
  ],
  week5: [
    [
      "State true or false: GACC subsumes predicate coverage.",
      "True.",
      "False."
    ],
    [
      "When we test to check if a particular clause does not determine a predicate, which kind of coverage criteria are we considering?",
      "Active coverage criteria.",
      "Inactive coverage criteria"
    ],
    [
      "Which of the following represents a correct order of subsumption amongst logic coverage criteria? In the options below, read → as ‘subsumes’",
      "Correlated active clause coverage → Predicate coverage → Clause coverage.",
      "Combinatorial coverage → Predicate coverage → Clause coverage.",
      "Combinatorial coverage → Correlated active clause coverage → Predicate coverage.",
      "General active clause coverage → Correlated active clause coverage → Clause coverage."
    ],
    [
      "Consider the logical predicate p=a∨(b∧c). Truth table for the predicate is given below with rows numbered from 1 to 8. T represents the Boolean value true and F represents the Boolean value false.<br/><br/><img src='https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc22_cs61/w5-g2.PNG'/><br/><br/>Answer the following questions with reference to logical coverage criteria for this predicate and the given truth table.<br/><br/>Which of the following represents pa, the conditions under which clause a determines p?",
      "b∧c.",
      "b∨c.",
      "¬b∨¬c.",
      "¬b∧¬c."
    ],
    [
      "Which of the following represents pb, the conditions under which clause b determines p?",
      "a∧c.",
      "a∨c.",
      "¬a∧c.",
      "¬a∨¬c"
    ],
    [
      "Which of the following represents pc, the conditions under which clause c determines p?",
      "¬a∧b.",
      "¬a∨b."
    ],
    [
      "Which of the following represents GACC pairs for clause a? Note: Numbers below represent row numbers from the truth table.",
      "{2,3,4}×{6,7,8}.",
      "{1,3,4}×{5,6,7}."
    ],
    [
      "State true or false: GACC pairs for clauses b and c are the same.",
      "True.",
      "False."
    ],
    [
      "The set {(2,6),(3,7),(4,8)} is the set of RACC pairs for which clause?",
      "Clause a.",
      "Clause b."
    ],
    [
      "State true or false: CACC pairs for clauses a, b and c are different from GACC pairs for these clauses.",
      "True.",
      "False."
    ],
  ],
  week6: [
    [
      "While applying logic-based testing to test source code, is it true that the predicates can be taken exactly as they occur in code always?",
      "Yes, the predicates can be considered exactly as they occur in code.",
      "No, some times we have to add extra clauses to the predicate"
    ],
    [
      "How do logical predicates occur in finite state machines?",
      "The logical predicates occur as a part of the states of the finite state machines.",
      "The logical predicates occur as guards in the transitions of the finite state machines."
    ],
    [
      "In a requirements specification document, where do logical predicates occur?",
      "They occur directly as a part of the requirements.",
      "They occur as pre-conditions, invariants and post-conditions in the requirements.",
      "All the conditions in requirements can be translated into predicates.",
      "Logical predicates cannot be found in requirements."
    ],
    [
      "Answer the following questions for the method twoPred() below.<br/>The method is called with two input parameters x and y.<br/><br/><img src='https://i.postimg.cc/xjtSN8N2/nptel.png'/><br/><br/>State true or false: The internal variable z in the second predicate needs to be re-written in terms of the input parameters x and y.",
      "True.",
      "False"
    ],
    [
      "Is it true that predicate coverage for the first predicate will also subsume predicate coverage for the second predicate?",
      "True.",
      "False."
    ],
    [
      "How many test cases will be needed for clause coverage for the second predicate if we explicitly count the true and false values for each clause?",
      "Two test cases.",
      "Four test cases."
    ],
    [
      "State true or false: The set of test case inputs {(x=5,y=3),(x=4,y=6),(x=5,y=6)} will satisfy clause coverage for the second predicate.",
      "True.",
      "False."
    ],
    [
      "State yes or no: The set of test case inputs {(x=5,y=3),(x=4,y=6),(x=5,y=6)}",
      "Yes.",
      "No."
    ],
    [
      "How many test cases are needed for satisfying RACC for all the clauses for the second predicate?",
      "Only one test case",
      "Two test cases",
      "Three test cases",
      "Five test cases"
    ],
    [
      "State true or false: The set of test case inputs {(x=4,y=6),(x=6,y=4),(x=4,y=5)} satisfy RACC for the second predicate.",
      "True.",
      "False."
    ]
  ]
};

export const rightAnswers = {
  week1: [3, 2, 2, 3, 4, 3, 2, 4, 2, 1],
  week2: [3, 2, 1, 2, 1, 2, 3, 1, 4, 1],
  week3: [2, 3, 2, 1, 3, 1, 2, 1, 2, 1],
  week4: [2, 4, 3, 2, 2, 3, 2, 1, 2, 1],
  week5: [2, 2, 3, 2, 2, 1, 1, 2, 1, 2],
  week6: [2, 2, 2, 1, 2, 2, 1, 1, 3, 1]
};

export const images = {
  week1: ["", "", "", "", "", "", "", "", "", ""],
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
  week3: [],
  week4: [],
  week5: [],
  week6: [],
  week7: [],
  week8: [],
  week9: [],
  week10: [],
  week11: [],
  week12: []
};
export default navItems;
