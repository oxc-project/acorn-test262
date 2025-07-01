__ESTREE_TEST__:PASS:
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
