__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 32,
                  "end": 33
                },
                "typeArguments": null,
                "start": 25,
                "end": 33
              },
              "start": 23,
              "end": 33
            },
            "start": 22,
            "end": 33
          },
          "init": null,
          "definite": false,
          "start": 22,
          "end": 33
        }
      ],
      "declare": false,
      "start": 18,
      "end": 34
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 78,
                  "end": 79
                },
                "typeArguments": null,
                "start": 71,
                "end": 79
              },
              "start": 69,
              "end": 79
            },
            "start": 68,
            "end": 79
          },
          "init": null,
          "definite": false,
          "start": 68,
          "end": 79
        }
      ],
      "declare": false,
      "start": 64,
      "end": 80
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 95,
                  "end": 96
                },
                "typeArguments": null,
                "start": 88,
                "end": 96
              },
              "start": 86,
              "end": 96
            },
            "start": 85,
            "end": 96
          },
          "init": null,
          "definite": false,
          "start": 85,
          "end": 96
        }
      ],
      "declare": false,
      "start": 81,
      "end": 97
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
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 124,
                  "end": 129
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 137,
                        "end": 138
                      },
                      "typeArguments": null,
                      "start": 130,
                      "end": 138
                    }
                  ],
                  "start": 129,
                  "end": 139
                },
                "start": 124,
                "end": 139
              },
              "start": 122,
              "end": 139
            },
            "start": 121,
            "end": 139
          },
          "init": null,
          "definite": false,
          "start": 121,
          "end": 139
        }
      ],
      "declare": false,
      "start": 117,
      "end": 140
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 151,
        "end": 152
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 164,
              "end": 165
            },
            "start": 157,
            "end": 166
          }
        ],
        "start": 155,
        "end": 168
      },
      "expression": false,
      "start": 142,
      "end": 168
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 197,
        "end": 198
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null,
                "start": 210,
                "end": 211
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 210,
              "end": 213
            },
            "start": 203,
            "end": 214
          }
        ],
        "start": 201,
        "end": 216
      },
      "expression": false,
      "start": 188,
      "end": 216
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
            "name": "f1",
            "optional": false,
            "typeAnnotation": null,
            "start": 240,
            "end": 242
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 270,
                      "end": 272
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 270,
                    "end": 274
                  },
                  "start": 263,
                  "end": 275
                }
              ],
              "start": 257,
              "end": 277
            },
            "expression": false,
            "start": 245,
            "end": 277
          },
          "definite": false,
          "start": 240,
          "end": 277
        }
      ],
      "declare": false,
      "start": 236,
      "end": 278
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
            "name": "f2",
            "optional": false,
            "typeAnnotation": null,
            "start": 302,
            "end": 304
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f2",
                "optional": false,
                "typeAnnotation": null,
                "start": 313,
                "end": 315
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 313,
              "end": 317
            },
            "id": null,
            "generator": false,
            "start": 307,
            "end": 317
          },
          "definite": false,
          "start": 302,
          "end": 317
        }
      ],
      "declare": false,
      "start": 298,
      "end": 318
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "h",
        "optional": false,
        "typeAnnotation": null,
        "start": 347,
        "end": 348
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 364,
                "end": 367
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 364,
              "end": 369
            },
            "start": 357,
            "end": 370
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 384,
              "end": 387
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "h",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 407,
                        "end": 408
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 407,
                      "end": 410
                    },
                    "operator": "||",
                    "right": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 414,
                      "end": 421
                    },
                    "start": 407,
                    "end": 421
                  },
                  "start": 400,
                  "end": 422
                }
              ],
              "start": 390,
              "end": 428
            },
            "expression": false,
            "start": 375,
            "end": 428
          }
        ],
        "start": 351,
        "end": 430
      },
      "expression": false,
      "start": 338,
      "end": 430
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 442,
        "end": 443
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 450,
              "end": 451
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 453,
                "end": 459
              },
              "start": 451,
              "end": 459
            },
            "accessibility": null,
            "static": false,
            "start": 450,
            "end": 460
          }
        ],
        "start": 444,
        "end": 462
      },
      "declare": false,
      "start": 432,
      "end": 462
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 473,
        "end": 476
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 480,
                "end": 481
              },
              "typeArguments": null,
              "start": 480,
              "end": 481
            },
            "start": 478,
            "end": 481
          },
          "start": 477,
          "end": 481
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 484,
          "end": 490
        },
        "start": 482,
        "end": 490
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": "abc",
              "raw": "\"abc\"",
              "start": 500,
              "end": 505
            },
            "start": 493,
            "end": 506
          }
        ],
        "start": 491,
        "end": 508
      },
      "expression": false,
      "start": 464,
      "end": 508
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 516,
        "end": 517
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 524,
              "end": 525
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 528,
                "end": 531
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ThisExpression",
                  "start": 532,
                  "end": 536
                }
              ],
              "optional": false,
              "start": 528,
              "end": 537
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 524,
            "end": 538
          }
        ],
        "start": 518,
        "end": 540
      },
      "abstract": false,
      "declare": false,
      "start": 510,
      "end": 540
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 548,
        "end": 549
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 582,
              "end": 583
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 603,
                        "end": 607
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 608,
                        "end": 609
                      },
                      "optional": false,
                      "computed": false,
                      "start": 603,
                      "end": 609
                    },
                    "start": 596,
                    "end": 610
                  }
                ],
                "start": 586,
                "end": 616
              },
              "expression": false,
              "start": 583,
              "end": 616
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 578,
            "end": 616
          }
        ],
        "start": 550,
        "end": 618
      },
      "abstract": false,
      "declare": false,
      "start": 542,
      "end": 618
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 18,
  "end": 618
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 18,
    "end": 21,
    "range": [
      18,
      21
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 23,
    "end": 24,
    "range": [
      23,
      24
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 25,
    "end": 31,
    "range": [
      25,
      31
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 32,
    "end": 33,
    "range": [
      32,
      33
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 64,
    "end": 67,
    "range": [
      64,
      67
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 71,
    "end": 77,
    "range": [
      71,
      77
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 81,
    "end": 84,
    "range": [
      81,
      84
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 86,
    "end": 87,
    "range": [
      86,
      87
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 88,
    "end": 94,
    "range": [
      88,
      94
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 117,
    "end": 120,
    "range": [
      117,
      120
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 124,
    "end": 129,
    "range": [
      124,
      129
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 130,
    "end": 136,
    "range": [
      130,
      136
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 142,
    "end": 150,
    "range": [
      142,
      150
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 155,
    "end": 156,
    "range": [
      155,
      156
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 157,
    "end": 163,
    "range": [
      157,
      163
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 167,
    "end": 168,
    "range": [
      167,
      168
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 188,
    "end": 196,
    "range": [
      188,
      196
    ]
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 198,
    "end": 199,
    "range": [
      198,
      199
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 199,
    "end": 200,
    "range": [
      199,
      200
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 201,
    "end": 202,
    "range": [
      201,
      202
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 203,
    "end": 209,
    "range": [
      203,
      209
    ]
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 212,
    "end": 213,
    "range": [
      212,
      213
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 213,
    "end": 214,
    "range": [
      213,
      214
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 236,
    "end": 239,
    "range": [
      236,
      239
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 240,
    "end": 242,
    "range": [
      240,
      242
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 243,
    "end": 244,
    "range": [
      243,
      244
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 245,
    "end": 253,
    "range": [
      245,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 255,
    "end": 256,
    "range": [
      255,
      256
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 257,
    "end": 258,
    "range": [
      257,
      258
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 263,
    "end": 269,
    "range": [
      263,
      269
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 270,
    "end": 272,
    "range": [
      270,
      272
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 272,
    "end": 273,
    "range": [
      272,
      273
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 274,
    "end": 275,
    "range": [
      274,
      275
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 276,
    "end": 277,
    "range": [
      276,
      277
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 277,
    "end": 278,
    "range": [
      277,
      278
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 298,
    "end": 301,
    "range": [
      298,
      301
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 302,
    "end": 304,
    "range": [
      302,
      304
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 305,
    "end": 306,
    "range": [
      305,
      306
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 307,
    "end": 308,
    "range": [
      307,
      308
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 308,
    "end": 309,
    "range": [
      308,
      309
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 310,
    "end": 312,
    "range": [
      310,
      312
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 313,
    "end": 315,
    "range": [
      313,
      315
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 315,
    "end": 316,
    "range": [
      315,
      316
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 316,
    "end": 317,
    "range": [
      316,
      317
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 317,
    "end": 318,
    "range": [
      317,
      318
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 338,
    "end": 346,
    "range": [
      338,
      346
    ]
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 347,
    "end": 348,
    "range": [
      347,
      348
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 348,
    "end": 349,
    "range": [
      348,
      349
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 349,
    "end": 350,
    "range": [
      349,
      350
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 351,
    "end": 352,
    "range": [
      351,
      352
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 357,
    "end": 363,
    "range": [
      357,
      363
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 364,
    "end": 367,
    "range": [
      364,
      367
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 367,
    "end": 368,
    "range": [
      367,
      368
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 368,
    "end": 369,
    "range": [
      368,
      369
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 369,
    "end": 370,
    "range": [
      369,
      370
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 375,
    "end": 383,
    "range": [
      375,
      383
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 384,
    "end": 387,
    "range": [
      384,
      387
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 387,
    "end": 388,
    "range": [
      387,
      388
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 388,
    "end": 389,
    "range": [
      388,
      389
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 390,
    "end": 391,
    "range": [
      390,
      391
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 400,
    "end": 406,
    "range": [
      400,
      406
    ]
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 407,
    "end": 408,
    "range": [
      407,
      408
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 408,
    "end": 409,
    "range": [
      408,
      409
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 409,
    "end": 410,
    "range": [
      409,
      410
    ]
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 411,
    "end": 413,
    "range": [
      411,
      413
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 414,
    "end": 421,
    "range": [
      414,
      421
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "start": 427,
    "end": 428,
    "range": [
      427,
      428
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 429,
    "end": 430,
    "range": [
      429,
      430
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 432,
    "end": 441,
    "range": [
      432,
      441
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 444,
    "end": 445,
    "range": [
      444,
      445
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 450,
    "end": 451,
    "range": [
      450,
      451
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 451,
    "end": 452,
    "range": [
      451,
      452
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 453,
    "end": 459,
    "range": [
      453,
      459
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 459,
    "end": 460,
    "range": [
      459,
      460
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 461,
    "end": 462,
    "range": [
      461,
      462
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 464,
    "end": 472,
    "range": [
      464,
      472
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 473,
    "end": 476,
    "range": [
      473,
      476
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 476,
    "end": 477,
    "range": [
      476,
      477
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 477,
    "end": 478,
    "range": [
      477,
      478
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 478,
    "end": 479,
    "range": [
      478,
      479
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 480,
    "end": 481,
    "range": [
      480,
      481
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 481,
    "end": 482,
    "range": [
      481,
      482
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 482,
    "end": 483,
    "range": [
      482,
      483
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 484,
    "end": 490,
    "range": [
      484,
      490
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 491,
    "end": 492,
    "range": [
      491,
      492
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 493,
    "end": 499,
    "range": [
      493,
      499
    ]
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 500,
    "end": 505,
    "range": [
      500,
      505
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 505,
    "end": 506,
    "range": [
      505,
      506
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 507,
    "end": 508,
    "range": [
      507,
      508
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 510,
    "end": 515,
    "range": [
      510,
      515
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 516,
    "end": 517,
    "range": [
      516,
      517
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 518,
    "end": 519,
    "range": [
      518,
      519
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 524,
    "end": 525,
    "range": [
      524,
      525
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 526,
    "end": 527,
    "range": [
      526,
      527
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 528,
    "end": 531,
    "range": [
      528,
      531
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 531,
    "end": 532,
    "range": [
      531,
      532
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 532,
    "end": 536,
    "range": [
      532,
      536
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 536,
    "end": 537,
    "range": [
      536,
      537
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 537,
    "end": 538,
    "range": [
      537,
      538
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 539,
    "end": 540,
    "range": [
      539,
      540
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 542,
    "end": 547,
    "range": [
      542,
      547
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 548,
    "end": 549,
    "range": [
      548,
      549
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 550,
    "end": 551,
    "range": [
      550,
      551
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 578,
    "end": 581,
    "range": [
      578,
      581
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 582,
    "end": 583,
    "range": [
      582,
      583
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 583,
    "end": 584,
    "range": [
      583,
      584
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 584,
    "end": 585,
    "range": [
      584,
      585
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 586,
    "end": 587,
    "range": [
      586,
      587
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 596,
    "end": 602,
    "range": [
      596,
      602
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 603,
    "end": 607,
    "range": [
      603,
      607
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 607,
    "end": 608,
    "range": [
      607,
      608
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 608,
    "end": 609,
    "range": [
      608,
      609
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 609,
    "end": 610,
    "range": [
      609,
      610
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 615,
    "end": 616,
    "range": [
      615,
      616
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 617,
    "end": 618,
    "range": [
      617,
      618
    ]
  }
]
```
