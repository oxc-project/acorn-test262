__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1968,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 29,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 13,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 15,
          "end": 16,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 15,
            "end": 16,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 18,
          "end": 19,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 18,
            "end": 19,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 22,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 22,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 24,
          "end": 25,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 24,
            "end": 25,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 27,
          "end": 28,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 27,
            "end": 28,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 31,
      "end": 82,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 60,
        "end": 82,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 66,
            "end": 80,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 66,
              "end": 79,
              "operator": "+",
              "left": {
                "type": "AwaitExpression",
                "start": 67,
                "end": 74,
                "argument": {
                  "type": "Identifier",
                  "start": 73,
                  "end": 74,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Identifier",
                "start": 78,
                "end": 79,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 57,
        "decorators": [],
        "name": "binaryPlus0",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 84,
      "end": 133,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 113,
        "end": 133,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 119,
            "end": 131,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 119,
              "end": 130,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 119,
                "end": 120,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "AwaitExpression",
                "start": 123,
                "end": 130,
                "argument": {
                  "type": "Identifier",
                  "start": 129,
                  "end": 130,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 99,
        "end": 110,
        "decorators": [],
        "name": "binaryPlus1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 135,
      "end": 193,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 170,
        "end": 193,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 176,
            "end": 191,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 176,
              "end": 190,
              "operator": "&&",
              "left": {
                "type": "AwaitExpression",
                "start": 177,
                "end": 184,
                "argument": {
                  "type": "Identifier",
                  "start": 183,
                  "end": 184,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Identifier",
                "start": 189,
                "end": 190,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 150,
        "end": 167,
        "decorators": [],
        "name": "binaryLogicalAnd0",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 195,
      "end": 251,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 230,
        "end": 251,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 236,
            "end": 249,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 236,
              "end": 248,
              "operator": "&&",
              "left": {
                "type": "Identifier",
                "start": 236,
                "end": 237,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "AwaitExpression",
                "start": 241,
                "end": 248,
                "argument": {
                  "type": "Identifier",
                  "start": 247,
                  "end": 248,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 210,
        "end": 227,
        "decorators": [],
        "name": "binaryLogicalAnd1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 253,
      "end": 308,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 288,
        "end": 308,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 294,
            "end": 306,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 294,
              "end": 305,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 294,
                "end": 295,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "AwaitExpression",
                "start": 298,
                "end": 305,
                "argument": {
                  "type": "Identifier",
                  "start": 304,
                  "end": 305,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 268,
        "end": 285,
        "decorators": [],
        "name": "binaryAssignment0",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 310,
      "end": 367,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 345,
        "end": 367,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 351,
            "end": 365,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 351,
              "end": 364,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 351,
                "end": 354,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 351,
                  "end": 352,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 353,
                  "end": 354,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "AwaitExpression",
                "start": 357,
                "end": 364,
                "argument": {
                  "type": "Identifier",
                  "start": 363,
                  "end": 364,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 325,
        "end": 342,
        "decorators": [],
        "name": "binaryAssignment1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 369,
      "end": 428,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 404,
        "end": 428,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 410,
            "end": 426,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 410,
              "end": 425,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 410,
                "end": 415,
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "start": 410,
                  "end": 413,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 410,
                    "end": 411,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 412,
                    "end": 413,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 414,
                  "end": 415,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "AwaitExpression",
                "start": 418,
                "end": 425,
                "argument": {
                  "type": "Identifier",
                  "start": 424,
                  "end": 425,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 384,
        "end": 401,
        "decorators": [],
        "name": "binaryAssignment2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 430,
      "end": 488,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 465,
        "end": 488,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 471,
            "end": 486,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 471,
              "end": 485,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 471,
                "end": 475,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 471,
                  "end": 472,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 473,
                  "end": 474,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "AwaitExpression",
                "start": 478,
                "end": 485,
                "argument": {
                  "type": "Identifier",
                  "start": 484,
                  "end": 485,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 445,
        "end": 462,
        "decorators": [],
        "name": "binaryAssignment3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 490,
      "end": 550,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 525,
        "end": 550,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 531,
            "end": 548,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 531,
              "end": 547,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 531,
                "end": 537,
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "start": 531,
                  "end": 535,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 531,
                    "end": 532,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 533,
                    "end": 534,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 536,
                  "end": 537,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "AwaitExpression",
                "start": 540,
                "end": 547,
                "argument": {
                  "type": "Identifier",
                  "start": 546,
                  "end": 547,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 505,
        "end": 522,
        "decorators": [],
        "name": "binaryAssignment4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 552,
      "end": 612,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 587,
        "end": 612,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 593,
            "end": 610,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 593,
              "end": 609,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 593,
                "end": 599,
                "computed": true,
                "object": {
                  "type": "MemberExpression",
                  "start": 593,
                  "end": 596,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 593,
                    "end": 594,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 595,
                    "end": 596,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 597,
                  "end": 598,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "AwaitExpression",
                "start": 602,
                "end": 609,
                "argument": {
                  "type": "Identifier",
                  "start": 608,
                  "end": 609,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 567,
        "end": 584,
        "decorators": [],
        "name": "binaryAssignment5",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 614,
      "end": 673,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 649,
        "end": 673,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 655,
            "end": 671,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 655,
              "end": 670,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 655,
                "end": 666,
                "computed": false,
                "object": {
                  "type": "AwaitExpression",
                  "start": 656,
                  "end": 663,
                  "argument": {
                    "type": "Identifier",
                    "start": 662,
                    "end": 663,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 665,
                  "end": 666,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Identifier",
                "start": 669,
                "end": 670,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 629,
        "end": 646,
        "decorators": [],
        "name": "binaryAssignment6",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 675,
      "end": 736,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 710,
        "end": 736,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 716,
            "end": 734,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 716,
              "end": 733,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 716,
                "end": 729,
                "computed": false,
                "object": {
                  "type": "AwaitExpression",
                  "start": 717,
                  "end": 726,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 723,
                    "end": 726,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 723,
                      "end": 724,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 725,
                      "end": 726,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 728,
                  "end": 729,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Identifier",
                "start": 732,
                "end": 733,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 690,
        "end": 707,
        "decorators": [],
        "name": "binaryAssignment7",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 738,
      "end": 798,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 773,
        "end": 798,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 779,
            "end": 796,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 779,
              "end": 795,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 779,
                "end": 791,
                "computed": true,
                "object": {
                  "type": "AwaitExpression",
                  "start": 780,
                  "end": 787,
                  "argument": {
                    "type": "Identifier",
                    "start": 786,
                    "end": 787,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 789,
                  "end": 790,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Identifier",
                "start": 794,
                "end": 795,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 753,
        "end": 770,
        "decorators": [],
        "name": "binaryAssignment8",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 800,
      "end": 858,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 835,
        "end": 858,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 841,
            "end": 856,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 841,
              "end": 855,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 841,
                "end": 851,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 841,
                  "end": 842,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "AwaitExpression",
                  "start": 843,
                  "end": 850,
                  "argument": {
                    "type": "Identifier",
                    "start": 849,
                    "end": 850,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "start": 854,
                "end": 855,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 815,
        "end": 832,
        "decorators": [],
        "name": "binaryAssignment9",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 860,
      "end": 921,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 896,
        "end": 921,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 902,
            "end": 919,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 902,
              "end": 918,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 902,
                "end": 914,
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "start": 902,
                  "end": 912,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 902,
                    "end": 903,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "AwaitExpression",
                    "start": 904,
                    "end": 911,
                    "argument": {
                      "type": "Identifier",
                      "start": 910,
                      "end": 911,
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 913,
                  "end": 914,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Identifier",
                "start": 917,
                "end": 918,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 875,
        "end": 893,
        "decorators": [],
        "name": "binaryAssignment10",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 923,
      "end": 986,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 959,
        "end": 986,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 965,
            "end": 984,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 965,
              "end": 983,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 965,
                "end": 979,
                "computed": false,
                "object": {
                  "type": "AwaitExpression",
                  "start": 966,
                  "end": 976,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 972,
                    "end": 976,
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "start": 972,
                      "end": 973,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 974,
                      "end": 975,
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 978,
                  "end": 979,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Identifier",
                "start": 982,
                "end": 983,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 938,
        "end": 956,
        "decorators": [],
        "name": "binaryAssignment11",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 988,
      "end": 1049,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1024,
        "end": 1049,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1030,
            "end": 1047,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1030,
              "end": 1046,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 1030,
                "end": 1042,
                "computed": true,
                "object": {
                  "type": "MemberExpression",
                  "start": 1030,
                  "end": 1033,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1030,
                    "end": 1031,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1032,
                    "end": 1033,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "property": {
                  "type": "AwaitExpression",
                  "start": 1034,
                  "end": 1041,
                  "argument": {
                    "type": "Identifier",
                    "start": 1040,
                    "end": 1041,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "start": 1045,
                "end": 1046,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1003,
        "end": 1021,
        "decorators": [],
        "name": "binaryAssignment12",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1051,
      "end": 1114,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1087,
        "end": 1114,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1093,
            "end": 1112,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1093,
              "end": 1111,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 1093,
                "end": 1107,
                "computed": true,
                "object": {
                  "type": "AwaitExpression",
                  "start": 1094,
                  "end": 1103,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 1100,
                    "end": 1103,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 1100,
                      "end": 1101,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 1102,
                      "end": 1103,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1105,
                  "end": 1106,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Identifier",
                "start": 1110,
                "end": 1111,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1066,
        "end": 1084,
        "decorators": [],
        "name": "binaryAssignment13",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1116,
      "end": 1180,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1159,
        "end": 1180,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1165,
            "end": 1178,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1165,
              "end": 1177,
              "operator": "+=",
              "left": {
                "type": "Identifier",
                "start": 1165,
                "end": 1166,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "AwaitExpression",
                "start": 1170,
                "end": 1177,
                "argument": {
                  "type": "Identifier",
                  "start": 1176,
                  "end": 1177,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1131,
        "end": 1156,
        "decorators": [],
        "name": "binaryCompoundAssignment0",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1182,
      "end": 1248,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1225,
        "end": 1248,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1231,
            "end": 1246,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1231,
              "end": 1245,
              "operator": "+=",
              "left": {
                "type": "MemberExpression",
                "start": 1231,
                "end": 1234,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1231,
                  "end": 1232,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1233,
                  "end": 1234,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "AwaitExpression",
                "start": 1238,
                "end": 1245,
                "argument": {
                  "type": "Identifier",
                  "start": 1244,
                  "end": 1245,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1197,
        "end": 1222,
        "decorators": [],
        "name": "binaryCompoundAssignment1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1250,
      "end": 1317,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1293,
        "end": 1317,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1299,
            "end": 1315,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1299,
              "end": 1314,
              "operator": "+=",
              "left": {
                "type": "MemberExpression",
                "start": 1299,
                "end": 1303,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 1299,
                  "end": 1300,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1301,
                  "end": 1302,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "AwaitExpression",
                "start": 1307,
                "end": 1314,
                "argument": {
                  "type": "Identifier",
                  "start": 1313,
                  "end": 1314,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1265,
        "end": 1290,
        "decorators": [],
        "name": "binaryCompoundAssignment2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1319,
      "end": 1387,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1362,
        "end": 1387,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1368,
            "end": 1385,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1368,
              "end": 1384,
              "operator": "+=",
              "left": {
                "type": "MemberExpression",
                "start": 1368,
                "end": 1379,
                "computed": false,
                "object": {
                  "type": "AwaitExpression",
                  "start": 1369,
                  "end": 1376,
                  "argument": {
                    "type": "Identifier",
                    "start": 1375,
                    "end": 1376,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1378,
                  "end": 1379,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Identifier",
                "start": 1383,
                "end": 1384,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1334,
        "end": 1359,
        "decorators": [],
        "name": "binaryCompoundAssignment3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1389,
      "end": 1458,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1432,
        "end": 1458,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1438,
            "end": 1456,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1438,
              "end": 1455,
              "operator": "+=",
              "left": {
                "type": "MemberExpression",
                "start": 1438,
                "end": 1450,
                "computed": true,
                "object": {
                  "type": "AwaitExpression",
                  "start": 1439,
                  "end": 1446,
                  "argument": {
                    "type": "Identifier",
                    "start": 1445,
                    "end": 1446,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1448,
                  "end": 1449,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Identifier",
                "start": 1454,
                "end": 1455,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1404,
        "end": 1429,
        "decorators": [],
        "name": "binaryCompoundAssignment4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1460,
      "end": 1527,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1503,
        "end": 1527,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1509,
            "end": 1525,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1509,
              "end": 1524,
              "operator": "+=",
              "left": {
                "type": "MemberExpression",
                "start": 1509,
                "end": 1519,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 1509,
                  "end": 1510,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "AwaitExpression",
                  "start": 1511,
                  "end": 1518,
                  "argument": {
                    "type": "Identifier",
                    "start": 1517,
                    "end": 1518,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "start": 1523,
                "end": 1524,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1475,
        "end": 1500,
        "decorators": [],
        "name": "binaryCompoundAssignment5",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1529,
      "end": 1603,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1572,
        "end": 1603,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1578,
            "end": 1601,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1578,
              "end": 1600,
              "operator": "+=",
              "left": {
                "type": "MemberExpression",
                "start": 1578,
                "end": 1589,
                "computed": false,
                "object": {
                  "type": "AwaitExpression",
                  "start": 1579,
                  "end": 1586,
                  "argument": {
                    "type": "Identifier",
                    "start": 1585,
                    "end": 1586,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1588,
                  "end": 1589,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "AwaitExpression",
                "start": 1593,
                "end": 1600,
                "argument": {
                  "type": "Identifier",
                  "start": 1599,
                  "end": 1600,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1544,
        "end": 1569,
        "decorators": [],
        "name": "binaryCompoundAssignment6",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1605,
      "end": 1680,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1648,
        "end": 1680,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1654,
            "end": 1678,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1654,
              "end": 1677,
              "operator": "+=",
              "left": {
                "type": "MemberExpression",
                "start": 1654,
                "end": 1666,
                "computed": true,
                "object": {
                  "type": "AwaitExpression",
                  "start": 1655,
                  "end": 1662,
                  "argument": {
                    "type": "Identifier",
                    "start": 1661,
                    "end": 1662,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1664,
                  "end": 1665,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "AwaitExpression",
                "start": 1670,
                "end": 1677,
                "argument": {
                  "type": "Identifier",
                  "start": 1676,
                  "end": 1677,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1620,
        "end": 1645,
        "decorators": [],
        "name": "binaryCompoundAssignment7",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1682,
      "end": 1755,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1725,
        "end": 1755,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1731,
            "end": 1753,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1731,
              "end": 1752,
              "operator": "+=",
              "left": {
                "type": "MemberExpression",
                "start": 1731,
                "end": 1741,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 1731,
                  "end": 1732,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "AwaitExpression",
                  "start": 1733,
                  "end": 1740,
                  "argument": {
                    "type": "Identifier",
                    "start": 1739,
                    "end": 1740,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "right": {
                "type": "AwaitExpression",
                "start": 1745,
                "end": 1752,
                "argument": {
                  "type": "Identifier",
                  "start": 1751,
                  "end": 1752,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1697,
        "end": 1722,
        "decorators": [],
        "name": "binaryCompoundAssignment8",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1757,
      "end": 1836,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1795,
        "end": 1836,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1801,
            "end": 1816,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1801,
              "end": 1815,
              "operator": "**",
              "left": {
                "type": "AwaitExpression",
                "start": 1802,
                "end": 1809,
                "argument": {
                  "type": "Identifier",
                  "start": 1808,
                  "end": 1809,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Identifier",
                "start": 1814,
                "end": 1815,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1821,
            "end": 1834,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1821,
              "end": 1833,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 1821,
                "end": 1822,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "AwaitExpression",
                "start": 1826,
                "end": 1833,
                "argument": {
                  "type": "Identifier",
                  "start": 1832,
                  "end": 1833,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1772,
        "end": 1792,
        "decorators": [],
        "name": "binaryExponentiation",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1838,
      "end": 1896,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1868,
        "end": 1896,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1874,
            "end": 1894,
            "argument": {
              "type": "SequenceExpression",
              "start": 1881,
              "end": 1893,
              "expressions": [
                {
                  "type": "AwaitExpression",
                  "start": 1882,
                  "end": 1889,
                  "argument": {
                    "type": "Identifier",
                    "start": 1888,
                    "end": 1889,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "Identifier",
                  "start": 1892,
                  "end": 1893,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1853,
        "end": 1865,
        "decorators": [],
        "name": "binaryComma0",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1898,
      "end": 1968,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1942,
        "end": 1968,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1948,
            "end": 1966,
            "argument": {
              "type": "SequenceExpression",
              "start": 1955,
              "end": 1965,
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 1955,
                  "end": 1956,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "AwaitExpression",
                  "start": 1958,
                  "end": 1965,
                  "argument": {
                    "type": "Identifier",
                    "start": 1964,
                    "end": 1965,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1913,
        "end": 1925,
        "decorators": [],
        "name": "binaryComma1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1927,
        "end": 1941,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1929,
          "end": 1941,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1936,
            "end": 1941,
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 1937,
                "end": 1940
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 1929,
            "end": 1936,
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
