__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 222,
  "end": 1344,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 222,
      "end": 254,
      "id": {
        "type": "Identifier",
        "start": 227,
        "end": 238,
        "name": "arrayString",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 241,
        "end": 254,
        "typeName": {
          "type": "Identifier",
          "start": 241,
          "end": 246,
          "name": "Array",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 246,
          "end": 254,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 247,
              "end": 253,
              "typeName": {
                "type": "Identifier",
                "start": 247,
                "end": 253,
                "name": "String",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 255,
      "end": 297,
      "id": {
        "type": "Identifier",
        "start": 260,
        "end": 269,
        "name": "someArray",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 272,
        "end": 296,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 272,
            "end": 285,
            "typeName": {
              "type": "Identifier",
              "start": 272,
              "end": 277,
              "name": "Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 277,
              "end": 285,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 278,
                  "end": 284,
                  "typeName": {
                    "type": "Identifier",
                    "start": 278,
                    "end": 284,
                    "name": "String",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          {
            "type": "TSArrayType",
            "start": 288,
            "end": 296,
            "elementType": {
              "type": "TSNumberKeyword",
              "start": 288,
              "end": 294
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 298,
      "end": 343,
      "id": {
        "type": "Identifier",
        "start": 303,
        "end": 319,
        "name": "stringOrNumArray",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 322,
        "end": 342,
        "typeName": {
          "type": "Identifier",
          "start": 322,
          "end": 327,
          "name": "Array",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 327,
          "end": 342,
          "params": [
            {
              "type": "TSUnionType",
              "start": 328,
              "end": 341,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 328,
                  "end": 334,
                  "typeName": {
                    "type": "Identifier",
                    "start": 328,
                    "end": 334,
                    "name": "String",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 335,
                  "end": 341,
                  "typeName": {
                    "type": "Identifier",
                    "start": 335,
                    "end": 341,
                    "name": "Number",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 345,
      "end": 385,
      "id": {
        "type": "Identifier",
        "start": 354,
        "end": 356,
        "name": "a1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 357,
          "end": 380,
          "argument": {
            "type": "Identifier",
            "start": 360,
            "end": 361,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 361,
            "end": 380,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 363,
              "end": 380,
              "elementType": {
                "type": "TSUnionType",
                "start": 364,
                "end": 377,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 364,
                    "end": 370
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 371,
                    "end": 377
                  }
                ]
              }
            }
          },
          "value": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 382,
        "end": 385,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 386,
      "end": 407,
      "id": {
        "type": "Identifier",
        "start": 395,
        "end": 397,
        "name": "a2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 398,
          "end": 402,
          "argument": {
            "type": "Identifier",
            "start": 401,
            "end": 402,
            "name": "a",
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
        "start": 404,
        "end": 407,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 408,
      "end": 444,
      "id": {
        "type": "Identifier",
        "start": 417,
        "end": 419,
        "name": "a3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 420,
          "end": 439,
          "argument": {
            "type": "Identifier",
            "start": 423,
            "end": 424,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 424,
            "end": 439,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 426,
              "end": 439,
              "typeName": {
                "type": "Identifier",
                "start": 426,
                "end": 431,
                "name": "Array",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 431,
                "end": 439,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 432,
                    "end": 438,
                    "typeName": {
                      "type": "Identifier",
                      "start": 432,
                      "end": 438,
                      "name": "String",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "value": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 441,
        "end": 444,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 445,
      "end": 479,
      "id": {
        "type": "Identifier",
        "start": 454,
        "end": 456,
        "name": "a4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 457,
          "end": 474,
          "argument": {
            "type": "Identifier",
            "start": 460,
            "end": 461,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 461,
            "end": 474,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 463,
              "end": 474,
              "typeName": {
                "type": "Identifier",
                "start": 463,
                "end": 474,
                "name": "arrayString",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "value": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 476,
        "end": 479,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 480,
      "end": 519,
      "id": {
        "type": "Identifier",
        "start": 489,
        "end": 491,
        "name": "a5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 492,
          "end": 514,
          "argument": {
            "type": "Identifier",
            "start": 495,
            "end": 496,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 496,
            "end": 514,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 498,
              "end": 514,
              "typeName": {
                "type": "Identifier",
                "start": 498,
                "end": 514,
                "name": "stringOrNumArray",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "value": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 516,
        "end": 519,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 520,
      "end": 550,
      "id": {
        "type": "Identifier",
        "start": 529,
        "end": 531,
        "name": "a9",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ArrayPattern",
          "start": 532,
          "end": 545,
          "elements": [
            {
              "type": "Identifier",
              "start": 533,
              "end": 534,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 536,
              "end": 537,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "ArrayPattern",
              "start": 539,
              "end": 544,
              "elements": [
                {
                  "type": "ArrayPattern",
                  "start": 540,
                  "end": 543,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 541,
                      "end": 542,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 547,
        "end": 550,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 551,
      "end": 588,
      "id": {
        "type": "Identifier",
        "start": 560,
        "end": 563,
        "name": "a10",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ArrayPattern",
          "start": 564,
          "end": 583,
          "elements": [
            {
              "type": "Identifier",
              "start": 565,
              "end": 566,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 568,
              "end": 569,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "ArrayPattern",
              "start": 571,
              "end": 576,
              "elements": [
                {
                  "type": "ArrayPattern",
                  "start": 572,
                  "end": 575,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 573,
                      "end": 574,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "RestElement",
              "start": 578,
              "end": 582,
              "argument": {
                "type": "Identifier",
                "start": 581,
                "end": 582,
                "name": "x",
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
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 585,
        "end": 588,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 589,
      "end": 632,
      "id": {
        "type": "Identifier",
        "start": 598,
        "end": 601,
        "name": "a11",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ArrayPattern",
          "start": 602,
          "end": 627,
          "elements": [
            {
              "type": "Identifier",
              "start": 603,
              "end": 604,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 606,
              "end": 607,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 609,
              "end": 610,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "RestElement",
              "start": 612,
              "end": 616,
              "argument": {
                "type": "Identifier",
                "start": 615,
                "end": 616,
                "name": "x",
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
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 617,
            "end": 627,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 619,
              "end": 627,
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 619,
                "end": 625
              }
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 629,
        "end": 632,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 635,
      "end": 657,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 639,
          "end": 656,
          "id": {
            "type": "Identifier",
            "start": 639,
            "end": 644,
            "name": "array",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 647,
            "end": 656,
            "elements": [
              {
                "type": "Literal",
                "start": 648,
                "end": 649,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 651,
                "end": 652,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 654,
                "end": 655,
                "value": 3,
                "raw": "3"
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 658,
      "end": 694,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 662,
          "end": 693,
          "id": {
            "type": "Identifier",
            "start": 662,
            "end": 668,
            "name": "array2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 671,
            "end": 693,
            "elements": [
              {
                "type": "Literal",
                "start": 672,
                "end": 676,
                "value": true,
                "raw": "true"
              },
              {
                "type": "Literal",
                "start": 678,
                "end": 683,
                "value": false,
                "raw": "false"
              },
              {
                "type": "Literal",
                "start": 685,
                "end": 692,
                "value": "hello",
                "raw": "\"hello\""
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 695,
      "end": 710,
      "expression": {
        "type": "CallExpression",
        "start": 695,
        "end": 709,
        "callee": {
          "type": "Identifier",
          "start": 695,
          "end": 697,
          "name": "a2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 698,
            "end": 708,
            "elements": [
              {
                "type": "SpreadElement",
                "start": 699,
                "end": 707,
                "argument": {
                  "type": "Identifier",
                  "start": 702,
                  "end": 707,
                  "name": "array",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 711,
      "end": 724,
      "expression": {
        "type": "CallExpression",
        "start": 711,
        "end": 723,
        "callee": {
          "type": "Identifier",
          "start": 711,
          "end": 713,
          "name": "a1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 714,
            "end": 722,
            "argument": {
              "type": "Identifier",
              "start": 717,
              "end": 722,
              "name": "array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 726,
      "end": 764,
      "expression": {
        "type": "CallExpression",
        "start": 726,
        "end": 763,
        "callee": {
          "type": "Identifier",
          "start": 726,
          "end": 728,
          "name": "a9",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 729,
            "end": 762,
            "elements": [
              {
                "type": "Literal",
                "start": 730,
                "end": 731,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 733,
                "end": 734,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "ArrayExpression",
                "start": 736,
                "end": 748,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 737,
                    "end": 747,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 738,
                        "end": 746,
                        "value": "string",
                        "raw": "\"string\""
                      }
                    ]
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 750,
                "end": 755,
                "value": false,
                "raw": "false"
              },
              {
                "type": "Literal",
                "start": 757,
                "end": 761,
                "value": true,
                "raw": "true"
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 809,
      "end": 848,
      "expression": {
        "type": "CallExpression",
        "start": 809,
        "end": 847,
        "callee": {
          "type": "Identifier",
          "start": 809,
          "end": 812,
          "name": "a10",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 813,
            "end": 846,
            "elements": [
              {
                "type": "Literal",
                "start": 814,
                "end": 815,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 817,
                "end": 818,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "ArrayExpression",
                "start": 820,
                "end": 832,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 821,
                    "end": 831,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 822,
                        "end": 830,
                        "value": "string",
                        "raw": "\"string\""
                      }
                    ]
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 834,
                "end": 839,
                "value": false,
                "raw": "false"
              },
              {
                "type": "Literal",
                "start": 841,
                "end": 845,
                "value": true,
                "raw": "true"
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 878,
      "end": 906,
      "expression": {
        "type": "CallExpression",
        "start": 878,
        "end": 905,
        "callee": {
          "type": "Identifier",
          "start": 878,
          "end": 881,
          "name": "a10",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 882,
            "end": 904,
            "elements": [
              {
                "type": "Literal",
                "start": 883,
                "end": 884,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 886,
                "end": 887,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 889,
                "end": 890,
                "value": 3,
                "raw": "3"
              },
              {
                "type": "Literal",
                "start": 892,
                "end": 897,
                "value": false,
                "raw": "false"
              },
              {
                "type": "Literal",
                "start": 899,
                "end": 903,
                "value": true,
                "raw": "true"
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 947,
      "end": 959,
      "expression": {
        "type": "CallExpression",
        "start": 947,
        "end": 958,
        "callee": {
          "type": "Identifier",
          "start": 947,
          "end": 950,
          "name": "a10",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 951,
            "end": 957,
            "elements": [
              {
                "type": "Literal",
                "start": 952,
                "end": 953,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 955,
                "end": 956,
                "value": 2,
                "raw": "2"
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1016,
      "end": 1028,
      "expression": {
        "type": "CallExpression",
        "start": 1016,
        "end": 1027,
        "callee": {
          "type": "Identifier",
          "start": 1016,
          "end": 1019,
          "name": "a11",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 1020,
            "end": 1026,
            "elements": [
              {
                "type": "Literal",
                "start": 1021,
                "end": 1022,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 1024,
                "end": 1025,
                "value": 2,
                "raw": "2"
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1120,
      "end": 1150,
      "id": {
        "type": "Identifier",
        "start": 1129,
        "end": 1132,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 1136,
          "end": 1145,
          "argument": {
            "type": "Identifier",
            "start": 1139,
            "end": 1140,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1140,
            "end": 1145,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 1142,
              "end": 1145,
              "elementType": {
                "type": "TSTypeReference",
                "start": 1142,
                "end": 1143,
                "typeName": {
                  "type": "Identifier",
                  "start": 1142,
                  "end": 1143,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "value": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1147,
        "end": 1150,
        "body": []
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1132,
        "end": 1135,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1133,
            "end": 1134,
            "name": {
              "type": "Identifier",
              "start": 1133,
              "end": 1134,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1151,
      "end": 1185,
      "expression": {
        "type": "CallExpression",
        "start": 1151,
        "end": 1184,
        "callee": {
          "type": "Identifier",
          "start": 1151,
          "end": 1154,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1170,
            "end": 1177,
            "value": "hello",
            "raw": "\"hello\""
          },
          {
            "type": "Literal",
            "start": 1179,
            "end": 1180,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 1182,
            "end": 1183,
            "value": 2,
            "raw": "2"
          }
        ],
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1154,
          "end": 1169,
          "params": [
            {
              "type": "TSUnionType",
              "start": 1155,
              "end": 1168,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1155,
                  "end": 1161
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1162,
                  "end": 1168
                }
              ]
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1186,
      "end": 1208,
      "expression": {
        "type": "CallExpression",
        "start": 1186,
        "end": 1207,
        "callee": {
          "type": "Identifier",
          "start": 1186,
          "end": 1189,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1190,
            "end": 1197,
            "value": "hello",
            "raw": "\"hello\""
          },
          {
            "type": "Literal",
            "start": 1199,
            "end": 1206,
            "value": "world",
            "raw": "\"world\""
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSEnumDeclaration",
      "start": 1210,
      "end": 1225,
      "id": {
        "type": "Identifier",
        "start": 1215,
        "end": 1216,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 1219,
          "end": 1220,
          "id": {
            "type": "Identifier",
            "start": 1219,
            "end": 1220,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 1222,
          "end": 1223,
          "id": {
            "type": "Identifier",
            "start": 1222,
            "end": 1223,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 1217,
        "end": 1225,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 1219,
            "end": 1220,
            "id": {
              "type": "Identifier",
              "start": 1219,
              "end": 1220,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 1222,
            "end": 1223,
            "id": {
              "type": "Identifier",
              "start": 1222,
              "end": 1223,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 1226,
      "end": 1248,
      "id": {
        "type": "Identifier",
        "start": 1237,
        "end": 1239,
        "name": "E1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 1242,
          "end": 1243,
          "id": {
            "type": "Identifier",
            "start": 1242,
            "end": 1243,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 1245,
          "end": 1246,
          "id": {
            "type": "Identifier",
            "start": 1245,
            "end": 1246,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": true,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 1240,
        "end": 1248,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 1242,
            "end": 1243,
            "id": {
              "type": "Identifier",
              "start": 1242,
              "end": 1243,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 1245,
            "end": 1246,
            "id": {
              "type": "Identifier",
              "start": 1245,
              "end": 1246,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1249,
      "end": 1295,
      "id": {
        "type": "Identifier",
        "start": 1258,
        "end": 1262,
        "name": "foo1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 1281,
          "end": 1290,
          "argument": {
            "type": "Identifier",
            "start": 1284,
            "end": 1285,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1285,
            "end": 1290,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 1287,
              "end": 1290,
              "elementType": {
                "type": "TSTypeReference",
                "start": 1287,
                "end": 1288,
                "typeName": {
                  "type": "Identifier",
                  "start": 1287,
                  "end": 1288,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "value": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1292,
        "end": 1295,
        "body": []
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1262,
        "end": 1280,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1263,
            "end": 1279,
            "name": {
              "type": "Identifier",
              "start": 1263,
              "end": 1264,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1273,
              "end": 1279,
              "typeName": {
                "type": "Identifier",
                "start": 1273,
                "end": 1279,
                "name": "Number",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1296,
      "end": 1315,
      "expression": {
        "type": "CallExpression",
        "start": 1296,
        "end": 1314,
        "callee": {
          "type": "Identifier",
          "start": 1296,
          "end": 1300,
          "name": "foo1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1301,
            "end": 1302,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 1304,
            "end": 1305,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 1307,
            "end": 1308,
            "value": 3,
            "raw": "3"
          },
          {
            "type": "MemberExpression",
            "start": 1310,
            "end": 1313,
            "object": {
              "type": "Identifier",
              "start": 1310,
              "end": 1311,
              "name": "E",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1312,
              "end": 1313,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1316,
      "end": 1341,
      "expression": {
        "type": "CallExpression",
        "start": 1316,
        "end": 1340,
        "callee": {
          "type": "Identifier",
          "start": 1316,
          "end": 1320,
          "name": "foo1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1321,
            "end": 1322,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 1324,
            "end": 1325,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 1327,
            "end": 1328,
            "value": 3,
            "raw": "3"
          },
          {
            "type": "MemberExpression",
            "start": 1330,
            "end": 1334,
            "object": {
              "type": "Identifier",
              "start": 1330,
              "end": 1332,
              "name": "E1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1333,
              "end": 1334,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          {
            "type": "MemberExpression",
            "start": 1336,
            "end": 1339,
            "object": {
              "type": "Identifier",
              "start": 1336,
              "end": 1337,
              "name": "E",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1338,
              "end": 1339,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
