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
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 28,
        "end": 29
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 33,
              "end": 39
            },
            "start": 31,
            "end": 39
          },
          "start": 30,
          "end": 39
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 44,
              "end": 50
            },
            "start": 42,
            "end": 50
          },
          "start": 41,
          "end": 50
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 55,
              "end": 61
            },
            "start": 53,
            "end": 61
          },
          "start": 52,
          "end": 61
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 76,
                  "end": 81
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "from",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 82,
                  "end": 86
                },
                "optional": false,
                "computed": false,
                "start": 76,
                "end": 86
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 87,
                  "end": 96
                }
              ],
              "optional": false,
              "start": 76,
              "end": 97
            },
            "start": 69,
            "end": 98
          }
        ],
        "start": 63,
        "end": 100
      },
      "expression": false,
      "start": 19,
      "end": 100
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 102,
          "end": 103
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 104,
            "end": 105
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 107,
            "end": 108
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 110,
            "end": 111
          }
        ],
        "optional": false,
        "start": 102,
        "end": 112
      },
      "directive": null,
      "start": 102,
      "end": 113
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 156,
            "end": 157
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Map",
              "optional": false,
              "typeAnnotation": null,
              "start": 164,
              "end": 167
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
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
              ],
              "start": 167,
              "end": 183
            },
            "arguments": [],
            "start": 160,
            "end": 185
          },
          "definite": false,
          "start": 156,
          "end": 185
        }
      ],
      "declare": false,
      "start": 152,
      "end": 186
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 187,
            "end": 188
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "clear",
            "optional": false,
            "typeAnnotation": null,
            "start": 189,
            "end": 194
          },
          "optional": false,
          "computed": false,
          "start": 187,
          "end": 194
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 187,
        "end": 196
      },
      "directive": null,
      "start": 187,
      "end": 197
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 220,
            "end": 221
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "keys",
            "optional": false,
            "typeAnnotation": null,
            "start": 222,
            "end": 226
          },
          "optional": false,
          "computed": false,
          "start": 220,
          "end": 226
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 220,
        "end": 228
      },
      "directive": null,
      "start": 220,
      "end": 229
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Baz",
        "optional": false,
        "typeAnnotation": null,
        "start": 262,
        "end": 265
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 268,
        "end": 271
      },
      "expression": false,
      "start": 253,
      "end": 271
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "Baz",
          "optional": false,
          "typeAnnotation": null,
          "start": 272,
          "end": 275
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": null,
          "start": 276,
          "end": 280
        },
        "optional": false,
        "computed": false,
        "start": 272,
        "end": 280
      },
      "directive": null,
      "start": 272,
      "end": 281
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Math",
            "optional": false,
            "typeAnnotation": null,
            "start": 301,
            "end": 305
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "sign",
            "optional": false,
            "typeAnnotation": null,
            "start": 306,
            "end": 310
          },
          "optional": false,
          "computed": false,
          "start": 301,
          "end": 310
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 311,
            "end": 312
          }
        ],
        "optional": false,
        "start": 301,
        "end": 313
      },
      "directive": null,
      "start": 301,
      "end": 314
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 340,
            "end": 341
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 350,
                  "end": 351
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 353,
                  "end": 354
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 350,
                "end": 354
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 361,
                    "end": 367
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "hasInstance",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 368,
                    "end": 379
                  },
                  "optional": false,
                  "computed": false,
                  "start": 361,
                  "end": 379
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 388,
                          "end": 391
                        },
                        "start": 386,
                        "end": 391
                      },
                      "start": 381,
                      "end": 391
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": false,
                          "raw": "false",
                          "start": 410,
                          "end": 415
                        },
                        "start": 403,
                        "end": 416
                      }
                    ],
                    "start": 393,
                    "end": 422
                  },
                  "expression": false,
                  "start": 380,
                  "end": 422
                },
                "method": true,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 360,
                "end": 422
              }
            ],
            "start": 344,
            "end": 424
          },
          "definite": false,
          "start": 340,
          "end": 424
        }
      ],
      "declare": false,
      "start": 336,
      "end": 425
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 426,
            "end": 427
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "hasOwnProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 428,
            "end": 442
          },
          "optional": false,
          "computed": false,
          "start": 426,
          "end": 442
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 443,
              "end": 449
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "hasInstance",
              "optional": false,
              "typeAnnotation": null,
              "start": 450,
              "end": 461
            },
            "optional": false,
            "computed": false,
            "start": 443,
            "end": 461
          }
        ],
        "optional": false,
        "start": 426,
        "end": 462
      },
      "directive": null,
      "start": 426,
      "end": 463
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null,
            "start": 488,
            "end": 489
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 492,
            "end": 494
          },
          "definite": false,
          "start": 488,
          "end": 494
        }
      ],
      "declare": false,
      "start": 484,
      "end": 494
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 499,
            "end": 500
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Proxy",
              "optional": false,
              "typeAnnotation": null,
              "start": 507,
              "end": 512
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 513,
                "end": 514
              },
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 516,
                "end": 518
              }
            ],
            "start": 503,
            "end": 519
          },
          "definite": false,
          "start": 499,
          "end": 519
        }
      ],
      "declare": false,
      "start": 495,
      "end": 520
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null,
            "start": 543,
            "end": 550
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isExtensible",
            "optional": false,
            "typeAnnotation": null,
            "start": 551,
            "end": 563
          },
          "optional": false,
          "computed": false,
          "start": 543,
          "end": 563
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 564,
            "end": 566
          }
        ],
        "optional": false,
        "start": 543,
        "end": 567
      },
      "directive": null,
      "start": 543,
      "end": 568
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "reg",
            "optional": false,
            "typeAnnotation": null,
            "start": 594,
            "end": 597
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "RegExp",
              "optional": false,
              "typeAnnotation": null,
              "start": 604,
              "end": 610
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "/s",
                "raw": "\"/s\"",
                "start": 611,
                "end": 615
              }
            ],
            "start": 600,
            "end": 616
          },
          "definite": false,
          "start": 594,
          "end": 616
        }
      ],
      "declare": false,
      "start": 590,
      "end": 617
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "reg",
          "optional": false,
          "typeAnnotation": null,
          "start": 618,
          "end": 621
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "flags",
          "optional": false,
          "typeAnnotation": null,
          "start": 622,
          "end": 627
        },
        "optional": false,
        "computed": false,
        "start": 618,
        "end": 627
      },
      "directive": null,
      "start": 618,
      "end": 628
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": null,
            "start": 654,
            "end": 657
          },
          "init": {
            "type": "Literal",
            "value": "Hello world",
            "raw": "\"Hello world\"",
            "start": 660,
            "end": 673
          },
          "definite": false,
          "start": 654,
          "end": 673
        }
      ],
      "declare": false,
      "start": 650,
      "end": 674
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": null,
            "start": 675,
            "end": 678
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "includes",
            "optional": false,
            "typeAnnotation": null,
            "start": 679,
            "end": 687
          },
          "optional": false,
          "computed": false,
          "start": 675,
          "end": 687
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 688,
            "end": 695
          },
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 697,
            "end": 698
          }
        ],
        "optional": false,
        "start": 675,
        "end": 699
      },
      "directive": null,
      "start": 675,
      "end": 700
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 726,
            "end": 727
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 730,
              "end": 736
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 730,
            "end": 738
          },
          "definite": false,
          "start": 726,
          "end": 738
        }
      ],
      "declare": false,
      "start": 722,
      "end": 739
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
            "name": "o1",
            "optional": false,
            "typeAnnotation": null,
            "start": 777,
            "end": 779
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 789,
                    "end": 795
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "hasInstance",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 796,
                    "end": 807
                  },
                  "optional": false,
                  "computed": false,
                  "start": 789,
                  "end": 807
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 816,
                          "end": 819
                        },
                        "start": 814,
                        "end": 819
                      },
                      "start": 809,
                      "end": 819
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": false,
                          "raw": "false",
                          "start": 838,
                          "end": 843
                        },
                        "start": 831,
                        "end": 844
                      }
                    ],
                    "start": 821,
                    "end": 850
                  },
                  "expression": false,
                  "start": 808,
                  "end": 850
                },
                "method": true,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 788,
                "end": 850
              }
            ],
            "start": 782,
            "end": 852
          },
          "definite": false,
          "start": 777,
          "end": 852
        }
      ],
      "declare": false,
      "start": 771,
      "end": 852
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 19,
  "end": 852
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 19,
    "end": 27,
    "range": [
      19,
      27
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 28,
    "end": 29,
    "range": [
      28,
      29
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 33,
    "end": 39,
    "range": [
      33,
      39
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 44,
    "end": 50,
    "range": [
      44,
      50
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 50,
    "end": 51,
    "range": [
      50,
      51
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 55,
    "end": 61,
    "range": [
      55,
      61
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 61,
    "end": 62,
    "range": [
      61,
      62
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 63,
    "end": 64,
    "range": [
      63,
      64
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 69,
    "end": 75,
    "range": [
      69,
      75
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 76,
    "end": 81,
    "range": [
      76,
      81
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 82,
    "end": 86,
    "range": [
      82,
      86
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 86,
    "end": 87,
    "range": [
      86,
      87
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 87,
    "end": 96,
    "range": [
      87,
      96
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 152,
    "end": 155,
    "range": [
      152,
      155
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 160,
    "end": 163,
    "range": [
      160,
      163
    ]
  },
  {
    "type": "Identifier",
    "value": "Map",
    "start": 164,
    "end": 167,
    "range": [
      164,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 167,
    "end": 168,
    "range": [
      167,
      168
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 168,
    "end": 174,
    "range": [
      168,
      174
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 176,
    "end": 182,
    "range": [
      176,
      182
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 183,
    "end": 184,
    "range": [
      183,
      184
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 185,
    "end": 186,
    "range": [
      185,
      186
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 187,
    "end": 188,
    "range": [
      187,
      188
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 188,
    "end": 189,
    "range": [
      188,
      189
    ]
  },
  {
    "type": "Identifier",
    "value": "clear",
    "start": 189,
    "end": 194,
    "range": [
      189,
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
    "type": "Punctuator",
    "value": ")",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 221,
    "end": 222,
    "range": [
      221,
      222
    ]
  },
  {
    "type": "Identifier",
    "value": "keys",
    "start": 222,
    "end": 226,
    "range": [
      222,
      226
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 226,
    "end": 227,
    "range": [
      226,
      227
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 228,
    "end": 229,
    "range": [
      228,
      229
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 253,
    "end": 261,
    "range": [
      253,
      261
    ]
  },
  {
    "type": "Identifier",
    "value": "Baz",
    "start": 262,
    "end": 265,
    "range": [
      262,
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
    "type": "Punctuator",
    "value": ")",
    "start": 266,
    "end": 267,
    "range": [
      266,
      267
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Identifier",
    "value": "Baz",
    "start": 272,
    "end": 275,
    "range": [
      272,
      275
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 275,
    "end": 276,
    "range": [
      275,
      276
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 276,
    "end": 280,
    "range": [
      276,
      280
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 280,
    "end": 281,
    "range": [
      280,
      281
    ]
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 301,
    "end": 305,
    "range": [
      301,
      305
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 305,
    "end": 306,
    "range": [
      305,
      306
    ]
  },
  {
    "type": "Identifier",
    "value": "sign",
    "start": 306,
    "end": 310,
    "range": [
      306,
      310
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 310,
    "end": 311,
    "range": [
      310,
      311
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 311,
    "end": 312,
    "range": [
      311,
      312
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 312,
    "end": 313,
    "range": [
      312,
      313
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 313,
    "end": 314,
    "range": [
      313,
      314
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 336,
    "end": 339,
    "range": [
      336,
      339
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 340,
    "end": 341,
    "range": [
      340,
      341
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 342,
    "end": 343,
    "range": [
      342,
      343
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 344,
    "end": 345,
    "range": [
      344,
      345
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 350,
    "end": 351,
    "range": [
      350,
      351
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 351,
    "end": 352,
    "range": [
      351,
      352
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 353,
    "end": 354,
    "range": [
      353,
      354
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 354,
    "end": 355,
    "range": [
      354,
      355
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 360,
    "end": 361,
    "range": [
      360,
      361
    ]
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 361,
    "end": 367,
    "range": [
      361,
      367
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 367,
    "end": 368,
    "range": [
      367,
      368
    ]
  },
  {
    "type": "Identifier",
    "value": "hasInstance",
    "start": 368,
    "end": 379,
    "range": [
      368,
      379
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 379,
    "end": 380,
    "range": [
      379,
      380
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 380,
    "end": 381,
    "range": [
      380,
      381
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 381,
    "end": 386,
    "range": [
      381,
      386
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 386,
    "end": 387,
    "range": [
      386,
      387
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 388,
    "end": 391,
    "range": [
      388,
      391
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 391,
    "end": 392,
    "range": [
      391,
      392
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 393,
    "end": 394,
    "range": [
      393,
      394
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 403,
    "end": 409,
    "range": [
      403,
      409
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 410,
    "end": 415,
    "range": [
      410,
      415
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 415,
    "end": 416,
    "range": [
      415,
      416
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 421,
    "end": 422,
    "range": [
      421,
      422
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 423,
    "end": 424,
    "range": [
      423,
      424
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 424,
    "end": 425,
    "range": [
      424,
      425
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 426,
    "end": 427,
    "range": [
      426,
      427
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 427,
    "end": 428,
    "range": [
      427,
      428
    ]
  },
  {
    "type": "Identifier",
    "value": "hasOwnProperty",
    "start": 428,
    "end": 442,
    "range": [
      428,
      442
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 443,
    "end": 449,
    "range": [
      443,
      449
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 449,
    "end": 450,
    "range": [
      449,
      450
    ]
  },
  {
    "type": "Identifier",
    "value": "hasInstance",
    "start": 450,
    "end": 461,
    "range": [
      450,
      461
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 461,
    "end": 462,
    "range": [
      461,
      462
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 462,
    "end": 463,
    "range": [
      462,
      463
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 484,
    "end": 487,
    "range": [
      484,
      487
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 488,
    "end": 489,
    "range": [
      488,
      489
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 490,
    "end": 491,
    "range": [
      490,
      491
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 492,
    "end": 493,
    "range": [
      492,
      493
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 493,
    "end": 494,
    "range": [
      493,
      494
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 495,
    "end": 498,
    "range": [
      495,
      498
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 499,
    "end": 500,
    "range": [
      499,
      500
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 501,
    "end": 502,
    "range": [
      501,
      502
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 503,
    "end": 506,
    "range": [
      503,
      506
    ]
  },
  {
    "type": "Identifier",
    "value": "Proxy",
    "start": 507,
    "end": 512,
    "range": [
      507,
      512
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 512,
    "end": 513,
    "range": [
      512,
      513
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 513,
    "end": 514,
    "range": [
      513,
      514
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 514,
    "end": 515,
    "range": [
      514,
      515
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 516,
    "end": 517,
    "range": [
      516,
      517
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 517,
    "end": 518,
    "range": [
      517,
      518
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 518,
    "end": 519,
    "range": [
      518,
      519
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 519,
    "end": 520,
    "range": [
      519,
      520
    ]
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 543,
    "end": 550,
    "range": [
      543,
      550
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 550,
    "end": 551,
    "range": [
      550,
      551
    ]
  },
  {
    "type": "Identifier",
    "value": "isExtensible",
    "start": 551,
    "end": 563,
    "range": [
      551,
      563
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 563,
    "end": 564,
    "range": [
      563,
      564
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 564,
    "end": 565,
    "range": [
      564,
      565
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 565,
    "end": 566,
    "range": [
      565,
      566
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 566,
    "end": 567,
    "range": [
      566,
      567
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 567,
    "end": 568,
    "range": [
      567,
      568
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 590,
    "end": 593,
    "range": [
      590,
      593
    ]
  },
  {
    "type": "Identifier",
    "value": "reg",
    "start": 594,
    "end": 597,
    "range": [
      594,
      597
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 598,
    "end": 599,
    "range": [
      598,
      599
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 600,
    "end": 603,
    "range": [
      600,
      603
    ]
  },
  {
    "type": "Identifier",
    "value": "RegExp",
    "start": 604,
    "end": 610,
    "range": [
      604,
      610
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 610,
    "end": 611,
    "range": [
      610,
      611
    ]
  },
  {
    "type": "String",
    "value": "\"/s\"",
    "start": 611,
    "end": 615,
    "range": [
      611,
      615
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 615,
    "end": 616,
    "range": [
      615,
      616
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 616,
    "end": 617,
    "range": [
      616,
      617
    ]
  },
  {
    "type": "Identifier",
    "value": "reg",
    "start": 618,
    "end": 621,
    "range": [
      618,
      621
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 621,
    "end": 622,
    "range": [
      621,
      622
    ]
  },
  {
    "type": "Identifier",
    "value": "flags",
    "start": 622,
    "end": 627,
    "range": [
      622,
      627
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 627,
    "end": 628,
    "range": [
      627,
      628
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 650,
    "end": 653,
    "range": [
      650,
      653
    ]
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 654,
    "end": 657,
    "range": [
      654,
      657
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 658,
    "end": 659,
    "range": [
      658,
      659
    ]
  },
  {
    "type": "String",
    "value": "\"Hello world\"",
    "start": 660,
    "end": 673,
    "range": [
      660,
      673
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 673,
    "end": 674,
    "range": [
      673,
      674
    ]
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 675,
    "end": 678,
    "range": [
      675,
      678
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 678,
    "end": 679,
    "range": [
      678,
      679
    ]
  },
  {
    "type": "Identifier",
    "value": "includes",
    "start": 679,
    "end": 687,
    "range": [
      679,
      687
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 687,
    "end": 688,
    "range": [
      687,
      688
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 688,
    "end": 695,
    "range": [
      688,
      695
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 695,
    "end": 696,
    "range": [
      695,
      696
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 697,
    "end": 698,
    "range": [
      697,
      698
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 698,
    "end": 699,
    "range": [
      698,
      699
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 699,
    "end": 700,
    "range": [
      699,
      700
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 722,
    "end": 725,
    "range": [
      722,
      725
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 726,
    "end": 727,
    "range": [
      726,
      727
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 728,
    "end": 729,
    "range": [
      728,
      729
    ]
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 730,
    "end": 736,
    "range": [
      730,
      736
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 736,
    "end": 737,
    "range": [
      736,
      737
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 737,
    "end": 738,
    "range": [
      737,
      738
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 738,
    "end": 739,
    "range": [
      738,
      739
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 771,
    "end": 776,
    "range": [
      771,
      776
    ]
  },
  {
    "type": "Identifier",
    "value": "o1",
    "start": 777,
    "end": 779,
    "range": [
      777,
      779
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 780,
    "end": 781,
    "range": [
      780,
      781
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 782,
    "end": 783,
    "range": [
      782,
      783
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 788,
    "end": 789,
    "range": [
      788,
      789
    ]
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 789,
    "end": 795,
    "range": [
      789,
      795
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 795,
    "end": 796,
    "range": [
      795,
      796
    ]
  },
  {
    "type": "Identifier",
    "value": "hasInstance",
    "start": 796,
    "end": 807,
    "range": [
      796,
      807
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 807,
    "end": 808,
    "range": [
      807,
      808
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 808,
    "end": 809,
    "range": [
      808,
      809
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 809,
    "end": 814,
    "range": [
      809,
      814
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 814,
    "end": 815,
    "range": [
      814,
      815
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 816,
    "end": 819,
    "range": [
      816,
      819
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 819,
    "end": 820,
    "range": [
      819,
      820
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 821,
    "end": 822,
    "range": [
      821,
      822
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 831,
    "end": 837,
    "range": [
      831,
      837
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 838,
    "end": 843,
    "range": [
      838,
      843
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 843,
    "end": 844,
    "range": [
      843,
      844
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 849,
    "end": 850,
    "range": [
      849,
      850
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 851,
    "end": 852,
    "range": [
      851,
      852
    ]
  }
]
```
