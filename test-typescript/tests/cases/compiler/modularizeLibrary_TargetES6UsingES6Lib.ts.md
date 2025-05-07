__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 19,
  "end": 852,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 19,
      "end": 100,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 63,
        "end": 100,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 69,
            "end": 98,
            "argument": {
              "type": "CallExpression",
              "start": 76,
              "end": 97,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 87,
                  "end": 96,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 76,
                "end": 86,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 81,
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 82,
                  "end": 86,
                  "decorators": [],
                  "name": "from",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 29,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 30,
          "end": 39,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 31,
            "end": 39,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 33,
              "end": 39
            }
          }
        },
        {
          "type": "Identifier",
          "start": 41,
          "end": 50,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 42,
            "end": 50,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 44,
              "end": 50
            }
          }
        },
        {
          "type": "Identifier",
          "start": 52,
          "end": 61,
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 53,
            "end": 61,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 55,
              "end": 61
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 102,
      "end": 113,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 102,
        "end": 112,
        "arguments": [
          {
            "type": "Literal",
            "start": 104,
            "end": 105,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          },
          {
            "type": "Literal",
            "start": 107,
            "end": 108,
            "raw": "2",
            "value": 2,
            "regex": null,
            "bigint": null
          },
          {
            "type": "Literal",
            "start": 110,
            "end": 111,
            "raw": "3",
            "value": 3,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 102,
          "end": 103,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 152,
      "end": 186,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 156,
          "end": 185,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 156,
            "end": 157,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 160,
            "end": 185,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 164,
              "end": 167,
              "decorators": [],
              "name": "Map",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 167,
              "end": 183,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 168,
                  "end": 174
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 176,
                  "end": 182
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
      "start": 187,
      "end": 197,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 187,
        "end": 196,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 187,
          "end": 194,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 187,
            "end": 188,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 189,
            "end": 194,
            "decorators": [],
            "name": "clear",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 220,
      "end": 229,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 220,
        "end": 228,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 220,
          "end": 226,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 220,
            "end": 221,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 222,
            "end": 226,
            "decorators": [],
            "name": "keys",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 253,
      "end": 271,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 268,
        "end": 271,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 262,
        "end": 265,
        "decorators": [],
        "name": "Baz",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 272,
      "end": 281,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 272,
        "end": 280,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 272,
          "end": 275,
          "decorators": [],
          "name": "Baz",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 276,
          "end": 280,
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 301,
      "end": 314,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 301,
        "end": 313,
        "arguments": [
          {
            "type": "Literal",
            "start": 311,
            "end": 312,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 301,
          "end": 310,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 301,
            "end": 305,
            "decorators": [],
            "name": "Math",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 306,
            "end": 310,
            "decorators": [],
            "name": "sign",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 336,
      "end": 425,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 340,
          "end": 424,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 340,
            "end": 341,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 344,
            "end": 424,
            "properties": [
              {
                "type": "Property",
                "start": 350,
                "end": 354,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 350,
                  "end": 351,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 353,
                  "end": 354,
                  "raw": "2",
                  "value": 2,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 360,
                "end": 422,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 361,
                  "end": 379,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 361,
                    "end": 367,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 368,
                    "end": 379,
                    "decorators": [],
                    "name": "hasInstance",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 380,
                  "end": 422,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 393,
                    "end": 422,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 403,
                        "end": 416,
                        "argument": {
                          "type": "Literal",
                          "start": 410,
                          "end": 415,
                          "raw": "false",
                          "value": false,
                          "regex": null,
                          "bigint": null
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
                      "start": 381,
                      "end": 391,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 386,
                        "end": 391,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 388,
                          "end": 391
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
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
      "start": 426,
      "end": 463,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 426,
        "end": 462,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 443,
            "end": 461,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 443,
              "end": 449,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 450,
              "end": 461,
              "decorators": [],
              "name": "hasInstance",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 426,
          "end": 442,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 426,
            "end": 427,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 428,
            "end": 442,
            "decorators": [],
            "name": "hasOwnProperty",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 484,
      "end": 494,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 488,
          "end": 494,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 488,
            "end": 489,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 492,
            "end": 494,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 495,
      "end": 520,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 499,
          "end": 519,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 499,
            "end": 500,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 503,
            "end": 519,
            "arguments": [
              {
                "type": "Identifier",
                "start": 513,
                "end": 514,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ObjectExpression",
                "start": 516,
                "end": 518,
                "properties": []
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 507,
              "end": 512,
              "decorators": [],
              "name": "Proxy",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 543,
      "end": 568,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 543,
        "end": 567,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 564,
            "end": 566,
            "properties": []
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 543,
          "end": 563,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 543,
            "end": 550,
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 551,
            "end": 563,
            "decorators": [],
            "name": "isExtensible",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 590,
      "end": 617,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 594,
          "end": 616,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 594,
            "end": 597,
            "decorators": [],
            "name": "reg",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 600,
            "end": 616,
            "arguments": [
              {
                "type": "Literal",
                "start": 611,
                "end": 615,
                "raw": "\"/s\"",
                "value": "/s",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 604,
              "end": 610,
              "decorators": [],
              "name": "RegExp",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 618,
      "end": 628,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 618,
        "end": 627,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 618,
          "end": 621,
          "decorators": [],
          "name": "reg",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 622,
          "end": 627,
          "decorators": [],
          "name": "flags",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 650,
      "end": 674,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 654,
          "end": 673,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 654,
            "end": 657,
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 660,
            "end": 673,
            "raw": "\"Hello world\"",
            "value": "Hello world",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 675,
      "end": 700,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 675,
        "end": 699,
        "arguments": [
          {
            "type": "Literal",
            "start": 688,
            "end": 695,
            "raw": "\"hello\"",
            "value": "hello",
            "regex": null,
            "bigint": null
          },
          {
            "type": "Literal",
            "start": 697,
            "end": 698,
            "raw": "0",
            "value": 0,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 675,
          "end": 687,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 675,
            "end": 678,
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 679,
            "end": 687,
            "decorators": [],
            "name": "includes",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 722,
      "end": 739,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 726,
          "end": 738,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 726,
            "end": 727,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 730,
            "end": 738,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 730,
              "end": 736,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 771,
      "end": 852,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 777,
          "end": 852,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 777,
            "end": 779,
            "decorators": [],
            "name": "o1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 782,
            "end": 852,
            "properties": [
              {
                "type": "Property",
                "start": 788,
                "end": 850,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 789,
                  "end": 807,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 789,
                    "end": 795,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 796,
                    "end": 807,
                    "decorators": [],
                    "name": "hasInstance",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 808,
                  "end": 850,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 821,
                    "end": 850,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 831,
                        "end": 844,
                        "argument": {
                          "type": "Literal",
                          "start": 838,
                          "end": 843,
                          "raw": "false",
                          "value": false,
                          "regex": null,
                          "bigint": null
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
                      "start": 809,
                      "end": 819,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 814,
                        "end": 819,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 816,
                          "end": 819
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
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
  "sourceType": "script",
  "hashbang": null
}
```
