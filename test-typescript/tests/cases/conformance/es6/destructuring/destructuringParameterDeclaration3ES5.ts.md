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
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 209,
        "end": 220,
        "decorators": [],
        "name": "arrayString",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 223,
        "end": 236,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 228,
          "end": 236,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 229,
              "end": 235,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 229,
                "end": 235,
                "decorators": [],
                "name": "String",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 223,
          "end": 228,
          "decorators": [],
          "name": "Array",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 237,
      "end": 279,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 242,
        "end": 251,
        "decorators": [],
        "name": "someArray",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 254,
        "end": 278,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 254,
            "end": 267,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 259,
              "end": 267,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 260,
                  "end": 266,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 260,
                    "end": 266,
                    "decorators": [],
                    "name": "String",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 254,
              "end": 259,
              "decorators": [],
              "name": "Array",
              "optional": false,
              "typeAnnotation": null
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
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 280,
      "end": 325,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 285,
        "end": 301,
        "decorators": [],
        "name": "stringOrNumArray",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 304,
        "end": 324,
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
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 310,
                    "end": 316,
                    "decorators": [],
                    "name": "String",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 317,
                  "end": 323,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 317,
                    "end": 323,
                    "decorators": [],
                    "name": "Number",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 304,
          "end": 309,
          "decorators": [],
          "name": "Array",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 327,
      "end": 367,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 364,
        "end": 367,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 336,
        "end": 338,
        "decorators": [],
        "name": "a1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 339,
          "end": 362,
          "argument": {
            "type": "Identifier",
            "start": 342,
            "end": 343,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
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
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 368,
      "end": 389,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 386,
        "end": 389,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 377,
        "end": 379,
        "decorators": [],
        "name": "a2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 380,
          "end": 384,
          "argument": {
            "type": "Identifier",
            "start": 383,
            "end": 384,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null,
          "value": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 390,
      "end": 426,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 423,
        "end": 426,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 399,
        "end": 401,
        "decorators": [],
        "name": "a3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 402,
          "end": 421,
          "argument": {
            "type": "Identifier",
            "start": 405,
            "end": 406,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 406,
            "end": 421,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 408,
              "end": 421,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 413,
                "end": 421,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 414,
                    "end": 420,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 414,
                      "end": 420,
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 408,
                "end": 413,
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "value": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 427,
      "end": 461,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 458,
        "end": 461,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 436,
        "end": 438,
        "decorators": [],
        "name": "a4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 439,
          "end": 456,
          "argument": {
            "type": "Identifier",
            "start": 442,
            "end": 443,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 443,
            "end": 456,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 445,
              "end": 456,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 445,
                "end": 456,
                "decorators": [],
                "name": "arrayString",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "value": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 462,
      "end": 501,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 498,
        "end": 501,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 471,
        "end": 473,
        "decorators": [],
        "name": "a5",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 474,
          "end": 496,
          "argument": {
            "type": "Identifier",
            "start": 477,
            "end": 478,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 478,
            "end": 496,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 480,
              "end": 496,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 480,
                "end": 496,
                "decorators": [],
                "name": "stringOrNumArray",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "value": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 502,
      "end": 532,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 529,
        "end": 532,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 511,
        "end": 513,
        "decorators": [],
        "name": "a9",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 533,
      "end": 570,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 567,
        "end": 570,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 542,
        "end": 545,
        "decorators": [],
        "name": "a10",
        "optional": false,
        "typeAnnotation": null
      },
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
              "argument": {
                "type": "Identifier",
                "start": 563,
                "end": 564,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "decorators": [],
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
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 571,
      "end": 614,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 611,
        "end": 614,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 580,
        "end": 583,
        "decorators": [],
        "name": "a11",
        "optional": false,
        "typeAnnotation": null
      },
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
              "argument": {
                "type": "Identifier",
                "start": 597,
                "end": 598,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "decorators": [],
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
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 617,
      "end": 639,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 621,
          "end": 638,
          "definite": false,
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
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 633,
                "end": 634,
                "raw": "2",
                "value": 2,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 636,
                "end": 637,
                "raw": "3",
                "value": 3,
                "regex": null,
                "bigint": null
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
      "start": 640,
      "end": 676,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 644,
          "end": 675,
          "definite": false,
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
                "raw": "true",
                "value": true,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 660,
                "end": 665,
                "raw": "false",
                "value": false,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 667,
                "end": 674,
                "raw": "\"hello\"",
                "value": "hello",
                "regex": null,
                "bigint": null
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
      "start": 677,
      "end": 692,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 677,
        "end": 691,
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
        "callee": {
          "type": "Identifier",
          "start": 677,
          "end": 679,
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 693,
      "end": 706,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 693,
        "end": 705,
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
        "callee": {
          "type": "Identifier",
          "start": 693,
          "end": 695,
          "decorators": [],
          "name": "a1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 708,
      "end": 746,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 708,
        "end": 745,
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
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 715,
                "end": 716,
                "raw": "2",
                "value": 2,
                "regex": null,
                "bigint": null
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
                        "raw": "\"string\"",
                        "value": "string",
                        "regex": null,
                        "bigint": null
                      }
                    ]
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 732,
                "end": 737,
                "raw": "false",
                "value": false,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 739,
                "end": 743,
                "raw": "true",
                "value": true,
                "regex": null,
                "bigint": null
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 708,
          "end": 710,
          "decorators": [],
          "name": "a9",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 791,
      "end": 830,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 791,
        "end": 829,
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
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 799,
                "end": 800,
                "raw": "2",
                "value": 2,
                "regex": null,
                "bigint": null
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
                        "raw": "\"string\"",
                        "value": "string",
                        "regex": null,
                        "bigint": null
                      }
                    ]
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 816,
                "end": 821,
                "raw": "false",
                "value": false,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 823,
                "end": 827,
                "raw": "true",
                "value": true,
                "regex": null,
                "bigint": null
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 791,
          "end": 794,
          "decorators": [],
          "name": "a10",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 860,
      "end": 888,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 860,
        "end": 887,
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
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 868,
                "end": 869,
                "raw": "2",
                "value": 2,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 871,
                "end": 872,
                "raw": "3",
                "value": 3,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 874,
                "end": 879,
                "raw": "false",
                "value": false,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 881,
                "end": 885,
                "raw": "true",
                "value": true,
                "regex": null,
                "bigint": null
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 860,
          "end": 863,
          "decorators": [],
          "name": "a10",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 929,
      "end": 941,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 929,
        "end": 940,
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
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 937,
                "end": 938,
                "raw": "2",
                "value": 2,
                "regex": null,
                "bigint": null
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 929,
          "end": 932,
          "decorators": [],
          "name": "a10",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 998,
      "end": 1010,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 998,
        "end": 1009,
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
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 1006,
                "end": 1007,
                "raw": "2",
                "value": 2,
                "regex": null,
                "bigint": null
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 998,
          "end": 1001,
          "decorators": [],
          "name": "a11",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1102,
      "end": 1132,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1129,
        "end": 1132,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1111,
        "end": 1114,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 1118,
          "end": 1127,
          "argument": {
            "type": "Identifier",
            "start": 1121,
            "end": 1122,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1124,
                  "end": 1125,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "value": null
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1114,
        "end": 1117,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1115,
            "end": 1116,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1115,
              "end": 1116,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1133,
      "end": 1167,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1133,
        "end": 1166,
        "arguments": [
          {
            "type": "Literal",
            "start": 1152,
            "end": 1159,
            "raw": "\"hello\"",
            "value": "hello",
            "regex": null,
            "bigint": null
          },
          {
            "type": "Literal",
            "start": 1161,
            "end": 1162,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          },
          {
            "type": "Literal",
            "start": 1164,
            "end": 1165,
            "raw": "2",
            "value": 2,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1133,
          "end": 1136,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
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
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1168,
      "end": 1190,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1168,
        "end": 1189,
        "arguments": [
          {
            "type": "Literal",
            "start": 1172,
            "end": 1179,
            "raw": "\"hello\"",
            "value": "hello",
            "regex": null,
            "bigint": null
          },
          {
            "type": "Literal",
            "start": 1181,
            "end": 1188,
            "raw": "\"world\"",
            "value": "world",
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1168,
          "end": 1171,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 1192,
      "end": 1207,
      "body": {
        "type": "TSEnumBody",
        "start": 1199,
        "end": 1207,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 1201,
            "end": 1202,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1201,
              "end": 1202,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 1204,
            "end": 1205,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1204,
              "end": 1205,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1197,
        "end": 1198,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 1208,
      "end": 1230,
      "body": {
        "type": "TSEnumBody",
        "start": 1222,
        "end": 1230,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 1224,
            "end": 1225,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1224,
              "end": 1225,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 1227,
            "end": 1228,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1227,
              "end": 1228,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          }
        ]
      },
      "const": true,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1219,
        "end": 1221,
        "decorators": [],
        "name": "E1",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1231,
      "end": 1277,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1274,
        "end": 1277,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1240,
        "end": 1244,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 1263,
          "end": 1272,
          "argument": {
            "type": "Identifier",
            "start": 1266,
            "end": 1267,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1269,
                  "end": 1270,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "value": null
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1244,
        "end": 1262,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1245,
            "end": 1261,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1255,
              "end": 1261,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1255,
                "end": 1261,
                "decorators": [],
                "name": "Number",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1245,
              "end": 1246,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1278,
      "end": 1297,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1278,
        "end": 1296,
        "arguments": [
          {
            "type": "Literal",
            "start": 1283,
            "end": 1284,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          },
          {
            "type": "Literal",
            "start": 1286,
            "end": 1287,
            "raw": "2",
            "value": 2,
            "regex": null,
            "bigint": null
          },
          {
            "type": "Literal",
            "start": 1289,
            "end": 1290,
            "raw": "3",
            "value": 3,
            "regex": null,
            "bigint": null
          },
          {
            "type": "MemberExpression",
            "start": 1292,
            "end": 1295,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1292,
              "end": 1293,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1294,
              "end": 1295,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1278,
          "end": 1282,
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1298,
      "end": 1323,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1298,
        "end": 1322,
        "arguments": [
          {
            "type": "Literal",
            "start": 1303,
            "end": 1304,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          },
          {
            "type": "Literal",
            "start": 1306,
            "end": 1307,
            "raw": "2",
            "value": 2,
            "regex": null,
            "bigint": null
          },
          {
            "type": "Literal",
            "start": 1309,
            "end": 1310,
            "raw": "3",
            "value": 3,
            "regex": null,
            "bigint": null
          },
          {
            "type": "MemberExpression",
            "start": 1312,
            "end": 1316,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1312,
              "end": 1314,
              "decorators": [],
              "name": "E1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1315,
              "end": 1316,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "MemberExpression",
            "start": 1318,
            "end": 1321,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1318,
              "end": 1319,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1320,
              "end": 1321,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1298,
          "end": 1302,
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
