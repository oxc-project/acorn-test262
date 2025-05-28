__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 204,
  "end": 1325,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 204,
      "end": 236,
      "id": {
        "type": "Identifier",
        "start": 209,
        "end": 220,
        "decorators": [],
        "name": "arrayString",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 223,
        "end": 236,
        "typeName": {
          "type": "Identifier",
          "start": 223,
          "end": 228,
          "decorators": [],
          "name": "Array",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 228,
          "end": 236,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 229,
              "end": 235,
              "typeName": {
                "type": "Identifier",
                "start": 229,
                "end": 235,
                "decorators": [],
                "name": "String",
                "optional": false,
                "typeAnnotation": null
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
      "start": 237,
      "end": 279,
      "id": {
        "type": "Identifier",
        "start": 242,
        "end": 251,
        "decorators": [],
        "name": "someArray",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 254,
        "end": 278,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 254,
            "end": 267,
            "typeName": {
              "type": "Identifier",
              "start": 254,
              "end": 259,
              "decorators": [],
              "name": "Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 259,
              "end": 267,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 260,
                  "end": 266,
                  "typeName": {
                    "type": "Identifier",
                    "start": 260,
                    "end": 266,
                    "decorators": [],
                    "name": "String",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          {
            "type": "TSArrayType",
            "start": 270,
            "end": 278,
            "elementType": {
              "type": "TSNumberKeyword",
              "start": 270,
              "end": 276
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 280,
      "end": 325,
      "id": {
        "type": "Identifier",
        "start": 285,
        "end": 301,
        "decorators": [],
        "name": "stringOrNumArray",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 304,
        "end": 324,
        "typeName": {
          "type": "Identifier",
          "start": 304,
          "end": 309,
          "decorators": [],
          "name": "Array",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 309,
          "end": 324,
          "params": [
            {
              "type": "TSUnionType",
              "start": 310,
              "end": 323,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 310,
                  "end": 316,
                  "typeName": {
                    "type": "Identifier",
                    "start": 310,
                    "end": 316,
                    "decorators": [],
                    "name": "String",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 317,
                  "end": 323,
                  "typeName": {
                    "type": "Identifier",
                    "start": 317,
                    "end": 323,
                    "decorators": [],
                    "name": "Number",
                    "optional": false,
                    "typeAnnotation": null
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
      "start": 327,
      "end": 367,
      "id": {
        "type": "Identifier",
        "start": 336,
        "end": 338,
        "decorators": [],
        "name": "a1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "start": 339,
          "end": 362,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 342,
            "end": 343,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 343,
            "end": 362,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 345,
              "end": 362,
              "elementType": {
                "type": "TSUnionType",
                "start": 346,
                "end": 359,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 346,
                    "end": 352
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 353,
                    "end": 359
                  }
                ]
              }
            }
          },
          "value": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 364,
        "end": 367,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 368,
      "end": 389,
      "id": {
        "type": "Identifier",
        "start": 377,
        "end": 379,
        "decorators": [],
        "name": "a2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "start": 380,
          "end": 384,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 383,
            "end": 384,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 386,
        "end": 389,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 390,
      "end": 426,
      "id": {
        "type": "Identifier",
        "start": 399,
        "end": 401,
        "decorators": [],
        "name": "a3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "start": 402,
          "end": 421,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 405,
            "end": 406,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 406,
            "end": 421,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 408,
              "end": 421,
              "typeName": {
                "type": "Identifier",
                "start": 408,
                "end": 413,
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 413,
                "end": 421,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 414,
                    "end": 420,
                    "typeName": {
                      "type": "Identifier",
                      "start": 414,
                      "end": 420,
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null
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
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 423,
        "end": 426,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 427,
      "end": 461,
      "id": {
        "type": "Identifier",
        "start": 436,
        "end": 438,
        "decorators": [],
        "name": "a4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "start": 439,
          "end": 456,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 442,
            "end": 443,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 443,
            "end": 456,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 445,
              "end": 456,
              "typeName": {
                "type": "Identifier",
                "start": 445,
                "end": 456,
                "decorators": [],
                "name": "arrayString",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "value": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 458,
        "end": 461,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 462,
      "end": 501,
      "id": {
        "type": "Identifier",
        "start": 471,
        "end": 473,
        "decorators": [],
        "name": "a5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "start": 474,
          "end": 496,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 477,
            "end": 478,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 478,
            "end": 496,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 480,
              "end": 496,
              "typeName": {
                "type": "Identifier",
                "start": 480,
                "end": 496,
                "decorators": [],
                "name": "stringOrNumArray",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "value": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 498,
        "end": 501,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 502,
      "end": 532,
      "id": {
        "type": "Identifier",
        "start": 511,
        "end": 513,
        "decorators": [],
        "name": "a9",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "start": 514,
          "end": 527,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 515,
              "end": 516,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 518,
              "end": 519,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "ArrayPattern",
              "start": 521,
              "end": 526,
              "decorators": [],
              "elements": [
                {
                  "type": "ArrayPattern",
                  "start": 522,
                  "end": 525,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 523,
                      "end": 524,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 529,
        "end": 532,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 533,
      "end": 570,
      "id": {
        "type": "Identifier",
        "start": 542,
        "end": 545,
        "decorators": [],
        "name": "a10",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "start": 546,
          "end": 565,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 547,
              "end": 548,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 550,
              "end": 551,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "ArrayPattern",
              "start": 553,
              "end": 558,
              "decorators": [],
              "elements": [
                {
                  "type": "ArrayPattern",
                  "start": 554,
                  "end": 557,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 555,
                      "end": 556,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "RestElement",
              "start": 560,
              "end": 564,
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "start": 563,
                "end": 564,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null
            }
          ],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 567,
        "end": 570,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 571,
      "end": 614,
      "id": {
        "type": "Identifier",
        "start": 580,
        "end": 583,
        "decorators": [],
        "name": "a11",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "start": 584,
          "end": 609,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 585,
              "end": 586,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 588,
              "end": 589,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 591,
              "end": 592,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "RestElement",
              "start": 594,
              "end": 598,
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "start": 597,
                "end": 598,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 599,
            "end": 609,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 601,
              "end": 609,
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 601,
                "end": 607
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 611,
        "end": 614,
        "body": []
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 617,
      "end": 639,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 621,
          "end": 638,
          "id": {
            "type": "Identifier",
            "start": 621,
            "end": 626,
            "decorators": [],
            "name": "array",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 629,
            "end": 638,
            "elements": [
              {
                "type": "Literal",
                "start": 630,
                "end": 631,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 633,
                "end": 634,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 636,
                "end": 637,
                "value": 3,
                "raw": "3"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 640,
      "end": 676,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 644,
          "end": 675,
          "id": {
            "type": "Identifier",
            "start": 644,
            "end": 650,
            "decorators": [],
            "name": "array2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 653,
            "end": 675,
            "elements": [
              {
                "type": "Literal",
                "start": 654,
                "end": 658,
                "value": true,
                "raw": "true"
              },
              {
                "type": "Literal",
                "start": 660,
                "end": 665,
                "value": false,
                "raw": "false"
              },
              {
                "type": "Literal",
                "start": 667,
                "end": 674,
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
      "start": 677,
      "end": 692,
      "expression": {
        "type": "CallExpression",
        "start": 677,
        "end": 691,
        "callee": {
          "type": "Identifier",
          "start": 677,
          "end": 679,
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 680,
            "end": 690,
            "elements": [
              {
                "type": "SpreadElement",
                "start": 681,
                "end": 689,
                "argument": {
                  "type": "Identifier",
                  "start": 684,
                  "end": 689,
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 693,
      "end": 706,
      "expression": {
        "type": "CallExpression",
        "start": 693,
        "end": 705,
        "callee": {
          "type": "Identifier",
          "start": 693,
          "end": 695,
          "decorators": [],
          "name": "a1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 696,
            "end": 704,
            "argument": {
              "type": "Identifier",
              "start": 699,
              "end": 704,
              "decorators": [],
              "name": "array",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 708,
      "end": 746,
      "expression": {
        "type": "CallExpression",
        "start": 708,
        "end": 745,
        "callee": {
          "type": "Identifier",
          "start": 708,
          "end": 710,
          "decorators": [],
          "name": "a9",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 711,
            "end": 744,
            "elements": [
              {
                "type": "Literal",
                "start": 712,
                "end": 713,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 715,
                "end": 716,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "ArrayExpression",
                "start": 718,
                "end": 730,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 719,
                    "end": 729,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 720,
                        "end": 728,
                        "value": "string",
                        "raw": "\"string\""
                      }
                    ]
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 732,
                "end": 737,
                "value": false,
                "raw": "false"
              },
              {
                "type": "Literal",
                "start": 739,
                "end": 743,
                "value": true,
                "raw": "true"
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 791,
      "end": 830,
      "expression": {
        "type": "CallExpression",
        "start": 791,
        "end": 829,
        "callee": {
          "type": "Identifier",
          "start": 791,
          "end": 794,
          "decorators": [],
          "name": "a10",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 795,
            "end": 828,
            "elements": [
              {
                "type": "Literal",
                "start": 796,
                "end": 797,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 799,
                "end": 800,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "ArrayExpression",
                "start": 802,
                "end": 814,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 803,
                    "end": 813,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 804,
                        "end": 812,
                        "value": "string",
                        "raw": "\"string\""
                      }
                    ]
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 816,
                "end": 821,
                "value": false,
                "raw": "false"
              },
              {
                "type": "Literal",
                "start": 823,
                "end": 827,
                "value": true,
                "raw": "true"
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 860,
      "end": 888,
      "expression": {
        "type": "CallExpression",
        "start": 860,
        "end": 887,
        "callee": {
          "type": "Identifier",
          "start": 860,
          "end": 863,
          "decorators": [],
          "name": "a10",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 864,
            "end": 886,
            "elements": [
              {
                "type": "Literal",
                "start": 865,
                "end": 866,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 868,
                "end": 869,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 871,
                "end": 872,
                "value": 3,
                "raw": "3"
              },
              {
                "type": "Literal",
                "start": 874,
                "end": 879,
                "value": false,
                "raw": "false"
              },
              {
                "type": "Literal",
                "start": 881,
                "end": 885,
                "value": true,
                "raw": "true"
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 929,
      "end": 941,
      "expression": {
        "type": "CallExpression",
        "start": 929,
        "end": 940,
        "callee": {
          "type": "Identifier",
          "start": 929,
          "end": 932,
          "decorators": [],
          "name": "a10",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 933,
            "end": 939,
            "elements": [
              {
                "type": "Literal",
                "start": 934,
                "end": 935,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 937,
                "end": 938,
                "value": 2,
                "raw": "2"
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 998,
      "end": 1010,
      "expression": {
        "type": "CallExpression",
        "start": 998,
        "end": 1009,
        "callee": {
          "type": "Identifier",
          "start": 998,
          "end": 1001,
          "decorators": [],
          "name": "a11",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 1002,
            "end": 1008,
            "elements": [
              {
                "type": "Literal",
                "start": 1003,
                "end": 1004,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 1006,
                "end": 1007,
                "value": 2,
                "raw": "2"
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1102,
      "end": 1132,
      "id": {
        "type": "Identifier",
        "start": 1111,
        "end": 1114,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1114,
        "end": 1117,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1115,
            "end": 1116,
            "name": {
              "type": "Identifier",
              "start": 1115,
              "end": 1116,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "RestElement",
          "start": 1118,
          "end": 1127,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 1121,
            "end": 1122,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1122,
            "end": 1127,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 1124,
              "end": 1127,
              "elementType": {
                "type": "TSTypeReference",
                "start": 1124,
                "end": 1125,
                "typeName": {
                  "type": "Identifier",
                  "start": 1124,
                  "end": 1125,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "value": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1129,
        "end": 1132,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1133,
      "end": 1167,
      "expression": {
        "type": "CallExpression",
        "start": 1133,
        "end": 1166,
        "callee": {
          "type": "Identifier",
          "start": 1133,
          "end": 1136,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1136,
          "end": 1151,
          "params": [
            {
              "type": "TSUnionType",
              "start": 1137,
              "end": 1150,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1137,
                  "end": 1143
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1144,
                  "end": 1150
                }
              ]
            }
          ]
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1152,
            "end": 1159,
            "value": "hello",
            "raw": "\"hello\""
          },
          {
            "type": "Literal",
            "start": 1161,
            "end": 1162,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 1164,
            "end": 1165,
            "value": 2,
            "raw": "2"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1168,
      "end": 1190,
      "expression": {
        "type": "CallExpression",
        "start": 1168,
        "end": 1189,
        "callee": {
          "type": "Identifier",
          "start": 1168,
          "end": 1171,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 1172,
            "end": 1179,
            "value": "hello",
            "raw": "\"hello\""
          },
          {
            "type": "Literal",
            "start": 1181,
            "end": 1188,
            "value": "world",
            "raw": "\"world\""
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "TSEnumDeclaration",
      "start": 1192,
      "end": 1207,
      "id": {
        "type": "Identifier",
        "start": 1197,
        "end": 1198,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 1199,
        "end": 1207,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 1201,
            "end": 1202,
            "id": {
              "type": "Identifier",
              "start": 1201,
              "end": 1202,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 1204,
            "end": 1205,
            "id": {
              "type": "Identifier",
              "start": 1204,
              "end": 1205,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 1208,
      "end": 1230,
      "id": {
        "type": "Identifier",
        "start": 1219,
        "end": 1221,
        "decorators": [],
        "name": "E1",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 1222,
        "end": 1230,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 1224,
            "end": 1225,
            "id": {
              "type": "Identifier",
              "start": 1224,
              "end": 1225,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 1227,
            "end": 1228,
            "id": {
              "type": "Identifier",
              "start": 1227,
              "end": 1228,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": true,
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1231,
      "end": 1277,
      "id": {
        "type": "Identifier",
        "start": 1240,
        "end": 1244,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1244,
        "end": 1262,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1245,
            "end": 1261,
            "name": {
              "type": "Identifier",
              "start": 1245,
              "end": 1246,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1255,
              "end": 1261,
              "typeName": {
                "type": "Identifier",
                "start": 1255,
                "end": 1261,
                "decorators": [],
                "name": "Number",
                "optional": false,
                "typeAnnotation": null
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
      "params": [
        {
          "type": "RestElement",
          "start": 1263,
          "end": 1272,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 1266,
            "end": 1267,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1267,
            "end": 1272,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 1269,
              "end": 1272,
              "elementType": {
                "type": "TSTypeReference",
                "start": 1269,
                "end": 1270,
                "typeName": {
                  "type": "Identifier",
                  "start": 1269,
                  "end": 1270,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "value": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1274,
        "end": 1277,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1278,
      "end": 1297,
      "expression": {
        "type": "CallExpression",
        "start": 1278,
        "end": 1296,
        "callee": {
          "type": "Identifier",
          "start": 1278,
          "end": 1282,
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 1283,
            "end": 1284,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 1286,
            "end": 1287,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 1289,
            "end": 1290,
            "value": 3,
            "raw": "3"
          },
          {
            "type": "MemberExpression",
            "start": 1292,
            "end": 1295,
            "object": {
              "type": "Identifier",
              "start": 1292,
              "end": 1293,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 1294,
              "end": 1295,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1298,
      "end": 1323,
      "expression": {
        "type": "CallExpression",
        "start": 1298,
        "end": 1322,
        "callee": {
          "type": "Identifier",
          "start": 1298,
          "end": 1302,
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 1303,
            "end": 1304,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 1306,
            "end": 1307,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 1309,
            "end": 1310,
            "value": 3,
            "raw": "3"
          },
          {
            "type": "MemberExpression",
            "start": 1312,
            "end": 1316,
            "object": {
              "type": "Identifier",
              "start": 1312,
              "end": 1314,
              "decorators": [],
              "name": "E1",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 1315,
              "end": 1316,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          {
            "type": "MemberExpression",
            "start": 1318,
            "end": 1321,
            "object": {
              "type": "Identifier",
              "start": 1318,
              "end": 1319,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 1320,
              "end": 1321,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
