__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1322,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 33,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 21,
        "decorators": [],
        "name": "cond",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 23,
        "end": 32,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 25,
          "end": 32
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 35,
      "end": 182,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 46,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 49,
        "end": 182,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 55,
            "end": 66,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 59,
                "end": 65,
                "id": {
                  "type": "Identifier",
                  "start": 59,
                  "end": 60,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 63,
                  "end": 65,
                  "elements": []
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 114,
            "end": 124,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 118,
                "end": 123,
                "id": {
                  "type": "Identifier",
                  "start": 118,
                  "end": 119,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 123,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 155,
            "end": 165,
            "expression": {
              "type": "CallExpression",
              "start": 155,
              "end": 164,
              "callee": {
                "type": "MemberExpression",
                "start": 155,
                "end": 161,
                "object": {
                  "type": "Identifier",
                  "start": 155,
                  "end": 156,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 157,
                  "end": 161,
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 162,
                  "end": 163,
                  "value": 5,
                  "raw": "5"
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 170,
            "end": 180,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 174,
                "end": 179,
                "id": {
                  "type": "Identifier",
                  "start": 174,
                  "end": 175,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 178,
                  "end": 179,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 184,
      "end": 343,
      "id": {
        "type": "Identifier",
        "start": 193,
        "end": 195,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 198,
        "end": 343,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 204,
            "end": 210,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 208,
                "end": 209,
                "id": {
                  "type": "Identifier",
                  "start": 208,
                  "end": 209,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 263,
            "end": 270,
            "expression": {
              "type": "AssignmentExpression",
              "start": 263,
              "end": 269,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 263,
                "end": 264,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "ArrayExpression",
                "start": 267,
                "end": 269,
                "elements": []
              }
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 275,
            "end": 285,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 279,
                "end": 284,
                "id": {
                  "type": "Identifier",
                  "start": 279,
                  "end": 280,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 283,
                  "end": 284,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 316,
            "end": 326,
            "expression": {
              "type": "CallExpression",
              "start": 316,
              "end": 325,
              "callee": {
                "type": "MemberExpression",
                "start": 316,
                "end": 322,
                "object": {
                  "type": "Identifier",
                  "start": 316,
                  "end": 317,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 318,
                  "end": 322,
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 323,
                  "end": 324,
                  "value": 5,
                  "raw": "5"
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 331,
            "end": 341,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 335,
                "end": 340,
                "id": {
                  "type": "Identifier",
                  "start": 335,
                  "end": 336,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 339,
                  "end": 340,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 345,
      "end": 502,
      "id": {
        "type": "Identifier",
        "start": 354,
        "end": 356,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 359,
        "end": 502,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 365,
            "end": 376,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 369,
                "end": 375,
                "id": {
                  "type": "Identifier",
                  "start": 369,
                  "end": 370,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 373,
                  "end": 375,
                  "elements": []
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 424,
            "end": 434,
            "expression": {
              "type": "CallExpression",
              "start": 424,
              "end": 433,
              "callee": {
                "type": "MemberExpression",
                "start": 424,
                "end": 430,
                "object": {
                  "type": "Identifier",
                  "start": 424,
                  "end": 425,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 426,
                  "end": 430,
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 431,
                  "end": 432,
                  "value": 5,
                  "raw": "5"
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "FunctionDeclaration",
            "start": 439,
            "end": 500,
            "id": {
              "type": "Identifier",
              "start": 448,
              "end": 449,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 452,
              "end": 500,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 462,
                  "end": 464,
                  "expression": {
                    "type": "Identifier",
                    "start": 462,
                    "end": 463,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "expression": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 504,
      "end": 609,
      "id": {
        "type": "Identifier",
        "start": 513,
        "end": 515,
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 518,
        "end": 609,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 524,
            "end": 530,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 528,
                "end": 529,
                "id": {
                  "type": "Identifier",
                  "start": 528,
                  "end": 529,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 535,
            "end": 552,
            "expression": {
              "type": "AssignmentExpression",
              "start": 535,
              "end": 551,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 535,
                "end": 536,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "ArrayExpression",
                "start": 539,
                "end": 551,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 540,
                    "end": 541,
                    "value": 5,
                    "raw": "5"
                  },
                  {
                    "type": "Literal",
                    "start": 543,
                    "end": 550,
                    "value": "hello",
                    "raw": "\"hello\""
                  }
                ]
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 580,
            "end": 593,
            "expression": {
              "type": "CallExpression",
              "start": 580,
              "end": 592,
              "callee": {
                "type": "MemberExpression",
                "start": 580,
                "end": 586,
                "object": {
                  "type": "Identifier",
                  "start": 580,
                  "end": 581,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 582,
                  "end": 586,
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 587,
                  "end": 591,
                  "value": true,
                  "raw": "true"
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 611,
      "end": 713,
      "id": {
        "type": "Identifier",
        "start": 620,
        "end": 622,
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 625,
        "end": 713,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 631,
            "end": 652,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 635,
                "end": 651,
                "id": {
                  "type": "Identifier",
                  "start": 635,
                  "end": 636,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 639,
                  "end": 651,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 640,
                      "end": 641,
                      "value": 5,
                      "raw": "5"
                    },
                    {
                      "type": "Literal",
                      "start": 643,
                      "end": 650,
                      "value": "hello",
                      "raw": "\"hello\""
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 680,
            "end": 693,
            "expression": {
              "type": "CallExpression",
              "start": 680,
              "end": 692,
              "callee": {
                "type": "MemberExpression",
                "start": 680,
                "end": 686,
                "object": {
                  "type": "Identifier",
                  "start": 680,
                  "end": 681,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 682,
                  "end": 686,
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 687,
                  "end": 691,
                  "value": true,
                  "raw": "true"
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 715,
      "end": 965,
      "id": {
        "type": "Identifier",
        "start": 724,
        "end": 726,
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 729,
        "end": 965,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 735,
            "end": 741,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 739,
                "end": 740,
                "id": {
                  "type": "Identifier",
                  "start": 739,
                  "end": 740,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 746,
            "end": 885,
            "test": {
              "type": "CallExpression",
              "start": 750,
              "end": 756,
              "callee": {
                "type": "Identifier",
                "start": 750,
                "end": 754,
                "decorators": [],
                "name": "cond",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 758,
              "end": 825,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 768,
                  "end": 775,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 768,
                    "end": 774,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 768,
                      "end": 769,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "start": 772,
                      "end": 774,
                      "elements": []
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 784,
                  "end": 794,
                  "expression": {
                    "type": "CallExpression",
                    "start": 784,
                    "end": 793,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 784,
                      "end": 790,
                      "object": {
                        "type": "Identifier",
                        "start": 784,
                        "end": 785,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 786,
                        "end": 790,
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 791,
                        "end": 792,
                        "value": 5,
                        "raw": "5"
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 803,
                  "end": 819,
                  "expression": {
                    "type": "CallExpression",
                    "start": 803,
                    "end": 818,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 803,
                      "end": 809,
                      "object": {
                        "type": "Identifier",
                        "start": 803,
                        "end": 804,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 805,
                        "end": 809,
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 810,
                        "end": 817,
                        "value": "hello",
                        "raw": "\"hello\""
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 835,
              "end": 885,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 845,
                  "end": 856,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 845,
                    "end": 855,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 845,
                      "end": 846,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "start": 849,
                      "end": 855,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 850,
                          "end": 854,
                          "value": true,
                          "raw": "true"
                        }
                      ]
                    }
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 890,
            "end": 892,
            "expression": {
              "type": "Identifier",
              "start": 890,
              "end": 891,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 942,
            "end": 953,
            "expression": {
              "type": "CallExpression",
              "start": 942,
              "end": 952,
              "callee": {
                "type": "MemberExpression",
                "start": 942,
                "end": 948,
                "object": {
                  "type": "Identifier",
                  "start": 942,
                  "end": 943,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 944,
                  "end": 948,
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 949,
                  "end": 951,
                  "value": 99,
                  "raw": "99"
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 967,
      "end": 1166,
      "id": {
        "type": "Identifier",
        "start": 976,
        "end": 978,
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 981,
        "end": 1166,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 987,
            "end": 998,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 991,
                "end": 997,
                "id": {
                  "type": "Identifier",
                  "start": 991,
                  "end": 992,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 995,
                  "end": 997,
                  "elements": []
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1039,
            "end": 1049,
            "expression": {
              "type": "CallExpression",
              "start": 1039,
              "end": 1048,
              "callee": {
                "type": "MemberExpression",
                "start": 1039,
                "end": 1045,
                "object": {
                  "type": "Identifier",
                  "start": 1039,
                  "end": 1040,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1041,
                  "end": 1045,
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1046,
                  "end": 1047,
                  "value": 5,
                  "raw": "5"
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 1054,
            "end": 1064,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1058,
                "end": 1063,
                "id": {
                  "type": "Identifier",
                  "start": 1058,
                  "end": 1059,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1062,
                  "end": 1063,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1110,
            "end": 1126,
            "expression": {
              "type": "CallExpression",
              "start": 1110,
              "end": 1125,
              "callee": {
                "type": "MemberExpression",
                "start": 1110,
                "end": 1116,
                "object": {
                  "type": "Identifier",
                  "start": 1110,
                  "end": 1111,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1112,
                  "end": 1116,
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1117,
                  "end": 1124,
                  "value": "hello",
                  "raw": "\"hello\""
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1138,
            "end": 1154,
            "expression": {
              "type": "CallExpression",
              "start": 1138,
              "end": 1153,
              "callee": {
                "type": "MemberExpression",
                "start": 1138,
                "end": 1144,
                "object": {
                  "type": "Identifier",
                  "start": 1138,
                  "end": 1139,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1140,
                  "end": 1144,
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1145,
                  "end": 1152,
                  "value": "hello",
                  "raw": "\"hello\""
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1168,
      "end": 1322,
      "id": {
        "type": "Identifier",
        "start": 1177,
        "end": 1179,
        "decorators": [],
        "name": "f8",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1182,
        "end": 1322,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1188,
            "end": 1201,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1194,
                "end": 1200,
                "id": {
                  "type": "Identifier",
                  "start": 1194,
                  "end": 1195,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 1198,
                  "end": 1200,
                  "elements": []
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1249,
            "end": 1259,
            "expression": {
              "type": "CallExpression",
              "start": 1249,
              "end": 1258,
              "callee": {
                "type": "MemberExpression",
                "start": 1249,
                "end": 1255,
                "object": {
                  "type": "Identifier",
                  "start": 1249,
                  "end": 1250,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1251,
                  "end": 1255,
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1256,
                  "end": 1257,
                  "value": 5,
                  "raw": "5"
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "FunctionDeclaration",
            "start": 1264,
            "end": 1320,
            "id": {
              "type": "Identifier",
              "start": 1273,
              "end": 1274,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 1277,
              "end": 1320,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1287,
                  "end": 1289,
                  "expression": {
                    "type": "Identifier",
                    "start": 1287,
                    "end": 1288,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "expression": false
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
