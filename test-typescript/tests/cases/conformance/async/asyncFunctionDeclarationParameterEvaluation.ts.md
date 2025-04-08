__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 1492,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 56,
      "end": 86,
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 73,
        "name": "f1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [
        {
          "type": "Identifier",
          "start": 74,
          "end": 75,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        {
          "type": "AssignmentPattern",
          "start": 77,
          "end": 82,
          "left": {
            "type": "Identifier",
            "start": 77,
            "end": 78,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 81,
            "end": 82,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 84,
        "end": 86,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 87,
      "end": 117,
      "id": {
        "type": "Identifier",
        "start": 102,
        "end": 104,
        "name": "f2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 105,
          "end": 113,
          "properties": [
            {
              "type": "Property",
              "start": 106,
              "end": 112,
              "method": false,
              "shorthand": false,
              "computed": true,
              "key": {
                "type": "Identifier",
                "start": 107,
                "end": 108,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 111,
                "end": 112,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 115,
        "end": 117,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 118,
      "end": 176,
      "id": {
        "type": "Identifier",
        "start": 133,
        "end": 135,
        "name": "f3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 136,
          "end": 141,
          "left": {
            "type": "Identifier",
            "start": 136,
            "end": 137,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 140,
            "end": 141,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 143,
        "end": 176,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 145,
            "end": 174,
            "argument": {
              "type": "ArrowFunctionExpression",
              "start": 152,
              "end": 173,
              "id": null,
              "expression": true,
              "generator": false,
              "async": true,
              "params": [],
              "body": {
                "type": "Identifier",
                "start": 164,
                "end": 173,
                "name": "arguments",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "returnType": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 177,
      "end": 247,
      "id": {
        "type": "Identifier",
        "start": 192,
        "end": 194,
        "name": "f4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 195,
          "end": 200,
          "left": {
            "type": "Identifier",
            "start": 195,
            "end": 196,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 199,
            "end": 200,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 202,
        "end": 247,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 204,
            "end": 245,
            "argument": {
              "type": "ArrowFunctionExpression",
              "start": 211,
              "end": 244,
              "id": null,
              "expression": true,
              "generator": false,
              "async": true,
              "params": [],
              "body": {
                "type": "ArrowFunctionExpression",
                "start": 223,
                "end": 244,
                "id": null,
                "expression": true,
                "generator": false,
                "async": true,
                "params": [],
                "body": {
                  "type": "Identifier",
                  "start": 235,
                  "end": 244,
                  "name": "arguments",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              },
              "typeParameters": null,
              "returnType": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 248,
      "end": 285,
      "id": {
        "type": "Identifier",
        "start": 263,
        "end": 265,
        "name": "f5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 266,
          "end": 271,
          "left": {
            "type": "Identifier",
            "start": 266,
            "end": 267,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 270,
            "end": 271,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "RestElement",
          "start": 273,
          "end": 280,
          "argument": {
            "type": "Identifier",
            "start": 276,
            "end": 280,
            "name": "args",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null,
          "value": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 282,
        "end": 285,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 286,
      "end": 353,
      "id": {
        "type": "Identifier",
        "start": 301,
        "end": 303,
        "name": "f6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 304,
          "end": 309,
          "left": {
            "type": "Identifier",
            "start": 304,
            "end": 305,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 308,
            "end": 309,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "RestElement",
          "start": 311,
          "end": 318,
          "argument": {
            "type": "Identifier",
            "start": 314,
            "end": 318,
            "name": "args",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null,
          "value": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 320,
        "end": 353,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 322,
            "end": 351,
            "argument": {
              "type": "ArrowFunctionExpression",
              "start": 329,
              "end": 350,
              "id": null,
              "expression": true,
              "generator": false,
              "async": true,
              "params": [],
              "body": {
                "type": "Identifier",
                "start": 341,
                "end": 350,
                "name": "arguments",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "returnType": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 354,
      "end": 433,
      "id": {
        "type": "Identifier",
        "start": 369,
        "end": 371,
        "name": "f7",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 372,
          "end": 377,
          "left": {
            "type": "Identifier",
            "start": 372,
            "end": 373,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 376,
            "end": 377,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "RestElement",
          "start": 379,
          "end": 386,
          "argument": {
            "type": "Identifier",
            "start": 382,
            "end": 386,
            "name": "args",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null,
          "value": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 388,
        "end": 433,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 390,
            "end": 431,
            "argument": {
              "type": "ArrowFunctionExpression",
              "start": 397,
              "end": 430,
              "id": null,
              "expression": true,
              "generator": false,
              "async": true,
              "params": [],
              "body": {
                "type": "ArrowFunctionExpression",
                "start": 409,
                "end": 430,
                "id": null,
                "expression": true,
                "generator": false,
                "async": true,
                "params": [],
                "body": {
                  "type": "Identifier",
                  "start": 421,
                  "end": 430,
                  "name": "arguments",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              },
              "typeParameters": null,
              "returnType": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 434,
      "end": 492,
      "id": {
        "type": "Identifier",
        "start": 449,
        "end": 451,
        "name": "f8",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 454,
        "end": 492,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 456,
            "end": 490,
            "argument": {
              "type": "ArrowFunctionExpression",
              "start": 463,
              "end": 489,
              "id": null,
              "expression": true,
              "generator": false,
              "async": true,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 470,
                  "end": 475,
                  "left": {
                    "type": "Identifier",
                    "start": 470,
                    "end": 471,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 474,
                    "end": 475,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "body": {
                "type": "Identifier",
                "start": 480,
                "end": 489,
                "name": "arguments",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "returnType": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 493,
      "end": 563,
      "id": {
        "type": "Identifier",
        "start": 508,
        "end": 510,
        "name": "f9",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 513,
        "end": 563,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 515,
            "end": 561,
            "argument": {
              "type": "ArrowFunctionExpression",
              "start": 522,
              "end": 560,
              "id": null,
              "expression": true,
              "generator": false,
              "async": true,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 529,
                  "end": 534,
                  "left": {
                    "type": "Identifier",
                    "start": 529,
                    "end": 530,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 533,
                    "end": 534,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "body": {
                "type": "ArrowFunctionExpression",
                "start": 539,
                "end": 560,
                "id": null,
                "expression": true,
                "generator": false,
                "async": true,
                "params": [],
                "body": {
                  "type": "Identifier",
                  "start": 551,
                  "end": 560,
                  "name": "arguments",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              },
              "typeParameters": null,
              "returnType": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 564,
      "end": 665,
      "id": {
        "type": "Identifier",
        "start": 579,
        "end": 582,
        "name": "f10",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 583,
          "end": 588,
          "left": {
            "type": "Identifier",
            "start": 583,
            "end": 584,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 587,
            "end": 588,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 590,
        "end": 665,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 592,
            "end": 663,
            "argument": {
              "type": "ArrowFunctionExpression",
              "start": 599,
              "end": 662,
              "id": null,
              "expression": true,
              "generator": false,
              "async": true,
              "params": [],
              "body": {
                "type": "FunctionExpression",
                "start": 611,
                "end": 662,
                "id": null,
                "expression": false,
                "generator": false,
                "async": true,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 629,
                  "end": 662,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 631,
                      "end": 660,
                      "argument": {
                        "type": "ArrowFunctionExpression",
                        "start": 638,
                        "end": 659,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": true,
                        "params": [],
                        "body": {
                          "type": "Identifier",
                          "start": 650,
                          "end": 659,
                          "name": "arguments",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeParameters": null,
                        "returnType": null
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "typeParameters": null,
              "returnType": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 666,
      "end": 719,
      "id": {
        "type": "Identifier",
        "start": 675,
        "end": 678,
        "name": "f11",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 681,
        "end": 719,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 683,
            "end": 717,
            "argument": {
              "type": "ArrowFunctionExpression",
              "start": 690,
              "end": 716,
              "id": null,
              "expression": true,
              "generator": false,
              "async": true,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 697,
                  "end": 702,
                  "left": {
                    "type": "Identifier",
                    "start": 697,
                    "end": 698,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 701,
                    "end": 702,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "body": {
                "type": "Identifier",
                "start": 707,
                "end": 716,
                "name": "arguments",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "returnType": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 720,
      "end": 785,
      "id": {
        "type": "Identifier",
        "start": 729,
        "end": 732,
        "name": "f12",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 735,
        "end": 785,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 737,
            "end": 783,
            "argument": {
              "type": "ArrowFunctionExpression",
              "start": 744,
              "end": 782,
              "id": null,
              "expression": true,
              "generator": false,
              "async": true,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 751,
                  "end": 756,
                  "left": {
                    "type": "Identifier",
                    "start": 751,
                    "end": 752,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 755,
                    "end": 756,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "body": {
                "type": "ArrowFunctionExpression",
                "start": 761,
                "end": 782,
                "id": null,
                "expression": true,
                "generator": false,
                "async": true,
                "params": [],
                "body": {
                  "type": "Identifier",
                  "start": 773,
                  "end": 782,
                  "name": "arguments",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              },
              "typeParameters": null,
              "returnType": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 786,
      "end": 1492,
      "id": {
        "type": "Identifier",
        "start": 795,
        "end": 796,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 799,
        "end": 1492,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 805,
            "end": 839,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 811,
                "end": 838,
                "id": {
                  "type": "Identifier",
                  "start": 811,
                  "end": 813,
                  "name": "a1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 816,
                  "end": 838,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": true,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 823,
                      "end": 824,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "AssignmentPattern",
                      "start": 826,
                      "end": 831,
                      "left": {
                        "type": "Identifier",
                        "start": 826,
                        "end": 827,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 830,
                        "end": 831,
                        "name": "z",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 836,
                    "end": 838,
                    "body": []
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 844,
            "end": 878,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 850,
                "end": 877,
                "id": {
                  "type": "Identifier",
                  "start": 850,
                  "end": 852,
                  "name": "a2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 855,
                  "end": 877,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": true,
                  "params": [
                    {
                      "type": "ObjectPattern",
                      "start": 862,
                      "end": 870,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 863,
                          "end": 869,
                          "method": false,
                          "shorthand": false,
                          "computed": true,
                          "key": {
                            "type": "Identifier",
                            "start": 864,
                            "end": 865,
                            "name": "z",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 868,
                            "end": 869,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ],
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 875,
                    "end": 877,
                    "body": []
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 883,
            "end": 945,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 889,
                "end": 944,
                "id": {
                  "type": "Identifier",
                  "start": 889,
                  "end": 891,
                  "name": "a3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 894,
                  "end": 944,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": true,
                  "params": [
                    {
                      "type": "AssignmentPattern",
                      "start": 901,
                      "end": 906,
                      "left": {
                        "type": "Identifier",
                        "start": 901,
                        "end": 902,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 905,
                        "end": 906,
                        "name": "z",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 911,
                    "end": 944,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 913,
                        "end": 942,
                        "argument": {
                          "type": "ArrowFunctionExpression",
                          "start": 920,
                          "end": 941,
                          "id": null,
                          "expression": true,
                          "generator": false,
                          "async": true,
                          "params": [],
                          "body": {
                            "type": "Identifier",
                            "start": 932,
                            "end": 941,
                            "name": "arguments",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeParameters": null,
                          "returnType": null
                        }
                      }
                    ]
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 950,
            "end": 1024,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 956,
                "end": 1023,
                "id": {
                  "type": "Identifier",
                  "start": 956,
                  "end": 958,
                  "name": "a4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 961,
                  "end": 1023,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": true,
                  "params": [
                    {
                      "type": "AssignmentPattern",
                      "start": 968,
                      "end": 973,
                      "left": {
                        "type": "Identifier",
                        "start": 968,
                        "end": 969,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 972,
                        "end": 973,
                        "name": "z",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 978,
                    "end": 1023,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 980,
                        "end": 1021,
                        "argument": {
                          "type": "ArrowFunctionExpression",
                          "start": 987,
                          "end": 1020,
                          "id": null,
                          "expression": true,
                          "generator": false,
                          "async": true,
                          "params": [],
                          "body": {
                            "type": "ArrowFunctionExpression",
                            "start": 999,
                            "end": 1020,
                            "id": null,
                            "expression": true,
                            "generator": false,
                            "async": true,
                            "params": [],
                            "body": {
                              "type": "Identifier",
                              "start": 1011,
                              "end": 1020,
                              "name": "arguments",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeParameters": null,
                            "returnType": null
                          },
                          "typeParameters": null,
                          "returnType": null
                        }
                      }
                    ]
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1029,
            "end": 1070,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1035,
                "end": 1069,
                "id": {
                  "type": "Identifier",
                  "start": 1035,
                  "end": 1037,
                  "name": "a5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 1040,
                  "end": 1069,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": true,
                  "params": [
                    {
                      "type": "AssignmentPattern",
                      "start": 1047,
                      "end": 1052,
                      "left": {
                        "type": "Identifier",
                        "start": 1047,
                        "end": 1048,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 1051,
                        "end": 1052,
                        "name": "z",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "RestElement",
                      "start": 1054,
                      "end": 1061,
                      "argument": {
                        "type": "Identifier",
                        "start": 1057,
                        "end": 1061,
                        "name": "args",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 1066,
                    "end": 1069,
                    "body": []
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1075,
            "end": 1146,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1081,
                "end": 1145,
                "id": {
                  "type": "Identifier",
                  "start": 1081,
                  "end": 1083,
                  "name": "a6",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 1086,
                  "end": 1145,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": true,
                  "params": [
                    {
                      "type": "AssignmentPattern",
                      "start": 1093,
                      "end": 1098,
                      "left": {
                        "type": "Identifier",
                        "start": 1093,
                        "end": 1094,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 1097,
                        "end": 1098,
                        "name": "z",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "RestElement",
                      "start": 1100,
                      "end": 1107,
                      "argument": {
                        "type": "Identifier",
                        "start": 1103,
                        "end": 1107,
                        "name": "args",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 1112,
                    "end": 1145,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 1114,
                        "end": 1143,
                        "argument": {
                          "type": "ArrowFunctionExpression",
                          "start": 1121,
                          "end": 1142,
                          "id": null,
                          "expression": true,
                          "generator": false,
                          "async": true,
                          "params": [],
                          "body": {
                            "type": "Identifier",
                            "start": 1133,
                            "end": 1142,
                            "name": "arguments",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeParameters": null,
                          "returnType": null
                        }
                      }
                    ]
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1151,
            "end": 1234,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1157,
                "end": 1233,
                "id": {
                  "type": "Identifier",
                  "start": 1157,
                  "end": 1159,
                  "name": "a7",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 1162,
                  "end": 1233,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": true,
                  "params": [
                    {
                      "type": "AssignmentPattern",
                      "start": 1169,
                      "end": 1174,
                      "left": {
                        "type": "Identifier",
                        "start": 1169,
                        "end": 1170,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 1173,
                        "end": 1174,
                        "name": "z",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "RestElement",
                      "start": 1176,
                      "end": 1183,
                      "argument": {
                        "type": "Identifier",
                        "start": 1179,
                        "end": 1183,
                        "name": "args",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 1188,
                    "end": 1233,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 1190,
                        "end": 1231,
                        "argument": {
                          "type": "ArrowFunctionExpression",
                          "start": 1197,
                          "end": 1230,
                          "id": null,
                          "expression": true,
                          "generator": false,
                          "async": true,
                          "params": [],
                          "body": {
                            "type": "ArrowFunctionExpression",
                            "start": 1209,
                            "end": 1230,
                            "id": null,
                            "expression": true,
                            "generator": false,
                            "async": true,
                            "params": [],
                            "body": {
                              "type": "Identifier",
                              "start": 1221,
                              "end": 1230,
                              "name": "arguments",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeParameters": null,
                            "returnType": null
                          },
                          "typeParameters": null,
                          "returnType": null
                        }
                      }
                    ]
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1239,
            "end": 1301,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1245,
                "end": 1300,
                "id": {
                  "type": "Identifier",
                  "start": 1245,
                  "end": 1247,
                  "name": "a8",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 1250,
                  "end": 1300,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": true,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 1262,
                    "end": 1300,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 1264,
                        "end": 1298,
                        "argument": {
                          "type": "ArrowFunctionExpression",
                          "start": 1271,
                          "end": 1297,
                          "id": null,
                          "expression": true,
                          "generator": false,
                          "async": true,
                          "params": [
                            {
                              "type": "AssignmentPattern",
                              "start": 1278,
                              "end": 1283,
                              "left": {
                                "type": "Identifier",
                                "start": 1278,
                                "end": 1279,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 1282,
                                "end": 1283,
                                "name": "z",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "decorators": [],
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "body": {
                            "type": "Identifier",
                            "start": 1288,
                            "end": 1297,
                            "name": "arguments",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeParameters": null,
                          "returnType": null
                        }
                      }
                    ]
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1306,
            "end": 1380,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1312,
                "end": 1379,
                "id": {
                  "type": "Identifier",
                  "start": 1312,
                  "end": 1314,
                  "name": "a9",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 1317,
                  "end": 1379,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": true,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 1329,
                    "end": 1379,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 1331,
                        "end": 1377,
                        "argument": {
                          "type": "ArrowFunctionExpression",
                          "start": 1338,
                          "end": 1376,
                          "id": null,
                          "expression": true,
                          "generator": false,
                          "async": true,
                          "params": [
                            {
                              "type": "AssignmentPattern",
                              "start": 1345,
                              "end": 1350,
                              "left": {
                                "type": "Identifier",
                                "start": 1345,
                                "end": 1346,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 1349,
                                "end": 1350,
                                "name": "z",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "decorators": [],
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "body": {
                            "type": "ArrowFunctionExpression",
                            "start": 1355,
                            "end": 1376,
                            "id": null,
                            "expression": true,
                            "generator": false,
                            "async": true,
                            "params": [],
                            "body": {
                              "type": "Identifier",
                              "start": 1367,
                              "end": 1376,
                              "name": "arguments",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeParameters": null,
                            "returnType": null
                          },
                          "typeParameters": null,
                          "returnType": null
                        }
                      }
                    ]
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1385,
            "end": 1490,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1391,
                "end": 1489,
                "id": {
                  "type": "Identifier",
                  "start": 1391,
                  "end": 1394,
                  "name": "a10",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 1397,
                  "end": 1489,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": true,
                  "params": [
                    {
                      "type": "AssignmentPattern",
                      "start": 1404,
                      "end": 1409,
                      "left": {
                        "type": "Identifier",
                        "start": 1404,
                        "end": 1405,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 1408,
                        "end": 1409,
                        "name": "z",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 1414,
                    "end": 1489,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 1416,
                        "end": 1487,
                        "argument": {
                          "type": "ArrowFunctionExpression",
                          "start": 1423,
                          "end": 1486,
                          "id": null,
                          "expression": true,
                          "generator": false,
                          "async": true,
                          "params": [],
                          "body": {
                            "type": "FunctionExpression",
                            "start": 1435,
                            "end": 1486,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": true,
                            "params": [],
                            "body": {
                              "type": "BlockStatement",
                              "start": 1453,
                              "end": 1486,
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "start": 1455,
                                  "end": 1484,
                                  "argument": {
                                    "type": "ArrowFunctionExpression",
                                    "start": 1462,
                                    "end": 1483,
                                    "id": null,
                                    "expression": true,
                                    "generator": false,
                                    "async": true,
                                    "params": [],
                                    "body": {
                                      "type": "Identifier",
                                      "start": 1474,
                                      "end": 1483,
                                      "name": "arguments",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeParameters": null,
                                    "returnType": null
                                  }
                                }
                              ]
                            },
                            "declare": false,
                            "typeParameters": null,
                            "returnType": null
                          },
                          "typeParameters": null,
                          "returnType": null
                        }
                      }
                    ]
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
