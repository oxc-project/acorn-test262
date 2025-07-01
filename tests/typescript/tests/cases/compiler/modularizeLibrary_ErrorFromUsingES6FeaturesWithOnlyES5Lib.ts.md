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
        "start": 102,
        "end": 103
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
              "start": 107,
              "end": 113
            },
            "start": 105,
            "end": 113
          },
          "start": 104,
          "end": 113
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
              "start": 118,
              "end": 124
            },
            "start": 116,
            "end": 124
          },
          "start": 115,
          "end": 124
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
              "start": 129,
              "end": 135
            },
            "start": 127,
            "end": 135
          },
          "start": 126,
          "end": 135
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
                  "start": 150,
                  "end": 155
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "from",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 156,
                  "end": 160
                },
                "optional": false,
                "computed": false,
                "start": 150,
                "end": 160
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 161,
                  "end": 170
                }
              ],
              "optional": false,
              "start": 150,
              "end": 171
            },
            "start": 143,
            "end": 172
          }
        ],
        "start": 137,
        "end": 174
      },
      "expression": false,
      "start": 93,
      "end": 174
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
          "start": 176,
          "end": 177
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 178,
            "end": 179
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 181,
            "end": 182
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 184,
            "end": 185
          }
        ],
        "optional": false,
        "start": 176,
        "end": 186
      },
      "directive": null,
      "start": 176,
      "end": 187
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
            "start": 230,
            "end": 231
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Map",
              "optional": false,
              "typeAnnotation": null,
              "start": 238,
              "end": 241
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 242,
                  "end": 248
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 250,
                  "end": 256
                }
              ],
              "start": 241,
              "end": 257
            },
            "arguments": [],
            "start": 234,
            "end": 259
          },
          "definite": false,
          "start": 230,
          "end": 259
        }
      ],
      "declare": false,
      "start": 226,
      "end": 260
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
            "start": 261,
            "end": 262
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "clear",
            "optional": false,
            "typeAnnotation": null,
            "start": 263,
            "end": 268
          },
          "optional": false,
          "computed": false,
          "start": 261,
          "end": 268
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 261,
        "end": 270
      },
      "directive": null,
      "start": 261,
      "end": 271
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
            "start": 294,
            "end": 295
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "keys",
            "optional": false,
            "typeAnnotation": null,
            "start": 296,
            "end": 300
          },
          "optional": false,
          "computed": false,
          "start": 294,
          "end": 300
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 294,
        "end": 302
      },
      "directive": null,
      "start": 294,
      "end": 303
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Baz",
        "optional": false,
        "typeAnnotation": null,
        "start": 336,
        "end": 339
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
        "start": 342,
        "end": 345
      },
      "expression": false,
      "start": 327,
      "end": 345
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
          "start": 346,
          "end": 349
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": null,
          "start": 350,
          "end": 354
        },
        "optional": false,
        "computed": false,
        "start": 346,
        "end": 354
      },
      "directive": null,
      "start": 346,
      "end": 355
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
            "start": 375,
            "end": 379
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "sign",
            "optional": false,
            "typeAnnotation": null,
            "start": 380,
            "end": 384
          },
          "optional": false,
          "computed": false,
          "start": 375,
          "end": 384
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 385,
            "end": 386
          }
        ],
        "optional": false,
        "start": 375,
        "end": 387
      },
      "directive": null,
      "start": 375,
      "end": 388
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
            "start": 414,
            "end": 415
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
                  "start": 424,
                  "end": 425
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 427,
                  "end": 428
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 424,
                "end": 428
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
                    "start": 435,
                    "end": 441
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "hasInstance",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 442,
                    "end": 453
                  },
                  "optional": false,
                  "computed": false,
                  "start": 435,
                  "end": 453
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
                          "start": 462,
                          "end": 465
                        },
                        "start": 460,
                        "end": 465
                      },
                      "start": 455,
                      "end": 465
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
                          "start": 484,
                          "end": 489
                        },
                        "start": 477,
                        "end": 490
                      }
                    ],
                    "start": 467,
                    "end": 496
                  },
                  "expression": false,
                  "start": 454,
                  "end": 496
                },
                "method": true,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 434,
                "end": 496
              }
            ],
            "start": 418,
            "end": 498
          },
          "definite": false,
          "start": 414,
          "end": 498
        }
      ],
      "declare": false,
      "start": 410,
      "end": 499
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
            "start": 500,
            "end": 501
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "hasOwnProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 502,
            "end": 516
          },
          "optional": false,
          "computed": false,
          "start": 500,
          "end": 516
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
              "start": 517,
              "end": 523
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "hasInstance",
              "optional": false,
              "typeAnnotation": null,
              "start": 524,
              "end": 535
            },
            "optional": false,
            "computed": false,
            "start": 517,
            "end": 535
          }
        ],
        "optional": false,
        "start": 500,
        "end": 536
      },
      "directive": null,
      "start": 500,
      "end": 537
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
            "start": 562,
            "end": 563
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 566,
            "end": 568
          },
          "definite": false,
          "start": 562,
          "end": 568
        }
      ],
      "declare": false,
      "start": 558,
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
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 573,
            "end": 574
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Proxy",
              "optional": false,
              "typeAnnotation": null,
              "start": 581,
              "end": 586
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 587,
                "end": 588
              },
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 590,
                "end": 592
              }
            ],
            "start": 577,
            "end": 593
          },
          "definite": false,
          "start": 573,
          "end": 593
        }
      ],
      "declare": false,
      "start": 569,
      "end": 594
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
            "start": 617,
            "end": 624
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isExtensible",
            "optional": false,
            "typeAnnotation": null,
            "start": 625,
            "end": 637
          },
          "optional": false,
          "computed": false,
          "start": 617,
          "end": 637
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 638,
            "end": 640
          }
        ],
        "optional": false,
        "start": 617,
        "end": 641
      },
      "directive": null,
      "start": 617,
      "end": 642
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
            "start": 668,
            "end": 671
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "RegExp",
              "optional": false,
              "typeAnnotation": null,
              "start": 678,
              "end": 684
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "/s",
                "raw": "\"/s\"",
                "start": 685,
                "end": 689
              }
            ],
            "start": 674,
            "end": 690
          },
          "definite": false,
          "start": 668,
          "end": 690
        }
      ],
      "declare": false,
      "start": 664,
      "end": 691
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
          "start": 692,
          "end": 695
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "flags",
          "optional": false,
          "typeAnnotation": null,
          "start": 696,
          "end": 701
        },
        "optional": false,
        "computed": false,
        "start": 692,
        "end": 701
      },
      "directive": null,
      "start": 692,
      "end": 702
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
            "start": 728,
            "end": 731
          },
          "init": {
            "type": "Literal",
            "value": "Hello world",
            "raw": "\"Hello world\"",
            "start": 734,
            "end": 747
          },
          "definite": false,
          "start": 728,
          "end": 747
        }
      ],
      "declare": false,
      "start": 724,
      "end": 748
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
            "start": 749,
            "end": 752
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "includes",
            "optional": false,
            "typeAnnotation": null,
            "start": 753,
            "end": 761
          },
          "optional": false,
          "computed": false,
          "start": 749,
          "end": 761
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 762,
            "end": 769
          },
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 771,
            "end": 772
          }
        ],
        "optional": false,
        "start": 749,
        "end": 773
      },
      "directive": null,
      "start": 749,
      "end": 774
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
            "start": 800,
            "end": 801
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 804,
              "end": 810
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 804,
            "end": 812
          },
          "definite": false,
          "start": 800,
          "end": 812
        }
      ],
      "declare": false,
      "start": 796,
      "end": 813
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
            "start": 851,
            "end": 853
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
                    "start": 863,
                    "end": 869
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "hasInstance",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 870,
                    "end": 881
                  },
                  "optional": false,
                  "computed": false,
                  "start": 863,
                  "end": 881
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
                          "start": 890,
                          "end": 893
                        },
                        "start": 888,
                        "end": 893
                      },
                      "start": 883,
                      "end": 893
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
                          "start": 912,
                          "end": 917
                        },
                        "start": 905,
                        "end": 918
                      }
                    ],
                    "start": 895,
                    "end": 924
                  },
                  "expression": false,
                  "start": 882,
                  "end": 924
                },
                "method": true,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 862,
                "end": 924
              }
            ],
            "start": 856,
            "end": 926
          },
          "definite": false,
          "start": 851,
          "end": 926
        }
      ],
      "declare": false,
      "start": 845,
      "end": 926
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 93,
  "end": 926
}
```
