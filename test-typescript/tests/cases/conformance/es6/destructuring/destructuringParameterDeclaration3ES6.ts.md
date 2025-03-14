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
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 227,
        "end": 238,
        "decorators": [],
        "name": "arrayString",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 241,
        "end": 254,
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
                "decorators": [],
                "name": "String",
                "optional": false
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 241,
          "end": 246,
          "decorators": [],
          "name": "Array",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 255,
      "end": 297,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 260,
        "end": 269,
        "decorators": [],
        "name": "someArray",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 272,
        "end": 296,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 272,
            "end": 285,
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
                    "decorators": [],
                    "name": "String",
                    "optional": false
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 272,
              "end": 277,
              "decorators": [],
              "name": "Array",
              "optional": false
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
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 298,
      "end": 343,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 303,
        "end": 319,
        "decorators": [],
        "name": "stringOrNumArray",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 322,
        "end": 342,
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
                    "decorators": [],
                    "name": "String",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 335,
                  "end": 341,
                  "typeName": {
                    "type": "Identifier",
                    "start": 335,
                    "end": 341,
                    "decorators": [],
                    "name": "Number",
                    "optional": false
                  }
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 322,
          "end": 327,
          "decorators": [],
          "name": "Array",
          "optional": false
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 345,
      "end": 385,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 382,
        "end": 385,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 354,
        "end": 356,
        "decorators": [],
        "name": "a1",
        "optional": false
      },
      "params": [
        {
          "type": "RestElement",
          "start": 357,
          "end": 380,
          "argument": {
            "type": "Identifier",
            "start": 360,
            "end": 361,
            "decorators": [],
            "name": "x",
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
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 386,
      "end": 407,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 404,
        "end": 407,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 395,
        "end": 397,
        "decorators": [],
        "name": "a2",
        "optional": false
      },
      "params": [
        {
          "type": "RestElement",
          "start": 398,
          "end": 402,
          "argument": {
            "type": "Identifier",
            "start": 401,
            "end": 402,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "decorators": [],
          "optional": false
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 408,
      "end": 444,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 441,
        "end": 444,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 417,
        "end": 419,
        "decorators": [],
        "name": "a3",
        "optional": false
      },
      "params": [
        {
          "type": "RestElement",
          "start": 420,
          "end": 439,
          "argument": {
            "type": "Identifier",
            "start": 423,
            "end": 424,
            "decorators": [],
            "name": "a",
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
                      "decorators": [],
                      "name": "String",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 426,
                "end": 431,
                "decorators": [],
                "name": "Array",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 445,
      "end": 479,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 476,
        "end": 479,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 454,
        "end": 456,
        "decorators": [],
        "name": "a4",
        "optional": false
      },
      "params": [
        {
          "type": "RestElement",
          "start": 457,
          "end": 474,
          "argument": {
            "type": "Identifier",
            "start": 460,
            "end": 461,
            "decorators": [],
            "name": "a",
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
                "decorators": [],
                "name": "arrayString",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 480,
      "end": 519,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 516,
        "end": 519,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 489,
        "end": 491,
        "decorators": [],
        "name": "a5",
        "optional": false
      },
      "params": [
        {
          "type": "RestElement",
          "start": 492,
          "end": 514,
          "argument": {
            "type": "Identifier",
            "start": 495,
            "end": 496,
            "decorators": [],
            "name": "a",
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
                "decorators": [],
                "name": "stringOrNumArray",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 520,
      "end": 550,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 547,
        "end": 550,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 529,
        "end": 531,
        "decorators": [],
        "name": "a9",
        "optional": false
      },
      "params": [
        {
          "type": "ArrayPattern",
          "start": 532,
          "end": 545,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 533,
              "end": 534,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 536,
              "end": 537,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            {
              "type": "ArrayPattern",
              "start": 539,
              "end": 544,
              "decorators": [],
              "elements": [
                {
                  "type": "ArrayPattern",
                  "start": 540,
                  "end": 543,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 541,
                      "end": 542,
                      "decorators": [],
                      "name": "c",
                      "optional": false
                    }
                  ],
                  "optional": false
                }
              ],
              "optional": false
            }
          ],
          "optional": false
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 551,
      "end": 588,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 585,
        "end": 588,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 560,
        "end": 563,
        "decorators": [],
        "name": "a10",
        "optional": false
      },
      "params": [
        {
          "type": "ArrayPattern",
          "start": 564,
          "end": 583,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 565,
              "end": 566,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 568,
              "end": 569,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            {
              "type": "ArrayPattern",
              "start": 571,
              "end": 576,
              "decorators": [],
              "elements": [
                {
                  "type": "ArrayPattern",
                  "start": 572,
                  "end": 575,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 573,
                      "end": 574,
                      "decorators": [],
                      "name": "c",
                      "optional": false
                    }
                  ],
                  "optional": false
                }
              ],
              "optional": false
            },
            {
              "type": "RestElement",
              "start": 578,
              "end": 582,
              "argument": {
                "type": "Identifier",
                "start": 581,
                "end": 582,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "decorators": [],
              "optional": false
            }
          ],
          "optional": false
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 589,
      "end": 632,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 629,
        "end": 632,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 598,
        "end": 601,
        "decorators": [],
        "name": "a11",
        "optional": false
      },
      "params": [
        {
          "type": "ArrayPattern",
          "start": 602,
          "end": 627,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 603,
              "end": 604,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 606,
              "end": 607,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 609,
              "end": 610,
              "decorators": [],
              "name": "c",
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
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "decorators": [],
              "optional": false
            }
          ],
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
      ]
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 639,
            "end": 644,
            "decorators": [],
            "name": "array",
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
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 651,
                "end": 652,
                "raw": "2",
                "value": 2
              },
              {
                "type": "Literal",
                "start": 654,
                "end": 655,
                "raw": "3",
                "value": 3
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 662,
            "end": 668,
            "decorators": [],
            "name": "array2",
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
                "raw": "true",
                "value": true
              },
              {
                "type": "Literal",
                "start": 678,
                "end": 683,
                "raw": "false",
                "value": false
              },
              {
                "type": "Literal",
                "start": 685,
                "end": 692,
                "raw": "\"hello\"",
                "value": "hello"
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 695,
      "end": 710,
      "expression": {
        "type": "CallExpression",
        "start": 695,
        "end": 709,
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
                  "decorators": [],
                  "name": "array",
                  "optional": false
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 695,
          "end": 697,
          "decorators": [],
          "name": "a2",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 711,
      "end": 724,
      "expression": {
        "type": "CallExpression",
        "start": 711,
        "end": 723,
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 714,
            "end": 722,
            "argument": {
              "type": "Identifier",
              "start": 717,
              "end": 722,
              "decorators": [],
              "name": "array",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 711,
          "end": 713,
          "decorators": [],
          "name": "a1",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 726,
      "end": 764,
      "expression": {
        "type": "CallExpression",
        "start": 726,
        "end": 763,
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
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 733,
                "end": 734,
                "raw": "2",
                "value": 2
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
                        "raw": "\"string\"",
                        "value": "string"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 750,
                "end": 755,
                "raw": "false",
                "value": false
              },
              {
                "type": "Literal",
                "start": 757,
                "end": 761,
                "raw": "true",
                "value": true
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 726,
          "end": 728,
          "decorators": [],
          "name": "a9",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 809,
      "end": 848,
      "expression": {
        "type": "CallExpression",
        "start": 809,
        "end": 847,
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
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 817,
                "end": 818,
                "raw": "2",
                "value": 2
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
                        "raw": "\"string\"",
                        "value": "string"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 834,
                "end": 839,
                "raw": "false",
                "value": false
              },
              {
                "type": "Literal",
                "start": 841,
                "end": 845,
                "raw": "true",
                "value": true
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 809,
          "end": 812,
          "decorators": [],
          "name": "a10",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 878,
      "end": 906,
      "expression": {
        "type": "CallExpression",
        "start": 878,
        "end": 905,
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
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 886,
                "end": 887,
                "raw": "2",
                "value": 2
              },
              {
                "type": "Literal",
                "start": 889,
                "end": 890,
                "raw": "3",
                "value": 3
              },
              {
                "type": "Literal",
                "start": 892,
                "end": 897,
                "raw": "false",
                "value": false
              },
              {
                "type": "Literal",
                "start": 899,
                "end": 903,
                "raw": "true",
                "value": true
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 878,
          "end": 881,
          "decorators": [],
          "name": "a10",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 947,
      "end": 959,
      "expression": {
        "type": "CallExpression",
        "start": 947,
        "end": 958,
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
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 955,
                "end": 956,
                "raw": "2",
                "value": 2
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 947,
          "end": 950,
          "decorators": [],
          "name": "a10",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1016,
      "end": 1028,
      "expression": {
        "type": "CallExpression",
        "start": 1016,
        "end": 1027,
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
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 1024,
                "end": 1025,
                "raw": "2",
                "value": 2
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1016,
          "end": 1019,
          "decorators": [],
          "name": "a11",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1120,
      "end": 1150,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1147,
        "end": 1150,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1129,
        "end": 1132,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "RestElement",
          "start": 1136,
          "end": 1145,
          "argument": {
            "type": "Identifier",
            "start": 1139,
            "end": 1140,
            "decorators": [],
            "name": "a",
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
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1132,
        "end": 1135,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1133,
            "end": 1134,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1133,
              "end": 1134,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1151,
      "end": 1185,
      "expression": {
        "type": "CallExpression",
        "start": 1151,
        "end": 1184,
        "arguments": [
          {
            "type": "Literal",
            "start": 1170,
            "end": 1177,
            "raw": "\"hello\"",
            "value": "hello"
          },
          {
            "type": "Literal",
            "start": 1179,
            "end": 1180,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 1182,
            "end": 1183,
            "raw": "2",
            "value": 2
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1151,
          "end": 1154,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
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
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1186,
      "end": 1208,
      "expression": {
        "type": "CallExpression",
        "start": 1186,
        "end": 1207,
        "arguments": [
          {
            "type": "Literal",
            "start": 1190,
            "end": 1197,
            "raw": "\"hello\"",
            "value": "hello"
          },
          {
            "type": "Literal",
            "start": 1199,
            "end": 1206,
            "raw": "\"world\"",
            "value": "world"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1186,
          "end": 1189,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 1210,
      "end": 1225,
      "body": {
        "type": "TSEnumBody",
        "start": 1217,
        "end": 1225,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 1219,
            "end": 1220,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1219,
              "end": 1220,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 1222,
            "end": 1223,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1222,
              "end": 1223,
              "decorators": [],
              "name": "b",
              "optional": false
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1215,
        "end": 1216,
        "decorators": [],
        "name": "E",
        "optional": false
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 1226,
      "end": 1248,
      "body": {
        "type": "TSEnumBody",
        "start": 1240,
        "end": 1248,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 1242,
            "end": 1243,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1242,
              "end": 1243,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 1245,
            "end": 1246,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1245,
              "end": 1246,
              "decorators": [],
              "name": "b",
              "optional": false
            }
          }
        ]
      },
      "const": true,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1237,
        "end": 1239,
        "decorators": [],
        "name": "E1",
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1249,
      "end": 1295,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1292,
        "end": 1295,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1258,
        "end": 1262,
        "decorators": [],
        "name": "foo1",
        "optional": false
      },
      "params": [
        {
          "type": "RestElement",
          "start": 1281,
          "end": 1290,
          "argument": {
            "type": "Identifier",
            "start": 1284,
            "end": 1285,
            "decorators": [],
            "name": "a",
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
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1262,
        "end": 1280,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1263,
            "end": 1279,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1273,
              "end": 1279,
              "typeName": {
                "type": "Identifier",
                "start": 1273,
                "end": 1279,
                "decorators": [],
                "name": "Number",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1263,
              "end": 1264,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1296,
      "end": 1315,
      "expression": {
        "type": "CallExpression",
        "start": 1296,
        "end": 1314,
        "arguments": [
          {
            "type": "Literal",
            "start": 1301,
            "end": 1302,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 1304,
            "end": 1305,
            "raw": "2",
            "value": 2
          },
          {
            "type": "Literal",
            "start": 1307,
            "end": 1308,
            "raw": "3",
            "value": 3
          },
          {
            "type": "MemberExpression",
            "start": 1310,
            "end": 1313,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1310,
              "end": 1311,
              "decorators": [],
              "name": "E",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1312,
              "end": 1313,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1296,
          "end": 1300,
          "decorators": [],
          "name": "foo1",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1316,
      "end": 1341,
      "expression": {
        "type": "CallExpression",
        "start": 1316,
        "end": 1340,
        "arguments": [
          {
            "type": "Literal",
            "start": 1321,
            "end": 1322,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 1324,
            "end": 1325,
            "raw": "2",
            "value": 2
          },
          {
            "type": "Literal",
            "start": 1327,
            "end": 1328,
            "raw": "3",
            "value": 3
          },
          {
            "type": "MemberExpression",
            "start": 1330,
            "end": 1334,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1330,
              "end": 1332,
              "decorators": [],
              "name": "E1",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1333,
              "end": 1334,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          },
          {
            "type": "MemberExpression",
            "start": 1336,
            "end": 1339,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1336,
              "end": 1337,
              "decorators": [],
              "name": "E",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1338,
              "end": 1339,
              "decorators": [],
              "name": "b",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1316,
          "end": 1320,
          "decorators": [],
          "name": "foo1",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
