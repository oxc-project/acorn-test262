__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 13
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 13
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 15,
            "end": 16
          },
          "init": null,
          "definite": false,
          "start": 15,
          "end": 16
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 18,
            "end": 19
          },
          "init": null,
          "definite": false,
          "start": 18,
          "end": 19
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 21,
            "end": 22
          },
          "init": null,
          "definite": false,
          "start": 21,
          "end": 22
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 24,
            "end": 25
          },
          "init": null,
          "definite": false,
          "start": 24,
          "end": 25
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 27,
            "end": 28
          },
          "init": null,
          "definite": false,
          "start": 27,
          "end": 28
        }
      ],
      "declare": true,
      "start": 0,
      "end": 29
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "binaryPlus0",
        "optional": false,
        "typeAnnotation": null,
        "start": 46,
        "end": 57
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 73,
                  "end": 74
                },
                "start": 67,
                "end": 74
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 78,
                "end": 79
              },
              "start": 66,
              "end": 79
            },
            "directive": null,
            "start": 66,
            "end": 80
          }
        ],
        "start": 60,
        "end": 82
      },
      "expression": false,
      "start": 31,
      "end": 82
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "binaryPlus1",
        "optional": false,
        "typeAnnotation": null,
        "start": 99,
        "end": 110
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 119,
                "end": 120
              },
              "operator": "+",
              "right": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 129,
                  "end": 130
                },
                "start": 123,
                "end": 130
              },
              "start": 119,
              "end": 130
            },
            "directive": null,
            "start": 119,
            "end": 131
          }
        ],
        "start": 113,
        "end": 133
      },
      "expression": false,
      "start": 84,
      "end": 133
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "binaryLogicalAnd0",
        "optional": false,
        "typeAnnotation": null,
        "start": 150,
        "end": 167
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "LogicalExpression",
              "left": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 183,
                  "end": 184
                },
                "start": 177,
                "end": 184
              },
              "operator": "&&",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 189,
                "end": 190
              },
              "start": 176,
              "end": 190
            },
            "directive": null,
            "start": 176,
            "end": 191
          }
        ],
        "start": 170,
        "end": 193
      },
      "expression": false,
      "start": 135,
      "end": 193
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "binaryLogicalAnd1",
        "optional": false,
        "typeAnnotation": null,
        "start": 210,
        "end": 227
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 236,
                "end": 237
              },
              "operator": "&&",
              "right": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 247,
                  "end": 248
                },
                "start": 241,
                "end": 248
              },
              "start": 236,
              "end": 248
            },
            "directive": null,
            "start": 236,
            "end": 249
          }
        ],
        "start": 230,
        "end": 251
      },
      "expression": false,
      "start": 195,
      "end": 251
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "binaryAssignment0",
        "optional": false,
        "typeAnnotation": null,
        "start": 268,
        "end": 285
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 294,
                "end": 295
              },
              "right": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 304,
                  "end": 305
                },
                "start": 298,
                "end": 305
              },
              "start": 294,
              "end": 305
            },
            "directive": null,
            "start": 294,
            "end": 306
          }
        ],
        "start": 288,
        "end": 308
      },
      "expression": false,
      "start": 253,
      "end": 308
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "binaryAssignment1",
        "optional": false,
        "typeAnnotation": null,
        "start": 325,
        "end": 342
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 351,
                  "end": 352
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 353,
                  "end": 354
                },
                "optional": false,
                "computed": false,
                "start": 351,
                "end": 354
              },
              "right": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 363,
                  "end": 364
                },
                "start": 357,
                "end": 364
              },
              "start": 351,
              "end": 364
            },
            "directive": null,
            "start": 351,
            "end": 365
          }
        ],
        "start": 345,
        "end": 367
      },
      "expression": false,
      "start": 310,
      "end": 367
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "binaryAssignment2",
        "optional": false,
        "typeAnnotation": null,
        "start": 384,
        "end": 401
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 410,
                    "end": 411
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 412,
                    "end": 413
                  },
                  "optional": false,
                  "computed": false,
                  "start": 410,
                  "end": 413
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 414,
                  "end": 415
                },
                "optional": false,
                "computed": false,
                "start": 410,
                "end": 415
              },
              "right": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 424,
                  "end": 425
                },
                "start": 418,
                "end": 425
              },
              "start": 410,
              "end": 425
            },
            "directive": null,
            "start": 410,
            "end": 426
          }
        ],
        "start": 404,
        "end": 428
      },
      "expression": false,
      "start": 369,
      "end": 428
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "binaryAssignment3",
        "optional": false,
        "typeAnnotation": null,
        "start": 445,
        "end": 462
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 471,
                  "end": 472
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 473,
                  "end": 474
                },
                "optional": false,
                "computed": true,
                "start": 471,
                "end": 475
              },
              "right": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 484,
                  "end": 485
                },
                "start": 478,
                "end": 485
              },
              "start": 471,
              "end": 485
            },
            "directive": null,
            "start": 471,
            "end": 486
          }
        ],
        "start": 465,
        "end": 488
      },
      "expression": false,
      "start": 430,
      "end": 488
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "binaryAssignment4",
        "optional": false,
        "typeAnnotation": null,
        "start": 505,
        "end": 522
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 531,
                    "end": 532
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 533,
                    "end": 534
                  },
                  "optional": false,
                  "computed": true,
                  "start": 531,
                  "end": 535
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 536,
                  "end": 537
                },
                "optional": false,
                "computed": false,
                "start": 531,
                "end": 537
              },
              "right": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 546,
                  "end": 547
                },
                "start": 540,
                "end": 547
              },
              "start": 531,
              "end": 547
            },
            "directive": null,
            "start": 531,
            "end": 548
          }
        ],
        "start": 525,
        "end": 550
      },
      "expression": false,
      "start": 490,
      "end": 550
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "binaryAssignment5",
        "optional": false,
        "typeAnnotation": null,
        "start": 567,
        "end": 584
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 593,
                    "end": 594
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 595,
                    "end": 596
                  },
                  "optional": false,
                  "computed": false,
                  "start": 593,
                  "end": 596
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 597,
                  "end": 598
                },
                "optional": false,
                "computed": true,
                "start": 593,
                "end": 599
              },
              "right": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 608,
                  "end": 609
                },
                "start": 602,
                "end": 609
              },
              "start": 593,
              "end": 609
            },
            "directive": null,
            "start": 593,
            "end": 610
          }
        ],
        "start": 587,
        "end": 612
      },
      "expression": false,
      "start": 552,
      "end": 612
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "binaryAssignment6",
        "optional": false,
        "typeAnnotation": null,
        "start": 629,
        "end": 646
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 662,
                    "end": 663
                  },
                  "start": 656,
                  "end": 663
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 665,
                  "end": 666
                },
                "optional": false,
                "computed": false,
                "start": 655,
                "end": 666
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 669,
                "end": 670
              },
              "start": 655,
              "end": 670
            },
            "directive": null,
            "start": 655,
            "end": 671
          }
        ],
        "start": 649,
        "end": 673
      },
      "expression": false,
      "start": 614,
      "end": 673
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "binaryAssignment7",
        "optional": false,
        "typeAnnotation": null,
        "start": 690,
        "end": 707
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 723,
                      "end": 724
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 725,
                      "end": 726
                    },
                    "optional": false,
                    "computed": false,
                    "start": 723,
                    "end": 726
                  },
                  "start": 717,
                  "end": 726
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 728,
                  "end": 729
                },
                "optional": false,
                "computed": false,
                "start": 716,
                "end": 729
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 732,
                "end": 733
              },
              "start": 716,
              "end": 733
            },
            "directive": null,
            "start": 716,
            "end": 734
          }
        ],
        "start": 710,
        "end": 736
      },
      "expression": false,
      "start": 675,
      "end": 736
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "binaryAssignment8",
        "optional": false,
        "typeAnnotation": null,
        "start": 753,
        "end": 770
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 786,
                    "end": 787
                  },
                  "start": 780,
                  "end": 787
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 789,
                  "end": 790
                },
                "optional": false,
                "computed": true,
                "start": 779,
                "end": 791
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 794,
                "end": 795
              },
              "start": 779,
              "end": 795
            },
            "directive": null,
            "start": 779,
            "end": 796
          }
        ],
        "start": 773,
        "end": 798
      },
      "expression": false,
      "start": 738,
      "end": 798
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "binaryAssignment9",
        "optional": false,
        "typeAnnotation": null,
        "start": 815,
        "end": 832
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 841,
                  "end": 842
                },
                "property": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 849,
                    "end": 850
                  },
                  "start": 843,
                  "end": 850
                },
                "optional": false,
                "computed": true,
                "start": 841,
                "end": 851
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 854,
                "end": 855
              },
              "start": 841,
              "end": 855
            },
            "directive": null,
            "start": 841,
            "end": 856
          }
        ],
        "start": 835,
        "end": 858
      },
      "expression": false,
      "start": 800,
      "end": 858
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "binaryAssignment10",
        "optional": false,
        "typeAnnotation": null,
        "start": 875,
        "end": 893
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 902,
                    "end": 903
                  },
                  "property": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 910,
                      "end": 911
                    },
                    "start": 904,
                    "end": 911
                  },
                  "optional": false,
                  "computed": true,
                  "start": 902,
                  "end": 912
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 913,
                  "end": 914
                },
                "optional": false,
                "computed": false,
                "start": 902,
                "end": 914
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 917,
                "end": 918
              },
              "start": 902,
              "end": 918
            },
            "directive": null,
            "start": 902,
            "end": 919
          }
        ],
        "start": 896,
        "end": 921
      },
      "expression": false,
      "start": 860,
      "end": 921
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "binaryAssignment11",
        "optional": false,
        "typeAnnotation": null,
        "start": 938,
        "end": 956
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 972,
                      "end": 973
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 974,
                      "end": 975
                    },
                    "optional": false,
                    "computed": true,
                    "start": 972,
                    "end": 976
                  },
                  "start": 966,
                  "end": 976
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 978,
                  "end": 979
                },
                "optional": false,
                "computed": false,
                "start": 965,
                "end": 979
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 982,
                "end": 983
              },
              "start": 965,
              "end": 983
            },
            "directive": null,
            "start": 965,
            "end": 984
          }
        ],
        "start": 959,
        "end": 986
      },
      "expression": false,
      "start": 923,
      "end": 986
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "binaryAssignment12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1003,
        "end": 1021
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1030,
                    "end": 1031
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1032,
                    "end": 1033
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1030,
                  "end": 1033
                },
                "property": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1040,
                    "end": 1041
                  },
                  "start": 1034,
                  "end": 1041
                },
                "optional": false,
                "computed": true,
                "start": 1030,
                "end": 1042
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1045,
                "end": 1046
              },
              "start": 1030,
              "end": 1046
            },
            "directive": null,
            "start": 1030,
            "end": 1047
          }
        ],
        "start": 1024,
        "end": 1049
      },
      "expression": false,
      "start": 988,
      "end": 1049
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "binaryAssignment13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1066,
        "end": 1084
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1100,
                      "end": 1101
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1102,
                      "end": 1103
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1100,
                    "end": 1103
                  },
                  "start": 1094,
                  "end": 1103
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1105,
                  "end": 1106
                },
                "optional": false,
                "computed": true,
                "start": 1093,
                "end": 1107
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1110,
                "end": 1111
              },
              "start": 1093,
              "end": 1111
            },
            "directive": null,
            "start": 1093,
            "end": 1112
          }
        ],
        "start": 1087,
        "end": 1114
      },
      "expression": false,
      "start": 1051,
      "end": 1114
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "binaryCompoundAssignment0",
        "optional": false,
        "typeAnnotation": null,
        "start": 1131,
        "end": 1156
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "+=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1165,
                "end": 1166
              },
              "right": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1176,
                  "end": 1177
                },
                "start": 1170,
                "end": 1177
              },
              "start": 1165,
              "end": 1177
            },
            "directive": null,
            "start": 1165,
            "end": 1178
          }
        ],
        "start": 1159,
        "end": 1180
      },
      "expression": false,
      "start": 1116,
      "end": 1180
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "binaryCompoundAssignment1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1197,
        "end": 1222
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "+=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1231,
                  "end": 1232
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1233,
                  "end": 1234
                },
                "optional": false,
                "computed": false,
                "start": 1231,
                "end": 1234
              },
              "right": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1244,
                  "end": 1245
                },
                "start": 1238,
                "end": 1245
              },
              "start": 1231,
              "end": 1245
            },
            "directive": null,
            "start": 1231,
            "end": 1246
          }
        ],
        "start": 1225,
        "end": 1248
      },
      "expression": false,
      "start": 1182,
      "end": 1248
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "binaryCompoundAssignment2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1265,
        "end": 1290
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "+=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1299,
                  "end": 1300
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1301,
                  "end": 1302
                },
                "optional": false,
                "computed": true,
                "start": 1299,
                "end": 1303
              },
              "right": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1313,
                  "end": 1314
                },
                "start": 1307,
                "end": 1314
              },
              "start": 1299,
              "end": 1314
            },
            "directive": null,
            "start": 1299,
            "end": 1315
          }
        ],
        "start": 1293,
        "end": 1317
      },
      "expression": false,
      "start": 1250,
      "end": 1317
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "binaryCompoundAssignment3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1334,
        "end": 1359
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "+=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1375,
                    "end": 1376
                  },
                  "start": 1369,
                  "end": 1376
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1378,
                  "end": 1379
                },
                "optional": false,
                "computed": false,
                "start": 1368,
                "end": 1379
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1383,
                "end": 1384
              },
              "start": 1368,
              "end": 1384
            },
            "directive": null,
            "start": 1368,
            "end": 1385
          }
        ],
        "start": 1362,
        "end": 1387
      },
      "expression": false,
      "start": 1319,
      "end": 1387
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "binaryCompoundAssignment4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1404,
        "end": 1429
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "+=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1445,
                    "end": 1446
                  },
                  "start": 1439,
                  "end": 1446
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1448,
                  "end": 1449
                },
                "optional": false,
                "computed": true,
                "start": 1438,
                "end": 1450
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1454,
                "end": 1455
              },
              "start": 1438,
              "end": 1455
            },
            "directive": null,
            "start": 1438,
            "end": 1456
          }
        ],
        "start": 1432,
        "end": 1458
      },
      "expression": false,
      "start": 1389,
      "end": 1458
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "binaryCompoundAssignment5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1475,
        "end": 1500
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "+=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1509,
                  "end": 1510
                },
                "property": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1517,
                    "end": 1518
                  },
                  "start": 1511,
                  "end": 1518
                },
                "optional": false,
                "computed": true,
                "start": 1509,
                "end": 1519
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1523,
                "end": 1524
              },
              "start": 1509,
              "end": 1524
            },
            "directive": null,
            "start": 1509,
            "end": 1525
          }
        ],
        "start": 1503,
        "end": 1527
      },
      "expression": false,
      "start": 1460,
      "end": 1527
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "binaryCompoundAssignment6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1544,
        "end": 1569
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "+=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1585,
                    "end": 1586
                  },
                  "start": 1579,
                  "end": 1586
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1588,
                  "end": 1589
                },
                "optional": false,
                "computed": false,
                "start": 1578,
                "end": 1589
              },
              "right": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1599,
                  "end": 1600
                },
                "start": 1593,
                "end": 1600
              },
              "start": 1578,
              "end": 1600
            },
            "directive": null,
            "start": 1578,
            "end": 1601
          }
        ],
        "start": 1572,
        "end": 1603
      },
      "expression": false,
      "start": 1529,
      "end": 1603
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "binaryCompoundAssignment7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1620,
        "end": 1645
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "+=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1661,
                    "end": 1662
                  },
                  "start": 1655,
                  "end": 1662
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1664,
                  "end": 1665
                },
                "optional": false,
                "computed": true,
                "start": 1654,
                "end": 1666
              },
              "right": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1676,
                  "end": 1677
                },
                "start": 1670,
                "end": 1677
              },
              "start": 1654,
              "end": 1677
            },
            "directive": null,
            "start": 1654,
            "end": 1678
          }
        ],
        "start": 1648,
        "end": 1680
      },
      "expression": false,
      "start": 1605,
      "end": 1680
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "binaryCompoundAssignment8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1697,
        "end": 1722
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "+=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1731,
                  "end": 1732
                },
                "property": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1739,
                    "end": 1740
                  },
                  "start": 1733,
                  "end": 1740
                },
                "optional": false,
                "computed": true,
                "start": 1731,
                "end": 1741
              },
              "right": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1751,
                  "end": 1752
                },
                "start": 1745,
                "end": 1752
              },
              "start": 1731,
              "end": 1752
            },
            "directive": null,
            "start": 1731,
            "end": 1753
          }
        ],
        "start": 1725,
        "end": 1755
      },
      "expression": false,
      "start": 1682,
      "end": 1755
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "binaryExponentiation",
        "optional": false,
        "typeAnnotation": null,
        "start": 1772,
        "end": 1792
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1808,
                  "end": 1809
                },
                "start": 1802,
                "end": 1809
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1814,
                "end": 1815
              },
              "start": 1801,
              "end": 1815
            },
            "directive": null,
            "start": 1801,
            "end": 1816
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1821,
                "end": 1822
              },
              "operator": "**",
              "right": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1832,
                  "end": 1833
                },
                "start": 1826,
                "end": 1833
              },
              "start": 1821,
              "end": 1833
            },
            "directive": null,
            "start": 1821,
            "end": 1834
          }
        ],
        "start": 1795,
        "end": 1836
      },
      "expression": false,
      "start": 1757,
      "end": 1836
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "binaryComma0",
        "optional": false,
        "typeAnnotation": null,
        "start": 1853,
        "end": 1865
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "SequenceExpression",
              "expressions": [
                {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1888,
                    "end": 1889
                  },
                  "start": 1882,
                  "end": 1889
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1892,
                  "end": 1893
                }
              ],
              "start": 1881,
              "end": 1893
            },
            "start": 1874,
            "end": 1894
          }
        ],
        "start": 1868,
        "end": 1896
      },
      "expression": false,
      "start": 1838,
      "end": 1896
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "binaryComma1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1913,
        "end": 1925
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1929,
            "end": 1936
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 1937,
                "end": 1940
              }
            ],
            "start": 1936,
            "end": 1941
          },
          "start": 1929,
          "end": 1941
        },
        "start": 1927,
        "end": 1941
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "SequenceExpression",
              "expressions": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1955,
                  "end": 1956
                },
                {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1964,
                    "end": 1965
                  },
                  "start": 1958,
                  "end": 1965
                }
              ],
              "start": 1955,
              "end": 1965
            },
            "start": 1948,
            "end": 1966
          }
        ],
        "start": 1942,
        "end": 1968
      },
      "expression": false,
      "start": 1898,
      "end": 1968
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1968
}
```
