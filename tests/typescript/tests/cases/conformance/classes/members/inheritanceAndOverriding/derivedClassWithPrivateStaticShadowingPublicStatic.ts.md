__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 10
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 31,
              "end": 32
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 34,
                "end": 40
              },
              "start": 32,
              "end": 40
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 17,
            "end": 41
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 62
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 66,
                  "end": 72
                },
                "start": 64,
                "end": 72
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 90,
                      "end": 92
                    },
                    "start": 83,
                    "end": 93
                  }
                ],
                "start": 73,
                "end": 99
              },
              "expression": false,
              "start": 62,
              "end": 99
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 46,
            "end": 99
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 123,
              "end": 124
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
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 136,
                      "end": 137
                    },
                    "start": 129,
                    "end": 138
                  }
                ],
                "start": 127,
                "end": 140
              },
              "expression": false,
              "start": 124,
              "end": 140
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 105,
            "end": 140
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 163,
              "end": 164
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 165,
                  "end": 166
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 168,
                "end": 171
              },
              "expression": false,
              "start": 164,
              "end": 171
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 145,
            "end": 171
          }
        ],
        "start": 11,
        "end": 173
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 173
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 214,
        "end": 221
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 230,
        "end": 234
      },
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 256,
              "end": 257
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 259,
                "end": 265
              },
              "start": 257,
              "end": 265
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 241,
            "end": 266
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null,
              "start": 287,
              "end": 289
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 293,
                  "end": 299
                },
                "start": 291,
                "end": 299
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 317,
                      "end": 319
                    },
                    "start": 310,
                    "end": 320
                  }
                ],
                "start": 300,
                "end": 326
              },
              "expression": false,
              "start": 289,
              "end": 326
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 272,
            "end": 326
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 351,
              "end": 352
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
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 364,
                      "end": 365
                    },
                    "start": 357,
                    "end": 366
                  }
                ],
                "start": 355,
                "end": 368
              },
              "expression": false,
              "start": 352,
              "end": 368
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 332,
            "end": 368
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 392,
              "end": 393
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 394,
                  "end": 395
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 397,
                "end": 400
              },
              "expression": false,
              "start": 393,
              "end": 400
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 373,
            "end": 400
          }
        ],
        "start": 235,
        "end": 402
      },
      "abstract": false,
      "declare": false,
      "start": 208,
      "end": 402
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
            "name": "r",
            "optional": false,
            "typeAnnotation": null,
            "start": 408,
            "end": 409
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 412,
              "end": 416
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 417,
              "end": 418
            },
            "optional": false,
            "computed": false,
            "start": 412,
            "end": 418
          },
          "definite": false,
          "start": 408,
          "end": 418
        }
      ],
      "declare": false,
      "start": 404,
      "end": 419
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 430,
            "end": 432
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Derived",
              "optional": false,
              "typeAnnotation": null,
              "start": 435,
              "end": 442
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 443,
              "end": 444
            },
            "optional": false,
            "computed": false,
            "start": 435,
            "end": 444
          },
          "definite": false,
          "start": 430,
          "end": 444
        }
      ],
      "declare": false,
      "start": 426,
      "end": 445
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 460,
            "end": 462
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null,
                "start": 465,
                "end": 469
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "fn",
                "optional": false,
                "typeAnnotation": null,
                "start": 470,
                "end": 472
              },
              "optional": false,
              "computed": false,
              "start": 465,
              "end": 472
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 465,
            "end": 474
          },
          "definite": false,
          "start": 460,
          "end": 474
        }
      ],
      "declare": false,
      "start": 456,
      "end": 475
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 486,
            "end": 488
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Derived",
                "optional": false,
                "typeAnnotation": null,
                "start": 491,
                "end": 498
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "fn",
                "optional": false,
                "typeAnnotation": null,
                "start": 499,
                "end": 501
              },
              "optional": false,
              "computed": false,
              "start": 491,
              "end": 501
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 491,
            "end": 503
          },
          "definite": false,
          "start": 486,
          "end": 503
        }
      ],
      "declare": false,
      "start": 482,
      "end": 504
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
            "name": "r5",
            "optional": false,
            "typeAnnotation": null,
            "start": 519,
            "end": 521
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 524,
              "end": 528
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 529,
              "end": 530
            },
            "optional": false,
            "computed": false,
            "start": 524,
            "end": 530
          },
          "definite": false,
          "start": 519,
          "end": 530
        }
      ],
      "declare": false,
      "start": 515,
      "end": 531
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null,
            "start": 538,
            "end": 542
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 543,
            "end": 544
          },
          "optional": false,
          "computed": false,
          "start": 538,
          "end": 544
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 547,
          "end": 548
        },
        "start": 538,
        "end": 548
      },
      "directive": null,
      "start": 538,
      "end": 549
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
            "name": "r6",
            "optional": false,
            "typeAnnotation": null,
            "start": 561,
            "end": 563
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Derived",
              "optional": false,
              "typeAnnotation": null,
              "start": 566,
              "end": 573
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 574,
              "end": 575
            },
            "optional": false,
            "computed": false,
            "start": 566,
            "end": 575
          },
          "definite": false,
          "start": 561,
          "end": 575
        }
      ],
      "declare": false,
      "start": 557,
      "end": 576
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Derived",
            "optional": false,
            "typeAnnotation": null,
            "start": 586,
            "end": 593
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 594,
            "end": 595
          },
          "optional": false,
          "computed": false,
          "start": 586,
          "end": 595
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 598,
          "end": 599
        },
        "start": 586,
        "end": 599
      },
      "directive": null,
      "start": 586,
      "end": 600
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 609
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5,
    "range": [
      0,
      5
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 6,
    "end": 10,
    "range": [
      6,
      10
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11,
    "end": 12,
    "range": [
      11,
      12
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 17,
    "end": 23,
    "range": [
      17,
      23
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 24,
    "end": 30,
    "range": [
      24,
      30
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 32,
    "end": 33,
    "range": [
      32,
      33
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 34,
    "end": 40,
    "range": [
      34,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 46,
    "end": 52,
    "range": [
      46,
      52
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 53,
    "end": 59,
    "range": [
      53,
      59
    ]
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 60,
    "end": 62,
    "range": [
      60,
      62
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 63,
    "end": 64,
    "range": [
      63,
      64
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 64,
    "end": 65,
    "range": [
      64,
      65
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 66,
    "end": 72,
    "range": [
      66,
      72
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 73,
    "end": 74,
    "range": [
      73,
      74
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 83,
    "end": 89,
    "range": [
      83,
      89
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 90,
    "end": 92,
    "range": [
      90,
      92
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 92,
    "end": 93,
    "range": [
      92,
      93
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 105,
    "end": 111,
    "range": [
      105,
      111
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 112,
    "end": 118,
    "range": [
      112,
      118
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 119,
    "end": 122,
    "range": [
      119,
      122
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 124,
    "end": 125,
    "range": [
      124,
      125
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 129,
    "end": 135,
    "range": [
      129,
      135
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 136,
    "end": 137,
    "range": [
      136,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 145,
    "end": 151,
    "range": [
      145,
      151
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 152,
    "end": 158,
    "range": [
      152,
      158
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 159,
    "end": 162,
    "range": [
      159,
      162
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 166,
    "end": 167,
    "range": [
      166,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 208,
    "end": 213,
    "range": [
      208,
      213
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 214,
    "end": 221,
    "range": [
      214,
      221
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 222,
    "end": 229,
    "range": [
      222,
      229
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 230,
    "end": 234,
    "range": [
      230,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 241,
    "end": 248,
    "range": [
      241,
      248
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 249,
    "end": 255,
    "range": [
      249,
      255
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 257,
    "end": 258,
    "range": [
      257,
      258
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 259,
    "end": 265,
    "range": [
      259,
      265
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 265,
    "end": 266,
    "range": [
      265,
      266
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 272,
    "end": 279,
    "range": [
      272,
      279
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 280,
    "end": 286,
    "range": [
      280,
      286
    ]
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 287,
    "end": 289,
    "range": [
      287,
      289
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 289,
    "end": 290,
    "range": [
      289,
      290
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 290,
    "end": 291,
    "range": [
      290,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 293,
    "end": 299,
    "range": [
      293,
      299
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 300,
    "end": 301,
    "range": [
      300,
      301
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 310,
    "end": 316,
    "range": [
      310,
      316
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 317,
    "end": 319,
    "range": [
      317,
      319
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 319,
    "end": 320,
    "range": [
      319,
      320
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 325,
    "end": 326,
    "range": [
      325,
      326
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 332,
    "end": 339,
    "range": [
      332,
      339
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 340,
    "end": 346,
    "range": [
      340,
      346
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 347,
    "end": 350,
    "range": [
      347,
      350
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 351,
    "end": 352,
    "range": [
      351,
      352
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 352,
    "end": 353,
    "range": [
      352,
      353
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 353,
    "end": 354,
    "range": [
      353,
      354
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 355,
    "end": 356,
    "range": [
      355,
      356
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
    "type": "Numeric",
    "value": "1",
    "start": 364,
    "end": 365,
    "range": [
      364,
      365
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 365,
    "end": 366,
    "range": [
      365,
      366
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 367,
    "end": 368,
    "range": [
      367,
      368
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 373,
    "end": 380,
    "range": [
      373,
      380
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 381,
    "end": 387,
    "range": [
      381,
      387
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 388,
    "end": 391,
    "range": [
      388,
      391
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 392,
    "end": 393,
    "range": [
      392,
      393
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 393,
    "end": 394,
    "range": [
      393,
      394
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 394,
    "end": 395,
    "range": [
      394,
      395
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 395,
    "end": 396,
    "range": [
      395,
      396
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 397,
    "end": 398,
    "range": [
      397,
      398
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 399,
    "end": 400,
    "range": [
      399,
      400
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 401,
    "end": 402,
    "range": [
      401,
      402
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 404,
    "end": 407,
    "range": [
      404,
      407
    ]
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 408,
    "end": 409,
    "range": [
      408,
      409
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 410,
    "end": 411,
    "range": [
      410,
      411
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 412,
    "end": 416,
    "range": [
      412,
      416
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 416,
    "end": 417,
    "range": [
      416,
      417
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 417,
    "end": 418,
    "range": [
      417,
      418
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 418,
    "end": 419,
    "range": [
      418,
      419
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 426,
    "end": 429,
    "range": [
      426,
      429
    ]
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 430,
    "end": 432,
    "range": [
      430,
      432
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 433,
    "end": 434,
    "range": [
      433,
      434
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 435,
    "end": 442,
    "range": [
      435,
      442
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 443,
    "end": 444,
    "range": [
      443,
      444
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 444,
    "end": 445,
    "range": [
      444,
      445
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 456,
    "end": 459,
    "range": [
      456,
      459
    ]
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 460,
    "end": 462,
    "range": [
      460,
      462
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 463,
    "end": 464,
    "range": [
      463,
      464
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 465,
    "end": 469,
    "range": [
      465,
      469
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 469,
    "end": 470,
    "range": [
      469,
      470
    ]
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 470,
    "end": 472,
    "range": [
      470,
      472
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 472,
    "end": 473,
    "range": [
      472,
      473
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 473,
    "end": 474,
    "range": [
      473,
      474
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 474,
    "end": 475,
    "range": [
      474,
      475
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 482,
    "end": 485,
    "range": [
      482,
      485
    ]
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 486,
    "end": 488,
    "range": [
      486,
      488
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 489,
    "end": 490,
    "range": [
      489,
      490
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 491,
    "end": 498,
    "range": [
      491,
      498
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 498,
    "end": 499,
    "range": [
      498,
      499
    ]
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 499,
    "end": 501,
    "range": [
      499,
      501
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 501,
    "end": 502,
    "range": [
      501,
      502
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 502,
    "end": 503,
    "range": [
      502,
      503
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 503,
    "end": 504,
    "range": [
      503,
      504
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 515,
    "end": 518,
    "range": [
      515,
      518
    ]
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 519,
    "end": 521,
    "range": [
      519,
      521
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 522,
    "end": 523,
    "range": [
      522,
      523
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 524,
    "end": 528,
    "range": [
      524,
      528
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 528,
    "end": 529,
    "range": [
      528,
      529
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 529,
    "end": 530,
    "range": [
      529,
      530
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 530,
    "end": 531,
    "range": [
      530,
      531
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 538,
    "end": 542,
    "range": [
      538,
      542
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 542,
    "end": 543,
    "range": [
      542,
      543
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 543,
    "end": 544,
    "range": [
      543,
      544
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 545,
    "end": 546,
    "range": [
      545,
      546
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 547,
    "end": 548,
    "range": [
      547,
      548
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 548,
    "end": 549,
    "range": [
      548,
      549
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 557,
    "end": 560,
    "range": [
      557,
      560
    ]
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 561,
    "end": 563,
    "range": [
      561,
      563
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 564,
    "end": 565,
    "range": [
      564,
      565
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 566,
    "end": 573,
    "range": [
      566,
      573
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 573,
    "end": 574,
    "range": [
      573,
      574
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 574,
    "end": 575,
    "range": [
      574,
      575
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 575,
    "end": 576,
    "range": [
      575,
      576
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 586,
    "end": 593,
    "range": [
      586,
      593
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 593,
    "end": 594,
    "range": [
      593,
      594
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 594,
    "end": 595,
    "range": [
      594,
      595
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 596,
    "end": 597,
    "range": [
      596,
      597
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 598,
    "end": 599,
    "range": [
      598,
      599
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 599,
    "end": 600,
    "range": [
      599,
      600
    ]
  }
]
```
