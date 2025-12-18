__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 71,
        "end": 73
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 74,
          "end": 75
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 77,
            "end": 78
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 81,
            "end": 82
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 77,
          "end": 82
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 84,
        "end": 86
      },
      "expression": false,
      "start": 56,
      "end": 86
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 102,
        "end": 104
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 107,
                "end": 108
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 111,
                "end": 112
              },
              "method": false,
              "shorthand": false,
              "computed": true,
              "optional": false,
              "start": 106,
              "end": 112
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 105,
          "end": 113
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 115,
        "end": 117
      },
      "expression": false,
      "start": 87,
      "end": 117
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 133,
        "end": 135
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 136,
            "end": 137
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 140,
            "end": 141
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 136,
          "end": 141
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": true,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "arguments",
                "optional": false,
                "typeAnnotation": null,
                "start": 164,
                "end": 173
              },
              "id": null,
              "generator": false,
              "start": 152,
              "end": 173
            },
            "start": 145,
            "end": 174
          }
        ],
        "start": 143,
        "end": 176
      },
      "expression": false,
      "start": 118,
      "end": 176
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 192,
        "end": 194
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 195,
            "end": 196
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 199,
            "end": 200
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 195,
          "end": 200
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": true,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": true,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 235,
                  "end": 244
                },
                "id": null,
                "generator": false,
                "start": 223,
                "end": 244
              },
              "id": null,
              "generator": false,
              "start": 211,
              "end": 244
            },
            "start": 204,
            "end": 245
          }
        ],
        "start": 202,
        "end": 247
      },
      "expression": false,
      "start": 177,
      "end": 247
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 263,
        "end": 265
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 266,
            "end": 267
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 270,
            "end": 271
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 266,
          "end": 271
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 276,
            "end": 280
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 273,
          "end": 280
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 282,
        "end": 285
      },
      "expression": false,
      "start": 248,
      "end": 285
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 301,
        "end": 303
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 304,
            "end": 305
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 308,
            "end": 309
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 304,
          "end": 309
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 314,
            "end": 318
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 311,
          "end": 318
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": true,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "arguments",
                "optional": false,
                "typeAnnotation": null,
                "start": 341,
                "end": 350
              },
              "id": null,
              "generator": false,
              "start": 329,
              "end": 350
            },
            "start": 322,
            "end": 351
          }
        ],
        "start": 320,
        "end": 353
      },
      "expression": false,
      "start": 286,
      "end": 353
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null,
        "start": 369,
        "end": 371
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 372,
            "end": 373
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 376,
            "end": 377
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 372,
          "end": 377
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 382,
            "end": 386
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 379,
          "end": 386
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": true,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": true,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 421,
                  "end": 430
                },
                "id": null,
                "generator": false,
                "start": 409,
                "end": 430
              },
              "id": null,
              "generator": false,
              "start": 397,
              "end": 430
            },
            "start": 390,
            "end": 431
          }
        ],
        "start": 388,
        "end": 433
      },
      "expression": false,
      "start": 354,
      "end": 433
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f8",
        "optional": false,
        "typeAnnotation": null,
        "start": 449,
        "end": 451
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
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": true,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 470,
                    "end": 471
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 474,
                    "end": 475
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 470,
                  "end": 475
                }
              ],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "arguments",
                "optional": false,
                "typeAnnotation": null,
                "start": 480,
                "end": 489
              },
              "id": null,
              "generator": false,
              "start": 463,
              "end": 489
            },
            "start": 456,
            "end": 490
          }
        ],
        "start": 454,
        "end": 492
      },
      "expression": false,
      "start": 434,
      "end": 492
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f9",
        "optional": false,
        "typeAnnotation": null,
        "start": 508,
        "end": 510
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
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": true,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 529,
                    "end": 530
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 533,
                    "end": 534
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 529,
                  "end": 534
                }
              ],
              "returnType": null,
              "body": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": true,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 551,
                  "end": 560
                },
                "id": null,
                "generator": false,
                "start": 539,
                "end": 560
              },
              "id": null,
              "generator": false,
              "start": 522,
              "end": 560
            },
            "start": 515,
            "end": 561
          }
        ],
        "start": 513,
        "end": 563
      },
      "expression": false,
      "start": 493,
      "end": 563
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null,
        "start": 579,
        "end": 582
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 583,
            "end": 584
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 587,
            "end": 588
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 583,
          "end": 588
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": true,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "FunctionExpression",
                "id": null,
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
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": true,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 650,
                          "end": 659
                        },
                        "id": null,
                        "generator": false,
                        "start": 638,
                        "end": 659
                      },
                      "start": 631,
                      "end": 660
                    }
                  ],
                  "start": 629,
                  "end": 662
                },
                "expression": false,
                "start": 611,
                "end": 662
              },
              "id": null,
              "generator": false,
              "start": 599,
              "end": 662
            },
            "start": 592,
            "end": 663
          }
        ],
        "start": 590,
        "end": 665
      },
      "expression": false,
      "start": 564,
      "end": 665
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null,
        "start": 675,
        "end": 678
      },
      "generator": false,
      "async": false,
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
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": true,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 697,
                    "end": 698
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 701,
                    "end": 702
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 697,
                  "end": 702
                }
              ],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "arguments",
                "optional": false,
                "typeAnnotation": null,
                "start": 707,
                "end": 716
              },
              "id": null,
              "generator": false,
              "start": 690,
              "end": 716
            },
            "start": 683,
            "end": 717
          }
        ],
        "start": 681,
        "end": 719
      },
      "expression": false,
      "start": 666,
      "end": 719
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f12",
        "optional": false,
        "typeAnnotation": null,
        "start": 729,
        "end": 732
      },
      "generator": false,
      "async": false,
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
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": true,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 751,
                    "end": 752
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 755,
                    "end": 756
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 751,
                  "end": 756
                }
              ],
              "returnType": null,
              "body": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": true,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 773,
                  "end": 782
                },
                "id": null,
                "generator": false,
                "start": 761,
                "end": 782
              },
              "id": null,
              "generator": false,
              "start": 744,
              "end": 782
            },
            "start": 737,
            "end": 783
          }
        ],
        "start": 735,
        "end": 785
      },
      "expression": false,
      "start": 720,
      "end": 785
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 795,
        "end": 796
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 811,
                  "end": 813
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": true,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 823,
                      "end": 824
                    },
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 826,
                        "end": 827
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 830,
                        "end": 831
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 826,
                      "end": 831
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 836,
                    "end": 838
                  },
                  "id": null,
                  "generator": false,
                  "start": 816,
                  "end": 838
                },
                "definite": false,
                "start": 811,
                "end": 838
              }
            ],
            "declare": false,
            "start": 805,
            "end": 839
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 850,
                  "end": 852
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": true,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "z",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 864,
                            "end": 865
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 868,
                            "end": 869
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": true,
                          "optional": false,
                          "start": 863,
                          "end": 869
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 862,
                      "end": 870
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 875,
                    "end": 877
                  },
                  "id": null,
                  "generator": false,
                  "start": 855,
                  "end": 877
                },
                "definite": false,
                "start": 850,
                "end": 877
              }
            ],
            "declare": false,
            "start": 844,
            "end": 878
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 889,
                  "end": 891
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": true,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 901,
                        "end": 902
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 905,
                        "end": 906
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 901,
                      "end": 906
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": true,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arguments",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 932,
                            "end": 941
                          },
                          "id": null,
                          "generator": false,
                          "start": 920,
                          "end": 941
                        },
                        "start": 913,
                        "end": 942
                      }
                    ],
                    "start": 911,
                    "end": 944
                  },
                  "id": null,
                  "generator": false,
                  "start": 894,
                  "end": 944
                },
                "definite": false,
                "start": 889,
                "end": 944
              }
            ],
            "declare": false,
            "start": 883,
            "end": 945
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 956,
                  "end": 958
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": true,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 968,
                        "end": 969
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 972,
                        "end": 973
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 968,
                      "end": 973
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": true,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": true,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "arguments",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1011,
                              "end": 1020
                            },
                            "id": null,
                            "generator": false,
                            "start": 999,
                            "end": 1020
                          },
                          "id": null,
                          "generator": false,
                          "start": 987,
                          "end": 1020
                        },
                        "start": 980,
                        "end": 1021
                      }
                    ],
                    "start": 978,
                    "end": 1023
                  },
                  "id": null,
                  "generator": false,
                  "start": 961,
                  "end": 1023
                },
                "definite": false,
                "start": 956,
                "end": 1023
              }
            ],
            "declare": false,
            "start": 950,
            "end": 1024
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1035,
                  "end": 1037
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": true,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1047,
                        "end": 1048
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1051,
                        "end": 1052
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1047,
                      "end": 1052
                    },
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1057,
                        "end": 1061
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 1054,
                      "end": 1061
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 1066,
                    "end": 1069
                  },
                  "id": null,
                  "generator": false,
                  "start": 1040,
                  "end": 1069
                },
                "definite": false,
                "start": 1035,
                "end": 1069
              }
            ],
            "declare": false,
            "start": 1029,
            "end": 1070
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1081,
                  "end": 1083
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": true,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1093,
                        "end": 1094
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1097,
                        "end": 1098
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1093,
                      "end": 1098
                    },
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1103,
                        "end": 1107
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 1100,
                      "end": 1107
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": true,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arguments",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1133,
                            "end": 1142
                          },
                          "id": null,
                          "generator": false,
                          "start": 1121,
                          "end": 1142
                        },
                        "start": 1114,
                        "end": 1143
                      }
                    ],
                    "start": 1112,
                    "end": 1145
                  },
                  "id": null,
                  "generator": false,
                  "start": 1086,
                  "end": 1145
                },
                "definite": false,
                "start": 1081,
                "end": 1145
              }
            ],
            "declare": false,
            "start": 1075,
            "end": 1146
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1157,
                  "end": 1159
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": true,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1169,
                        "end": 1170
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1173,
                        "end": 1174
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1169,
                      "end": 1174
                    },
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1179,
                        "end": 1183
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 1176,
                      "end": 1183
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": true,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": true,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "arguments",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1221,
                              "end": 1230
                            },
                            "id": null,
                            "generator": false,
                            "start": 1209,
                            "end": 1230
                          },
                          "id": null,
                          "generator": false,
                          "start": 1197,
                          "end": 1230
                        },
                        "start": 1190,
                        "end": 1231
                      }
                    ],
                    "start": 1188,
                    "end": 1233
                  },
                  "id": null,
                  "generator": false,
                  "start": 1162,
                  "end": 1233
                },
                "definite": false,
                "start": 1157,
                "end": 1233
              }
            ],
            "declare": false,
            "start": 1151,
            "end": 1234
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1245,
                  "end": 1247
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": true,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": true,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "AssignmentPattern",
                              "decorators": [],
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1278,
                                "end": 1279
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "z",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1282,
                                "end": 1283
                              },
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1278,
                              "end": 1283
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arguments",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1288,
                            "end": 1297
                          },
                          "id": null,
                          "generator": false,
                          "start": 1271,
                          "end": 1297
                        },
                        "start": 1264,
                        "end": 1298
                      }
                    ],
                    "start": 1262,
                    "end": 1300
                  },
                  "id": null,
                  "generator": false,
                  "start": 1250,
                  "end": 1300
                },
                "definite": false,
                "start": 1245,
                "end": 1300
              }
            ],
            "declare": false,
            "start": 1239,
            "end": 1301
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a9",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1312,
                  "end": 1314
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": true,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": true,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "AssignmentPattern",
                              "decorators": [],
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1345,
                                "end": 1346
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "z",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1349,
                                "end": 1350
                              },
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1345,
                              "end": 1350
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": true,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "arguments",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1367,
                              "end": 1376
                            },
                            "id": null,
                            "generator": false,
                            "start": 1355,
                            "end": 1376
                          },
                          "id": null,
                          "generator": false,
                          "start": 1338,
                          "end": 1376
                        },
                        "start": 1331,
                        "end": 1377
                      }
                    ],
                    "start": 1329,
                    "end": 1379
                  },
                  "id": null,
                  "generator": false,
                  "start": 1317,
                  "end": 1379
                },
                "definite": false,
                "start": 1312,
                "end": 1379
              }
            ],
            "declare": false,
            "start": 1306,
            "end": 1380
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a10",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1391,
                  "end": 1394
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": true,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1404,
                        "end": 1405
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1408,
                        "end": 1409
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1404,
                      "end": 1409
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": true,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "FunctionExpression",
                            "id": null,
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
                                    "type": "ArrowFunctionExpression",
                                    "expression": true,
                                    "async": true,
                                    "typeParameters": null,
                                    "params": [],
                                    "returnType": null,
                                    "body": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "arguments",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1474,
                                      "end": 1483
                                    },
                                    "id": null,
                                    "generator": false,
                                    "start": 1462,
                                    "end": 1483
                                  },
                                  "start": 1455,
                                  "end": 1484
                                }
                              ],
                              "start": 1453,
                              "end": 1486
                            },
                            "expression": false,
                            "start": 1435,
                            "end": 1486
                          },
                          "id": null,
                          "generator": false,
                          "start": 1423,
                          "end": 1486
                        },
                        "start": 1416,
                        "end": 1487
                      }
                    ],
                    "start": 1414,
                    "end": 1489
                  },
                  "id": null,
                  "generator": false,
                  "start": 1397,
                  "end": 1489
                },
                "definite": false,
                "start": 1391,
                "end": 1489
              }
            ],
            "declare": false,
            "start": 1385,
            "end": 1490
          }
        ],
        "start": 799,
        "end": 1492
      },
      "expression": false,
      "start": 786,
      "end": 1492
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 1492
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "async",
    "start": 56,
    "end": 61,
    "range": [
      56,
      61
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 62,
    "end": 70,
    "range": [
      62,
      70
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 71,
    "end": 73,
    "range": [
      71,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 73,
    "end": 74,
    "range": [
      73,
      74
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 87,
    "end": 92,
    "range": [
      87,
      92
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 93,
    "end": 101,
    "range": [
      93,
      101
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 102,
    "end": 104,
    "range": [
      102,
      104
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 118,
    "end": 123,
    "range": [
      118,
      123
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 124,
    "end": 132,
    "range": [
      124,
      132
    ]
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 133,
    "end": 135,
    "range": [
      133,
      135
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 135,
    "end": 136,
    "range": [
      135,
      136
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 136,
    "end": 137,
    "range": [
      136,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 143,
    "end": 144,
    "range": [
      143,
      144
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 145,
    "end": 151,
    "range": [
      145,
      151
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 152,
    "end": 157,
    "range": [
      152,
      157
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 161,
    "end": 163,
    "range": [
      161,
      163
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 164,
    "end": 173,
    "range": [
      164,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 177,
    "end": 182,
    "range": [
      177,
      182
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 183,
    "end": 191,
    "range": [
      183,
      191
    ]
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 192,
    "end": 194,
    "range": [
      192,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 199,
    "end": 200,
    "range": [
      199,
      200
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 200,
    "end": 201,
    "range": [
      200,
      201
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 202,
    "end": 203,
    "range": [
      202,
      203
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 204,
    "end": 210,
    "range": [
      204,
      210
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 211,
    "end": 216,
    "range": [
      211,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 218,
    "end": 219,
    "range": [
      218,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 220,
    "end": 222,
    "range": [
      220,
      222
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 223,
    "end": 228,
    "range": [
      223,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 229,
    "end": 230,
    "range": [
      229,
      230
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 230,
    "end": 231,
    "range": [
      230,
      231
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 232,
    "end": 234,
    "range": [
      232,
      234
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 235,
    "end": 244,
    "range": [
      235,
      244
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 244,
    "end": 245,
    "range": [
      244,
      245
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 246,
    "end": 247,
    "range": [
      246,
      247
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 248,
    "end": 253,
    "range": [
      248,
      253
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 254,
    "end": 262,
    "range": [
      254,
      262
    ]
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 263,
    "end": 265,
    "range": [
      263,
      265
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 265,
    "end": 266,
    "range": [
      265,
      266
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 266,
    "end": 267,
    "range": [
      266,
      267
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 271,
    "end": 272,
    "range": [
      271,
      272
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 273,
    "end": 276,
    "range": [
      273,
      276
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 276,
    "end": 280,
    "range": [
      276,
      280
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 280,
    "end": 281,
    "range": [
      280,
      281
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 282,
    "end": 283,
    "range": [
      282,
      283
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 284,
    "end": 285,
    "range": [
      284,
      285
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 286,
    "end": 291,
    "range": [
      286,
      291
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 292,
    "end": 300,
    "range": [
      292,
      300
    ]
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 301,
    "end": 303,
    "range": [
      301,
      303
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 303,
    "end": 304,
    "range": [
      303,
      304
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 304,
    "end": 305,
    "range": [
      304,
      305
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 306,
    "end": 307,
    "range": [
      306,
      307
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 308,
    "end": 309,
    "range": [
      308,
      309
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 309,
    "end": 310,
    "range": [
      309,
      310
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 311,
    "end": 314,
    "range": [
      311,
      314
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 314,
    "end": 318,
    "range": [
      314,
      318
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 318,
    "end": 319,
    "range": [
      318,
      319
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 320,
    "end": 321,
    "range": [
      320,
      321
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 322,
    "end": 328,
    "range": [
      322,
      328
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 329,
    "end": 334,
    "range": [
      329,
      334
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 335,
    "end": 336,
    "range": [
      335,
      336
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 338,
    "end": 340,
    "range": [
      338,
      340
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 341,
    "end": 350,
    "range": [
      341,
      350
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 350,
    "end": 351,
    "range": [
      350,
      351
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 352,
    "end": 353,
    "range": [
      352,
      353
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 354,
    "end": 359,
    "range": [
      354,
      359
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 360,
    "end": 368,
    "range": [
      360,
      368
    ]
  },
  {
    "type": "Identifier",
    "value": "f7",
    "start": 369,
    "end": 371,
    "range": [
      369,
      371
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 371,
    "end": 372,
    "range": [
      371,
      372
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 372,
    "end": 373,
    "range": [
      372,
      373
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 374,
    "end": 375,
    "range": [
      374,
      375
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 376,
    "end": 377,
    "range": [
      376,
      377
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 377,
    "end": 378,
    "range": [
      377,
      378
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 379,
    "end": 382,
    "range": [
      379,
      382
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 382,
    "end": 386,
    "range": [
      382,
      386
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 386,
    "end": 387,
    "range": [
      386,
      387
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 388,
    "end": 389,
    "range": [
      388,
      389
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 390,
    "end": 396,
    "range": [
      390,
      396
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 397,
    "end": 402,
    "range": [
      397,
      402
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 403,
    "end": 404,
    "range": [
      403,
      404
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 404,
    "end": 405,
    "range": [
      404,
      405
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 406,
    "end": 408,
    "range": [
      406,
      408
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 409,
    "end": 414,
    "range": [
      409,
      414
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 415,
    "end": 416,
    "range": [
      415,
      416
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 416,
    "end": 417,
    "range": [
      416,
      417
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 418,
    "end": 420,
    "range": [
      418,
      420
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 421,
    "end": 430,
    "range": [
      421,
      430
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 430,
    "end": 431,
    "range": [
      430,
      431
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 434,
    "end": 439,
    "range": [
      434,
      439
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 440,
    "end": 448,
    "range": [
      440,
      448
    ]
  },
  {
    "type": "Identifier",
    "value": "f8",
    "start": 449,
    "end": 451,
    "range": [
      449,
      451
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 451,
    "end": 452,
    "range": [
      451,
      452
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 452,
    "end": 453,
    "range": [
      452,
      453
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 454,
    "end": 455,
    "range": [
      454,
      455
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 456,
    "end": 462,
    "range": [
      456,
      462
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 463,
    "end": 468,
    "range": [
      463,
      468
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 469,
    "end": 470,
    "range": [
      469,
      470
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 470,
    "end": 471,
    "range": [
      470,
      471
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 472,
    "end": 473,
    "range": [
      472,
      473
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 474,
    "end": 475,
    "range": [
      474,
      475
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 475,
    "end": 476,
    "range": [
      475,
      476
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 477,
    "end": 479,
    "range": [
      477,
      479
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 480,
    "end": 489,
    "range": [
      480,
      489
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 489,
    "end": 490,
    "range": [
      489,
      490
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 491,
    "end": 492,
    "range": [
      491,
      492
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 493,
    "end": 498,
    "range": [
      493,
      498
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 499,
    "end": 507,
    "range": [
      499,
      507
    ]
  },
  {
    "type": "Identifier",
    "value": "f9",
    "start": 508,
    "end": 510,
    "range": [
      508,
      510
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 510,
    "end": 511,
    "range": [
      510,
      511
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 511,
    "end": 512,
    "range": [
      511,
      512
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 513,
    "end": 514,
    "range": [
      513,
      514
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 515,
    "end": 521,
    "range": [
      515,
      521
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 522,
    "end": 527,
    "range": [
      522,
      527
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 528,
    "end": 529,
    "range": [
      528,
      529
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 529,
    "end": 530,
    "range": [
      529,
      530
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 531,
    "end": 532,
    "range": [
      531,
      532
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 533,
    "end": 534,
    "range": [
      533,
      534
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 534,
    "end": 535,
    "range": [
      534,
      535
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 536,
    "end": 538,
    "range": [
      536,
      538
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 539,
    "end": 544,
    "range": [
      539,
      544
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 545,
    "end": 546,
    "range": [
      545,
      546
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 546,
    "end": 547,
    "range": [
      546,
      547
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 548,
    "end": 550,
    "range": [
      548,
      550
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 551,
    "end": 560,
    "range": [
      551,
      560
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 560,
    "end": 561,
    "range": [
      560,
      561
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 562,
    "end": 563,
    "range": [
      562,
      563
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 564,
    "end": 569,
    "range": [
      564,
      569
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 570,
    "end": 578,
    "range": [
      570,
      578
    ]
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 579,
    "end": 582,
    "range": [
      579,
      582
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 582,
    "end": 583,
    "range": [
      582,
      583
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 583,
    "end": 584,
    "range": [
      583,
      584
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 585,
    "end": 586,
    "range": [
      585,
      586
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 587,
    "end": 588,
    "range": [
      587,
      588
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 588,
    "end": 589,
    "range": [
      588,
      589
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 590,
    "end": 591,
    "range": [
      590,
      591
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 592,
    "end": 598,
    "range": [
      592,
      598
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 599,
    "end": 604,
    "range": [
      599,
      604
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 605,
    "end": 606,
    "range": [
      605,
      606
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 606,
    "end": 607,
    "range": [
      606,
      607
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 608,
    "end": 610,
    "range": [
      608,
      610
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 611,
    "end": 616,
    "range": [
      611,
      616
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 617,
    "end": 625,
    "range": [
      617,
      625
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 626,
    "end": 627,
    "range": [
      626,
      627
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 627,
    "end": 628,
    "range": [
      627,
      628
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 629,
    "end": 630,
    "range": [
      629,
      630
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 631,
    "end": 637,
    "range": [
      631,
      637
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 638,
    "end": 643,
    "range": [
      638,
      643
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 644,
    "end": 645,
    "range": [
      644,
      645
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 645,
    "end": 646,
    "range": [
      645,
      646
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 647,
    "end": 649,
    "range": [
      647,
      649
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 650,
    "end": 659,
    "range": [
      650,
      659
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 659,
    "end": 660,
    "range": [
      659,
      660
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 661,
    "end": 662,
    "range": [
      661,
      662
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 662,
    "end": 663,
    "range": [
      662,
      663
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 664,
    "end": 665,
    "range": [
      664,
      665
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 666,
    "end": 674,
    "range": [
      666,
      674
    ]
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 675,
    "end": 678,
    "range": [
      675,
      678
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 678,
    "end": 679,
    "range": [
      678,
      679
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 679,
    "end": 680,
    "range": [
      679,
      680
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 681,
    "end": 682,
    "range": [
      681,
      682
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 683,
    "end": 689,
    "range": [
      683,
      689
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 690,
    "end": 695,
    "range": [
      690,
      695
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 696,
    "end": 697,
    "range": [
      696,
      697
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 697,
    "end": 698,
    "range": [
      697,
      698
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 699,
    "end": 700,
    "range": [
      699,
      700
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 701,
    "end": 702,
    "range": [
      701,
      702
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 702,
    "end": 703,
    "range": [
      702,
      703
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 704,
    "end": 706,
    "range": [
      704,
      706
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 707,
    "end": 716,
    "range": [
      707,
      716
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 716,
    "end": 717,
    "range": [
      716,
      717
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 718,
    "end": 719,
    "range": [
      718,
      719
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 720,
    "end": 728,
    "range": [
      720,
      728
    ]
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 729,
    "end": 732,
    "range": [
      729,
      732
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 732,
    "end": 733,
    "range": [
      732,
      733
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 733,
    "end": 734,
    "range": [
      733,
      734
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 735,
    "end": 736,
    "range": [
      735,
      736
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 737,
    "end": 743,
    "range": [
      737,
      743
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 744,
    "end": 749,
    "range": [
      744,
      749
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 750,
    "end": 751,
    "range": [
      750,
      751
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 751,
    "end": 752,
    "range": [
      751,
      752
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 753,
    "end": 754,
    "range": [
      753,
      754
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 755,
    "end": 756,
    "range": [
      755,
      756
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 756,
    "end": 757,
    "range": [
      756,
      757
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 758,
    "end": 760,
    "range": [
      758,
      760
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 761,
    "end": 766,
    "range": [
      761,
      766
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 767,
    "end": 768,
    "range": [
      767,
      768
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 768,
    "end": 769,
    "range": [
      768,
      769
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 770,
    "end": 772,
    "range": [
      770,
      772
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 773,
    "end": 782,
    "range": [
      773,
      782
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 782,
    "end": 783,
    "range": [
      782,
      783
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 784,
    "end": 785,
    "range": [
      784,
      785
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 786,
    "end": 794,
    "range": [
      786,
      794
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 795,
    "end": 796,
    "range": [
      795,
      796
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 796,
    "end": 797,
    "range": [
      796,
      797
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 797,
    "end": 798,
    "range": [
      797,
      798
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 799,
    "end": 800,
    "range": [
      799,
      800
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 805,
    "end": 810,
    "range": [
      805,
      810
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 811,
    "end": 813,
    "range": [
      811,
      813
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 814,
    "end": 815,
    "range": [
      814,
      815
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 816,
    "end": 821,
    "range": [
      816,
      821
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 822,
    "end": 823,
    "range": [
      822,
      823
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 823,
    "end": 824,
    "range": [
      823,
      824
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 824,
    "end": 825,
    "range": [
      824,
      825
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 826,
    "end": 827,
    "range": [
      826,
      827
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 828,
    "end": 829,
    "range": [
      828,
      829
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 830,
    "end": 831,
    "range": [
      830,
      831
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 831,
    "end": 832,
    "range": [
      831,
      832
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 833,
    "end": 835,
    "range": [
      833,
      835
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 836,
    "end": 837,
    "range": [
      836,
      837
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 837,
    "end": 838,
    "range": [
      837,
      838
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 838,
    "end": 839,
    "range": [
      838,
      839
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 844,
    "end": 849,
    "range": [
      844,
      849
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 850,
    "end": 852,
    "range": [
      850,
      852
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 853,
    "end": 854,
    "range": [
      853,
      854
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 855,
    "end": 860,
    "range": [
      855,
      860
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 861,
    "end": 862,
    "range": [
      861,
      862
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 862,
    "end": 863,
    "range": [
      862,
      863
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 863,
    "end": 864,
    "range": [
      863,
      864
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 864,
    "end": 865,
    "range": [
      864,
      865
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 865,
    "end": 866,
    "range": [
      865,
      866
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 866,
    "end": 867,
    "range": [
      866,
      867
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 868,
    "end": 869,
    "range": [
      868,
      869
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 869,
    "end": 870,
    "range": [
      869,
      870
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 870,
    "end": 871,
    "range": [
      870,
      871
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 872,
    "end": 874,
    "range": [
      872,
      874
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 875,
    "end": 876,
    "range": [
      875,
      876
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 876,
    "end": 877,
    "range": [
      876,
      877
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 877,
    "end": 878,
    "range": [
      877,
      878
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 883,
    "end": 888,
    "range": [
      883,
      888
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 889,
    "end": 891,
    "range": [
      889,
      891
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 892,
    "end": 893,
    "range": [
      892,
      893
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 894,
    "end": 899,
    "range": [
      894,
      899
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 900,
    "end": 901,
    "range": [
      900,
      901
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 901,
    "end": 902,
    "range": [
      901,
      902
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 903,
    "end": 904,
    "range": [
      903,
      904
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 905,
    "end": 906,
    "range": [
      905,
      906
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 906,
    "end": 907,
    "range": [
      906,
      907
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 908,
    "end": 910,
    "range": [
      908,
      910
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 911,
    "end": 912,
    "range": [
      911,
      912
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 913,
    "end": 919,
    "range": [
      913,
      919
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 920,
    "end": 925,
    "range": [
      920,
      925
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 926,
    "end": 927,
    "range": [
      926,
      927
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 927,
    "end": 928,
    "range": [
      927,
      928
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 929,
    "end": 931,
    "range": [
      929,
      931
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 932,
    "end": 941,
    "range": [
      932,
      941
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 941,
    "end": 942,
    "range": [
      941,
      942
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 943,
    "end": 944,
    "range": [
      943,
      944
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 944,
    "end": 945,
    "range": [
      944,
      945
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 950,
    "end": 955,
    "range": [
      950,
      955
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 956,
    "end": 958,
    "range": [
      956,
      958
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 959,
    "end": 960,
    "range": [
      959,
      960
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 961,
    "end": 966,
    "range": [
      961,
      966
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 967,
    "end": 968,
    "range": [
      967,
      968
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 968,
    "end": 969,
    "range": [
      968,
      969
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 970,
    "end": 971,
    "range": [
      970,
      971
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 972,
    "end": 973,
    "range": [
      972,
      973
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 973,
    "end": 974,
    "range": [
      973,
      974
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 975,
    "end": 977,
    "range": [
      975,
      977
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 978,
    "end": 979,
    "range": [
      978,
      979
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 980,
    "end": 986,
    "range": [
      980,
      986
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 987,
    "end": 992,
    "range": [
      987,
      992
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 993,
    "end": 994,
    "range": [
      993,
      994
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 994,
    "end": 995,
    "range": [
      994,
      995
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 996,
    "end": 998,
    "range": [
      996,
      998
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 999,
    "end": 1004,
    "range": [
      999,
      1004
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1005,
    "end": 1006,
    "range": [
      1005,
      1006
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1006,
    "end": 1007,
    "range": [
      1006,
      1007
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1008,
    "end": 1010,
    "range": [
      1008,
      1010
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1011,
    "end": 1020,
    "range": [
      1011,
      1020
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1020,
    "end": 1021,
    "range": [
      1020,
      1021
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1022,
    "end": 1023,
    "range": [
      1022,
      1023
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1023,
    "end": 1024,
    "range": [
      1023,
      1024
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1029,
    "end": 1034,
    "range": [
      1029,
      1034
    ]
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 1035,
    "end": 1037,
    "range": [
      1035,
      1037
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1038,
    "end": 1039,
    "range": [
      1038,
      1039
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1040,
    "end": 1045,
    "range": [
      1040,
      1045
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1046,
    "end": 1047,
    "range": [
      1046,
      1047
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1047,
    "end": 1048,
    "range": [
      1047,
      1048
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1049,
    "end": 1050,
    "range": [
      1049,
      1050
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1051,
    "end": 1052,
    "range": [
      1051,
      1052
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1052,
    "end": 1053,
    "range": [
      1052,
      1053
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1054,
    "end": 1057,
    "range": [
      1054,
      1057
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1057,
    "end": 1061,
    "range": [
      1057,
      1061
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1061,
    "end": 1062,
    "range": [
      1061,
      1062
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1063,
    "end": 1065,
    "range": [
      1063,
      1065
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1066,
    "end": 1067,
    "range": [
      1066,
      1067
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1068,
    "end": 1069,
    "range": [
      1068,
      1069
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1069,
    "end": 1070,
    "range": [
      1069,
      1070
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1075,
    "end": 1080,
    "range": [
      1075,
      1080
    ]
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 1081,
    "end": 1083,
    "range": [
      1081,
      1083
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1084,
    "end": 1085,
    "range": [
      1084,
      1085
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1086,
    "end": 1091,
    "range": [
      1086,
      1091
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1092,
    "end": 1093,
    "range": [
      1092,
      1093
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1093,
    "end": 1094,
    "range": [
      1093,
      1094
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1095,
    "end": 1096,
    "range": [
      1095,
      1096
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1097,
    "end": 1098,
    "range": [
      1097,
      1098
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1098,
    "end": 1099,
    "range": [
      1098,
      1099
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1100,
    "end": 1103,
    "range": [
      1100,
      1103
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1103,
    "end": 1107,
    "range": [
      1103,
      1107
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1107,
    "end": 1108,
    "range": [
      1107,
      1108
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1109,
    "end": 1111,
    "range": [
      1109,
      1111
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1112,
    "end": 1113,
    "range": [
      1112,
      1113
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1114,
    "end": 1120,
    "range": [
      1114,
      1120
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1121,
    "end": 1126,
    "range": [
      1121,
      1126
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1127,
    "end": 1128,
    "range": [
      1127,
      1128
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1128,
    "end": 1129,
    "range": [
      1128,
      1129
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1130,
    "end": 1132,
    "range": [
      1130,
      1132
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1133,
    "end": 1142,
    "range": [
      1133,
      1142
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1142,
    "end": 1143,
    "range": [
      1142,
      1143
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1144,
    "end": 1145,
    "range": [
      1144,
      1145
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1145,
    "end": 1146,
    "range": [
      1145,
      1146
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1151,
    "end": 1156,
    "range": [
      1151,
      1156
    ]
  },
  {
    "type": "Identifier",
    "value": "a7",
    "start": 1157,
    "end": 1159,
    "range": [
      1157,
      1159
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1160,
    "end": 1161,
    "range": [
      1160,
      1161
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1162,
    "end": 1167,
    "range": [
      1162,
      1167
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1168,
    "end": 1169,
    "range": [
      1168,
      1169
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1169,
    "end": 1170,
    "range": [
      1169,
      1170
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1171,
    "end": 1172,
    "range": [
      1171,
      1172
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1173,
    "end": 1174,
    "range": [
      1173,
      1174
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1174,
    "end": 1175,
    "range": [
      1174,
      1175
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1176,
    "end": 1179,
    "range": [
      1176,
      1179
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1179,
    "end": 1183,
    "range": [
      1179,
      1183
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1183,
    "end": 1184,
    "range": [
      1183,
      1184
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1185,
    "end": 1187,
    "range": [
      1185,
      1187
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1188,
    "end": 1189,
    "range": [
      1188,
      1189
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1190,
    "end": 1196,
    "range": [
      1190,
      1196
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1197,
    "end": 1202,
    "range": [
      1197,
      1202
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1203,
    "end": 1204,
    "range": [
      1203,
      1204
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1204,
    "end": 1205,
    "range": [
      1204,
      1205
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1206,
    "end": 1208,
    "range": [
      1206,
      1208
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1209,
    "end": 1214,
    "range": [
      1209,
      1214
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1215,
    "end": 1216,
    "range": [
      1215,
      1216
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1216,
    "end": 1217,
    "range": [
      1216,
      1217
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1218,
    "end": 1220,
    "range": [
      1218,
      1220
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1221,
    "end": 1230,
    "range": [
      1221,
      1230
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1230,
    "end": 1231,
    "range": [
      1230,
      1231
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1232,
    "end": 1233,
    "range": [
      1232,
      1233
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1233,
    "end": 1234,
    "range": [
      1233,
      1234
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1239,
    "end": 1244,
    "range": [
      1239,
      1244
    ]
  },
  {
    "type": "Identifier",
    "value": "a8",
    "start": 1245,
    "end": 1247,
    "range": [
      1245,
      1247
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1248,
    "end": 1249,
    "range": [
      1248,
      1249
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1250,
    "end": 1255,
    "range": [
      1250,
      1255
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1256,
    "end": 1257,
    "range": [
      1256,
      1257
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1257,
    "end": 1258,
    "range": [
      1257,
      1258
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1259,
    "end": 1261,
    "range": [
      1259,
      1261
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1262,
    "end": 1263,
    "range": [
      1262,
      1263
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1264,
    "end": 1270,
    "range": [
      1264,
      1270
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1271,
    "end": 1276,
    "range": [
      1271,
      1276
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1277,
    "end": 1278,
    "range": [
      1277,
      1278
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1278,
    "end": 1279,
    "range": [
      1278,
      1279
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1280,
    "end": 1281,
    "range": [
      1280,
      1281
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1282,
    "end": 1283,
    "range": [
      1282,
      1283
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1283,
    "end": 1284,
    "range": [
      1283,
      1284
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1285,
    "end": 1287,
    "range": [
      1285,
      1287
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1288,
    "end": 1297,
    "range": [
      1288,
      1297
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1297,
    "end": 1298,
    "range": [
      1297,
      1298
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1299,
    "end": 1300,
    "range": [
      1299,
      1300
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1300,
    "end": 1301,
    "range": [
      1300,
      1301
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1306,
    "end": 1311,
    "range": [
      1306,
      1311
    ]
  },
  {
    "type": "Identifier",
    "value": "a9",
    "start": 1312,
    "end": 1314,
    "range": [
      1312,
      1314
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1315,
    "end": 1316,
    "range": [
      1315,
      1316
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1317,
    "end": 1322,
    "range": [
      1317,
      1322
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1323,
    "end": 1324,
    "range": [
      1323,
      1324
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1324,
    "end": 1325,
    "range": [
      1324,
      1325
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1326,
    "end": 1328,
    "range": [
      1326,
      1328
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1329,
    "end": 1330,
    "range": [
      1329,
      1330
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1331,
    "end": 1337,
    "range": [
      1331,
      1337
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1338,
    "end": 1343,
    "range": [
      1338,
      1343
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1344,
    "end": 1345,
    "range": [
      1344,
      1345
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1345,
    "end": 1346,
    "range": [
      1345,
      1346
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1347,
    "end": 1348,
    "range": [
      1347,
      1348
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1349,
    "end": 1350,
    "range": [
      1349,
      1350
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1350,
    "end": 1351,
    "range": [
      1350,
      1351
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1352,
    "end": 1354,
    "range": [
      1352,
      1354
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1355,
    "end": 1360,
    "range": [
      1355,
      1360
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1361,
    "end": 1362,
    "range": [
      1361,
      1362
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1362,
    "end": 1363,
    "range": [
      1362,
      1363
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1364,
    "end": 1366,
    "range": [
      1364,
      1366
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1367,
    "end": 1376,
    "range": [
      1367,
      1376
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1376,
    "end": 1377,
    "range": [
      1376,
      1377
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1378,
    "end": 1379,
    "range": [
      1378,
      1379
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1379,
    "end": 1380,
    "range": [
      1379,
      1380
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1385,
    "end": 1390,
    "range": [
      1385,
      1390
    ]
  },
  {
    "type": "Identifier",
    "value": "a10",
    "start": 1391,
    "end": 1394,
    "range": [
      1391,
      1394
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1395,
    "end": 1396,
    "range": [
      1395,
      1396
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1397,
    "end": 1402,
    "range": [
      1397,
      1402
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1403,
    "end": 1404,
    "range": [
      1403,
      1404
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1404,
    "end": 1405,
    "range": [
      1404,
      1405
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1406,
    "end": 1407,
    "range": [
      1406,
      1407
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1408,
    "end": 1409,
    "range": [
      1408,
      1409
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1409,
    "end": 1410,
    "range": [
      1409,
      1410
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1411,
    "end": 1413,
    "range": [
      1411,
      1413
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1414,
    "end": 1415,
    "range": [
      1414,
      1415
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1416,
    "end": 1422,
    "range": [
      1416,
      1422
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1423,
    "end": 1428,
    "range": [
      1423,
      1428
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1429,
    "end": 1430,
    "range": [
      1429,
      1430
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1430,
    "end": 1431,
    "range": [
      1430,
      1431
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1432,
    "end": 1434,
    "range": [
      1432,
      1434
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1435,
    "end": 1440,
    "range": [
      1435,
      1440
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1441,
    "end": 1449,
    "range": [
      1441,
      1449
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1450,
    "end": 1451,
    "range": [
      1450,
      1451
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1451,
    "end": 1452,
    "range": [
      1451,
      1452
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1453,
    "end": 1454,
    "range": [
      1453,
      1454
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1455,
    "end": 1461,
    "range": [
      1455,
      1461
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1462,
    "end": 1467,
    "range": [
      1462,
      1467
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1468,
    "end": 1469,
    "range": [
      1468,
      1469
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1469,
    "end": 1470,
    "range": [
      1469,
      1470
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1471,
    "end": 1473,
    "range": [
      1471,
      1473
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1474,
    "end": 1483,
    "range": [
      1474,
      1483
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1483,
    "end": 1484,
    "range": [
      1483,
      1484
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1485,
    "end": 1486,
    "range": [
      1485,
      1486
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1486,
    "end": 1487,
    "range": [
      1486,
      1487
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1488,
    "end": 1489,
    "range": [
      1488,
      1489
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1489,
    "end": 1490,
    "range": [
      1489,
      1490
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1491,
    "end": 1492,
    "range": [
      1491,
      1492
    ]
  }
]
```
