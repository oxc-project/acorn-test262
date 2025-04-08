__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 108,
  "end": 941,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 108,
      "end": 189,
      "id": {
        "type": "Identifier",
        "start": 117,
        "end": 118,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 119,
          "end": 128,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 120,
            "end": 128,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 122,
              "end": 128
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 130,
          "end": 139,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 131,
            "end": 139,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 133,
              "end": 139
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 141,
          "end": 150,
          "name": "z",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 142,
            "end": 150,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 144,
              "end": 150
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 152,
        "end": 189,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 158,
            "end": 187,
            "argument": {
              "type": "CallExpression",
              "start": 165,
              "end": 186,
              "callee": {
                "type": "MemberExpression",
                "start": 165,
                "end": 175,
                "object": {
                  "type": "Identifier",
                  "start": 165,
                  "end": 170,
                  "name": "Array",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 171,
                  "end": 175,
                  "name": "from",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 176,
                  "end": 185,
                  "name": "arguments",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 191,
      "end": 202,
      "expression": {
        "type": "CallExpression",
        "start": 191,
        "end": 201,
        "callee": {
          "type": "Identifier",
          "start": 191,
          "end": 192,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 193,
            "end": 194,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 196,
            "end": 197,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 199,
            "end": 200,
            "value": 3,
            "raw": "3"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 241,
      "end": 275,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 245,
          "end": 274,
          "id": {
            "type": "Identifier",
            "start": 245,
            "end": 246,
            "name": "m",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 249,
            "end": 274,
            "callee": {
              "type": "Identifier",
              "start": 253,
              "end": 256,
              "name": "Map",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 256,
              "end": 272,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 257,
                  "end": 263
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 265,
                  "end": 271
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 276,
      "end": 286,
      "expression": {
        "type": "CallExpression",
        "start": 276,
        "end": 285,
        "callee": {
          "type": "MemberExpression",
          "start": 276,
          "end": 283,
          "object": {
            "type": "Identifier",
            "start": 276,
            "end": 277,
            "name": "m",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 278,
            "end": 283,
            "name": "clear",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 309,
      "end": 318,
      "expression": {
        "type": "CallExpression",
        "start": 309,
        "end": 317,
        "callee": {
          "type": "MemberExpression",
          "start": 309,
          "end": 315,
          "object": {
            "type": "Identifier",
            "start": 309,
            "end": 310,
            "name": "m",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 311,
            "end": 315,
            "name": "keys",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 342,
      "end": 360,
      "id": {
        "type": "Identifier",
        "start": 351,
        "end": 354,
        "name": "Baz",
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
        "start": 357,
        "end": 360,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 361,
      "end": 370,
      "expression": {
        "type": "MemberExpression",
        "start": 361,
        "end": 369,
        "object": {
          "type": "Identifier",
          "start": 361,
          "end": 364,
          "name": "Baz",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 365,
          "end": 369,
          "name": "name",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 390,
      "end": 403,
      "expression": {
        "type": "CallExpression",
        "start": 390,
        "end": 402,
        "callee": {
          "type": "MemberExpression",
          "start": 390,
          "end": 399,
          "object": {
            "type": "Identifier",
            "start": 390,
            "end": 394,
            "name": "Math",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 395,
            "end": 399,
            "name": "sign",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 400,
            "end": 401,
            "value": 1,
            "raw": "1"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 425,
      "end": 514,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 429,
          "end": 513,
          "id": {
            "type": "Identifier",
            "start": 429,
            "end": 430,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 433,
            "end": 513,
            "properties": [
              {
                "type": "Property",
                "start": 439,
                "end": 443,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 439,
                  "end": 440,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 442,
                  "end": 443,
                  "value": 2,
                  "raw": "2"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 449,
                "end": 511,
                "method": true,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 450,
                  "end": 468,
                  "object": {
                    "type": "Identifier",
                    "start": 450,
                    "end": 456,
                    "name": "Symbol",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 457,
                    "end": 468,
                    "name": "hasInstance",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 469,
                  "end": 511,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 470,
                      "end": 480,
                      "name": "value",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 475,
                        "end": 480,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 477,
                          "end": 480
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 482,
                    "end": 511,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 492,
                        "end": 505,
                        "argument": {
                          "type": "Literal",
                          "start": 499,
                          "end": 504,
                          "value": false,
                          "raw": "false"
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
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
      "start": 515,
      "end": 552,
      "expression": {
        "type": "CallExpression",
        "start": 515,
        "end": 551,
        "callee": {
          "type": "MemberExpression",
          "start": 515,
          "end": 531,
          "object": {
            "type": "Identifier",
            "start": 515,
            "end": 516,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 517,
            "end": 531,
            "name": "hasOwnProperty",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 532,
            "end": 550,
            "object": {
              "type": "Identifier",
              "start": 532,
              "end": 538,
              "name": "Symbol",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 539,
              "end": 550,
              "name": "hasInstance",
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
      "type": "VariableDeclaration",
      "start": 573,
      "end": 583,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 577,
          "end": 583,
          "id": {
            "type": "Identifier",
            "start": 577,
            "end": 578,
            "name": "t",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 581,
            "end": 583,
            "properties": []
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 584,
      "end": 609,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 588,
          "end": 608,
          "id": {
            "type": "Identifier",
            "start": 588,
            "end": 589,
            "name": "p",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 592,
            "end": 608,
            "callee": {
              "type": "Identifier",
              "start": 596,
              "end": 601,
              "name": "Proxy",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 602,
                "end": 603,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "ObjectExpression",
                "start": 605,
                "end": 607,
                "properties": []
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 632,
      "end": 657,
      "expression": {
        "type": "CallExpression",
        "start": 632,
        "end": 656,
        "callee": {
          "type": "MemberExpression",
          "start": 632,
          "end": 652,
          "object": {
            "type": "Identifier",
            "start": 632,
            "end": 639,
            "name": "Reflect",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 640,
            "end": 652,
            "name": "isExtensible",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 653,
            "end": 655,
            "properties": []
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 679,
      "end": 706,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 683,
          "end": 705,
          "id": {
            "type": "Identifier",
            "start": 683,
            "end": 686,
            "name": "reg",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 689,
            "end": 705,
            "callee": {
              "type": "Identifier",
              "start": 693,
              "end": 699,
              "name": "RegExp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 700,
                "end": 704,
                "value": "/s",
                "raw": "\"/s\""
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 707,
      "end": 717,
      "expression": {
        "type": "MemberExpression",
        "start": 707,
        "end": 716,
        "object": {
          "type": "Identifier",
          "start": 707,
          "end": 710,
          "name": "reg",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 711,
          "end": 716,
          "name": "flags",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 739,
      "end": 763,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 743,
          "end": 762,
          "id": {
            "type": "Identifier",
            "start": 743,
            "end": 746,
            "name": "str",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 749,
            "end": 762,
            "value": "Hello world",
            "raw": "\"Hello world\""
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 764,
      "end": 789,
      "expression": {
        "type": "CallExpression",
        "start": 764,
        "end": 788,
        "callee": {
          "type": "MemberExpression",
          "start": 764,
          "end": 776,
          "object": {
            "type": "Identifier",
            "start": 764,
            "end": 767,
            "name": "str",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 768,
            "end": 776,
            "name": "includes",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 777,
            "end": 784,
            "value": "hello",
            "raw": "\"hello\""
          },
          {
            "type": "Literal",
            "start": 786,
            "end": 787,
            "value": 0,
            "raw": "0"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 811,
      "end": 828,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 815,
          "end": 827,
          "id": {
            "type": "Identifier",
            "start": 815,
            "end": 816,
            "name": "s",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 819,
            "end": 827,
            "callee": {
              "type": "Identifier",
              "start": 819,
              "end": 825,
              "name": "Symbol",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 860,
      "end": 941,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 866,
          "end": 941,
          "id": {
            "type": "Identifier",
            "start": 866,
            "end": 868,
            "name": "o1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 871,
            "end": 941,
            "properties": [
              {
                "type": "Property",
                "start": 877,
                "end": 939,
                "method": true,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 878,
                  "end": 896,
                  "object": {
                    "type": "Identifier",
                    "start": 878,
                    "end": 884,
                    "name": "Symbol",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 885,
                    "end": 896,
                    "name": "hasInstance",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 897,
                  "end": 939,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 898,
                      "end": 908,
                      "name": "value",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 903,
                        "end": 908,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 905,
                          "end": 908
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 910,
                    "end": 939,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 920,
                        "end": 933,
                        "argument": {
                          "type": "Literal",
                          "start": 927,
                          "end": 932,
                          "value": false,
                          "raw": "false"
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
