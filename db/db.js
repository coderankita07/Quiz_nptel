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
      "State true or false: A coverage criterion C1 said to subsume another coverage criterion C2 if there is at least one test case that satisfies C1 which also satisfies C2",
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
  ],
  week7: [
    [
      "For the first five questions, consider the following set of requirements for a college job placement process. If the CGPA is ≥ 8 (out of 10), then the students are eligible for companies that offer salaries ≥ INR 20,00,000/= per annum. If the CGPA is between 6 and 8 then they are eligible for companies that offer salaries less than INR 20,00,000/= per annum. If there aren’t any companies with salary offers ≥ INR 20,00,000/= per annum in a particular period, then those with CGPA ≥ 8 will also appear in the companies in the lower salary categories. Those with less than 6 CGPA will not be assisted by the college placement office for their placements. Answer the following questions related to equivalence partitioning based testing of these requirements.<br/><br/>How many partitions will be there for the input CGPA if we consider only valid inputs?",
      "Three partitions.",
      "Five partitions."
    ],
    [
      "Do the test inputs {CGPA = 8, CGPA = 9, CGPA = 9.5} belong to the same partition?",
      " Yes, they belong to the same partition.",
      "No, they belong to different partitions."
    ],
    [
      "What is the expected output for the test case containing CGPA = 8 as input?",
      "Eligibility for offers above INR 20,00,000/= per annum and if no such offers exist, eligible for all offers.",
      "Only eligible for offers above INR 20,00,000/= per annum."
    ],
    [
      "State true or false: A student has a CGPA of 6 and will be eligible to appear for placements for companies with a salary offer of INR 20,00,000/=",
      "True.",
      "False."
    ],
    [
      "Which of the following is a correct partitioning of inputs?",
      "Salary range: 1. INR x to INR 20,00,000, 2. INR 20,00,001 to INR y where x is the minimum salary offered and y is the maximum salary offered.",
      "Salary range: 1. INR 0 to INR 20,00,000, 2. ≥ INR 20,00,000.",
      "Both the options above can be valid partitions.",
      "None of the options above are valid partitions."
    ],
    [
      "Amongst the various coverage criteria for input space partitioning, which is the most expressive and which is the least expressive?",
      "All combinations coverage is the least expressive and multiple base choice coverage is the most expressive.",
      "All combinations coverage is the most expressive and multiple base choice coverage is the least expressive.",
      "Each choice coverage is the most expressive and all combinations coverage is the least expressive.",
      " Each choice coverage is the least expressive and all combinations coverage is the most expressive."
    ],
    [
      "State true or false: Multiple base choice coverage subsumes pair-wise coverage.",
      "True.",
      "False."
    ],
    [
      "Which criterion below will have a maximum number of test cases?",
      "Each choice criterion.",
      "All combinations criterion.",
      "Base choice coverage criterion.",
      "Multiple base choice coverage criterion."
    ],
    [
      "When does T-wise coverage criterion become the same as all combinations coverage criterion?",
      "When the value for T is the maximum value in a partition.",
      "When the value for T is equal to the number of partitions."
    ],
    [
      "State yes or no: While partitioning the inputs using equivalence partitioning, both valid and invalid inputs need to be considered.",
      "Yes.",
      "No."
    ]
  ],
  week8: [
    [
      "Consider the regular expression (a+b)⋅(a+b)∗ over the alphabet Σ={a,b}. Which of the following options represents a list of words generated by this regular expression?",
      "ab,a,aab.",
      "abab,babab.",
      "aaa,bbb.",
      "All of the above."
    ],
    [
      "For the same regular expression (a+b)⋅(a+b)∗ , which of the following options represents the language corresponding to the regular expression?",
      "The language is the set of all words over a and b that have at least one a and at least one b in them.",
      "The language is the set of all words over a and b that have at least one a or at least one b in them."
    ],
    [
      "While parsing a program to extract syntactic information, which of the following defines how characters form tokens?",
      "Regular expressions.",
      "Context-free grammars.",
      "Context-sensitive grammars.",
      "The normal form of the grammar."
    ],
    [
      "Consider the context-free grammar given by G=(N,T,P,S) where N={S,X},T={a,b},P={S→aXb,X→ab}. Which of the following is the language generated by this grammar?",
      "The language generated by G is {w|w=aabb}.",
      "The language generated by G is {w|w is of the form anbn,n≥1}"
    ],
    [
      "State yes or no: Is the ground string in mutation testing the same as the program under test?",
      "Yes.",
      "No."
    ],
    [
      "Which of the following is a mutant that can be killed by any test case?",
      "Dead mutant.",
      "Equivalent mutant.",
      "Trivial mutant.",
      "Idempotent mutant."
    ],
    [
      "Suppose a decision statement like if (x < 0 && z == 5) is mutated to get if (x > 0 && z == 5) then it is an example of which kind of mutation operator?",
      "Replacing a logical operator.",
      "Replacing a relational operator.",
      "Replacing a decision statement.",
      "Replacing a condition statement."
    ],
    [
      "As per the lectures, replacing a particular assignment statement with a statement like failOnZero() is an example of a mutation operator applied at which of the levels in testing?",
      "Program level",
      "Integration level.",
      " Statement level.",
      "De-bugging level."
    ],
    [
      "A programmer decides to save time and apply two or three mutation operators together to increase the chances of finding many errors together. Is this considered to be a useful strategy in mutation testing?",
      "Yes, it will find many errors early.",
      "No, mutation operators work best when applied one at a time."
    ],
    [
      "State true or false: Mutation testing can be used to show that a program behaves identically when a particular operation is replaced or removed.",
      "True.",
      "False."
    ]
  ],
  week9: [
    [
      "How is overloading different from overriding in object oriented programming?",
      "Overloading occurs between two methods in the same class and overriding occurs between methods in a class and one of its descendants.",
      "Overloading occurs between a method in a class and one of its descendants and overriding occurs between two methods in the same class."
    ],
    [
      "Which of the following represents use of super() keyword?",
      "Sub-classes can explicitly use their parents variables and methods using the keyword super().",
      "Sub-classes can use their own variables and methods and not the inherited ones using the keyword super()."
    ],
    [
      "While applying the mutation operator that deletes a method call, how is the value to be returned by the deleted method passed back to the caller method?",
      "The method itself is deleted, so the call should also be deleted in the caller method.",
      "The value returned by the deleted method is replaced with a suitable statement in the caller.",
      "A message is sent to the caller indicating that there is no value to be returned as the method is deleted.",
      "The value returned by the deleted method is replaced with a fixed, constant value."
    ],
    [
      "When mutation testing is applied as a black-box testing technique to mutate the inputs, which of the following statements hold true?",
      "Both the inputs and the program which is accepting the inputs have to be mutated with one mutation operator.",
      "Only the inputs are mutated, the program which is accepting the inputs remains the same.",
      "The inputs are not mutated, the program is mutated at a random statement.",
      "The inputs are not mutated, the program is mutated at one of the statements that process the inputs."
    ],
    [
      "When we change a method call is-divisible(a,b) to is-divisible(b,a) is an example of which of the mutation operators listed below?",
      "Integration parameter variable replacement.",
      "Integration parameter variable exchange."
    ],
    [
      "State yes or no: The programming language Java does not support multiple class inheritance and hence each class only has a single parent.",
      "Yes.",
      "No."
    ],
    [
      "Which of the following integration mutation operator represents changing the order of arguments in method invocations to be the same as that of another overloading method, if one exists?",
      "Overloading method change.",
      "Argument number change.",
      "Argument order change.",
      "Reference type change."
    ],
    [
      "State true or false: While testing inputs using mutation testing, the inputs always have to adhere to their underlying syntax.",
      "True.",
      "False."
    ],
    [
      "Towards ensuring that mutation testing subsumes edge coverage, which of the following mutation operators are used?",
      "Relational operator replacement.",
      "Statement replacement.",
      "Logical operator replacement.",
      "Condition statement replacement."
    ],
    [
      "Which of the statements below are true with reference to mutation testing subsuming all-defs coverage?",
      "We need to consider strong mutation to be applied to the statements that contain variable definitions.",
      "Both weak and strong mutation on the statements that contain variable definitions will work."
    ]
  ],
  week10: [
    [
      "Which of the following features of static websites are tested using graphs?",
      "We check if all the connections are valid and if there are any dead links.",
      "We check if all the information given is correct in each of the linked web pages."
    ],
    [
      "While testing web applications, which of the following is true regarding client-side vs. server-side testing?",
      "Client and server are separated and testers typically don’t have access to the server code.",
      "Testers have equal accesss to the client code and server code eventhough they are separated."
    ],
    [
      "State yes or no: It is possible to generate all the input screens that are passed to a web application.",
      "Yes.",
      "No."
    ],
    [
      "Which of the following is a list of techniques that can be used to provide test values to a web application?",
      "Generate values automatically using an appropriate algorithm.",
      "Request user to supply inputs.",
      "Random choice, user session data, construct based on the domain of application.",
      "Generate inputs randomly and then choose based on the application."
    ],
    [
      "Which of the following features can be checked using HTML without the need to write extra scripting constraints?",
      "Change of transfer mode, checking for length of input and checking against a list of pre-defined values.",
      "Change of transfer mode and change of data type of input.",
      "Checking of inter-dependency of input values.",
      "Checking for length of input and also the data type."
    ],
    [
      "Is a control graph model useful for testing system level properties of web applications?",
      "Yes.",
      "No."
    ],
    [
      "Which of the following is a complete list of operators that are used in component expressions?",
      "Sequencing and selection.",
      "Iteration and selection.",
      "Sequencing, iteration and selection.",
      "Sequencing, iteration, selection and aggregation."
    ],
    [
      "Which of the following defines the nodes of a yo-yo graph?",
      "Nodes of a yo-yo graph are the classes of the inheritance hierarchy.",
      "Nodes of a yo-yo graph are the methods of different classes, one node for each of the new, inherited and overridden methods."
    ],
    [
      "Which of the following best defines the edges of a yo-yo graph?",
      "Edges of a yo-yo graph are the method calls among methods of different classes.",
      "Edges of a yo-yo graph are among classes at different levels of inheritance.",
      "Edges of a yo-yo graph are from a caller method to a callee method.",
      "Edges of a yo-yo graph are either the actual method calls or the calls that cannot be made due to overriding."
    ],
    [
      "State true or false: All the faults in object-oriented programs can be determined statically.",
      "True.",
      "False."
    ]
  ],
  week11: [
    [
      "State yes or no: Is concolic testing a white-box testing technique?",
      "Yes.",
      "No."
    ],
    [
      "Which of the following is true about concolic testing?",
      "Concolic testing is used instead of symbolic testing when the latter fails.",
      "Concolic testing keeps concrete state and symbolic state."
    ],
    [
      "What is the use of a SAT/SMT solver in symbolic testing?",
      "SAT/SMT solvers are used to collect path constraints in symbolic testing.",
      "SAT/SMT solvers are used to solve path constraints and get values that can be used as test inputs.",
      "Constraint solvers are not useful in symbolic testing as not all path constraints can be collected and solved.",
      "Constraint solvers on predicates always return true or false values which helps to decide the execution paths."
    ],
    [
      "State true or false: Symbolic execution can be used to detect non-termination in programs.",
      "True.",
      "False."
    ],
    [
      "Which of the following is a list of techniques used in the algorithm deployed by DART?",
      "Ramdom testing, symbolic testing and constraint solvers.",
      "Symbolic testing and automated testing.",
      "Directed search, random testing and constraint solvers.",
      "Concrete testing and symbolic testing."
    ],
    [
      "Which of the following strategy is used for input search in concolic testing?",
      "Random search.",
      "Systematic, random search interleaved with path-sensitive search."
    ],
    [
      "<u><strong>Common data for Q7-Q10:</strong></u><br/><br/>Consider the code fragment given below. Answer the following questions related to symbolic execution of the given code fragment.<br/><img src='https://i.postimg.cc/GhZbtHRL/npel.png' /><br/><br/>What does the code fragment do?",
      "It checks if x is greater than y.",
      "It checks if y is greater than x.",
      "It swaps the values of x and y.",
      "It swaps the values of x and y twice."
    ],
    [
      "How many decision points and execution paths are there in the code fragment?",
      "Two decision points and three execution paths.",
      "Three decision points and four execution paths."
    ],
    [
      "What will be the path constraint at line 1 of the code fragment such that program exits without further execution?",
      "x > y.",
      "x <= y."
    ],
    [
      "State yes or no: Is the error statement reachable in the given program fragment?",
      "Yes.",
      "No."
    ]
  ],
  week12: [
    [
      "State true or false: Regression testing is a white-box testing technique as it tests for the changes done to the code.",
      "True.",
      "False."
    ],
    [
      "Let P be a program and let P′ be a modified version of P. Whendo we say that a particular test case t is obsolete for P′?",
      "Test case t is obsolete for P′ if it has an input that is not valid for P′.",
      "Test case t is obsolete for P′ if it does not produce an output on execution."
    ],
    [
      "State true or false: Testing for non-functional or quality requirements can be done at all the phases of software development.",
      "True.",
      "False."
    ],
    [
      "If a software application version X released in the year 2007 can be used on version Y of the same application released in the year 2010, what does it indicate regarding its compatibility?",
      "The application X is forward compatible.",
      "The application X is backward compatible."
    ],
    [
      "If a particular file available in a particular web link is set to have “Readonly” access to all the users, then, it is an example of which kind of quality requirement?",
      "It is an example of a confidentiality requirement.",
      "It is an example of a reliability requirement.",
      "It is an example of a security authorization requirement.",
      "It is an example of a security authentication requirement."
    ],
    [
      "Installation instructions are made available as a part of the software package. What are these instructions a part of?",
      "They are a part of the software documentation.",
      "They are a part of the software operations procedure.",
      "They are a part of the regulatory requirements for the software.",
      "They are a part of the availability requirements of the software."
    ],
    [
      "Which of the following terms represents the testing that is done to find the upper limit capacity of the inputs that a particular system can handle?",
      "Performance testing.",
      "Load testing.",
      "Spike testing.",
      "Stress testing."
    ],
    [
      "Which of the following is a list of key challenges in testing of mobile applications?",
      "Device fragmentation, different mobile networks, compatibility across platforms.",
      "Key challenge is related to mobile applications being different from that of desktop applications.",
      "Mobile applications have to be tested within a mobile phone only, this is the key challenge.",
      "Testing across platforms is the only key challenge."
    ],
    [
      "When performance testing is considered for mobile applications, which of the following aspects are tested for?",
      "Screen size, operating systems and browsers.",
      "Network coverage, memory and battery.",
      "Speed with uniform user experience.",
      "Load and stress in terms of the number of users."
    ],
    [
      "Which of the following is a list of interrupts that mobile applications are tested for?",
      "Network coverage, memory and battery.",
      "Network outage, incoming/outgoing calls and messages."
    ]
  ]
};

export const rightAnswers = {
  week1: [3, 2, 2, 3, 4, 3, 2, 4, 2, 1],
  week2: [3, 2, 1, 2, 1, 2, 1, 2, 4, 1],
  week3: [2, 3, 2, 1, 3, 1, 2, 1, 2, 1],
  week4: [2, 4, 3, 2, 2, 3, 2, 1, 2, 1],
  week5: [2, 2, 3, 3, 3, 1, 1, 2, 1, 2],
  week6: [2, 2, 2, 1, 2, 2, 1, 1, 3, 1],
  week7: [1, 1, 1, 2, 3, 4, 2, 2, 2, 1],
  week8: [4, 2, 1, 1, 1, 3, 2, 1, 2, 1],
  week9: [1, 1, 4, 2, 2, 2, 3, 2, 1, 1],
  week10: [1, 1, 2, 3, 1, 2, 4, 2, 4, 2],
  week11: [1, 2, 2, 2, 3, 2, 3, 1, 2, 2],
  week12: [2, 1, 2, 1, 3, 1, 3, 1, 2, 2]
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
