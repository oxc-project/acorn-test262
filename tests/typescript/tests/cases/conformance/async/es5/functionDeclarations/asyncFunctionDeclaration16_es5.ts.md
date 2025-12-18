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
        "name": "Thenable",
        "optional": false,
        "typeAnnotation": null,
        "start": 14,
        "end": 22
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
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 29
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 33,
                  "end": 37
                },
                "start": 31,
                "end": 37
              },
              "body": null,
              "expression": false,
              "start": 29,
              "end": 38
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 25,
            "end": 38
          }
        ],
        "start": 23,
        "end": 40
      },
      "abstract": false,
      "declare": true,
      "start": 0,
      "end": 40
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 41
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7,
    "range": [
      0,
      7
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 8,
    "end": 13,
    "range": [
      8,
      13
    ]
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 14,
    "end": 22,
    "range": [
      14,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 23,
    "end": 24,
    "range": [
      23,
      24
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 25,
    "end": 29,
    "range": [
      25,
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
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "void",
    "start": 33,
    "end": 37,
    "range": [
      33,
      37
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": null,
            "start": 276,
            "end": 278
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "str",
                "optional": false,
                "typeAnnotation": null,
                "start": 287,
                "end": 290
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "str",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 307,
                    "end": 310
                  },
                  "start": 300,
                  "end": 311
                }
              ],
              "start": 294,
              "end": 313
            },
            "id": null,
            "generator": false,
            "start": 281,
            "end": 313
          },
          "definite": false,
          "start": 276,
          "end": 313
        }
      ],
      "declare": false,
      "start": 270,
      "end": 313
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
            "name": "f2",
            "optional": false,
            "typeAnnotation": null,
            "start": 339,
            "end": 341
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "str",
                "optional": false,
                "typeAnnotation": null,
                "start": 350,
                "end": 353
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "str",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 370,
                    "end": 373
                  },
                  "start": 363,
                  "end": 374
                }
              ],
              "start": 357,
              "end": 376
            },
            "id": null,
            "generator": false,
            "start": 344,
            "end": 376
          },
          "definite": false,
          "start": 339,
          "end": 376
        }
      ],
      "declare": false,
      "start": 333,
      "end": 376
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
            "name": "f3",
            "optional": false,
            "typeAnnotation": null,
            "start": 445,
            "end": 447
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "str",
                "optional": false,
                "typeAnnotation": null,
                "start": 456,
                "end": 459
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "str",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 476,
                    "end": 479
                  },
                  "start": 469,
                  "end": 480
                }
              ],
              "start": 463,
              "end": 482
            },
            "id": null,
            "generator": false,
            "start": 450,
            "end": 482
          },
          "definite": false,
          "start": 445,
          "end": 482
        }
      ],
      "declare": false,
      "start": 439,
      "end": 482
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
            "name": "f4",
            "optional": false,
            "typeAnnotation": null,
            "start": 508,
            "end": 510
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "str",
                "optional": false,
                "typeAnnotation": null,
                "start": 519,
                "end": 522
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "str",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 539,
                    "end": 542
                  },
                  "start": 532,
                  "end": 543
                }
              ],
              "start": 526,
              "end": 545
            },
            "id": null,
            "generator": false,
            "start": 513,
            "end": 545
          },
          "definite": false,
          "start": 508,
          "end": 545
        }
      ],
      "declare": false,
      "start": 502,
      "end": 545
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
            "name": "f5",
            "optional": false,
            "typeAnnotation": null,
            "start": 571,
            "end": 573
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "str",
                "optional": false,
                "typeAnnotation": null,
                "start": 582,
                "end": 585
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "str",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 602,
                    "end": 605
                  },
                  "start": 595,
                  "end": 606
                }
              ],
              "start": 589,
              "end": 608
            },
            "id": null,
            "generator": false,
            "start": 576,
            "end": 608
          },
          "definite": false,
          "start": 571,
          "end": 608
        }
      ],
      "declare": false,
      "start": 565,
      "end": 608
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 270,
  "end": 608
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 270,
    "end": 275,
    "range": [
      270,
      275
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 276,
    "end": 278,
    "range": [
      276,
      278
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 279,
    "end": 280,
    "range": [
      279,
      280
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 281,
    "end": 286,
    "range": [
      281,
      286
    ]
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 287,
    "end": 290,
    "range": [
      287,
      290
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 291,
    "end": 293,
    "range": [
      291,
      293
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 294,
    "end": 295,
    "range": [
      294,
      295
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 300,
    "end": 306,
    "range": [
      300,
      306
    ]
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 307,
    "end": 310,
    "range": [
      307,
      310
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 310,
    "end": 311,
    "range": [
      310,
      311
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 312,
    "end": 313,
    "range": [
      312,
      313
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 333,
    "end": 338,
    "range": [
      333,
      338
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 339,
    "end": 341,
    "range": [
      339,
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
    "type": "Identifier",
    "value": "async",
    "start": 344,
    "end": 349,
    "range": [
      344,
      349
    ]
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 350,
    "end": 353,
    "range": [
      350,
      353
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 354,
    "end": 356,
    "range": [
      354,
      356
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 357,
    "end": 358,
    "range": [
      357,
      358
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 363,
    "end": 369,
    "range": [
      363,
      369
    ]
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 370,
    "end": 373,
    "range": [
      370,
      373
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 373,
    "end": 374,
    "range": [
      373,
      374
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 375,
    "end": 376,
    "range": [
      375,
      376
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 439,
    "end": 444,
    "range": [
      439,
      444
    ]
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 445,
    "end": 447,
    "range": [
      445,
      447
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 448,
    "end": 449,
    "range": [
      448,
      449
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 450,
    "end": 455,
    "range": [
      450,
      455
    ]
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 456,
    "end": 459,
    "range": [
      456,
      459
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 460,
    "end": 462,
    "range": [
      460,
      462
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 463,
    "end": 464,
    "range": [
      463,
      464
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 469,
    "end": 475,
    "range": [
      469,
      475
    ]
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 476,
    "end": 479,
    "range": [
      476,
      479
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 479,
    "end": 480,
    "range": [
      479,
      480
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 481,
    "end": 482,
    "range": [
      481,
      482
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 502,
    "end": 507,
    "range": [
      502,
      507
    ]
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 508,
    "end": 510,
    "range": [
      508,
      510
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 511,
    "end": 512,
    "range": [
      511,
      512
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 513,
    "end": 518,
    "range": [
      513,
      518
    ]
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 519,
    "end": 522,
    "range": [
      519,
      522
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 523,
    "end": 525,
    "range": [
      523,
      525
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 526,
    "end": 527,
    "range": [
      526,
      527
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 532,
    "end": 538,
    "range": [
      532,
      538
    ]
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 539,
    "end": 542,
    "range": [
      539,
      542
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 542,
    "end": 543,
    "range": [
      542,
      543
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 544,
    "end": 545,
    "range": [
      544,
      545
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 565,
    "end": 570,
    "range": [
      565,
      570
    ]
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 571,
    "end": 573,
    "range": [
      571,
      573
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 574,
    "end": 575,
    "range": [
      574,
      575
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 576,
    "end": 581,
    "range": [
      576,
      581
    ]
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 582,
    "end": 585,
    "range": [
      582,
      585
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 586,
    "end": 588,
    "range": [
      586,
      588
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 589,
    "end": 590,
    "range": [
      589,
      590
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 595,
    "end": 601,
    "range": [
      595,
      601
    ]
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 602,
    "end": 605,
    "range": [
      602,
      605
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 605,
    "end": 606,
    "range": [
      605,
      606
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 607,
    "end": 608,
    "range": [
      607,
      608
    ]
  }
]
```
