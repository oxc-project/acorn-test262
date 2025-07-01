__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "named",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 9
          },
          "init": {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 12,
            "end": 17
          },
          "definite": false,
          "start": 4,
          "end": 17
        }
      ],
      "declare": false,
      "start": 0,
      "end": 18
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "named",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 25,
                  "end": 30
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 33,
                  "end": 37
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 24,
                "end": 37
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 23,
            "end": 38
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
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 42,
                  "end": 46
                },
                "value": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "\"foo\"",
                  "start": 48,
                  "end": 53
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 42,
                "end": 53
              }
            ],
            "start": 41,
            "end": 54
          },
          "definite": false,
          "start": 23,
          "end": 54
        }
      ],
      "declare": false,
      "start": 19,
      "end": 55
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "prop",
          "optional": false,
          "typeAnnotation": null,
          "start": 61,
          "end": 65
        },
        "prefix": true,
        "start": 56,
        "end": 65
      },
      "directive": null,
      "start": 56,
      "end": 66
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
            "name": "numIndexed",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "idx",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 93,
                            "end": 99
                          },
                          "start": 91,
                          "end": 99
                        },
                        "start": 88,
                        "end": 99
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 102,
                        "end": 108
                      },
                      "start": 100,
                      "end": 108
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 87,
                    "end": 108
                  }
                ],
                "start": 86,
                "end": 109
              },
              "start": 84,
              "end": 109
            },
            "start": 74,
            "end": 109
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 112,
              "end": 116
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 120,
              "end": 123
            },
            "start": 112,
            "end": 123
          },
          "definite": false,
          "start": 74,
          "end": 123
        }
      ],
      "declare": false,
      "start": 68,
      "end": 124
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
            "name": "strIndexed",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "idx",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 150,
                            "end": 156
                          },
                          "start": 148,
                          "end": 156
                        },
                        "start": 145,
                        "end": 156
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 159,
                        "end": 165
                      },
                      "start": 157,
                      "end": 165
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 144,
                    "end": 165
                  }
                ],
                "start": 143,
                "end": 166
              },
              "start": 141,
              "end": 166
            },
            "start": 131,
            "end": 166
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 169,
              "end": 173
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 177,
              "end": 180
            },
            "start": 169,
            "end": 180
          },
          "definite": false,
          "start": 131,
          "end": 180
        }
      ],
      "declare": false,
      "start": 125,
      "end": 181
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "numed",
            "optional": false,
            "typeAnnotation": null,
            "start": 187,
            "end": 192
          },
          "init": {
            "type": "Literal",
            "value": 6,
            "raw": "6",
            "start": 195,
            "end": 196
          },
          "definite": false,
          "start": 187,
          "end": 196
        }
      ],
      "declare": false,
      "start": 183,
      "end": 197
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
            "name": "symed",
            "optional": false,
            "typeAnnotation": null,
            "start": 205,
            "end": 210
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 213,
              "end": 219
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 213,
            "end": 221
          },
          "definite": false,
          "start": 205,
          "end": 221
        }
      ],
      "declare": false,
      "start": 199,
      "end": 222
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "symed2",
            "optional": false,
            "typeAnnotation": null,
            "start": 227,
            "end": 233
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 236,
              "end": 242
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 236,
            "end": 244
          },
          "definite": false,
          "start": 227,
          "end": 244
        }
      ],
      "declare": false,
      "start": 223,
      "end": 245
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "named",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 253,
                  "end": 258
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 261,
                  "end": 266
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 252,
                "end": 266
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 251,
            "end": 267
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "numIndexed",
            "optional": false,
            "typeAnnotation": null,
            "start": 270,
            "end": 280
          },
          "definite": false,
          "start": 251,
          "end": 280
        }
      ],
      "declare": false,
      "start": 247,
      "end": 281
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "prop2",
          "optional": false,
          "typeAnnotation": null,
          "start": 287,
          "end": 292
        },
        "prefix": true,
        "start": 282,
        "end": 292
      },
      "directive": null,
      "start": 282,
      "end": 293
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numed",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 300,
                  "end": 305
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 308,
                  "end": 313
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 299,
                "end": 313
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 298,
            "end": 314
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "numIndexed",
            "optional": false,
            "typeAnnotation": null,
            "start": 317,
            "end": 327
          },
          "definite": false,
          "start": 298,
          "end": 327
        }
      ],
      "declare": false,
      "start": 294,
      "end": 328
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "prop3",
          "optional": false,
          "typeAnnotation": null,
          "start": 334,
          "end": 339
        },
        "prefix": true,
        "start": 329,
        "end": 339
      },
      "directive": null,
      "start": 329,
      "end": 340
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "named",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 347,
                  "end": 352
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 355,
                  "end": 360
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 346,
                "end": 360
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 345,
            "end": 361
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "strIndexed",
            "optional": false,
            "typeAnnotation": null,
            "start": 364,
            "end": 374
          },
          "definite": false,
          "start": 345,
          "end": 374
        }
      ],
      "declare": false,
      "start": 341,
      "end": 375
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "prop4",
          "optional": false,
          "typeAnnotation": null,
          "start": 381,
          "end": 386
        },
        "prefix": true,
        "start": 376,
        "end": 386
      },
      "directive": null,
      "start": 376,
      "end": 387
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numed",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 394,
                  "end": 399
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 402,
                  "end": 407
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 393,
                "end": 407
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 392,
            "end": 408
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "strIndexed",
            "optional": false,
            "typeAnnotation": null,
            "start": 411,
            "end": 421
          },
          "definite": false,
          "start": 392,
          "end": 421
        }
      ],
      "declare": false,
      "start": 388,
      "end": 422
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "prop5",
          "optional": false,
          "typeAnnotation": null,
          "start": 428,
          "end": 433
        },
        "prefix": true,
        "start": 423,
        "end": 433
      },
      "directive": null,
      "start": 423,
      "end": 434
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "symed",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 441,
                  "end": 446
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 449,
                  "end": 454
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 440,
                "end": 454
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 439,
            "end": 455
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "numIndexed",
            "optional": false,
            "typeAnnotation": null,
            "start": 458,
            "end": 468
          },
          "definite": false,
          "start": 439,
          "end": 468
        }
      ],
      "declare": false,
      "start": 435,
      "end": 469
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "prop6",
          "optional": false,
          "typeAnnotation": null,
          "start": 475,
          "end": 480
        },
        "prefix": true,
        "start": 470,
        "end": 480
      },
      "directive": null,
      "start": 470,
      "end": 481
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "symed",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 488,
                  "end": 493
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 496,
                  "end": 501
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 487,
                "end": 501
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 486,
            "end": 502
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "strIndexed",
            "optional": false,
            "typeAnnotation": null,
            "start": 505,
            "end": 515
          },
          "definite": false,
          "start": 486,
          "end": 515
        }
      ],
      "declare": false,
      "start": 482,
      "end": 516
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "prop7",
          "optional": false,
          "typeAnnotation": null,
          "start": 522,
          "end": 527
        },
        "prefix": true,
        "start": 517,
        "end": 527
      },
      "directive": null,
      "start": 517,
      "end": 528
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "symed2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 535,
                  "end": 541
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 544,
                  "end": 549
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 534,
                "end": 549
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 533,
            "end": 550
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "numIndexed",
            "optional": false,
            "typeAnnotation": null,
            "start": 553,
            "end": 563
          },
          "definite": false,
          "start": 533,
          "end": 563
        }
      ],
      "declare": false,
      "start": 529,
      "end": 564
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "prop8",
          "optional": false,
          "typeAnnotation": null,
          "start": 570,
          "end": 575
        },
        "prefix": true,
        "start": 565,
        "end": 575
      },
      "directive": null,
      "start": 565,
      "end": 576
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "symed2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 583,
                  "end": 589
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop9",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 592,
                  "end": 597
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 582,
                "end": 597
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 581,
            "end": 598
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "strIndexed",
            "optional": false,
            "typeAnnotation": null,
            "start": 601,
            "end": 611
          },
          "definite": false,
          "start": 581,
          "end": 611
        }
      ],
      "declare": false,
      "start": 577,
      "end": 612
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "prop9",
          "optional": false,
          "typeAnnotation": null,
          "start": 618,
          "end": 623
        },
        "prefix": true,
        "start": 613,
        "end": 623
      },
      "directive": null,
      "start": 613,
      "end": 624
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 624
}
```
