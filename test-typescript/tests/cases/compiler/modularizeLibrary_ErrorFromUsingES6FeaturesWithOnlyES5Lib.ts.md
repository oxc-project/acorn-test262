modularizeLibrary_ErrorFromUsingES6FeaturesWithOnlyES5Lib.ts
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
      "async": false,
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
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 176,
                  "end": 185,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 165,
                "end": 175,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 165,
                  "end": 170,
                  "decorators": [],
                  "name": "Array",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 171,
                  "end": 175,
                  "decorators": [],
                  "name": "from",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 117,
        "end": 118,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 119,
          "end": 128,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 120,
            "end": 128,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 122,
              "end": 128
            }
          }
        },
        {
          "type": "Identifier",
          "start": 130,
          "end": 139,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 131,
            "end": 139,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 133,
              "end": 139
            }
          }
        },
        {
          "type": "Identifier",
          "start": 141,
          "end": 150,
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 142,
            "end": 150,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 144,
              "end": 150
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 191,
      "end": 202,
      "expression": {
        "type": "CallExpression",
        "start": 191,
        "end": 201,
        "arguments": [
          {
            "type": "Literal",
            "start": 193,
            "end": 194,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 196,
            "end": 197,
            "raw": "2",
            "value": 2
          },
          {
            "type": "Literal",
            "start": 199,
            "end": 200,
            "raw": "3",
            "value": 3
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 191,
          "end": 192,
          "decorators": [],
          "name": "f",
          "optional": false
        },
        "optional": false
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 245,
            "end": 246,
            "decorators": [],
            "name": "m",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 249,
            "end": 274,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 253,
              "end": 256,
              "decorators": [],
              "name": "Map",
              "optional": false
            },
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
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 276,
      "end": 286,
      "expression": {
        "type": "CallExpression",
        "start": 276,
        "end": 285,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 276,
          "end": 283,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 276,
            "end": 277,
            "decorators": [],
            "name": "m",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 278,
            "end": 283,
            "decorators": [],
            "name": "clear",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 309,
      "end": 318,
      "expression": {
        "type": "CallExpression",
        "start": 309,
        "end": 317,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 309,
          "end": 315,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 309,
            "end": 310,
            "decorators": [],
            "name": "m",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 311,
            "end": 315,
            "decorators": [],
            "name": "keys",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 342,
      "end": 360,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 357,
        "end": 360,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 351,
        "end": 354,
        "decorators": [],
        "name": "Baz",
        "optional": false
      },
      "params": []
    },
    {
      "type": "ExpressionStatement",
      "start": 361,
      "end": 370,
      "expression": {
        "type": "MemberExpression",
        "start": 361,
        "end": 369,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 361,
          "end": 364,
          "decorators": [],
          "name": "Baz",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 365,
          "end": 369,
          "decorators": [],
          "name": "name",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 390,
      "end": 403,
      "expression": {
        "type": "CallExpression",
        "start": 390,
        "end": 402,
        "arguments": [
          {
            "type": "Literal",
            "start": 400,
            "end": 401,
            "raw": "1",
            "value": 1
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 390,
          "end": 399,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 390,
            "end": 394,
            "decorators": [],
            "name": "Math",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 395,
            "end": 399,
            "decorators": [],
            "name": "sign",
            "optional": false
          }
        },
        "optional": false
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 429,
            "end": 430,
            "decorators": [],
            "name": "o",
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 439,
                  "end": 440,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 442,
                  "end": 443,
                  "raw": "2",
                  "value": 2
                }
              },
              {
                "type": "Property",
                "start": 449,
                "end": 511,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 450,
                  "end": 468,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 450,
                    "end": 456,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 457,
                    "end": 468,
                    "decorators": [],
                    "name": "hasInstance",
                    "optional": false
                  }
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 469,
                  "end": 511,
                  "async": false,
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
                          "raw": "false",
                          "value": false
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 470,
                      "end": 480,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 475,
                        "end": 480,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 477,
                          "end": 480
                        }
                      }
                    }
                  ]
                }
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
      "start": 515,
      "end": 552,
      "expression": {
        "type": "CallExpression",
        "start": 515,
        "end": 551,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 532,
            "end": 550,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 532,
              "end": 538,
              "decorators": [],
              "name": "Symbol",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 539,
              "end": 550,
              "decorators": [],
              "name": "hasInstance",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 515,
          "end": 531,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 515,
            "end": 516,
            "decorators": [],
            "name": "o",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 517,
            "end": 531,
            "decorators": [],
            "name": "hasOwnProperty",
            "optional": false
          }
        },
        "optional": false
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 577,
            "end": 578,
            "decorators": [],
            "name": "t",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 581,
            "end": 583,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 588,
            "end": 589,
            "decorators": [],
            "name": "p",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 592,
            "end": 608,
            "arguments": [
              {
                "type": "Identifier",
                "start": 602,
                "end": 603,
                "decorators": [],
                "name": "t",
                "optional": false
              },
              {
                "type": "ObjectExpression",
                "start": 605,
                "end": 607,
                "properties": []
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 596,
              "end": 601,
              "decorators": [],
              "name": "Proxy",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 632,
      "end": 657,
      "expression": {
        "type": "CallExpression",
        "start": 632,
        "end": 656,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 653,
            "end": 655,
            "properties": []
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 632,
          "end": 652,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 632,
            "end": 639,
            "decorators": [],
            "name": "Reflect",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 640,
            "end": 652,
            "decorators": [],
            "name": "isExtensible",
            "optional": false
          }
        },
        "optional": false
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 683,
            "end": 686,
            "decorators": [],
            "name": "reg",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 689,
            "end": 705,
            "arguments": [
              {
                "type": "Literal",
                "start": 700,
                "end": 704,
                "raw": "\"/s\"",
                "value": "/s"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 693,
              "end": 699,
              "decorators": [],
              "name": "RegExp",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 707,
      "end": 717,
      "expression": {
        "type": "MemberExpression",
        "start": 707,
        "end": 716,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 707,
          "end": 710,
          "decorators": [],
          "name": "reg",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 711,
          "end": 716,
          "decorators": [],
          "name": "flags",
          "optional": false
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 743,
            "end": 746,
            "decorators": [],
            "name": "str",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 749,
            "end": 762,
            "raw": "\"Hello world\"",
            "value": "Hello world"
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 764,
      "end": 789,
      "expression": {
        "type": "CallExpression",
        "start": 764,
        "end": 788,
        "arguments": [
          {
            "type": "Literal",
            "start": 777,
            "end": 784,
            "raw": "\"hello\"",
            "value": "hello"
          },
          {
            "type": "Literal",
            "start": 786,
            "end": 787,
            "raw": "0",
            "value": 0
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 764,
          "end": 776,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 764,
            "end": 767,
            "decorators": [],
            "name": "str",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 768,
            "end": 776,
            "decorators": [],
            "name": "includes",
            "optional": false
          }
        },
        "optional": false
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 815,
            "end": 816,
            "decorators": [],
            "name": "s",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 819,
            "end": 827,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 819,
              "end": 825,
              "decorators": [],
              "name": "Symbol",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 866,
            "end": 868,
            "decorators": [],
            "name": "o1",
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
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 878,
                  "end": 896,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 878,
                    "end": 884,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 885,
                    "end": 896,
                    "decorators": [],
                    "name": "hasInstance",
                    "optional": false
                  }
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 897,
                  "end": 939,
                  "async": false,
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
                          "raw": "false",
                          "value": false
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 898,
                      "end": 908,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 903,
                        "end": 908,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 905,
                          "end": 908
                        }
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script"
}
```
